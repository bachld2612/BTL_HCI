import React from "react"

const AcceptButton = ({content, type, onClick}) => {
  return (
    <button type={type} onClick={onClick}  className = 'hover:cursor-pointer bg-orange-500 ml-2 hover:bg-orange-300 py-2 px-4 text-white rounded-[12px]'>
      {content}
    </button>
  )
};

export default AcceptButton;
