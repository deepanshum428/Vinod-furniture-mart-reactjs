import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved. Let's
        get you back to comfort.
      </p>
      <Link
        to="/"
        className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
