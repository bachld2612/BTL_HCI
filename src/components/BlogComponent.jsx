import React from "react";
import blogImg from "../assets/images/blog.png";
import HeartButton from "./HeartButton";
import CommentButton from "./CommentButton";
import AcceptButton from "./AcceptButton";

const BlogComponent = ({ blog }) => {
  const [liked, setLiked] = React.useState(false);
  const [likedNumber, setLikedNumber] = React.useState(blog.like);
  const onLike = () => {
    setLiked(!liked);
    setLikedNumber(liked ? likedNumber - 1 : likedNumber + 1);
  }
  return (
    <div className="border p-2 w-full border-gray-300 rounded-[12px] flex flex-row items-start justify-center gap-3">
      <div className="w-2/5 h-full">
        <img src={blogImg} alt="" />
      </div>
      <div className="w-4/5 text-[14px] flex flex-col align-start justify-center text-justify">
        <div className="mb-3">{blog.hightlight}</div>
        <div className="text-[16px] font-semibold mb-2">{blog.title}</div>
        <div className="">{blog.description}</div>
        <div className="flex flex-row justify-end items-center gap-29 mt-3">
          <div className="flex flex-row justify-center items-center gap-10">
            <HeartButton liked={liked} setLiked={setLiked} likedNumber={likedNumber} onClick={onLike} />
            <CommentButton />
          </div>
          <AcceptButton content="Xem thêm →" />
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
