import React, { useState } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

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
      newErrors.email = "Please enter a valid email";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const emailExists = existingUsers.some(
        (user) => user.email === data.email
      );

      if (emailExists) {
        Swal.fire({
          title: "Email Already Registered",
          text: "This email address is already in use. Please use a different email or login instead.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
        });
        return;
      }

      const updatedUsers = [...existingUsers, data];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      await Swal.fire({
        title: "Registration Successful!",
        html: `
          <div style="text-align: center;">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
              <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p style="margin-top: 1rem;">Your account has been created successfully.</p>
            <p>You can now log in to access your account.</p>
          </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "Continue to Login",
        confirmButtonColor: "#4CAF50",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        title: "Registration Failed",
        text: "An error occurred during registration. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-hero">
          <div className="signup-hero-content">
            <h1>Join Our Community</h1>
            <p>Create your account to get started</p>
            <div className="signup-benefits">
              <p>
                <span>✓</span> Access exclusive content
              </p>
              <p>
                <span>✓</span> Save your preferences
              </p>
              <p>
                <span>✓</span> Faster checkout
              </p>
            </div>
          </div>
        </div>

        <div className="signup-form-container">
          <div className="signup-form-header">
            <h2>Create Account</h2>
            <p>Please fill in your details</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={data.name}
                onChange={handleInput}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={data.email}
                onChange={handleInput}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="At least 6 characters"
                value={data.password}
                onChange={handleInput}
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              className="signup-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
              <FaArrowRight className="button-icon" />
            </button>

            <div className="signup-login-link">
              Already have an account?{" "}
              <NavLink to="/login" className="login-link">
                Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
