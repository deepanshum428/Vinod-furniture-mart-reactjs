import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Swal from "sweetalert2";
import "./Header.css";
import logoImg from "../../assets/logo.png";
import { MyContext } from "../../context";
import { saveUser } from "../../user";
import { EMPTY_CART } from "../../cart";

function Header() {
  const { cart, loggedInUser, setCart, setLoggedInUser } =
    useContext(MyContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (event) => {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/" className="header-logo-link">
            <img
              src={logoImg}
              className="header-logo"
              alt="Furniture Store Logo"
            />
            <span className="header-brand-name">Vinod Furniture Mart</span>
          </Link>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav
          className={`header-nav ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/add-product"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink to="/cart" className="header-cart-link">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cart.products.length}</span>
            <span className="cart-text">Cart</span>
          </NavLink>

          {loggedInUser ? (
            <div className="header-user-dropdown">
              <button className="header-user-button">
                <FaUser className="user-icon" />
                <span className="user-name">{loggedInUser.name}</span>
              </button>
              <div className="header-dropdown-menu">
                <button onClick={handleLogout} className="header-dropdown-item">
                  <FaSignOutAlt className="logout-icon" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="header-auth-buttons">
              <NavLink to="/login" className="header-login-button">
                Login
              </NavLink>
              <NavLink to="/signup" className="header-signup-button">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
