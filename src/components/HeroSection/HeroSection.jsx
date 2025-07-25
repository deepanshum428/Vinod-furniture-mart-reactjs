import React from "react";
import mainSofa from "../../assets/mainSofa.avif";
import thumb1 from "../../assets/heroSectionS1.avif";
import thumb2 from "../../assets/heroSectionS2.avif";
import thumb3 from "../../assets/heroSectionS3.avif";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mainSofa})`,
        height: "600px",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Main Content */}
      <div className="absolute z-10 bottom-8 left-8 right-[160px] max-w-xl text-white space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">The Monsoon Sale</h1>
        <p className="text-base md:text-lg">
          Integer eget at augue suspendisse in vitae enim habitant. At donec
          pretium ultrices ac luctus vitae nibh erat.
        </p>
        <NavLink to={"/products"}>
          <button className="bg-[#a65a32] hover:bg-[#8a4b2b] px-6 py-2 rounded text-white font-semibold cursor-pointer">
            Shop Now
          </button>
        </NavLink>
      </div>

      {/* Thumbnails Gallery (bottom right) */}
      <div className="absolute right-6 bottom-6 md:flex hidden gap-3 bg-[#e9e6de2d] rounded-md p-2 shadow-lg z-30">
        <img
          src={mainSofa}
          alt="Product 1"
          className="w-38 h-18 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
        <img
          src={thumb1}
          alt="Product 1"
          className="w-22 h-18 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
        <img
          src={thumb2}
          alt="Product 2"
          className="w-22 h-18 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
        <img
          src={thumb3}
          alt="Product 3"
          className="w-22 h-18 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
      </div>
    </div>
  );
};

export default HeroSection;
