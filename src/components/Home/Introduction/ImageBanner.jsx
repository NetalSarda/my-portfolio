import React from "react";

const ImageBanner = () => {
  return <div className="lg:h-full bg-[var(--card-bg)] h-[40vh] lg:w-[40%] w-full">
    <img src="/images/photo.jpg" className="h-full w-full object-cover" alt="" />
  </div>;
};

export default ImageBanner;
