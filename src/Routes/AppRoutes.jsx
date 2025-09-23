import Layout from "../Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import Products from "../components/Products/Products.jsx";
import Login from "../pages/Auth/Login.jsx";
import About from "../pages/About/About.jsx";
import Signup from "../pages/Auth/Signup.jsx";
import { MyContext } from "../Context/context.js";
import { useState } from "react";
import { getCartValue } from "../Services/cart.js";
import { LOGGEDIN_USER } from "../Services/user.js";
import Contact from "../pages/Contact/Contact.jsx";
import ProductDetail from "../components/ProductDetails/ProductDetail.jsx";
import Cart from "../components/Cards/Cart.jsx";
import ROUTES from "./Paths.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword.jsx";
import Faq from "../pages/Faq/Faq.jsx";

const AppRoutes = () => {
  const [loggedInUser, setLoggedInUser] = useState(LOGGEDIN_USER);
  const [cart, setCart] = useState(getCartValue(loggedInUser?.email));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTES.PRODUCTS} element={<Products />}></Route>
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route
          path={ROUTES.FORGOTPASSWORD}
          element={<ForgotPassword />}
        ></Route>
        <Route path={ROUTES.SIGNUP} element={<Signup />}></Route>
        <Route path={ROUTES.CART} element={<Cart />}></Route>
        <Route path={ROUTES.FAQ} element={<Faq />}></Route>

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

export default AppRoutes;
