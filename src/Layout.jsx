import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import BestSellerSection from "./components/BestSellerSection/BestSellerSection.jsx";
import FeatureSection from "./components/FeatureSection/FeatureSection.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSellerSection />
      <FeatureSection />
      <CategoriesSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
