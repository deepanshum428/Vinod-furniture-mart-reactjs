import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 404;
  const message = isRouteErrorResponse(error)
    ? error.statusText || "Page Not Found"
    : "Oops! Something went wrong.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefcf9] px-4 text-center">
      <div className="text-7xl font-bold text-[#b85c38] mb-4">{status}</div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        {message}
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        {status === 404
          ? "The page you're looking for doesn't exist or might have been moved. Let's get you back to comfort and style."
          : "An unexpected error has occurred. Please try again later."}
      </p>
      <Link
        to="/"
        className="bg-[#b85c38] text-white px-6 py-2 rounded-full hover:bg-[#a24928] hover:scale-105 transition-transform duration-200 outline-none active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
