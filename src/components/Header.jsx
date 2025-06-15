import React from "react";
import logo from "../assets/images/soha_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-5 h-20">
      <img className="w-1/12 h-20" src={logo} alt="" />

      <div className="flex flex-row justify-around gap-50 text-gray-500 ">
        <Link to="/" className="hover:text-black">Tìm kiếm</Link>
        <div className="flex  flex-row justify-around items-center gap-4">
            <Link to="/" className="hover:text-black">Trang chủ</Link>
            <Link to="/apartments" className="hover:text-black">Đặt phòng</Link>
            <Link to="/news" className="hover:text-black">Tin tức</Link>
            <Link to="/" className="hover:text-black">Blog</Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <button className="bg-white text-black px-4 py-2 rounded-4xl w-28 hover:bg-gray-200">
          Đăng ký
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-300 w-28">
          Đăng nhập
        </button>
      </div>
    </nav>
  );
};

export default Header;
