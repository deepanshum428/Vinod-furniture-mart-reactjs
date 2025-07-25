import React from "react";
import bed from "../../assets/bed1.jpg";
import dainingTable1 from "../../assets/dainingTable1.avif";
import dainingTable2 from "../../assets/dainingTable2.jpg";
import ErrorPage from "../../pages/ErrorPage";
import { NavLink } from "react-router-dom";

const bestsellers = [
  {
    id: 1,
    title: "Wooden Bed",
    price: "$1299",
    originalPrice: "$1499",
    img: bed,
    colors: ["#d6d1cb", "#8e8e8e"],
  },
  {
    id: 2,
    title: "Dining Set",
    price: "$1299",
    originalPrice: "$1499",
    img: dainingTable1,
    colors: ["#2e2d2a", "#d6d1cb", "#a0ada1"],
  },
  {
    id: 3,
    title: "Dining Set",
    price: "$1299",
    originalPrice: "$1499",
    img: dainingTable2,
    colors: ["#2e2d2a", "#d6d1cb", "#a0ada1"],
  },
];

const BestSellerSection = () => {
  return (
    <section className="bg-[#f8f6f4] py-14 px-6 sm:px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Shop our bestsellers</h2>
        <NavLink to="/products">
          <button className="text-[#8c6b4d] font-medium hover:underline cursor-pointer">
            View all Product
          </button>
        </NavLink>
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
                <NavLink to={"/ErrorPage"}>
                  <span className="text-xs text-gray-500 cursor-pointer hover:underline">
                    + More options
                  </span>
                </NavLink>
              </div>
            </div>

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover p-4 mb-4"
            />

            <div className="px-1 pl-4">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <div className="flex items-center justify-between text-sm mt-1">
                <div className="gap-8">
                  <span className="line-through mr-2  text-gray-400">
                    {item.originalPrice}
                  </span>
                  <span className="text-[#b44b2a] font-medium">
                    {item.price}
                  </span>
                </div>
                <div className=" flex justify-items-end cursor-pointer ">
                  <NavLink to="/ErrorPage">
                    <span className="text-xl text-gray-400">{">"}</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
