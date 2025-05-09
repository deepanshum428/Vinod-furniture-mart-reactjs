import "./App.css";
import { CART_DEFAULT, CartContext } from "./cart";

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
import Github, { githubInfoLoader } from "./components/Github/github.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";

export default function App() {
  // const [count, setCount] = useState(0);
  const [cart, setCart] = useState({ ...CART_DEFAULT });

  const router = Router(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user" element={<User />}>
          <Route path=":userId" element={<User />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route
          loader={githubInfoLoader}
          path="github/"
          element={<Github />}
        ></Route>
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
    <CartContext.Provider value={{ cart, setCart }}>
      <h1 className="app-class ">Vinod Furniture Mart Rehti</h1>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}
