import { createContext } from "react";

export type Product = {
  name: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
};

export type CartValue = {
  products: Product[];
};

const cartDataStr = localStorage.getItem("cart-products");

export const CART_DEFAULT = cartDataStr
  ? (JSON.parse(cartDataStr) as CartValue)
  : { products: [] };

export const CartContext = createContext({
  cart: CART_DEFAULT,
  setCart: (cart: CartValue) => {},
});

export const saveCardProducts = (cart: CartValue) => {
  localStorage.setItem("cart-products", JSON.stringify(cart));
};
