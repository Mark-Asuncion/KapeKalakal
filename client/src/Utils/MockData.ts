import { Product } from "../Models/Product";
import User, { UserShipping } from "../Models/User";

declare global {
  interface Window {
    USERS: User[];
    PRODUCTS: Product[];
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

    window.PRODUCTS = window.PRODUCTS || [
        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789001",
            name: "Classic Drip Coffee",
            description: "A smooth and balanced medium-roast coffee for everyday brewing.",
            price: 180,
            discount: 0,
            stocks: 25,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Medium Roast", "Drip", "Best Seller"],
            createdAt: "2025-01-10T08:00:00Z",
            updatedAt: "2025-01-10T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789002",
            name: "Dark Roast Coffee",
            description: "A rich and bold dark roast with deep chocolate and caramel notes.",
            price: 220,
            discount: 10,
            stocks: 18,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Dark Roast", "Bold", "Best Seller"],
            createdAt: "2025-01-12T08:00:00Z",
            updatedAt: "2025-02-05T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789003",
            name: "House Blend",
            description: "Our signature blend combining smooth sweetness with a mild roasted finish.",
            price: 200,
            discount: 5,
            stocks: 32,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "House Blend", "Signature", "Best Seller"],
            createdAt: "2025-01-15T08:00:00Z",
            updatedAt: "2025-02-01T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789004",
            name: "Cold Brew",
            description: "Smooth and refreshing cold-brew coffee with a naturally sweet finish.",
            price: 160,
            discount: 0,
            stocks: 15,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Cold Brew", "Cold", "Best Seller"],
            createdAt: "2025-01-20T08:00:00Z",
            updatedAt: "2025-02-10T08:00:00Z"
        }),

        new Product({
            _id: "1a2b3c4d-1111-4444-8888-123456789005",
            name: "Espresso Roast",
            description: "A full-bodied roast made for espresso with a strong aroma and rich crema.",
            price: 250,
            discount: 15,
            stocks: 12,
            imgs: [
                "https://www.thecookierookie.com/wp-content/uploads/2023/05/bulletproof-coffee-featured.jpg"
            ],
            tags: ["Coffee", "Espresso", "Dark Roast"],
            createdAt: "2025-02-01T08:00:00Z",
            updatedAt: "2025-02-15T08:00:00Z"
        })
    ];
}
