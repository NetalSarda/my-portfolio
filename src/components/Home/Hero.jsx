import React from "react";
import ContactSection from "./ContactSection";
import Introduction from "./Introduction";

const Hero = () => {
  return (
    <div className="w-full h-auto lg:h-full gap-4 flex flex-col lg:flex-row p-4">
      <Introduction />
      <ContactSection />
    </div>
  );
};

export default Hero;


// Tailwind

// Default - Overall Every type
// sm - Small devices and 
// md - Medium and More
// lg - Large Devices and More