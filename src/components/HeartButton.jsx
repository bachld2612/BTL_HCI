import React from "react";

const HeartButton = ({
  liked = false,
  onClick,
  likedNumber = 0,
  numberHidden = false,
}) => {
  return (
    <div
      className="flex items-center cursor-pointer select-none"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill={liked ? "#fc1c05" : "none"}
        viewBox="0 0 24 24"
        stroke={liked ? "#fc1c05" : "#eb6123"}
        strokeWidth={2}
        className=""
      >
        <path
          d="M12 21s-6.5-4.35-9-8.44C.31 8.31 2.43 4 7 4c1.98 0 3.44 1.07 4.18 2.04C11.56 5.07 13.02 4 15 4c4.57 0 6.69 4.31 4 8.56C18.5 16.65 12 21 12 21z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!numberHidden && (
        <span className="text-black ml-1">
          {likedNumber > 0 ? likedNumber : ""}
        </span>
      )}
    </div>
  );
};

export default HeartButton;
