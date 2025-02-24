import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useConfig } from "@/contexts/ConfigContext";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="w-full min-h-screen lg:min-h-full lg:h-[85vh] flex flex-col lg:flex-row lg:p-4 relative">
      <CursorFollower {...{ isHovered, setIsHovered }} />
      <HeroLarge {...{ isHovered, setIsHovered }} />
    </motion.div>
  );
};

// Cursor Follower Component
const CursorFollower = ({ isHovered, setIsHovered }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: cursorPosition.x - (isHovered ? 40 : 20),
        y: cursorPosition.y - (isHovered ? 40 : 20),
        width: isHovered ? 80 : 40,
        height: isHovered ? 80 : 40,
        opacity: 1,
      }}
      transition={{ duration: 0.1, ease: "linear" }} // Fast & smooth transition
      style={{
        background: "url('/images/circle-outline.png') no-repeat center",
        backgroundSize: "contain",
      }}
    />
  );
};

// Main Hero Section
const HeroLarge = ({ isHovered, setIsHovered }) => {
  const { clicked, setClicked } = useConfig();
  const duration = 2;
  const stiffness = 75;

  return (
    <>
      <div className="lg:h-full flex w-full lg:w-[70%] relative flex-col">
        <div className="flex h-full lg:flex-row flex-col lg:h-1/2 w-full">
          {/* First Div */}
          <motion.div
            initial={{
              x: "225%",
              y: "50%",
              scale: 0.7,
              opacity: 0,
              width: "25%",
            }}
            animate={{
              x: clicked ? "225%" : "0%",
              y: clicked ? "50%" : "0%",
              scale: clicked ? 0.7 : 1,
              opacity: clicked ? 0 : 1,
              width: clicked ? "25%" : "90%",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: 20,
              duration: duration,
            }}
            className="bg-[var(--card-bg)] m-2 rounded-lg"
          ></motion.div>

          {/* Second Div (Triggers Animation) */}
          <motion.div
            initial={{
              x: "125%",
              width: "25%",
              y: "50%",
              opacity: 1,
              border: "10px solid #fad6d5",
            }}
            animate={{
              x: clicked ? "125%" : "0%",
              y: clicked ? "50%" : "0%",
              width: clicked ? "25%" : "40%",
              border: clicked ? "10px solid #fad6d5" : "none",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: 20,
              duration: duration,
            }}
            className="bg-transparent m-2 rounded-2xl overflow-hidden z-30 bigger-cursor"
            onClick={() => setClicked(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="h-full w-full object-cover rounded-lg overflow-hidden"
              src="/images/profile-photo.jpg"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:h-1/2 w-full">
          {/* Third Div */}
          <motion.div
            initial={{ x: "225%", y: "-50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: clicked ? "225%" : "0%",
              y: clicked ? "-50%" : "0%",
              scale: clicked ? 0.7 : 1,
              opacity: clicked ? 0 : 1,
              width: clicked ? "25%" : "50%",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: 20,
              duration: duration,
            }}
            className="bg-[var(--card-bg)] m-2 rounded-lg"
          ></motion.div>

          {/* Fourth Div */}
          <motion.div
            initial={{ x: "125%", y: "-50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: clicked ? "125%" : "0%",
              y: clicked ? "-50%" : "0%",
              scale: clicked ? 0.7 : 1,
              opacity: clicked ? 0 : 1,
              width: clicked ? "25%" : "50%",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: 20,
              duration: duration,
            }}
            className="bg-[var(--card-bg)] m-2 rounded-lg"
          ></motion.div>
        </div>
      </div>

      {/* Fifth Div */}
      <motion.div
        initial={{ x: "-250%", y: "50%", scale: 0.7, opacity: 0 }}
        animate={{
          x: clicked ? "-250%" : "0%",
          y: clicked ? "50%" : "0%",
          scale: clicked ? 0.7 : 1,
          opacity: clicked ? 0 : 1,
          width: clicked ? "10%" : "30%",
        }}
        transition={{
          type: "spring",
          stiffness: stiffness,
          damping: 20,
          duration: duration,
        }}
        className="bg-[var(--card-bg)] m-2 rounded-lg"
      ></motion.div>
    </>
  );
};

export default Hero;
