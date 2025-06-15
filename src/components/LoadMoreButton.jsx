import React from "react"

const LoadMoreButton = ({onClick}) => {
  return (
    <button onClick={onClick} className = 'bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-[12px] w-35 hover:bg-orange-50'>
      Tải Thêm
    </button>
  )
};

export default LoadMoreButton;
