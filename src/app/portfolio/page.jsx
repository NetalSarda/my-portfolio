"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CertificateCards from "@/components/Portfolio/CertificateCards";
import ProjectCards from "@/components/Portfolio/ProjectCard";
import SkillCards from "@/components/Portfolio/SkillCards";
import TestimonialCards from "@/components/Portfolio/TestimonialCards";

const PortfolioPage = () => {
  const [tab, setTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tabChanging, setTabChanging] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  
  const tabMap = [
    <ProjectCards key="projects" />,
    <SkillCards key="skills" />,
    <CertificateCards key="certificates" />,
    <TestimonialCards key="testimonials" />,
  ];

  useEffect(() => {
    // Initial animation on page load
    setIsVisible(true);
    setActiveContent(tabMap[tab]);
  }, []);

  useEffect(() => {
    if (tabChanging) {
      // Short timeout to allow exit animation to complete
      const timer = setTimeout(() => {
        setActiveContent(tabMap[tab]);
        setTabChanging(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [tabChanging, tab]);

  const handleTabChange = (index) => {
    if (index === tab) return;
    setTabChanging(true);
    setTab(index);
  };



  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background orbs */}
      

      <div className="container mx-auto px-4 pt-12 mt-8 relative z-10">
        <div 
          className={`sm:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 
            className="text-sm uppercase tracking-wider font-medium mb-2 text-center"
            style={{ color: "var(--head-text)" }}
          >
            MY WORK
          </h2>
          <h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[var(--text-gradient-start)] to-[var(--text-gradient-end)] bg-clip-text text-transparent mb-4"
            style={{
              textShadow: "0 5px 15px var(--text-shadow)",
            }}
          >
            Portfolio Showcase
          </h1>
          <p 
            className="text-[var(--text-color)] max-w-2xl mx-auto text-lg"
            style={{
              color: "var(--head-text)",
              textShadow: "0 2px 10px var(--text-shadow)",
            }}
          >
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:mt-12 flex justify-center items-center flex-col relative z-10">
        <div 
          className={`flex flex-wrap sm:flex-nowrap gap-4 justify-evenly items-center w-full sm:w-3/4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
          {["Projects", "Skills", "Certifications", "Testimonials"].map(
            (section, index) => {
              const isActive = tab === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 flex-1 min-w-[120px] sm:min-w-0`}
                  style={{
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <button
                    onClick={() => handleTabChange(index)}
                    className={`w-full py-4 px-3 sm:px-6 rounded-xl text-lg font-semibold transition-all duration-300 relative overflow-hidden`}
                    style={{
                      background:isActive?
                      "linear-gradient(180deg, var(--gradient-start), var(--gradient-end))"
                      : "linear-gradient(0deg, var(--gradient-start),var(--gradient-end), var(--gradient-end))",
                      color: "var(--foreground)",
                      boxShadow: "0 10px 25px var(--text-shadow)",
                    }}
                  >
                    {section}
                    
                    {/* Active indicator - animated underline */}
                    {isActive && (
                      <div 
                        className="absolute bottom-0 left-0 h-1 w-full transform origin-left"
                        style={{
                          background: "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
                          animation: "scaleInX 400ms ease-out forwards",
                        }}
                      />
                    )}
                  </button>
                </div>
              );
            }
          )}
        </div>
        
        {/* Content container with transition effects */}
        <div 
          className="w-full transition-opacity duration-300"
          style={{
            opacity: tabChanging ? 0 : 1,
            transform: tabChanging ? "translateY(20px)" : "translateY(0)",
          }}
        >
          {activeContent}
        </div>
      </div>

      <Footer />
      
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes scaleInX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.05; }
          50% { opacity: 0.15; }
          100% { opacity: 0.05; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite alternate;
        }
      `}</style>
      
    </div>
  );
};

export default PortfolioPage;