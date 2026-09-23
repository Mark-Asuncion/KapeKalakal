import type Cart from "../Models/Cart";
import { Product } from "../Models/Product";
import User, { UserShipping } from "../Models/User";

declare global {
  interface Window {
    USERS: User[];
    PRODUCTS: Product[];
    LOGGED_IN_USER: User | null
    CART: Cart[]
  }
}

export default function init() {
    window.USERS = window.USERS || [
        new User({
            id: "25835baa-adca-4717-ba5b-618a1b81ab4f",
            username: "user",
            email: "user@email.com",
            password: "user",
            role: "user",
            shipping: new UserShipping({
                lastName: "Santos",
                firstName: "Juan",
                middleName: "",
                phoneNumber: "09171234567",
                address: "123 Sample Street",
                area: "Quezon City",
                postalCode: "1100"
            }),
            createdAt: new Date("2025-01-15"),
            updatedAt: null
        }),

        new User({
            id: "7f2c9d41-8a63-4e12-b5f7-31a8c6249d20",
            username: "admin",
            email: "admin@email.com",
            password: "admin",
            role: "admin",
            shipping: new UserShipping({
                lastName: "Reyes",
                firstName: "Maria",
                middleName: "C",
                phoneNumber: "09179876543",
                address: "456 Demo Avenue",
                area: "Makati City",
                postalCode: "1200"
            }),
            createdAt: new Date("2025-02-01"),
            updatedAt: null
        })
    ];

    window.LOGGED_IN_USER = null;
    // window.LOGGED_IN_USER = window.USERS[0];
    window.CART = window.CART || [];
    window.PRODUCTS = window.PRODUCTS || [
        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789006",
            name: "Vanilla Latte",
            description: "A creamy espresso-based drink with smooth vanilla sweetness.",
            price: 230,
            discount: 0,
            stocks: 20,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Latte", "Vanilla", "Best Seller"],
            createdAt: "2025-02-05T08:00:00Z",
            updatedAt: "2025-02-20T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789007",
            name: "Caramel Macchiato",
            description: "Rich espresso layered with steamed milk and sweet caramel flavor.",
            price: 240,
            discount: 10,
            stocks: 16,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Macchiato", "Caramel", "Sweet"],
            createdAt: "2025-02-08T08:00:00Z",
            updatedAt: "2025-02-22T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789008",
            name: "Mocha Blend",
            description: "A rich combination of roasted coffee and chocolate with a smooth finish.",
            price: 225,
            discount: 5,
            stocks: 22,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Mocha", "Chocolate", "Best Seller"],
            createdAt: "2025-02-10T08:00:00Z",
            updatedAt: "2025-02-25T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789009",
            name: "Hazelnut Coffee",
            description: "A medium roast infused with a warm and nutty hazelnut aroma.",
            price: 210,
            discount: 0,
            stocks: 19,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Hazelnut", "Medium Roast", "Nutty"],
            createdAt: "2025-02-12T08:00:00Z",
            updatedAt: "2025-02-28T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789010",
            name: "Americano",
            description: "A classic espresso drink diluted with hot water for a clean and bold flavor.",
            price: 150,
            discount: 0,
            stocks: 30,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Americano", "Espresso", "Classic"],
            createdAt: "2025-02-15T08:00:00Z",
            updatedAt: "2025-03-01T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789011",
            name: "Cappuccino",
            description: "A balanced espresso drink topped with steamed milk and a thick layer of foam.",
            price: 215,
            discount: 10,
            stocks: 17,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Cappuccino", "Espresso", "Milk"],
            createdAt: "2025-02-18T08:00:00Z",
            updatedAt: "2025-03-05T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789012",
            name: "Cinnamon Roast",
            description: "A smooth coffee blend with subtle cinnamon notes and a lightly roasted finish.",
            price: 195,
            discount: 5,
            stocks: 24,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Cinnamon", "Light Roast", "Spiced"],
            createdAt: "2025-02-20T08:00:00Z",
            updatedAt: "2025-03-08T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789013",
            name: "French Vanilla",
            description: "A smooth and creamy coffee blend with a rich vanilla flavor and sweet aroma.",
            price: 205,
            discount: 15,
            stocks: 14,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Vanilla", "Sweet", "Flavored"],
            createdAt: "2025-02-22T08:00:00Z",
            updatedAt: "2025-03-10T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789014",
            name: "Colombian Roast",
            description: "A well-balanced single-origin coffee with bright acidity and caramel sweetness.",
            price: 260,
            discount: 0,
            stocks: 10,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Colombian", "Single Origin", "Medium Roast", "Best Seller"],
            createdAt: "2025-02-25T08:00:00Z",
            updatedAt: "2025-03-12T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789015",
            name: "Iced Mocha",
            description: "Chilled coffee blended with chocolate and milk for a smooth and refreshing drink.",
            price: 235,
            discount: 10,
            stocks: 13,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg",
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Mocha", "Chocolate", "Cold", "Best Seller"],
            createdAt: "2025-03-01T08:00:00Z",
            updatedAt: "2025-03-15T08:00:00Z"
        }),
    ];
}
