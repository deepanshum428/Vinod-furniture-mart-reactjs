import {createContext} from "react";
import { LOGGEDIN_USER } from "./user";
import { CartValue, EMPTY_CART } from "./cart";

export const MyContext = createContext({
    loggedInUser:LOGGEDIN_USER,
    setLoggedInUser: (user) => {},
    cart: EMPTY_CART,
    setCart:(cart:CartValue) => {},
});