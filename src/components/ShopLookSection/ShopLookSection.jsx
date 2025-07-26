import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IMG from "../../assets/shopLookBgImg.avif";
import IMG2 from "../../assets/shopLookBgImg2.avif";
import IMG3 from "../../assets/shopLookBgImg3.avif";

const Items = [IMG, IMG2, IMG3];

const ShopLookSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Items.length);
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? Items.length - 1 : prevIndex - 1;
    });
  };
  const activeItem = Items[activeIndex];

  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Shop the look</h2>
      <div className="relative w-full h-[500px] rounded overflow-hidden shadow">
        <img
          src={activeItem}
          alt="Room"
          className="w-full h-full object-cover"
        />

        {/* Arrows */}
        <div className="absolute top-4 right-4 flex gap-3 z-30">
          <button className="w-9 h-9 rounded-full bg-white hover:text-white shadow flex items-center justify-center cursor-pointer hover:bg-[#a65a32] hover:scale-105 transition-transform duration-200 outline-none active:scale-95">
            <ArrowLeft size={16} onClick={handlePrev} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white hover:text-white shadow flex items-center justify-center cursor-pointer hover:bg-[#a65a32] hover:scale-105 transition-transform duration-200 outline-none active:scale-95">
            <ArrowRight size={16} onClick={handleNext} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopLookSection;
