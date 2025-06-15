import React from "react";

const CommentButton = ({commentNumber = 0, onClick}) => {
  return (
    <div className="flex items-center">
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#eb6123"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        onClick={onClick}
      >
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <polygon points="7,18 7,21 12,18" />
      </svg>
      <span className="text-black">{commentNumber}</span>
    </div>
  );
};

export default CommentButton;
