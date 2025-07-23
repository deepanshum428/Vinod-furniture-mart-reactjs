import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefcf9] px-4 text-center">
      <div className="text-7xl font-bold text-[#b85c38] mb-4">404</div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or might have been
        moved. Let's get you back to comfort and style.
      </p>
      <Link
        to="/"
        className="bg-[#b85c38] text-white px-6 py-2 rounded-full hover:bg-[#a24928] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
