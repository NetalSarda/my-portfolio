import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="w-full min-h-screen lg:min-h-full lg:h-[85vh] flex flex-col lg:flex-row lg:p-4">
      <HeroLarge />
    </motion.div>
  );
};

const HeroLarge = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="lg:h-full flex w-full lg:w-[70%] relative flex-col">
        <div className="flex h-full lg:flex-row flex-col lg:h-1/2 w-full">
          {/* First Div */}
          <motion.div
            initial={{ x: "225%", y: "50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: active ? "225%" : "0%",
              y: active ? "50%" : "0%",
              scale: active ? 0.7 : 1,
              opacity: active ? 0 : 1,
              width: active ? "25%" : "90%",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
            className="bg-purple-400"
          ></motion.div>

          {/* Second Div (Clickable to trigger animations) */}
          <motion.div
            initial={{ x: "125%", y: "50%", opacity: 1 }}
            animate={{
              x: active ? "125%" : "0%",
              y: active ? "50%" : "0%",
              width: active ? "25%" : "40%",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
            className="bg-green-500 z-20"
            onClick={() => setActive(false)}
          >
            <img className="h-full w-full object-cover" src="/images/photo.jpg" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:h-1/2 w-full">
          {/* Third Div */}
          <motion.div
            initial={{ x: "225%", y: "-50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: active ? "225%" : "0%",
              y: active ? "-50%" : "0%",
              scale: active ? 0.7 : 1,
              opacity: active ? 0 : 1,
              width: active ? "25%" : "50%",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
            className="bg-red-500"
          ></motion.div>

          {/* Fourth Div */}
          <motion.div
            initial={{ x: "125%", y: "-50%", scale: 0.7, opacity: 0 }}
            animate={{
              x: active ? "125%" : "0%",
              y: active ? "-50%" : "0%",
              scale: active ? 0.7 : 1,
              opacity: active ? 0 : 1,
              width: active ? "25%" : "50%",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
            className="bg-yellow-500"
          ></motion.div>
        </div>
      </div>

      {/* Fifth Div */}
      <motion.div
        initial={{ x: "-250%", y: "50%", scale: 0.7, opacity: 0 }}
        animate={{
          x: active ? "-250%" : "0%",
          y: active ? "50%" : "0%",
          scale: active ? 0.7 : 1,
          opacity: active ? 0 : 1,
          width: active ? "10%" : "30%",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, duration: 1 }}
        className="bg-orange-500"
      ></motion.div>
    </>
  );
};

export default Hero;
