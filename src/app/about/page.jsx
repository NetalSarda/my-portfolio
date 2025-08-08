import AboutHero from "@/components/About/AboutHero";
import Experience from "@/components/About/Experience";
import Footer from "@/components/Footer";
import React from "react";

export const metadata = {
  title: "About Netal Sarda",
  description:
    "Explore Netal Sarda’s journey as a Full Stack Developer and Data Analyst. Learn about her experience in sales, operations, and building scalable digital solutions.",
  keywords: [
    "Netal Sarda",
    "Full Stack Developer",
    "Data Analyst",
    "Developer Journey",
    "Sales and Operations",
    "Web Development Experience",
    "Professional Growth"
  ],
  openGraph: {
    title: "About Netal Sarda - Developer & Analyst",
    description:
      "Explore Netal Sarda’s journey as a Full Stack Developer and Data Analyst. Learn about her experience in sales, operations, and building scalable digital solutions.",
    url: "https://yourdomain.com/about",
  },
  twitter: {
    title: "About Netal Sarda - Developer & Analyst",
    description:
      "Discover Netal Sarda’s journey through tech, analytics, and operations. Passionate about web and data-driven solutions.",
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
