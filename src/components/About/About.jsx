import React from "react";
import "./About.css";
import { FaLeaf, FaRulerCombined, FaMedal, FaSmile } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Vinod Furniture Mart</h1>
          <p>Crafting Quality, Comfort & Style Since 1995</p>
        </div>
      </section>

      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/furniture-logo-with-armchair_23-2148656615.jpg"
              alt="Vinod Furniture Mart logo"
              className="logo-img"
            />
          </div>

          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with the vision of blending aesthetics with functionality,
              <strong> Vinod Furniture Mart Rehti</strong> has grown into a
              trusted name in furniture manufacturing. Our journey began with a
              simple goal: to create furniture that combines durability,
              comfort, and timeless design. Over the years, we have evolved,
              embracing innovation while staying true to our core values of
              quality and sustainability.
            </p>

            <h2>Our Craftsmanship</h2>
            <p>
              Every piece of furniture we create is a masterpiece, handcrafted
              by skilled artisans and enhanced with modern technology. We use
              the finest materials, from solid wood and premium upholstery to
              high-quality metals and finishes. Our rigorous quality control
              process ensures that every product meets our high standards before
              reaching your space.
            </p>

            <h2>Our Commitment to Sustainability</h2>
            <p>
              At <strong>Vinod Furniture Mart Rehti</strong>, we care about the
              environment as much as we care about our customers. We use
              responsibly sourced materials, eco-friendly manufacturing
              practices, and sustainable production methods to reduce our
              ecological footprint while delivering exceptional products.
            </p>
          </div>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaMedal />
              </div>
              <h3>Superior Craftsmanship</h3>
              <p>Expertly designed furniture with attention to detail</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaRulerCombined />
              </div>
              <h3>Custom Creations</h3>
              <p>Bespoke solutions tailored to your needs</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Eco-Friendly Approach</h3>
              <p>Sustainability at the core of our process</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaSmile />
              </div>
              <h3>Customer Satisfaction</h3>
              <p>A seamless experience from design to delivery</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Join us in creating beautiful, functional spaces with furniture that
            stands the test of time.
          </p>
          <button className="cta-button">Get in Touch Today</button>
        </div>
      </div>
    </div>
  );
}

export default About;
