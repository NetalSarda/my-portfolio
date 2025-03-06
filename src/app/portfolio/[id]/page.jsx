"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import projects from "@/data/Projects.json";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={`rounded-md border bg-popover text-popover-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

const technologies = [
  "React.JS",
  "AOS",
  "TailwindCSS",
  "Material UI",
  "Python",
  "Firebase",
  "SpeedyANTZ",
  "Vue",
];

const features = [
  "Customize the message content as needed",
  "Send messages to multiple Discord channels simultaneously",
  "Set custom delay intervals between messages for controlled messaging",
  "AutoChat runs non-stop to ensure continuous messaging",
];

const page = () => {
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const pid = window?.location.pathname.split("/").pop();
    const currentProject = projects.find((project) => (project.id === pid));
    console.log(currentProject);
    setProjectDetails(currentProject);
  }, []);

  if (!projectDetails) return <h1>Project Not Found</h1>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{projectDetails.title}</h1>
            <p className="text-gray-400 max-w-3xl">
              {projectDetails.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <div className="p-6">
                <Image
                  src={projectDetails.image}
                  alt="AutoChat-Discord Preview"
                  width={600}
                  height={400}
                  className="rounded-lg aspect-video object-cover"
                />
              </div>
            </Card>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {projectDetails?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {projectDetails.technologyUsed && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails?.technologyUsed?.map((tech) => {
                      return (
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-800 text-gray-300"
                          data-v0-t="badge"
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {projectDetails.link && (
                  <Link
                    href={projectDetails.link}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                )}
                {projectDetails.github && (
                  <Link
                    href={projectDetails.github}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
