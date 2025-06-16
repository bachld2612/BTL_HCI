import React from "react";
import blog_img from "../assets/images/blog_img.png";

export default function DetailBlogComponent({ blog }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h1 className="text-[30px] font-semibold">{blog.title}</h1>
      <div className="font-light">{blog.created_by}</div>
      <div>
        <img src={blog_img} alt="" />
      </div>
      <div className="">Giới thiệu chung</div>
      <div className="text-justify">{blog.content}</div>
    </div>
  );
}
