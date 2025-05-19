"use client";

import { Code2, Briefcase } from "lucide-react";
import experience from "@/data/Experience.json";
import { useEffect, useState } from "react";

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="min-h-screen px-4 py-16 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        color: "var(--text-color)",
      }}
    >
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
            WHAT I HAVE DONE SO FAR
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
            Work Experience.
          </h1>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div 
            className={`absolute left-[50%] top-0 hidden h-full w-px -translate-x-[50%] md:block transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              background: "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)"
            }} 
          />

          {/* Mobile timeline line */}
          <div 
            className={`absolute left-4 top-0 h-full w-px md:hidden transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              background: "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)"
            }} 
          />

          <div className="relative space-y-8">
            {experience.map((item, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 150}ms` 
                }}
              >
                {/* Desktop layout */}
                <div
                  className={`hidden items-center md:flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <TimelineCard {...item} isRight={index % 2 !== 0} />
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <div 
                      className="absolute flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Code2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>

                {/* Mobile layout */}
                <div className="flex max-w-[calc(100%-10px)] md:hidden">
                  <div className="relative top-0 bottom-0 my-auto left-[10px] flex h-10 items-center justify-center">
                    <div 
                      className="absolute flex h-10 w-10 z-10 items-center justify-center rounded-full transition-transform duration-500 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Code2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pl-4">
                    <TimelineCard {...item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ role, company, duration, tasks, isRight }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div 
      className="rounded-xl p-6 transition-all duration-500 hover:scale-105"
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transform: hover ? "translateY(-5px)" : "translateY(0px)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 
        className="mb-1 text-xl font-bold"
        style={{ color: "var(--card-dark-text-light)" }}
      >
        {role}
      </h3>
      <p 
        className="mb-2"
        style={{ color: "var(--head-text)" }}
      >
        {company}
      </p>
      <div 
        className="mb-4 flex items-center gap-2 text-sm"
        style={{ color: "var(--card-dark-text)" }}
      >
        <Briefcase className="h-4 w-4" />
        {duration}
      </div>
      <ul className="list-inside space-y-2 text-sm" style={{ color: "var(--card-dark-text)" }}>
        {tasks.map((point, index) => (
          <li 
            key={index} 
            className="list-disc"
            style={{
              transition: "transform 0.3s ease",
              transform: hover ? "translateX(5px)" : "translateX(0)",
              transitionDelay: `${index * 50}ms`
            }}
          >
            {point}
          </li>
        ))}
      </ul>
      
      {/* Subtle glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(${isRight ? "to left" : "to right"}, var(--gradient-start), transparent)`,
          opacity: hover ? 0.1 : 0,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}