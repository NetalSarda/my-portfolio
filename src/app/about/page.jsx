import AboutHero from "@/components/About/AboutHero";
import Experience from "@/components/About/Experience";
import Footer from "@/components/Footer";
import React from "react";

export const metadata = {
  title: "About Me",
  description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer. Discover my passion for technology and continuous learning.",
  keywords: [
    "About Mushan Khan",
    "Software Engineer Background",
    "Developer Experience",
    "Technology Journey",
    "Education Background",
    "Professional Experience"
  ],
  openGraph: {
    title: "About Mushan Khan - Software Engineer & Developer",
    description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer. Discover my passion for technology and continuous learning.",
    url: "https://mushankhan.com/about",
  },
  twitter: {
    title: "About Mushan Khan - Software Engineer & Developer",
    description: "Learn more about Mushan Khan - my background, experience, education, and journey as a Software Engineer.",
  },
};

const page = () => {
  return (
    <div className="">
      <AboutHero />
      <Experience />
      <Footer />
    </div>
  );
};

export default page;

// Server Side rendering : Sari rendering server pe hogi

// Event listeners : Server cant take browser events...

// Basic Conclusion : Event listener hai toh use client lagega hi
