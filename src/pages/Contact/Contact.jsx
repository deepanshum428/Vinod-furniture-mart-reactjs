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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const mobileNo = /^(?:\+91|91)?[6-9]\d{9}$/;
    const strongEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!strongEmail.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!data.contact_number) {
      newErrors.contact_number = "Contact no. is required";
    } else if (!mobileNo.test(data.contact_number)) {
      newErrors.contact_number =
        "Please enter a valid indian 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

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
    setIsSubmitting(false);
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
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {Boolean(errors.name) && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaEnvelope />
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleInput}
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {Boolean(errors.email) && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
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
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {Boolean(errors.contact_number) && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contact_number}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#a65a32] hover:bg-[#8a4b2b] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-transform hover:scale-102 duration-200 outline-none active:scale-98"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
