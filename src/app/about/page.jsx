import AboutHero from "@/components/About/AboutHero";
import Experience from "@/components/About/Experience";
import React from "react";

const page = () => {
  return (
    <>
      <AboutHero/>
      <Experience/>
    </>
  );
};

export default page;

// Server Side rendering : Sari rendering server pe hogi

// Event listeners : Server cant take browser events...

// Basic Conclusion : Event listener hai toh use client lagega hi
