"use client";
import { useConfig } from "@/contexts/ConfigContext";
import React from "react";

// Function

const PreLoaderComponent = () => {
  const { setClicked } = useConfig();
  // Equivalent to
  //   const config = useConfig();
  //   const clicked = config.clicked
  //   const setClicked = config.setClicked
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className="h-1/2 aspect-square bg-purple-800"
        onClick={() => {
          setClicked(true);
        }}
      >
        <img
          className="h-full w-full grow aspect-square"
          src="/images/profile-photo.jpg"
        />
      </div>
    </div>
  );
};

export default PreLoaderComponent;
