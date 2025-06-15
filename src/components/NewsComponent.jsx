import { Box, Button, Modal } from "@mui/material";
import React from "react";
import newsImage from "../assets/images/news_images.png";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const NewsComponent = ({
  componentType = "tin tức",
  status,
  isAdmin = 1,
  updateNavigate,
  detailNavigate,
  onDelete,
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
        <img className=" w-full " src={newsImage} alt="" />
        <div className="absolute bottom-2 right-2 z-10 text-red-600 text-[12px]">
          {status.view} lượt xem
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full text-justify px-4 py-4">
        <div className="text-center font-semibold my-2 uppercase">
          {status.title}
        </div>
        <div className="">{status.description}</div>
        {isAdmin ? (
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <div className="flex flex-row justify-between items-center gap-1 text-sm">
              <button className="text-red-500 hover:bg-red-50 border border-red-500 px-2 py-auto rounded-[12px]" onClick={onOpen}>Xoá {componentType}</button>
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
                className=" text-yellow-500 hover:bg-yellow-50 border border-yellow-500 px-2 py-auto rounded-[12px]"
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
            className="self-end text-md text-orange-500 hover:text-orange-300"
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
