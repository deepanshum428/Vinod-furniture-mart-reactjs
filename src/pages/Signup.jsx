import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaSignOutAlt,
} from "react-icons/fa";

function Signup() {
  const initialUserDetail = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState({ ...initialUserDetail });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const exists = users.some((user) => user.email === data.email);
      if (exists) {
        Swal.fire({
          title: "Email Already Registered",
          text: "Try using another email or log in instead.",
          icon: "warning",
          confirmButtonText: "OK",
        });
        return;
      }

      const newUsers = [...users, data];
      localStorage.setItem("users", JSON.stringify(newUsers));

      await Swal.fire({
        title: "Registered Successfully!",
        html: "<p>You can now log in to your account.</p>",
        icon: "success",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#4CAF50",
      });

      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        title: "Registration Failed",
        text: "Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-[#f8f5f2] text-[#a65a32] p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Join Our Community
          </h1>
          <p className="mb-6 text-sm text-center">
            Create your account to get started with <br />
            <strong>Vinod Furniture Mart</strong>
          </p>
          <ul className="text-sm space-y-2 text-center">
            <li>✓ Access exclusive content</li>
            <li>✓ Save your preferences</li>
            <li>✓ Faster checkout</li>
          </ul>
        </div>

        {/* Signup Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please fill in your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaUser />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={data.name}
                onChange={handleInput}
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaEnvelope />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={data.email}
                onChange={handleInput}
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaLock />
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={data.password}
                onChange={handleInput}
                className={`px-4 py-2 w-full border rounded-md ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#a65a32] hover:bg-[#8a4b2b] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-102 outline-none active:scale-98"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
              <FaSignOutAlt />
            </button>

            <p className="text-center  text-[#a65a32] mt-4 ">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
