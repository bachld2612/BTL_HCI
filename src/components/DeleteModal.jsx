import React from "react";

const DeleteModal = ({
  open = false,
  onClose,
  onDelete,
  componentType = "bài viết",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      {/* Overlay */}
      <div
        className="fixed inset-0"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal content */}
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-md border border-gray-200">
        {/* Close Button */}
        <button
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 hover:cursor-pointer"
          onClick={onClose}
          aria-label="Đóng"
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 6L14 14M6 14L14 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* Icon + Content */}
        <div className="flex flex-row items-center gap-4 px-6 pt-7 pb-3">
          {/* Icon */}
          <div className="flex items-center justify-center bg-[#FEE2E2] rounded-xl w-11 h-11">
            <svg
              className="w-7 h-7 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="#fff"/>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4M12 16h.01"
                stroke="#EF4444"
                strokeWidth="1.8"
              />
            </svg>
          </div>
          {/* Text */}
          <div>
            <div className="font-semibold text-lg text-gray-900">
              Xóa {componentType}
            </div>
            <div className="text-gray-500 mt-1 text-base">
              Bạn có chắc chắn muốn xóa {componentType} này không?
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200 mx-0" />
        {/* Buttons */}
        <div className="flex justify-end gap-4 px-6 py-5">
          <button
            type="button"
            className="rounded-xl border border-gray-300 bg-white px-7 py-2 font-semibold text-gray-800 text-base hover:bg-gray-100 transition hover:cursor-pointer w-1/2"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            type="button"
            className="rounded-xl border border-red-500 bg-white px-7 py-2 font-semibold text-red-500 text-base hover:bg-red-50 transition hover:cursor-pointer w-1/2"
            onClick={onDelete}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
