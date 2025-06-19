import React from "react";
import blog_img from "../assets/images/blog_img.png";
import { Button, Menu, MenuItem } from "@mui/material";

export default function DetailBlogComponent({ blog }) {
  const [liked, setLiked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [likedNumber, setLikedNumber] = React.useState(blog.like);
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-[30px] font-semibold">{blog.title}</h1>
        <div className="">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
              textTransform: "none",
              padding: "4px 4px",
              width: "fit-content",
              ":hover": {
                backgroundColor: "transparent",
                textTransform: "none",
              },
            }}
          >
            ...
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              "& .MuiList-root": {
                padding: "8px",
              },
            }}
          >
            <MenuItem
              sx={{
                color: "gray",
                borderRadius: "4px",
                fontSize: "14px",
                marginY: "4px",
              }}
              onClick={handleClose}
            >
              Sửa comment
            </MenuItem>
            <MenuItem
              sx={{
                color: "gray",
                borderRadius: "4px",
                fontSize: "14px",
              }}
              onClick={handleClose}
            >
              Xoá comment
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="font-light">{blog.created_by}</div>
      <div>
        <img src={blog_img} alt="" />
      </div>
      <div className="">Giới thiệu chung</div>
      <div className="text-justify">{blog.content}</div>
    </div>
  );
}
