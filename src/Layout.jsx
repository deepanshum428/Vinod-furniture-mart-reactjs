import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";

const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: "instant",
      },
      [location.pathname]
    );
    console.log(location.pathname);
  });

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
