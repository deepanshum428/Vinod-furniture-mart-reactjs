import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../assets/Vinod Furniture Mart.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-[calc(100%-80px)] z-50 bg-[#f8f5f2] border-b border-gray-200 shadow-sm"
      style={{ padding: "0", margin: "20px 40px 0px 40px" }}
    >
      <div
        className="max-w-full mx-auto flex items-center justify-between px-12 py-2"
        style={{ minHeight: "50px" }}
      >
        {/* Left Nav */}
        <nav className="hidden md:flex space-x-8 text-base text-[#a65a32] font-normal w-full flex-1 justify-left">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] font-semibold underline"
                : "hover:text-[#a65a32]"
            }
          >
            Home
          </NavLink>
          <div className="relative group">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-[#a65a32] font-semibold inline-flex items-center underline"
                  : "inline-flex items-center hover:text-[#a65a32]"
              }
            >
              Product <IoMdArrowDropdown className="ml-1" />
            </NavLink>
          </div>
          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] font-semibold underline"
                : "hover:text-[#a65a32]"
            }
          >
            Our Story
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] font-semibold underline"
                : "hover:text-[#a65a32]"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Logo Center */}
        <div className="mx-8 w-full flex-1 text-center">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Vinod Furniture Logo"
              className="h-10 mx-auto"
              style={{ maxHeight: "40px", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Right Search and Cart */}
        <div className="flex items-center space-x-4 w-full flex-1 justify-end">
          <div className="relative w-full flex-1 max-w-64">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 w-full px-5 py-1 text-base focus:outline-none focus:border-[#a65a32] bg-[#f8f5f2] placeholder:text-[#a65a32]"
            />
            <FaSearch className="absolute top-2.5 right-4 text-[#a65a32] text-base" />
          </div>
          <Link to="/cart">
            <FaShoppingCart className="text-[#a65a32] text-2xl cursor-pointer" />
          </Link>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-2xl text-[#a65a32]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4 text-base text-[#a65a32] bg-[#f8f5f2] pb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] block font-semibold underline"
                : "block hover:text-[#a65a32]"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] block font-semibold underline"
                : "block hover:text-[#a65a32]"
            }
            onClick={() => setMenuOpen(false)}
          >
            Product
          </NavLink>
          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] block font-semibold underline"
                : "block hover:text-[#a65a32]"
            }
            onClick={() => setMenuOpen(false)}
          >
            Our Story
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#a65a32] block font-semibold underline"
                : "block hover:text-[#a65a32]"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
