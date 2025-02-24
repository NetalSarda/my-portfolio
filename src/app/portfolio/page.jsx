import ProjectCards from "@/components/Portfolio/ProjectCard";
import React from "react";

const page = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8 mt-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio Showcase
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 mt-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio Showcase
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </div>
      <ProjectCards />
    </>
  );
};

export default page;
