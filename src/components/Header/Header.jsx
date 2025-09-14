import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../../assets/Vinod Furniture Mart.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/context";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { saveUser } from "../../Services/user";
import Swal from "sweetalert2";
import { EMPTY_CART } from "../../Services/cart";
import { useContext } from "react";
import "./Header.css";
import SplitText from "../ReactBits/SplitText";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart, loggedInUser, setCart, setLoggedInUser } =
    useContext(MyContext);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logged Out!",
          "You have been successfully logged out.",
          "success"
        );
        setLoggedInUser(null);
        saveUser(null);
        setCart({ ...EMPTY_CART });
        navigate("/");
      }
    });
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-[calc(100%-4rem)] mx-[2rem] z-50 bg-[#f8f5f2] border-b border-gray-200 shadow-sm mt-[1rem] ">
        <div
          className="w-full md:max-w-screen-xl mx-auto px-4 md:px-12 py-2"
          style={{ minHeight: "50px" }}
        >
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-stretch w-full">
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
                {/* <img
                  src={logo}
                  alt="Vinod Furniture Logo"
                  className="h-10 mx-auto object-contain"
                /> */}

                <SplitText
                  text="Vinod Furniture Mart"
                  className="font-serif font-bold text-[#7B3F00] tracking-wide text-2xl"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
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
              <div className="flex items-center gap-6">
                <NavLink
                  to="/cart"
                  className=" relative flex items-center gap-2 text-[#a65a32] hover:scale-105 transition-transform duration-200"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-2 bg-[#a65a32] text-white text-[10px] px-1.5 py-[1px] rounded-full font-semibold">
                    {cart.products.length}
                  </span>
                </NavLink>

                {loggedInUser && (
                  <div className="header-user-dropdown">
                    <button className="flex items-center gap-2 text-[#a65a32] hover:scale-105 transition-transform duration-200">
                      <FaUser className="w-4 h-4" />
                    </button>
                    <div className="header-dropdown-menu">
                      <div className="header-dropdown-item">
                        <span className="text-sm font-medium">
                          {loggedInUser.name}
                        </span>
                        <button
                          className="flex flex-row justify-center items-center cursor-pointer bg-[#a65a32] hover:bg-[#8b4729] text-white px-4 py-1 text-xs font-semibold rounded hover:scale-105 transition-transform duration-200 outline-none active:scale-95"
                          onClick={handleLogOut}
                        >
                          Log Out
                          <FaSignOutAlt className="w-4 h-4justify-center items-center" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between w-full text-center">
            <button
              className="text-[#a65a32] p-1"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <NavLink
              to="/"
              className="flex-1 text-center flex items-center justify-center"
            >
              {/* <img
                src={logo}
                alt="Vinod Furniture Logo"
                className="h-8 mx-auto object-contain"
              /> */}
              <SplitText
                text="Vinod Furniture Mart"
                className="font-serif font-bold  text-[#7B3F00] tracking-wide text-md sm:text-lg flex items-center text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </NavLink>

            <NavLink to="/cart">
              <ShoppingCart className="text-[#a65a32] w-6 h-6" />
              <span className="absolute top-1 right-2 bg-[#a65a32] text-white text-[10px] px-1.5 py-[1px] rounded-full font-semibold">
                {cart.products.length}
              </span>
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
                {["/", "/products", "/about", "/contact"].map((path, idx) => {
                  const names = ["Home", "Products", "Our Story", "Contact Us"];
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
                })}
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
              {/* Auth Section */}
              {loggedInUser && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-3 px-4">
                    <div className="flex items-center gap-2 text-[#a65a32]">
                      <FaUser className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {loggedInUser.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleLogOut(new Event("logout"));
                      }}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
