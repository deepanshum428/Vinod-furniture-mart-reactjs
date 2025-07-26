import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../../assets/Vinod Furniture Mart.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-[calc(100%-80px)] z-50 bg-[#f8f5f2] border-b border-gray-200 shadow-sm mx-10 mt-5">
        <div
          className="max-w-full mx-auto flex items-center justify-between px-12 py-2"
          style={{ minHeight: "50px" }}
        >
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Nav */}
            <nav className="flex space-x-8 text-base text-[#a65a32] font-normal flex-1 cursor-pointer  transition-transform duration-200 outline-none active:scale-95">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold hover:scale-105 transition-transform duration-200 outline-none active:scale-95"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold hover:scale-105 transition-transform duration-200 outline-none active:scale-95 "
                      : ""
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold hover:scale-105 transition-transform duration-200 outline-none active:scale-95"
                      : ""
                  }`
                }
              >
                Our Story
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold hover:scale-105 transition-transform duration-200 outline-none active:scale-95"
                      : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Logo Center */}
            <div className="mx-8 w-full flex-1 text-center">
              <NavLink to="/" className="inline-block">
                <img
                  src={logo}
                  alt="Vinod Furniture Logo"
                  className="h-10 mx-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Right Search and Cart */}
            <div className="flex items-center space-x-4 w-full flex-1 justify-end">
              <div className="relative w-full flex-1 max-w-64">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 w-full px-5 py-1 text-base text-[#a65a32] focus:outline-none focus:border-[#a65a32] bg-[#f8f5f2] placeholder:text-[#a65a32]"
                />
                <Search className="absolute top-2.5 right-4 text-[#a65a32] w-4 h-4 cursor-pointer" />
              </div>
              <NavLink to="/cart">
                <ShoppingCart className="text-[#a65a32] w-6 h-6 cursor-pointer hover:scale-105 transition-transform duration-200 outline-none active:scale-95" />
              </NavLink>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              className="text-[#a65a32] p-1"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <NavLink to="/" className="flex-1 text-center">
              <img
                src={logo}
                alt="Vinod Furniture Logo"
                className="h-8 mx-auto object-contain"
              />
            </NavLink>

            <NavLink to="/cart">
              <ShoppingCart className="text-[#a65a32] w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-80 max-w-[85vw] h-full bg-[#f8f5f2] shadow-xl">
            <div className="p-6">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-8">
                <img
                  src={logo}
                  alt="Vinod Furniture Logo"
                  className="h-8 object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#a65a32] p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 w-full px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#a65a32] bg-white rounded"
                  />
                  <Search className="absolute top-3.5 right-3 text-[#a65a32] w-4 h-4" />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {["/", "/products", "/our-story", "/contact"].map(
                  (path, idx) => {
                    const names = [
                      "Home",
                      "Products",
                      "Our Story",
                      "Contact Us",
                    ];
                    return (
                      <NavLink
                        key={path}
                        to={path}
                        className="block py-3 px-4 rounded-lg hover:bg-white font-medium text-lg"
                        onClick={() => setMenuOpen(false)}
                      >
                        {names[idx]}
                      </NavLink>
                    );
                  }
                )}
              </nav>

              {/* Cart Link */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <NavLink
                  to="/cart"
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-white text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  Shopping Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
