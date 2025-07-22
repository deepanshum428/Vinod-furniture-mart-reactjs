import React from "react";

const bestsellers = [
  {
    id: 1,
    title: "Serenity Timber Loveseat",
    price: "$1299",
    originalPrice: "$1499",
    img: "/images/sofa1.png", // Replace with your actual paths
    colors: ["#d6d1cb", "#8e8e8e"],
  },
  {
    id: 2,
    title: "Block Nomad Sofa - 3 piece",
    price: "$1299",
    originalPrice: "$1499",
    img: "/images/sofa2.png",
    colors: ["#2e2d2a", "#d6d1cb", "#a0ada1"],
  },
  {
    id: 3,
    title: "Nomad Sofa - Loveseat",
    price: "$1299",
    originalPrice: "$1499",
    img: "/images/sofa3.png",
    colors: ["#2e2d2a", "#d6d1cb", "#a0ada1"],
  },
];

const BestSellerSection = () => {
  return (
    <section className="bg-[#f8f6f4] py-14 px-6 sm:px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Shop our bestsellers</h2>
        <button className="text-[#8c6b4d] font-medium hover:underline">
          View all Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestsellers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded border border-gray-100 p-4 shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-2">
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border-2 border-black"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
                <span className="text-xs text-gray-500">+ More options</span>
              </div>
            </div>

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />

            <div className="px-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm mt-1">
                <span className="line-through text-gray-400">
                  {item.originalPrice}
                </span>
                <span className="text-[#b44b2a] font-medium">{item.price}</span>
              </div>
            </div>

            <div className="mt-3 flex justify-end pr-2">
              <span className="text-xl text-gray-400">{">"}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
