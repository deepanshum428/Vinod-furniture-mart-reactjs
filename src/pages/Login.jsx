import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { MyContext } from "../context";
import { saveUser } from "../user";

function Login() {
  const { setLoggedInUser } = useContext(MyContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      saveUser(user);
      setLoggedInUser(user);

      await Swal.fire({
        title: "Login Successful!",
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#4F46E5", // Indigo 600
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-[#f8f5f2] text-[#a65a32] p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome</h1>
          <p className="mb-6 text-sm text-center">
            Login to continue to <br />
            <strong>Vinod Furniture Mart</strong>
          </p>
          <ul className="text-sm space-y-2 text-center">
            <li>✓ View personalized dashboard</li>
            <li>✓ Track your orders easily</li>
            <li>✓ Access member-only deals</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 ">
          <h2 className="text-2xl font-semibold text-[#a65a32] mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaEnvelope />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#a65a32]">
                <FaLock />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#a65a32] hover:bg-[#8a4b2b] text-white py-2 rounded-md flex items-center justify-center gap-2  transition"
            >
              {isSubmitting ? "Logging in..." : "Login"}
              <FaSignInAlt />
            </button>

            <p className="text-sm text-center mt-4 text-[#a65a32]">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
