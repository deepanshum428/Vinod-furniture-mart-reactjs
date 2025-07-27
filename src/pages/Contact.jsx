import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-[#f8f5f2] text-[#a65a32] p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Get in Touch
          </h1>
          <p className="mb-6 text-sm text-center">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <ul className="text-sm space-y-2 text-center">
            <li>✓ Fast response guaranteed</li>
            <li>✓ Connect with our support team</li>
            <li>✓ Help us improve our services</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaUser />
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleInput}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#a65a32]"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaEnvelope />
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleInput}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#a65a32]"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaPhone />
                Contact Number
              </label>
              <input
                type="tel"
                name="contact_number"
                placeholder="Enter your phone number"
                value={data.contact_number}
                onChange={handleInput}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#a65a32]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a65a32] hover:bg-[#8a4b2b] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-transform hover:scale-102 duration-200 outline-none active:scale-98"
            >
              Submit <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
