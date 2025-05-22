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

export const EMPTY_CART = { products: [] };

export const CART_DEFAULT = cartDataStr
  ? (JSON.parse(cartDataStr) as CartValue)
  : { ...EMPTY_CART };

export const saveCardProducts = (cart: CartValue) => {
  localStorage.setItem("cart-products", JSON.stringify(cart));
};
