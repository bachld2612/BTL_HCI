import React from "react"
import { Link } from "react-router-dom";

const CreateButton = ({contentType, navigateTo = "/test"}) => {
  return (
    <Link to={navigateTo} className = 'bg-orange-500 w-35 text-center inline-block text-white py-2 px-4 text-[14px] rounded-[10px] hover:bg-orange-400'>
      Tạo {contentType}
    </Link>
  )
};

export default CreateButton;
