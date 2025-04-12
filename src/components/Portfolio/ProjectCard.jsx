"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import projects from "@/data/Projects.json";
import { useEffect, useState } from "react";

export function Card({ className, children, project, index, isVisible, ...props }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div
      className={`rounded-xl overflow-hidden relative transition-all duration-500 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transform: hover ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
      
      {/* Gradient border effect on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "padding-box linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          opacity: hover ? 0.3 : 0,
          borderRadius: "0.75rem",
        }}
      />
    </div>
  );
}

export default function ProjectCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 relative overflow-hidden">
      
      
      <div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse-slow"
        style={{
          background: "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
          filter: "blur(60px)",
          animation: "pulse 10s infinite alternate-reverse",
        }}
      />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div 
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 
            className="mb-2 text-sm uppercase tracking-wider font-medium"
            style={{ color: "var(--head-text)" }}
          >
            MY WORK
          </h2>
          <h1 
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{
              background: "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            Featured Projects
          </h1>
        </div>
      
        <div className="flex flex-wrap  w-full gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative"
            >
              <div className="p-5 space-y-4">
                {/* Project Image with overlay on hover */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay at bottom for text readability */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-70"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: "var(--card-dark-text-light)" }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-base line-clamp-3"
                    style={{ color: "var(--card-dark-text)" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags/Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "rgba(46, 46, 46, 0.4)",
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          color: "var(--card-dark-text-light)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span 
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "rgba(46, 46, 46, 0.4)",
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          color: "var(--card-dark-text)",
                        }}
                      >
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Action Links */}
                <div className="flex items-center justify-between pt-3 gap-4">
                  <Link
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group flex-1 justify-center"
                    target="_blank"
                    style={{
                      background: "rgba(46, 46, 46, 0.4)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      color: "var(--foreground)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-500 group-hover:rotate-12" />
                    Live Demo
                  </Link>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group flex-1 justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                      color: "var(--foreground)",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}