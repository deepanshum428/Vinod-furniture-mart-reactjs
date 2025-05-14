import { createContext } from "react";

export type Product = {
  name: string;
  id: number;
  image: string;
};
export type CartValue = typeof CART_DEFAULT;

const cartDataStr = localStorage.getItem("cart-products");

// localStorage.setItem("cart-products", products)

export const CART_DEFAULT = cartDataStr
  ? (JSON.parse(cartDataStr) as Product[])
  : { products: [] };
export const CartContext = createContext({
  cart: { ...CART_DEFAULT },
  setCart: (cart: CartValue) => {},
});

export const saveCardProducts = (cart) => {
  localStorage.setItem("cart-products", JSON.stringify(cart));
};
