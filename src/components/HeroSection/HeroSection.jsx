import React from "react";
import mainSofa from "../../assets/hero-sofa.jpg"; // Your main sofa image
import thumb1 from "../../assets/heroSectionS1.avif";
import thumb2 from "../../assets/heroSectionS2.avif";
import thumb3 from "../../assets/heroSectionS3.avif";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[650px] flex flex-col justify-center items-start bg-[#f2efe9] overflow-hidden">
      {/* Main Content */}
      <div className="max-w-[1260px] mx-auto w-full flex flex-col md:flex-row items-center justify-between px-8 pt-10 pb-8">
        {/* Left Side: Headline, Text & CTA */}
        <div className="flex-1 flex flex-col items-start z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            The Winter Sale
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-7 max-w-[400px]">
            Integer eget at augue suspendisse in vitae enim habitant. At donec
            pretium ultrices ac luctus vitae nibh erat.
          </p>
          <button className="bg-[#fff] text-[#8c6b4d] font-semibold px-6 py-2 rounded shadow hover:bg-[#f7f5f0] transition">
            Shop Now
          </button>
        </div>
        {/* Center: Main Sofa Image */}
        <div className="flex-1 flex justify-center items-center z-20 w-full">
          <img
            src={mainSofa}
            alt="Winter Sale Sofa"
            className="w-full h-auto object-contain rounded-md shadow-xl"
            draggable={false}
            style={{
              minWidth: 320,
              maxWidth: 600,
            }}
          />
        </div>
      </div>
      {/* Thumbnails Gallery (bottom right) */}
      <div className="absolute right-10 bottom-10 flex gap-4 bg-[#e9e6dece] rounded-md p-2 shadow-lg z-30">
        <img
          src={thumb1}
          alt="Product 1"
          className="w-28 h-16 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
        <img
          src={thumb2}
          alt="Product 2"
          className="w-28 h-16 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
        <img
          src={thumb3}
          alt="Product 3"
          className="w-28 h-16 object-cover rounded cursor-pointer hover:scale-105 transition"
        />
      </div>
      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d1cfc4] via-transparent to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default HeroSection;
