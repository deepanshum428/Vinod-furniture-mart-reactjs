import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import bgIMG from "../../assets/shopLookBgImg.avif";

const ShopLookSection = () => {
  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Shop the look</h2>
      <div className="relative w-full h-[500px] rounded overflow-hidden shadow">
        <img src={bgIMG} alt="Room" className="w-full h-full object-cover" />

        {/* Arrows */}
        <div className="absolute top-4 right-4 flex gap-3 z-30">
          <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
            <ArrowLeft size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopLookSection;
