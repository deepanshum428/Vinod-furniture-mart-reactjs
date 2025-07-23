import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import modular from "../../assets/modularSofa.avif";
import sectional from "../../assets/sectionalSofa.avif";
import loveseat from "../../assets/loveseatsSofa.avif";
import sofaSinlge from "../../assets/singleseaterSofa.avif";
import ETC from "../../assets/etcSofa.avif";

const sofaData = [
  {
    title: "Modular Sofa",
    tags: ["Space-Saving", "Adaptable", "Customizable"],
    image: modular,
    description:
      "Modular: noun. A versatile seating solution that can be rearranged to suit any space or occasion. Just as nature adapts to its surroundings, modular sofas adapt to your lifestyle, offering comfort and flexibility without compromise.",
  },
  {
    title: "Sectional Sofa",
    tags: ["Family-Friendly", "Indoor", "Comfort-Focused"],
    image: sectional,
    description:
      "Sectionals provide comfort and generous seating for families or gatherings.",
  },
  {
    title: "Loveseat Sofa",
    tags: ["Two-Seater", "Compact", "Relaxation"],
    image: loveseat,
    description:
      "Perfect for cozy spaces or couples looking for style and comfort.",
  },
  {
    title: "Sofa Single Seater",
    tags: ["Minimalist", "Solo", "Indoor"],
    image: sofaSinlge,
    description:
      "Ideal for individual seating with a sleek and compact design.",
  },
  {
    title: "ETC Sofa",
    tags: ["Accessories", "Add-Ons", "Customizable"],
    image: ETC,
    description:
      "Various custom and accessory sofas to meet your unique needs.",
  },
];

export default function CategoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sofaData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sofaData.length - 1 : prevIndex - 1
    );
  };

  const activeItem = sofaData[activeIndex];

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between p-6 bg-[#f8f6f4]">
      {/* Left Section */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-[#2e1b0e]">
          Our categories
        </h2>

        <div className="mb-2 text-sm text-[#a65a32] flex flex-wrap gap-2">
          {activeItem.tags.map((tag, i) => (
            <span
              key={i}
              className="after:content-['\2022'] last:after:content-none after:px-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between group cursor-pointer border-t border-b py-3 border-[#c8ae9d]">
          <h3 className="text-lg font-semibold text-[#a65a32]">
            {activeItem.title}
          </h3>
          <FaArrowRight className="text-[#a65a32] group-hover:translate-x-1 transition-transform" />
        </div>

        <p className="text-sm text-gray-700 py-4 leading-relaxed">
          {activeItem.description}
        </p>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handlePrev}
            className="bg-[#a65a32] text-white px-3 py-1 rounded hover:bg-[#8b4729]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#a65a32] text-white px-3 py-1 rounded hover:bg-[#8b4729]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 w-full h-cover mt-8 md:mt-0 max-w-md h-full">
        {
          <img
            src={activeItem.image}
            alt="Sofa"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        }
      </div>
    </div>
  );
}
