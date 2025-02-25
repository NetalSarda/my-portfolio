"use client";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigLeft, ArrowRight, SmileIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setCursorPosition({ x, y });

      // Calculate angle of movement
      const deltaX = x - prevPosition.x;
      const deltaY = y - prevPosition.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);

      setPrevPosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [prevPosition]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: cursorPosition.x - (isHovered ? 40 : 20),
        y: cursorPosition.y - (isHovered ? 40 : 20),
        width: isHovered ? 80 : 40,
        height: isHovered ? 80 : 40,
        rotate: rotation,
        opacity: 1,
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      style={{
        backgroundSize: "contain",
      }}
    >
        <SmileIcon className="h-full w-full"/>
    </motion.div>
  );
};

export default CustomCursor;
