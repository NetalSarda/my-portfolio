"use client";

import { Code, Sparkles } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Designation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(30);

  const texts = [
    "Full Stack Developer & Data Analyst",
    "Engineer Bridging Web Applications and Data Insights",
    "Developer Empowering Products with Code and Data",
  ];

  const lowerTexts = [
    "Turning data into features. Turning ideas into web apps.",
    "Code meets data to create seamless digital experiences.",
    "Blending backend logic with real-world analytics.",
  ];

  const typingRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      setIsHovered(false);
      if (displayText.length > 0) {
        typingRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(50);
      }
    } else {
      setIsHovered(true);
      if (displayText.length < currentText.length) {
        typingRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        typingRef.current = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(15);
        }, 2000);
      }
    }

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [displayText, isDeleting, textIndex, typingSpeed, texts]);

  return (
    <div className="relative overflow-hidden h-full flex flex-col justify-between w-full">
      <div
        className={`relative flex flex-col justify-between h-full gap-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-full space-y-6">
          <div className="px-6 sm:px-4 flex items-center gap-2 mb-1">
            <Code
              size={18}
              className={`text-gray-400 transition-all duration-500 ${
                isHovered ? "rotate-12 scale-110" : ""
              }`}
            />
            <p
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-500 ${
                isHovered ? "translate-x-1" : ""
              }`}
              style={{ color: "var(--head-text, #a3a3a3)" }}
            >
              PROFESSIONAL EXPERTISE
            </p>
          </div>

          <div className="relative px-6 w-full sm:px-4 min-h-[calc(3.4rem*4)]">
            <h1
              className="text-[clamp(2rem,6vw,2.4rem)] w-full font-semibold sm:font-bold leading-tight sm:leading-snug text-left max-w-3xl transition-all duration-700"
              style={{
                backgroundImage: isHovered
                  ? "linear-gradient(to right, #E0E0E0, #DBDBDB, #F2F2F2, #ADA996)"
                  : "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
                backgroundSize: "200% 100%",
                backgroundPosition: isHovered ? "100% 0" : "0% 0",
                textShadow: isHovered
                  ? "0 5px 15px rgba(0, 0, 0, 0.1)"
                  : "none",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "100%",
                display: "inline-block",
              }}
            >
              {displayText}
              <span className="inline-block w-1 h-10 bg-gray-300 ml-1 animate-pulse"></span>
            </h1>
          </div>
        </div>

        <div>
          <div
            className={`flex gap-2 px-6 sm:px-4 transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles
              size={18}
              className="text-gray-400"
              style={{
                animation: isHovered ? "pulse 2s infinite" : "none",
              }}
            />
            <p className="text-gray-400 text-sm italic">
              {isHovered ? lowerTexts[textIndex] : ""}
            </p>
          </div>

          <div
            className="h-px mx-6 sm:m-4 mt-2 transition-all duration-700"
            style={{
              width: isHovered ? "200px" : "0px",
              backgroundImage: "linear-gradient(to right, #EAEAEA, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Designation;
