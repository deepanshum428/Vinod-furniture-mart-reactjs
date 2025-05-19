import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    contact_number: "",
  };

  const [data, setData] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact_number } = data;

    if (!name || !email || !contact_number) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all fields before submitting.",
      });
      return;
    }

    const existing = JSON.parse(localStorage.getItem("userContact") || "[]");
    const updatedData = Array.isArray(existing) ? [...existing, data] : [data];

    localStorage.setItem("userContact", JSON.stringify(updatedData));

    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Your contact details have been submitted.",
    });

    e.target.reset();
    setData(initialState);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInput}
            value={data.name}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
            value={data.email}
            required
          />

          <label htmlFor="contact_number">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            placeholder="Enter your phone number"
            onChange={handleInput}
            value={data.contact_number}
            required
          />

          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
