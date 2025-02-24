import React, { useState } from "react";
import { motion } from "framer-motion";
import { useConfig } from "@/contexts/ConfigContext";

const Hero = () => {
  return (
    <motion.div className="w-full min-h-screen lg:min-h-full lg:h-[85vh] flex flex-col lg:flex-row lg:p-4">
      <HeroLarge />
    </motion.div>
  );
};

const HeroLarge = () => {
  const { clicked, setClicked } = useConfig();

  const duration = 2

  return (
    <>
      <div className="lg:h-full flex w-full lg:w-[70%] relative flex-col">
        <div className="flex h-full lg:flex-row flex-col lg:h-1/2 w-full">
          {/* First Div */}
          <motion.div
            initial={{ x: "225%", y: "50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: clicked ? "225%" : "0%",
              y: clicked ? "50%" : "0%",
              scale: clicked ? 0.7 : 1,
              opacity: clicked ? 0 : 1,
              width: clicked ? "25%" : "90%",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: duration,
            }}
            className="bg-[var(--card-bg)] m-2 rounded-lg"
          ></motion.div>

          {/* Second Div (Clickable to trigger animations) */}
          <motion.div
            initial={{ x: "125%", y: "50%", opacity: 1 }}
            animate={{
              x: clicked ? "125%" : "0%",
              y: clicked ? "50%" : "0%",
              width: clicked ? "25%" : "40%",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: duration,
            }}
            className="bg-green-500 [var(--card-bg)] m-2 rounded-lg"
            onClick={() => setClicked(false)}
          >
            <img
              className="h-full w-full object-cover"
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
              stiffness: 200,
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
              stiffness: 200,
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
          stiffness: 200,
          damping: 20,
          duration: duration,
        }}
        className="bg-[var(--card-bg)] m-2 rounded-lg"
      ></motion.div>
    </>
  );
};

export default Hero;