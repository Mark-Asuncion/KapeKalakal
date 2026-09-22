import { useEffect } from "react";
import { useCartContext } from "../Context/Cart";
import Cart, { Checkout } from "../Models/Cart";
import { Product } from "../Models/Product"
import { MError } from "../Utils/Error";
import CartItem from "../Components/CartItem";
const api = import.meta.env.VITE_API;

export default function useCart() {
  const { cartDispatcher } = useCartContext();

  const addToCart = async (product: Product, amount: number): Promise<Cart> => {
    const index = window.CART.findIndex((v) => v.status == "cart");
    console.debug(product, amount);
    if (index <= -1) {
        const cart = new Cart({
            id: crypto.randomUUID(),
            owner: window.LOGGED_IN_USER?.id,
            products: [
                {
                  id: crypto.randomUUID(),
                  amount: amount,
                  product: product
                }
            ],
            status: "cart",
            createdAt: new Date(Date.now()),
            updatedAt: null,
        })
        window.CART.push(cart);
        cartDispatcher({
          type: "assign",
          cart: cart,
        });
        return cart;
    }
    const prodIndex = window.CART[index].products.findIndex((v) => v.product?.id == product.id);
    if (prodIndex <= -1) {
        window.CART[index].products.push(
          {
            id: crypto.randomUUID(),
            amount: amount,
            product: product
          }
        );
    }
    else {
        window.CART[index].products[prodIndex].amount = amount;
    }
    window.CART[index].products = window.CART[index].products.filter((v) => v.amount > 0);
    cartDispatcher({
      type: "assign",
      cart: new Cart(window.CART[index]),
    });
    return window.CART[index];
    // const samount = `?amount=${amount}`;
    // const url = `${api}/cart/add/${product.id}/${samount}`;
    // const res = await fetch(url, {
    //   method: "PUT",
    //   credentials: "include"
    // });
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status <= 399 ) {
    //   const mappedCart = new Cart(resjson);
    //   cartDispatcher({
    //     type: "assign",
    //     cart: mappedCart,
    //   });
    //   return mappedCart;
    // }
    // throw new MError(resjson);
  };

  const removeFromCart = async (product: Product) => {
    return addToCart(product, 0);
  };

  // rename to getCart
  const getCarts = async (includeProductInfo?: boolean) => {
    const index = window.CART.findIndex((v) => v.status == "cart");
    if (index <= -1) return null;
    return window.CART[index];

    // const include = (includeProductInfo)? "?withProduct=1":"";
    // const url = `${api}/cart/${include}`;
    // const res = await fetch(url, {
    //   credentials: "include"
    // });
    //
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status <= 399) {
    //   if (!resjson) return null;
    //   const cart = new Cart(resjson);
    //   return cart;
    // }
    // throw new MError(resjson);
  };

  const getCartsAndSetCarts = (includeProductInfo?: boolean) => {
    useEffect(() => {
      getCarts(includeProductInfo)
        .then((cart) => {
          cartDispatcher({
            type: "assign",
            cart
          });
        })
        .catch((e) => console.log(e));
    }, []);
  };

  const getBreakdown = async (cart: Cart) => {
    throw new MError("Breakdown is disabled");
    // const res = await fetch(`${api}/cart/breakdown/${cart.id}`,{
    //   credentials: "include"
    // });
    //
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status <= 399 ) {
    //   return new Checkout(resjson);
    // }
    // throw new MError(resjson);
  };

  const getAllCarts = async () => {
    return window.CART;
    // const url = `${api}/cart/all`;
    // const res = await fetch(url, {
    //   credentials: "include"
    // });
    //
    // const resjson = await res.json() as any[];
    // if (res.status >= 200 && res.status <= 399 ) {
    //   const carts = resjson.map((item) => new Cart(item));
    //   return carts;
    // }
    // throw new MError(resjson);
  };

  const deleteCart = async (cart: Cart) => {
    window.CART = window.CART.filter((v) => v.id != cart.id);
    // const url = `${api}/cart/delete/${cart.id}`;
    // const res = await fetch(url, {
    //   method: "DELETE",
    //   credentials: "include"
    // });
    //
    // if (res.status >= 200 && res.status <= 399 ) {
    //   return null;
    // }
    // const resjson = await res.json();
    // throw new MError(resjson);
  };

  return {
    addToCart,
    getCarts,
    getCartsAndSetCarts,
    removeFromCart,
    getBreakdown,
    getAllCarts,
    deleteCart
  }
}
