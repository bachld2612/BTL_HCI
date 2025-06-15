import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Icon */}
      <div className="mb-6">
        <svg
          className="w-20 h-20 text-gray-300"
          fill="none"
          viewBox="0 0 64 64"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="32" cy="32" r="30" stroke="#e5e7eb" strokeWidth="4" fill="#f9fafb" />
          <path
            d="M24 25h16M24 33h16M28 41h8"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="25" r="1.5" fill="#e11d48" />
          <circle cx="40" cy="25" r="1.5" fill="#e11d48" />
        </svg>
      </div>
      {/* Text */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">404 - Không tìm thấy trang</h1>
      <p className="text-gray-500 mb-6 text-center">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      {/* Button */}
      <Link
        to="/news"
        className="px-6 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Quay về tin tức
      </Link>
    </div>
  );
};

export default PageNotFound;
