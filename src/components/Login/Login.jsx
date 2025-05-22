import React, { useContext, useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { saveUser } from "../../user";
import { MyContext } from "../../context";

function Login() {
  const { setLoggedInUser } = useContext(MyContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
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
      const users = JSON.parse(localStorage.getItem("user")) || [];
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        await Swal.fire({
          title: "Login Successful!",
          html: `
            <div style="text-align: center;">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p style="margin-top: 1rem;">Welcome back, ${user.name}!</p>
              <p>You have successfully logged in.</p>
            </div>
          `,
          showConfirmButton: true,
          confirmButtonText: "Continue",
          confirmButtonColor: "#4CAF50",
          timer: 3000,
          timerProgressBar: true,
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/");
        setLoggedInUser(user);
        saveUser(user);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-hero">
          <div className="login-hero-content">
            <h1>Welcome Back</h1>
            <p>Login to access your account</p>
            <div className="login-benefits">
              <p>
                <span>✓</span> Access your saved preferences
              </p>
              <p>
                <span>✓</span> Continue where you left off
              </p>
              <p>
                <span>✓</span> Faster checkout
              </p>
            </div>
          </div>
        </div>

        <div className="login-form-container">
          <div className="login-form-header">
            <h2>Login to Your Account</h2>
            <p>Please enter your credentials</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <NavLink to="/forgot-password" className="forgot-password">
                Forgot password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging In..." : "Login"}
              <FaArrowRight className="button-icon" />
            </button>

            <div className="login-signup-link">
              Don't have an account?{" "}
              <NavLink to="/signup" className="signup-link">
                Create one
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
