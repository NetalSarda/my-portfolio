import { MoveUpRight } from "lucide-react";
import React from "react";

const RightContent = () => {
  return (
    <>
      <div>
        <h2 className="text-[var(--card-dark-text-light)]">Get In Touch</h2>
        <div className="w-full flex justify-end">
          <MoveUpRight
            strokeWidth={1.5}
            width={30}
            height={30}
            className="h-full aspect-square"
          />
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-[var(--card-dark-text)]">Contact Me</h1>
      </div>
    </>
  );
};

export default RightContent;
