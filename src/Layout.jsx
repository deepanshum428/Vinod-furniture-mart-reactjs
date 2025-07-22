import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import BestSellerSection from "./components/BestSellerSection/BestSellerSection.jsx";

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
