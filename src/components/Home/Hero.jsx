import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useConfig } from "@/contexts/ConfigContext";
import Introduction from "./Introduction";
import ContactSection from "./ContactSection";

const Hero = () => {
  return (
    <motion.div className="w-full min-h-screen lg:min-h-full lg:h-[85vh] flex flex-col lg:flex-row lg:p-4 relative">
      <HeroLarge />
      <Introduction />
      <ContactSection />
    </motion.div>
  );
};

// Cursor Follower Component

// Main Hero Section
const HeroLarge = ({ isHovered, setIsHovered }) => {
  const { clicked, setClicked } = useConfig();
  const duration = 2;
  const stiffness = 75;

  return (
    <>
      <div className="lg:h-full hidden sm:flex w-full lg:w-[65%] relative flex-col">
        <div className="flex h-full lg:flex-row flex-col lg:h-[60%] w-full">
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
              width: clicked ? "25%" : "70%",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: 20,
              duration: duration,
            }}
            className="bg-[var(--card-bg)] m-2 rounded-lg px-4 py-8 flex justify-center items-end"
          >
            <h1 className="text-[2.9vw] text-[#685957] leading-none">
              <b>Full Stack Developer</b> Redefining <b>Web Applications</b>{" "}
              with <b>Innovative Solutions</b>
            </h1>
          </motion.div>

          {/* Second Div (Triggers Animation) */}
          <motion.div
            initial={{
              height: "75%",
              x: "145%",
              width: "25%",
              y: "50%",
              opacity: 1,
              border: "10px solid #fad6d5",
            }}
            animate={{
              height: clicked ? "75%" : "auto",
              x: clicked ? "145%" : "0%",
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
            className="bg-transparent m-2 rounded-2xl overflow-hidden z-30 cursor-pointer"
            onClick={() => setClicked(false)}
          >
            <img
              className="h-full w-full object-cover rounded-lg overflow-hidden"
              src="/images/photo.jpg"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:h-[40%] w-full">
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
            className="bg-[var(--card-bg)] m-2 rounded-lg px-4 py-8 flex items-end text-lg"
          >
            <p className="text-justify w-11/12">
              Mushan Khan is a skilled Full Stack Web Developer with expertise
              in Python and a range of web technologies. He creates dynamic,
              user-friendly websites and handles both front-end and back-end
              tasks efficiently.
            </p>
          </motion.div>

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
            className="bg-[var(--card-dark-bg)] m-2 rounded-lg"
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
          width: clicked ? "10%" : "35%",
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
