import "./App.css";
import { CART_DEFAULT, EMPTY_CART, getCartValue } from "./cart";
import "./index.css";
import {
  createBrowserRouter as Router,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import { LOGGEDIN_USER } from "./user.js";
import { MyContext } from "./context.js";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";

export default function App() {
  // const [count, setCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(LOGGEDIN_USER);
  const [cart, setCart] = useState({ ...EMPTY_CART });

  useEffect(() => {
    setCart(getCartValue(loggedInUser?.email));
  }, [loggedInUser]);

  const router = Router(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user" element={<User />}>
          <Route path=":userId" element={<User />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route
          path="*"
          element={
            <div className="items-center justify-center text-center bg-red-500 text-2xl text-black">
              Not found
            </div>
          }
        ></Route>
      </Route>
    )
  );

  return (
    <MyContext.Provider
      value={{ cart, setCart, loggedInUser, setLoggedInUser }}
    >
      <h1 className="app-class ">Vinod Furniture Mart Rehti</h1>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}
