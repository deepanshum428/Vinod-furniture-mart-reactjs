import { createContext } from "react";
import { CART_DEFAULT, CartValue } from "./cart";
import { LOGGEDIN_USER } from "./user";

export const MyContext = createContext({
  cart: CART_DEFAULT,
  setCart: (cart: CartValue) => {},
  loggedInUser: LOGGEDIN_USER,
  setLoggedInUser: (user) => {}
});
