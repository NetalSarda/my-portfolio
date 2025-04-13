"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import certificateData from "@/data/Certification.json";
import { useEffect, useState } from "react";

export function Card({ className, children, certificate, index, isVisible, ...props }) {
  const [hover, setHover] = useState(false);
  
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-500 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transform: hover ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
      
      {/* Gradient border effect on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "padding-box linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          opacity: hover ? 0.3 : 0,
          borderRadius: "0.75rem",
        }}
      />
    </div>
  );
}

export default function CertificateCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen lg:py-16 px-4 md:px-8 relative overflow-hidden">
      
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div 
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 
            className="mb-2 text-sm uppercase tracking-wider font-medium"
            style={{ color: "var(--head-text)" }}
          >
            ACHIEVEMENTS
          </h2>
          <h1 
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{
              background: "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            Certifications
          </h1>
        </div>
      
        <div className="flex flex-wrap justify-center w-full gap-6 md:gap-8 md:p-4">
          {certificateData.map((certificate, index) => (
            <Card
              key={index}
              index={index}
              certificate={certificate}
              isVisible={isVisible}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative"
            >
              <div className="p-5 space-y-4">
                {/* PDF Preview */}
                <div 
                  className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <iframe
                    src={certificate.pdf}
                    className="w-full h-full"
                    title={`Certificate PDF - ${certificate.name}`}
                  />
                </div>

                {/* Certificate Info */}
                <div className="space-y-2">
                  <h3 
                    className="text-lg font-semibold"
                    style={{ color: "var(--card-dark-text-light)" }}
                  >
                    {certificate.name}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: "var(--head-text)" }}
                  >
                    {certificate.provider}
                  </p>
                  {certificate.grade && (
                    <div 
                      className="inline-block px-3 py-1 text-sm font-medium rounded-md"
                      style={{
                        background: "rgba(46, 46, 46, 0.4)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        color: "var(--card-dark-text-light)",
                      }}
                    >
                      Grade: {certificate.grade}
                    </div>
                  )}
                </div>

                {/* Verify Link */}
                <div className="pt-2">
                  <Link
                    href={certificate.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group"
                    target="_blank"
                    style={{
                      background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                      color: "var(--foreground)",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-500 group-hover:translate-x-1" />
                    Verify Certificate
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}