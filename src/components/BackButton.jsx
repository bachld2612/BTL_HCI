import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ navigateTo }) => {
  return (
    <Link
      to={navigateTo}
      className="bg-blue-900 hover:bg-blue-600 py-2 px-4 text-white rounded-[12px]"
    >
      Trở về
    </Link>
  );
};

export default BackButton;
