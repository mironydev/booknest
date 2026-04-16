import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          The page you are trying to access does not exist or may have been
          moved.
        </p>

        <div className="mt-6 flex gap-3 select-none">
          <button
            onClick={() => navigate(-1)}
            className="btn w-1/2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="btn w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
