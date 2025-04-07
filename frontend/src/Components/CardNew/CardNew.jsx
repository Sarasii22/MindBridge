import PropTypes from "prop-types";
import React from "react";

export const Post = ({
  className,
  logoClassName,
  postClassName,
  bookmarkSimple = "bookmark-simple.png",
  heart = "heart.png",
  chatCircle = "chat-circle.png",
  paperPlaneTilt = "paper-plane-tilt.png",
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start relative shadow-[0px_4.97px_17.38px_#b5b5b540] ${className}`}
    >
      <div className="relative w-[369.99px] h-[64.56px] bg-white rounded-[17.38px_17.38px_0px_0px] overflow-hidden">
        <div
          className={`absolute w-[41px] h-[41px] top-[13px] left-[18px] bg-[#2ab1ec] rounded-[32.63px] ${logoClassName}`}
        />

        <div className="flex flex-col w-[72px] items-start absolute top-4 left-[69px]">
          <div className="relative self-stretch mt-[-1.00px] font-satoshi-13px-bold font-[number:var(--satoshi-13px-bold-font-weight)] text-dark-blue800 text-[length:var(--satoshi-13px-bold-font-size)] tracking-[var(--satoshi-13px-bold-letter-spacing)] leading-[var(--satoshi-13px-bold-line-height)] [font-style:var(--satoshi-13px-bold-font-style)]">
            Rikki Janae
          </div>

          <div className="relative self-stretch font-satoshi-10px-medium font-[number:var(--satoshi-10px-medium-font-weight)] text-dark-blue500 text-[length:var(--satoshi-10px-medium-font-size)] tracking-[var(--satoshi-10px-medium-letter-spacing)] leading-[var(--satoshi-10px-medium-line-height)] [font-style:var(--satoshi-10px-medium-font-style)]">
            Wichita, Kansas
          </div>
        </div>
      </div>

      <div
        className={`relative w-[369.99px] h-[369.99px] bg-black ${postClassName}`}
      />

      <div className="relative w-[369.99px] h-[49.66px] bg-white rounded-[17.38px_17.38px_0px_0px] overflow-hidden rotate-[-180.00deg]">
        <div className="flex w-[336px] items-center justify-between relative top-3.5 left-[17px]">
          <img
            className="relative w-[23.89px] h-[23.89px] rotate-[180.00deg]"
            alt="Bookmark simple"
            src={bookmarkSimple}
          />

          <div className="inline-flex items-center gap-[9.93px] relative flex-[0_0_auto] rotate-[180.00deg]">
            <img
              className="relative w-[23.89px] h-[23.89px]"
              alt="Heart"
              src={heart}
            />

            <img
              className="relative w-[23.89px] h-[23.89px]"
              alt="Chat circle"
              src={chatCircle}
            />

            <img
              className="relative w-[23.89px] h-[23.89px]"
              alt="Paper plane tilt"
              src={paperPlaneTilt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  postClassName: PropTypes.string,
  bookmarkSimple: PropTypes.string,
  heart: PropTypes.string,
  chatCircle: PropTypes.string,
  paperPlaneTilt: PropTypes.string,
};