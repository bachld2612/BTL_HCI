import React from "react";
import explore from "../assets/images/explore.png";
import CreateButton from "./CreateButton";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ExploreMoreComponent({ blog, onClick }) {
  return (
    <div className="border flex flex-col gap-2 p-2 border-gray-100 rounded-[12px]">
      <div className="">
        <img src={explore} alt="" />
      </div>
      <div className="font-light  text-gray-300 text-sm">
        @{blog?.created_by}
      </div>
      <div className="text-[14px] line-clamp-1">{blog?.title}</div>
      <div className="text-[12px] line-clamp-4 h-[75px]">
        {blog?.description}
      </div>
      <div className="flex flex-row py-1 px-2 justify-between items-center border-t border-gray-200">
        <div className="text-[10px]">4 days</div>
        <button
          onClick={onClick}
          className="bg-orange-500 hover:bg-orange-300 rounded-[15px] text-white text-[12px] px-2 py-0.5 "
          to={`/blogs/${blog?.id}`}
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}
