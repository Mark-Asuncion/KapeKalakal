import { productFilterQueryBuild, type ProductFilterQuery } from "../Models/Product";
import { Product, ProductFilterPresets } from "../Models/Product";
import { MError } from "../Utils/Error";
const api = import.meta.env.VITE_API;

export type SortType = "desc" | "asc";
export interface Sort {
  by: "date" | "price",
  type: SortType
};

function filterProducts(
  products: Product[],
  query: ProductFilterQuery
): Product[] {
  const filtered = products.filter(product => {
    if (
      query.q &&
      !product.name.toLowerCase().includes(query.q.toLowerCase()) &&
      !product.description.toLowerCase().includes(query.q.toLowerCase())
    ) {
      return false;
    }

    if (query.priceMin > 0 && product.price < query.priceMin) {
      return false;
    }

    if (query.priceMax > 0 && product.price > query.priceMax) {
      return false;
    }

    if (query.isDiscounted && product.discount <= 0) {
      return false;
    }

    if (
      query.tags.length > 0 &&
      query.tags.filter(
            tag => product.tags
            .findIndex(tt => tt.toLowerCase() == tag.toLowerCase()) >= 0
        ).length == 0
    ) {
      return false;
    }

    return true;
  });

  if (query.sby) {
    filtered.sort((a, b) => {
      let comparison = 0;

      if (query.sby === "price") {
        comparison = a.price - b.price;
      }

      if (query.sby === "date") {
        comparison =
          new Date(a.updatedAt ?? 0).getTime() -
          new Date(b.updatedAt ?? 0).getTime();
      }

      return query.sort === "desc"
        ? -comparison
        : comparison;
    });
  }

  return filtered;
}

export default function useProducts() {
  const url = `${api}/products`;

  const getProducts = async (filter: ProductFilterQuery): Promise<Product[]> => {
    return filterProducts(window.PRODUCTS, filter);
    // let squeries = encodeURI(productFilterQueryBuild(filter));
    //if (squeries) squeries = `?${squeries}`;

    //try {
    //  const res = await fetch(`${url}${squeries}`);
    //  const resjson = await res.json();
    //  if (res.status >= 200 && res.status < 300) {
    //    return resjson.map((obj: any) => {
    //      return new Product(obj);
    //    });
    //  }
    //}
    //catch {}
    //return [];
  };

  const getProductById = async (id: string) => {
    const productIndex = window.PRODUCTS.findIndex((v) => v.id == id);
    if (productIndex <= -1) throw new MError("Invalid Id");
    return window.PRODUCTS[productIndex];
    // const res = await fetch(`${url}/${id}`);
    //
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status <= 399) {
    //   return new Product(resjson);
    // }
    // throw new MError(resjson);
  };

  const updateProduct = async (update: Product) => {
    const productIndex = window.PRODUCTS.findIndex((v) => v.id == update.id);
    if (productIndex <= -1) throw new MError("Invalid Id");
    window.PRODUCTS[productIndex] = update;

    // const res = await fetch(`${url}/update/${update.id}`, {
    //   method: "PUT",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: update.toJson()
    // });
    //
    // if (res.status >= 200 && res.status <= 399) {
    //   return null;
    // }
    // const resjson = await res.json();
    // throw new MError(resjson);
  }

  const newProduct = async (product: Product) => {
    product.id = crypto.randomUUID();
    window.PRODUCTS.push(product);
    //const res = await fetch(`${url}/add`, {
    //  method: "POST",
    //  credentials: "include",
    //  headers: {
    //    "Content-Type": "application/json"
    //  },
    //  body: product.toJson()
    //});
    //
    //if (res.status >= 200 && res.status <= 399) {
    //  return null;
    //}
    //const resjson = await res.json();
    //throw new MError(resjson);
  }

  const removeProduct = async (product: Product) => {
    window.PRODUCTS = window.PRODUCTS.filter((v) => v.id != product.id);
    //const res = await fetch(`${url}/delete/${product.id}`, {
    //  method: "DELETE",
    //  credentials: "include"
    //});
    //if (res.status >= 200 && res.status <= 399) {
    //  return null;
    //}
    //const resjson = await res.json();
    //throw new MError(resjson);
  }

  const getPromo = async (): Promise<Product[]> => {
    return window.PRODUCTS.filter((v) => v.discount > 0).slice(0, 3);
    //try{
    //  const res = await fetch(`${url}?isDiscounted=1`);
    //  // await new Promise(resolve => setTimeout(resolve, 2000));
    //  const resjson = await res.json() as any[];
    //  if (res.status >= 200 && res.status < 399) {
    //    return resjson.map((obj: any) => {
    //      return new Product(obj);
    //    });
    //  }
    //} catch {}
    //return [];
  };

  const getBestSellers = async (): Promise<Product[]> => {
    return window.PRODUCTS.filter((v) => v.tags.findIndex((tag) => tag.toLowerCase() == "best seller") >= 0);
    // try{
    //   const bestSeller = encodeURI("best seller");
    //   const res = await fetch(`${url}?tags=${bestSeller}`);
    //   const resjson = await res.json() as any[];
    //   if (res.status >= 200 && res.status < 399) {
    //     return resjson.map((obj: any) => {
    //       return new Product(obj);
    //     });
    //   }
    // } catch {}
    // return []
  }

  const getFilterPresets = async () => {
    return new ProductFilterPresets({});
    // const res = await fetch(`${url}/filter-presets`);
    //
    // const resjson = await res.json() as any[];
    // if (res.status >= 200 && res.status < 399) {
    //   return new ProductFilterPresets(resjson);
    // }
    // throw new MError(resjson);
  };

  const cancelUpdate = async (update: Product) => {
    throw new MError("Disabled");
    // const res = await fetch(`${url}/cancel-update/${update.id || ""}`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: update.toJson()
    // });
    //
    // if (res.status >= 200 && res.status < 399) {
    //   return null;
    // }
    // const resjson = await res.json() as any[];
    // throw new MError(resjson);
  };

  return {
    getProducts,
    getProductById,
    updateProduct,
    newProduct,
    removeProduct,
    getPromo,
    getBestSellers,
    getFilterPresets,
    cancelUpdate
  };
}
