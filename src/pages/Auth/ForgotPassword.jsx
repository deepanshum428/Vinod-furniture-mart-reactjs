import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Enter is required");
    } else if (!validateEmail(email)) {
      setError("Please enter valid email");
      return;
    }
    setError("");

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === email);
      if (!user) {
        throw new Error("No account found with this email");
      }
      await Swal.fire({
        title: "Password Reset Link Sent",
        text: "Check your email for reset instructions (simulation).",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 ">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-[#f8f5f2] text-[#a65a32] p-8 flex flex-col justify-center text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Forgot Password?
          </h1>
          <p className="mb-6 text-sm">
            Don’t worry! Enter your registered email address, and we’ll send you
            instructions to reset your password.
          </p>
          <ul className="text-sm space-y-2">
            <li>✓ Secure account recovery</li>
            <li>✓ Quick reset process</li>
            <li>✓ Continue shopping without hassle</li>
          </ul>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Reset Password
          </h2>
          <form action="" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor=""
                className="flex items-center gap-2 text-sm font-medium text-[#a65a32]"
              >
                <FaEnvelope /> Email Address
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@email.com"
                value={email}
                onChange={handleInput}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
              />
              {Boolean(error) && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#a65a32] hover:bg-[#8a4b2b] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-transform hover:scale-102 duration-200 outline-none active:scale-98"
            >
              Send Reset Link <FaPaperPlane />
            </button>
          </form>
          <p className="text-center mt-4 text-[#a65a32] text-sm">
            Remembered your password?{" "}
            <NavLink
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Back To Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
