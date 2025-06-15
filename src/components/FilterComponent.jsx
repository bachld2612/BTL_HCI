import React from "react"

const FilterComponent = ({onClick, content = "Bộ lọc"}) => {
  return (
    <button onClick={onClick} className = 'px-5 py-2 text-[14px] rounded-[10px] w-35 hover:cursor-pointer hover:bg-gray-200 bg-white border border-black'>
      {content}
    </button>
  )
};

export default FilterComponent;
