import { Box, Button, Modal } from "@mui/material";
import React from "react";
import newsImage from "../assets/images/news_images.png";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import address from "../assets/images/address.png";

const NewsComponent = ({
  componentType = "tin tức",
  status,
  isAdmin = 1,
  updateNavigate,
  detailNavigate,
  onDelete,
  img = newsImage,
}) => {
  const [open, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <div className="inline-flex flex-col  shadow-lg">
      <div className="relative inline-flex overflow-hidden w-full">
        <img className=" w-full " src={img} alt="" />
        {status.view && (
          <div className="absolute bottom-2 right-2 z-10 text-red-600 text-[12px]">
            {status.view} lượt xem
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center items-center w-full text-justify px-4 py-4">
        <div className="text-center font-semibold my-2 uppercase">
          {status.title}
        </div>
        {status.address && (
          <div className="flex flex-row justify-start items-center mb-2 self-start">
            <img src={address} className="mr-2 max-w-4 max-h-4" alt="" />
            <span className="line-clamp-1 ">{status.address}</span>
          </div>
        )}
        <div className="h-20 line-clamp-3">{status.description}</div>
        {isAdmin ? (
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <div className="flex flex-row justify-between items-center gap-1 text-sm">
              <button
                className="text-red-500 hover:bg-red-50 border border-red-500 px-2 py-1 rounded-[12px]"
                onClick={onOpen}
              >
                Xoá {componentType}
              </button>
              <DeleteModal
                componentType={componentType}
                onClose={onClose}
                onOpen={onOpen}
                open={open}
                onDelete={() => {
                  onDelete();
                  onClose();
                }}
              />
              <Link
                className=" text-yellow-500 hover:bg-yellow-50 border border-yellow-500 px-3 py-1 rounded-[12px]"
                to={updateNavigate}
              >
                Sửa {componentType}
              </Link>
            </div>
            <Link
              className=" text-orange-500 hover:text-orange-300"
              to={detailNavigate}
            >
              Xem thêm &rarr;
            </Link>
          </div>
        ) : (
          <Link
            className="self-end text-md text-orange-500 mt-2 hover:text-orange-300"
            to={detailNavigate}
          >
            Xem thêm &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
