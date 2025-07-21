import React from "react";
import { NavLink } from "react-router-dom";
import bgImage from "../../assets/logo.png";
import niceBg from "../../assets/nice_bg.png"; // Import the new background image

const Footer = () => {
  return (
    <footer
      className="relative bg-white w-full overflow-hidden min-h-[400px] flex flex-col md:flex-row justify-between px-8 py-12"
      style={{
        backgroundImage: `url(${niceBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "contain",
      }}
    >
      {/* Left: Brand + Image */}
      <div className="flex flex-col justify-between z-10">
        <div className="text-[#a65a32] text-xl font-medium mb-8">
          Vinod Furniture Mart
        </div>
        <div className="w-28 h-20 overflow-hidden rounded-md">
          <img
            src={bgImage}
            alt="sofa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Vertical Nav */}
      <nav className="z-10 flex flex-col items-end text-sm text-[#a65a32] space-y-4 mt-10 md:mt-0 uppercase">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:underline">
          Product
        </NavLink>
        <NavLink to="/our-story" className="hover:underline">
          Our Story
        </NavLink>
        <NavLink to="/contact" className="hover:underline">
          Contact Us
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
