import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RightContent = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-[var(--card-dark-text-light)]">Get In Touch</h2>
        <Link href={"/contact"}>
          <MoveUpRight
            strokeWidth={1.5}
            width={30}
            height={30}
            className="h-full aspect-square"
          />
        </Link>
      </div>
      <div>
        <h1 className="text-5xl text-[var(--card-dark-text)]">Contact Me</h1>
      </div>
    </>
  );
};

export default RightContent;
