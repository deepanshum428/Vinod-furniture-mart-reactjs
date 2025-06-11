import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";
import logoImg from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & About */}
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={logoImg} alt="FurniCraft Logo" className="footer-logo" />
            <h2 className="footer-title">Vinod Furniture Mart</h2>
          </Link>
          <p className="footer-description">
            Quality furniture that fits your lifestyle. Discover modern,
            affordable designs for your home.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt /> word no.09, New Vikas colony, Rehti, Dist.
              Sehore, MP, India
            </li>
            <li>
              <FaPhone /> Will update soon
            </li>
            <li>
              <FaEnvelope /> vinodfurnituremartsupp27@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} vinodfurnituremart. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
