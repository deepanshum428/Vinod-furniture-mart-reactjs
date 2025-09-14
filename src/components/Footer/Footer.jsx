import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png"; // update path if different

const Footer = () => {
  const navClass = ({ isActive }) => ` ${isActive ? "font-bold " : ""}`;

  return (
    <footer className="bg-[#f8f5f2] text-[#a65a32] pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#e4dcd6] pb-8">
        {/* Brand Logo */}
        <div>
          <img src={logo} alt="Vinod Furniture Mart" className="w-36 mb-3" />
          <p className="text-sm text-[#a65a32]/80">
            Timeless craftsmanship. Modern comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navClass}>
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/faq" className={navClass}>
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/returns" className={navClass}>
                Returns & Refunds
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping" className={navClass}>
                Shipping Info
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className={navClass}>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-3">Get in Touch</h3>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91-9876543210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@vinodmart.com
            </p>
          </div>

          <div className="flex gap-4 mt-4 text-[#a65a32]">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs pt-6 text-[#a65a32]/70">
        © {new Date().getFullYear()} Vinod Furniture Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
