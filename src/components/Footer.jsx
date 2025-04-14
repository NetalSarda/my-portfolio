"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ModernFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);

    // Intersection Observer to trigger animations when footer comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById("modern-footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer
      id="modern-footer"
      className="bg-gradient-to-b to-[rgba(0,0,0,0.8)] from-[rgba(0,0,0,0.2)] text-white relative overflow-hidden"
      style={{
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              JULIA HUANG
            </h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Transforming spaces through AI-driven design and creative
              innovation.
            </p>
            <div className="flex space-x-5">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-purple-400 after:to-blue-500 after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Projects", "About", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-purple-400 after:to-blue-500 after:mt-2">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "AI Architecture Design",
                "Digital Art Installation",
                "UI/UX Design",
                "Consulting",
              ].map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex items-center group"
                >
                  <span className="h-px w-0 bg-purple-400 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 after:content-[''] after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-purple-400 after:to-blue-500 after:mt-2">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Los Angeles, CA</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link
                  href="mailto:julia.huang@example.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  julia.huang@example.com
                </Link>
              </li>
              <li className="text-gray-400 flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (323) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs text-gray-500">
            © 2025 Julia Huang. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-xs text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
