import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";

const App = () => {
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

  return <RouterProvider router={router} />;
};

export default App;
