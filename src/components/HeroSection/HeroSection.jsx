import React from "react";
import mainSofa from "../../assets/hero-sofa-small.jpg"; // Your main sofa image
import thumb1 from "../../assets/heroSectionS1.avif";
import thumb2 from "../../assets/heroSectionS2.avif";
import thumb3 from "../../assets/heroSectionS3.avif";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[650px] flex flex-col justify-center items-start bg-[#f2efe9] overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1653971858474-4f2dfa7f4dc1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // width: "100%",
        // height: "100%",
      }}
    >
      {/* Main Content */}
      {/* Left Side: Headline, Text & CTA - Moved to bottom left */}
      <div className="absolute bottom-10 left-10 max-w-[500px] z-10">
        <h1 className="text-white drop-shadow-lg font-bold text-5xl md:text-6xl mb-4">
          The Mansoon Sale
        </h1>
        <p className="text-white/80 md:text-xl text-lg mb-6">
          Integer eget at augue suspendisse in vitae enim habitant. At donec
          pretium ultrices ac luctus vitae nibh erat.
        </p>
        <button className="bg-white text-[#8c6b4d] font-semibold px-6 py-2 rounded shadow-[rgba(0,0,0,0.25)] hover:bg-[#f0eae2] transition">
          Shop Now
        </button>
      </div>

      {/* Thumbnails Gallery (bottom right) */}
      <div className="absolute right-10 bottom-10 flex gap-4 bg-[#e9e6dece] rounded-md p-2 shadow-lg z-30">
        <img
          src={
            new URL(
              "https://images.unsplash.com/photo-1653971858474-4f2dfa7f4dc1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            )
          }
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
      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d1cfc4] via-transparent to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default HeroSection;
