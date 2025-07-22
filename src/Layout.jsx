import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import BestSellerSection from "./Components/BestSellerSection/BestSellerSEction.jsx";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSellerSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
