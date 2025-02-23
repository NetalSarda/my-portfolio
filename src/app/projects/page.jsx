"use client"
import Footer from "@/components/Footer";
import ProjectCard from "@/components/Project/ProjectCard";
import React from "react";

const page = () => {

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full">
        {["1", "2", "3"].map((el) => {
          return <ProjectCard key={el} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default page;
