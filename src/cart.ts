import { createContext } from "react";

export type Product = {
  name: string;
  id: number;
  image: string;
};
export type CartValue = typeof CART_DEFAULT;

export const CART_DEFAULT = { products: [] };

export const CartContext = createContext({
  cart: { ...CART_DEFAULT },
  setCart: (cart: CartValue) => {},
});
