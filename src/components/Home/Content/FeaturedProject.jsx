"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import projects from "@/data/FeaturedProjects.json";
import Link from "next/link";

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDropdownClick = (index) => {
    setActiveTab(index);
  };

  return (
      <div className="max-w-4xl h-full relative z-10">
        <div
          className={`mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-4xl p-4 font-bold sm:text-3xl md:text-3xl"
            style={{
              background:
                "linear-gradient(to right, var(--text-gradient-start, #3b82f6), var(--text-gradient-end, #8b5cf6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px var(--text-shadow)",
            }}
          >
            Featured Projects
          </h1>
        </div>

        <div className="w-full flex flex-col justify-between space-y-4 flex-1 ">
          {projects
            .filter((t, index) => index < 3)
            .map((project, index) => (
              <div
                key={index}
                className={`w-full rounded-xl overflow-hidden transition-all  duration-300 ${
                  isVisible
                    ? `opacity-100 translate-y-0`
                    : "opacity-0 translate-y-10"
                }
                ${activeTab === index ? "h-full " : ""}

                `}
                style={{
                  background: "rgba(30, 30, 30, 0.7)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  onClick={() => handleDropdownClick(index)}
                  className={`w-full flex justify-between items-center px-6 py-5 cursor-pointer transition-colors duration-100`}
                >
                  <h3
                    className={`font-semibold text-xl md:text-2xl transition-transform duration-300`}
                    style={{
                      transform:
                        hoveredProject === index && activeTab !== index
                          ? "translateX(10px)"
                          : "translateX(0)",
                      background:
                        hoveredProject === index
                          ? "linear-gradient(to right, var(--text-gradient-start, #3b82f6), var(--text-gradient-end, #8b5cf6))"
                          : "none",
                      WebkitBackgroundClip:
                        hoveredProject === index ? "text" : "border-box",
                      WebkitTextFillColor:
                        hoveredProject === index ? "transparent" : "inherit",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    className={`text-gray-400 transition-transform duration-300 ${
                      hoveredProject === index ? "scale-125" : "scale-100"
                    }`}
                  >
                    {activeTab === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeTab === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 space-y-6">
                    <div
                      className="relative w-full h-64 rounded-lg overflow-hidden transform transition-transform duration-500"
                      style={{
                        transform:
                          activeTab === index ? "scale(1)" : "scale(0.95)",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--gradient-start, #3b82f6), var(--gradient-end, #8b5cf6))",
                        }}
                      />
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {project.description.substring(0, 60) +
                        (project.description.length >= 30 && "...")}
                    </p>

                    <Link href={project.github || project.link || "#"}>
                      <div className="flex justify-end pt-2">
                        <button
                          className="flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                          style={{
                            background: "rgba(60, 60, 60, 0.6)",
                            border: "1px solid var(--portfolio-card-shadow-dark)",
                          }}
                        >
                          {/* Button background animation */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--gradient-start, #3b82f6), var(--gradient-end, #8b5cf6))",
                            }}
                          />
                            <span className="relative z-10">View Project</span>
                          <ExternalLink size={16} className="relative z-10" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
  );
}
