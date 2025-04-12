"use client";

import testimonials from "@/data/Testimonials.json";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

export function TestimonialCard({ testimonial, index, isVisible }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div
      className={`rounded-xl overflow-hidden relative transition-all duration-500 ${
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
    >
      <div className="p-5 space-y-4">
        {/* Quote icon */}
        <div className="flex justify-end">
          <div 
            className="rounded-full p-2 transition-all duration-300"
            style={{
              background: "rgba(46, 46, 46, 0.4)",
              transform: hover ? "rotate(10deg)" : "rotate(0deg)",
            }}
          >
            <Quote 
              className="w-5 h-5 transition-all duration-300"
              style={{
                color: "var(--card-dark-text-light)",
                opacity: hover ? 1 : 0.7,
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <p 
          className="text-base italic"
          style={{ color: "var(--card-dark-text)" }}
        >
          "{testimonial.content}"
        </p>
        
        {/* Person info with image */}
        <div className="flex items-center pt-2 space-x-3">
          <div 
            className="h-12 w-12 rounded-full overflow-hidden border-2 transition-all duration-300"
            style={{
              borderColor: hover ? "var(--gradient-end)" : "rgba(255, 255, 255, 0.1)",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
          >
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.person}
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h3 
              className="text-lg font-semibold"
              style={{ color: "var(--card-dark-text-light)" }}
            >
              {testimonial.person}
            </h3>
            <p 
              className="text-sm"
              style={{ color: "var(--head-text)" }}
            >
              {testimonial.position}
            </p>
          </div>
        </div>
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

export default function TestimonialCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 relative overflow-hidden">
      
      
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
            WHAT PEOPLE SAY
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
            Testimonials
          </h1>
        </div>
      
        <div className="flex flex-wrap justify-center w-full gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}