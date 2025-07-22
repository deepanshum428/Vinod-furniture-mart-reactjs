import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./Components/Header/Header.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
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
