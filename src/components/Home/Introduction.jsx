import React from "react";
import Designation from "./Introduction/Designation";
import ImageBanner from "./Introduction/ImageBanner";
import AboutRight from "./Introduction/AboutRight";
import AboutText from "./Introduction/AboutText";

const Introduction = () => {
  return (
    <div className="lg:h-full flex w-full lg:w-[70%]  flex-col gap-4">
      <div className="flex h-full lg:flex-row flex-col lg:h-1/2 w-full gap-4 ">
        <Designation />
        <ImageBanner />
      </div>
      <div className="flex flex-col lg:flex-row h-1/2 w-full gap-4 ">
        <AboutText />
        <AboutRight />
      </div>
    </div>
  );
};

export default Introduction;

