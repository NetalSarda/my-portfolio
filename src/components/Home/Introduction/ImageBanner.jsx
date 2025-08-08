"use client";

import React, { useState, useEffect } from "react";

const ImageBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-6 w-full">
      <div 
        className={`bg-[var(--card-bg)] h-[40vh] w-full relative overflow-hidden rounded-xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Image container with simple entrance animation */}
        <div className="h-full w-full relative">
          <img
            src="/images/Netal.jpg"
            className="h-full w-full object-cover"
            alt="Developer profile"
          />
          
          {/* Subtle overlay gradient (static, not hover-dependent) */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
          
          {/* Bottom accent line (static) */}
          <div 
            className={`absolute bottom-0 left-0 h-1 w-1/3 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: "linear-gradient(to right, var(--gradient-start, #3b82f6), var(--gradient-end, #8b5cf6))",
            }}
          />
        </div>
        
        {/* Subtle overlay filter on load */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
            isVisible ? "opacity-0" : "opacity-70"
          }`}
          style={{
            backgroundColor: "var(--card-bg, #1e1e1e)",
          }}
        />
      </div>
    </div>
  );
};

export default ImageBanner;