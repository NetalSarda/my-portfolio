"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import projects from "@/data/Projects.json";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={`rounded-md bg-card-bg text-card-dark-text shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

const page = () => {
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const pid = window?.location.pathname.split("/").pop();
    const currentProject = projects.find((project) => project.id === pid);
    setProjectDetails(currentProject);
  }, []);

  if (!projectDetails)
    return <h1 className="text-head-text">Project Not Found</h1>;

  return (
    <div className="h-full bg-bg-body text-text-color p-8">
      <div className="container mx-auto px-4">
        <div className="space-y-2">
            <div className="flex items-center space-x-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-sm text-nav-text hover:opacity-80 transition"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Link>
              <h1 className="text-4xl font-bold text-head-text">
                {projectDetails.title}
              </h1>
            </div>
            <p className="text-card-dark-text-light max-w-3xl">
              {projectDetails.description}
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="bg-card-dark-bg">
                <div className="p-6">
                  <img
                    src={projectDetails.image}
                    alt={projectDetails.title}
                    className="rounded-lg aspect-video object-cover"
                  />
                </div>
              </Card>
              {projectDetails.technologyUsed && (
                <div>
                  <h2 className="text-xl font-semibold text-card-dark-text mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails?.technologyUsed?.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border  px-3 py-1 text-xs font-semibold bg-card-dark-bg text-card-dark-text-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                {projectDetails.link && (
                  <Link
                    href={projectDetails.link}
                    className="inline-flex bg-[var(--background)] items-center px-4 py-2 rounded-lg bg-gradient-start hover:bg-gradient-end transition-transform transform hover:scale-105 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                )}
                {projectDetails.github && (
                  <Link
                    href={projectDetails.github}
                    className="inline-flex items-center border border-[var(--background)] px-4 py-2 rounded-lg bg-card-dark-bg hover:bg-card-bg transition-transform transform hover:scale-105 text-card-dark-text"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-card-dark-text mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 lg:h-[50vh] overflow-y-scroll">
                  {projectDetails?.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-text-color"
                    >
                      <span className="text-gradient-start mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
