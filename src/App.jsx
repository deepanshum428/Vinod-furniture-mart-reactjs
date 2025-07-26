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
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import { MyContext } from "./context.js";
import { useState } from "react";
import { EMPTY_CART } from "./cart.js";
import { LOGGEDIN_USER } from "./user.js";

const App = () => {
  const [cart, setCart] = useState(EMPTY_CART);
  const [loggedInUser, setLoggedInUser] = useState(LOGGEDIN_USER);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
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
