"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConfig } from "@/contexts/ConfigContext";
import Introduction from "./Introduction";
import ContactSection from "./ContactSection";
import { ArrowRight, ArrowUpRight, Expand, MoveUpRight, MousePointer } from "lucide-react";
import LeftContent from "./Content/LeftContent";
import IntroContent from "./Content/IntroContent";
import RightContent from "./Content/RightContent";
import Contact from "./Content/Contact";

const Hero = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <motion.div 
      className="w-full min-h-screen lg:min-h-full lg:h-[85vh] flex flex-col lg:flex-row lg:p-4 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
          filter: "blur(120px)",
          animation: "float 15s infinite alternate-reverse",
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          filter: "blur(100px)",
          animation: "float 18s 3s infinite alternate-reverse",
        }}
      />
      
    
      
      <HeroLarge 
        setGlobalCursorVariant={setCursorVariant} 
      />
      <Introduction />
      <ContactSection />
      
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.div>
  );
};

// Main Hero Section
const HeroLarge = ({ setGlobalCursorVariant }) => {
  const { clicked, setClicked } = useConfig();
  const duration = 1.8;
  const stiffness = 80;
  const damping = 22;
  
  // Handle cursor hover state for image
  const handleHover = () => {
    setGlobalCursorVariant("hover");
  };
  
  const handleLeave = () => {
    setGlobalCursorVariant("default");
  };

  return (
    <>
      <div className="lg:h-full hidden sm:flex w-full lg:w-[65%] relative flex-col">
        <div className="flex h-full lg:flex-row flex-col lg:h-[60%] w-full">
          {/* First Div - Intro Content */}
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
              damping: damping,
              duration: duration,
            }}
            className="m-2 rounded-lg px-4 py-8 flex justify-center items-end relative overflow-hidden"
            style={{
              background: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Subtle edge glow effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: "linear-gradient(135deg, transparent 0%, var(--gradient-end) 100%)",
                filter: "blur(15px)",
              }}
            />
            
            <IntroContent />
          </motion.div>

          {/* Second Div - Profile Image */}
          <motion.div
            initial={{
              height: "75%",
              x: "145%",
              width: "25%",
              y: "50%",
              opacity: 1,
            }}
            animate={{
              height: clicked ? "75%" : "auto",
              x: clicked ? "145%" : "0%",
              y: clicked ? "50%" : "0%",
              width: clicked ? "25%" : "40%",
            }}
            transition={{
              type: "spring",
              stiffness: stiffness,
              damping: damping,
              duration: duration,
            }}
            className="rounded-2xl overflow-hidden z-30 cursor-pointer relative m-2"
            onClick={() => setClicked(false)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            whileHover={{ scale: 1.02 }}
          >
            <img
              className="h-full w-full object-cover rounded-lg overflow-hidden transition-all duration-700"
              style={{
                filter: clicked ? "grayscale(100%)" : "grayscale(15%)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              src="/images/Mushan.jpg"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 transition-all duration-500 rounded-lg flex items-end p-8 ${
                clicked
                  ? "bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.8))]"
                  : "bg-[radial-gradient(circle,transparent_70%,rgba(0,0,0,0.3))]"
              }`}
            >
              <motion.div 
                className="w-full flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: clicked ? 1 : 0,
                  scale: clicked ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="text-white text-lg font-semibold justify-center flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Expand size={20} className="text-white" />
                  <span>Click To Open</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:h-[40%] w-full">
          {/* Third Div - Left Content */}
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
              damping: damping,
              duration: duration,
            }}
            className="m-2 rounded-lg px-4 py-8 flex items-end text-lg relative overflow-hidden"
            style={{
              background: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Subtle edge glow effect */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: "linear-gradient(45deg, var(--gradient-start) 0%, transparent 70%)",
                filter: "blur(15px)",
              }}
            />
            
            <LeftContent />
          </motion.div>

          {/* Fourth Div - Right Content */}
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
              damping: damping,
              duration: duration,
            }}
            className="flex justify-between flex-col m-2 rounded-lg px-6 pt-4 pb-8 relative overflow-hidden"
            style={{
              background: "rgba(42, 42, 42, 0.7)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Subtle accent lines */}
            <div 
              className="absolute top-0 left-0 w-full h-1 opacity-50"
              style={{
                background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end), var(--gradient-start))",
                backgroundSize: "200% 100%",
                animation: "shimmer 8s infinite linear",
              }}
            />
            
            <RightContent />
          </motion.div>
        </div>
      </div>

      {/* Fifth Div - Contact */}
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
          damping: damping,
          duration: duration,
        }}
        className="m-2 rounded-lg relative overflow-hidden"
        style={{
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Subtle edge glow effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at bottom right, var(--gradient-end), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        
        <Contact />
      </motion.div>
    </>
  );
};

export default Hero;