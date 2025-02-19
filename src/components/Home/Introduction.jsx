import React from "react";
import Designation from "./Introduction/Designation";
import ImageBanner from "./Introduction/ImageBanner";
import AboutRight from "./Introduction/AboutRight";
import AboutText from "./Introduction/AboutText";

const Introduction = () => {
  return (
    <div className="h-full flex w-full lg:w-[70%] bg-green-400 flex-col gap-4">
      <div className="flex h-full lg:flex-row flex-col lg:h-1/2 w-full gap-4 bg-slate-600">
        <Designation />
        <ImageBanner />
      </div>
      <div className="flex flex-col lg:flex-row h-1/2 w-full gap-4 bg-pink-950">
        <AboutText />
        <AboutRight />
      </div>
    </div>
  );
};

export default Introduction;

