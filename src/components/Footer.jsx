import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-orange-50 flex flex-col border-t border-gray-200">
      <div className="flex flex-row justify-between items-center px-10 py-8 border-b border-gray-300 mx-18">
        <div className="text-base text-gray-700">
          Liên hệ với chuyên gia của chúng tôi tại{" "}
          <span className="text-red-600 font-semibold">033 456 6112</span>
        </div>
        <div className="text-base text-gray-700">Theo dõi chúng tôi</div>
      </div>
      <div className="max-w-7xl w-full mx-auto px-10 py-8">
        <div className="grid grid-cols-4 gap-10 mb-2">
          <div className="font-semibold text-[15px]">Liên hệ</div>
          <div className="font-semibold text-[15px]">Công ty</div>
          <div className="font-semibold text-[15px]">Hỗ trợ</div>
          <div className="font-semibold text-[15px]">Bản tin</div>
        </div>
        <div className="grid grid-cols-4 gap-10 text-[14px] text-gray-700">
          <div className="flex flex-col gap-1">
            <div>Thôn Sơn Hào, Quan Lạn, Việt Nam</div>
            <div>Hoaivu2128@gmail.com</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Giới thiệu</div>
            <div>Đánh giá</div>
            <div>Chính sách dữ liệu</div>
            <div>Pháp lý</div>
            <div>Sơ đồ</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Liên hệ</div>
            <div>Trung tâm hỗ trợ</div>
            <div>Trò chuyện</div>
            <div>Hoạt động</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Đăng kí tin tức</div>
            <div>Cập nhật</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
