"use client";

import StackIcon from "tech-stack-icons";
import skills from "../../data/skills.json";
import { useEffect, useState } from "react";

export function SkillCard({ skill, index, isVisible }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div
      className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transform: hover ? "translateY(-5px) scale(1.05)" : "translateY(0) scale(1)",
        transitionDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon container */}
      <div className="h-full p-2 w-full flex items-center justify-center relative">
        <div 
          className="transition-transform duration-500"
          style={{
            transform: hover ? "scale(0.85)" : "scale(1)",
          }}
        >
          <StackIcon name={skill.iconName} size={48} />
        </div>
        
        {/* Hover overlay with skill name */}
        <div 
          className="absolute inset-0 flex items-end justify-center transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            opacity: hover ? 1 : 0,
          }}
        >
          <div 
            className="p-3 w-full text-center transform transition-transform duration-300"
            style={{
              transform: hover ? "translateY(0)" : "translateY(1rem)",
              color: "var(--card-dark-text-light)",
            }}
          >
            <h3 className="text-sm font-semibold">{skill.name}</h3>
          </div>
        </div>
        
        {/* Subtle glow effect on hover */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            background: "radial-gradient(circle at center, var(--gradient-start) 0%, transparent 70%)",
            opacity: hover ? 0.3 : 0,
            mixBlendMode: "overlay",
          }}
        />
      </div>
      
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

export default function SkillCards() {
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
            MY EXPERTISE
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
            Technical Skills
          </h1>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 w-full max-w-5xl"
          >
            {skills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}