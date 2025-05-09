import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./Header.css";
import { CartContext } from "../../cart";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/furniture-logo-with-armchair_23-2148656615.jpg?t=st=1743442715~exp=1743446315~hmac=fa6bf2d9feb0ad8c0301f6af5669fb28575ac7b6d2a4d6b445ae52059d6ae0c9&w=826"
              className="logo mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex place-content-around lg:order-2">
            <div className="flex gap-3">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                cart: {cart.products.length}
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Signup
              </NavLink>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "oklch(55.5% 0.163 48.998)" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
