"use client";
import Footer from "@/components/Footer";
import CertificateCards from "@/components/Portfolio/CertificateCards";
import ProjectCards from "@/components/Portfolio/ProjectCard";
import SkillCards from "@/components/Portfolio/SkillCards";
import React, { useState } from "react";

const page = () => {
  const [tab, setTab] = useState(0);
  const tabMap = [
    <ProjectCards />,
    <SkillCards />,
    <CertificateCards />,
    <CertificateCards />,
  ];

  return (
    <>
      <div className="container mx-auto px-4 pt-4 mt-8">
        <div className="sm:text-center">
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
      <div className="container mx-auto px-4 py-8 sm:mt-8 flex justify-center items-center flex-col">
        <div className="sm:flex gap-2 justify-evenly items-center grid grid-cols-2 w-full sm:w-3/4 sm:gap-8 mb-4">
          {["Projects", "Skills", "Certifications", "Testimonials"].map(
            (section, index) => (
              <div
                key={index}
                className={`h-full ${
                  tab == index
                    ? "bg-[var(--background)]"
                    : "bg-[var(--card-bg)]"
                } rounded-lg flex-1 flex justify-center items-center`}
              >
                <div
                  onClick={() => setTab(index)}
                  className="py-4 sm:px-10 cursor-pointer text-lg font-semibold bg-gradient-to-r from-slate-400 to-red-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                >
                  {section}
                </div>
              </div>
            )
          )}
        </div>
        {tabMap[tab]}
      </div>
      <Footer/>
    </>
  );
};

export default page;
