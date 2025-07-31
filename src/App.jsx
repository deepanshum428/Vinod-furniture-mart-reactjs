import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import { MyContext } from "./context.js";
import { useState } from "react";
import { getCartValue } from "./cart.js";
import { LOGGEDIN_USER } from "./user.js";
import Contact from "./pages/Contact.jsx";
import ProductDetail from "./components/ProductDetails/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(LOGGEDIN_USER);
  const [cart, setCart] = useState(getCartValue(loggedInUser?.email));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {loggedInUser && <Route path="/cart" element={<Cart />}></Route>}
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    )
  );

  return (
    <>
      <MyContext.Provider
        value={{ cart, setCart, loggedInUser, setLoggedInUser }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default App;
