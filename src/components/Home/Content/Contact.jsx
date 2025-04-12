"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState({
    projects: false,
    services: false,
    button: false,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleHover = (key, value) => {
    setHoverState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div
      className={`w-full h-full p-6 rounded-xl relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background gradient orb */}
      <div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-20"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-end, #8b5cf6), var(--gradient-start, #3b82f6))",
          filter: "blur(40px)",
          animation: "pulse 15s infinite alternate-reverse",
        }}
      />

      <div
        className={`relative z-10 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            background:
              "linear-gradient(to right, var(--text-gradient-start, #ffffff), var(--text-gradient-end, #d1d5db))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          Contact Us
        </h2>

        {/* Projects Section */}
        <div
          className={`mb-6 transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--card-dark-text-light, #f3f4f6)" }}
          >
            Projects
          </h3>
          <p className="text-gray-300 mb-3">
            Interested in working with us? Let's discuss your next project.
          </p>
          <div
            className="flex items-center text-blue-400 cursor-pointer group"
            onMouseEnter={() => handleHover("projects", true)}
            onMouseLeave={() => handleHover("projects", false)}
            style={{
              transform: hoverState.projects ? "translateX(5px)" : "translateX(0px)",
              transition: "transform 0.3s ease",
            }}
          >
            <Link href="/contact" className="mr-1">
              Get in touch
            </Link>
            <div
              style={{
                transform: hoverState.projects ? "translateX(3px)" : "translateX(0px)",
                opacity: hoverState.projects ? 1 : 0.7,
                transition: "all 0.3s ease",
              }}
            >
              <MoveUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          className={`mb-6 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--card-dark-text-light, #f3f4f6)" }}
          >
            Services
          </h3>
          <p className="text-gray-300 mb-3">
            Professional services tailored to your business needs.
          </p>
          <div
            className="flex items-center text-blue-400 cursor-pointer group"
            onMouseEnter={() => handleHover("services", true)}
            onMouseLeave={() => handleHover("services", false)}
            style={{
              transform: hoverState.services ? "translateX(5px)" : "translateX(0px)",
              transition: "transform 0.3s ease",
            }}
          >
            <Link href="/services" className="mr-1 text-[var(--text-color)]">
              Visit My Portfolio
            </Link>
            <div
              style={{
                transform: hoverState.services ? "translateX(3px)" : "translateX(0px)",
                opacity: hoverState.services ? 1 : 0.7,
                transition: "all 0.3s ease",
              }}
            >
              <MoveUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

     
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
