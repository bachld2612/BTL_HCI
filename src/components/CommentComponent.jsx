import React from "react";
import avatar from "../assets/images/avatar.png";
import HeartButton from "./HeartButton";
import { Button, Menu, MenuItem } from "@mui/material";

export default function CommentComponent({ comment }) {
  const [liked, setLiked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [likedNumber, setLikedNumber] = React.useState(comment.like);
  return (
    <div className="flex flex-col items-start justify-start gap-1 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img src={avatar} alt="" />
          <div className="">{comment.created_by}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <HeartButton
              onClick={() => {
                setLiked(!liked);
                setLikedNumber(liked ? likedNumber - 1 : likedNumber + 1);
              }}
              numberHidden={true}
              liked={liked}
              likedNumber={likedNumber}
            />
          </div>

          <div className="">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{
                color: " orange",
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
          <div className="">{comment.time}</div>
        </div>
      </div>
      <div className="text-xl ml-13 font-semibold ">
        <div className="">{comment.title}</div>
      </div>
      <div className="my-2">
        <div>{comment.content}</div>
      </div>
    </div>
  );
}
