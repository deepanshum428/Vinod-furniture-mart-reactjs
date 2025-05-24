import { LOGGEDIN_USER } from "./user";

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

const cartKey = (email = "") => `cart-products-${email || ""}`;

export const getCartValue = (email = "") => {
  const cartDataStr = localStorage.getItem(cartKey(email));
  return cartDataStr
    ? (JSON.parse(cartDataStr) as CartValue)
    : { ...EMPTY_CART };
};

export const EMPTY_CART = { products: [] };

export const CART_DEFAULT = getCartValue();

export const saveCardProducts = (cart: CartValue, email) => {
  localStorage.setItem(cartKey(email), JSON.stringify(cart));
};
