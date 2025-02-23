import React from "react";
import ContactSection from "./ContactSection";
import Introduction from "./Introduction";

const Hero = () => {
  return (
    <motion className="w-full min-h-screen lg:min-h-full lg:h-[85vh] gap-4 flex flex-col lg:flex-row p-4">
      <Introduction />
      <ContactSection />
    </motion>
  );
};

export default Hero;


// Tailwind

// Default - Overall Every type
// sm - Small devices and 
// md - Medium and More
// lg - Large Devices and More