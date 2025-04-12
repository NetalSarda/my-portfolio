"use client"

import Link from "next/link"
import { Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`w-full min-h-[60vh] my-8 lg:my-16 gap-8 flex flex-col-reverse lg:flex-row p-4 sm:p-8 rounded-xl relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}

    >
     

      <div className="flex-1 flex flex-col justify-center h-full sm:px-8 py-6 space-y-6 relative z-10">
        <h1
          className={`text-4xl sm:text-5xl font-bold transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Netal Sarda
        </h1>

        <p
          className={`text-base sm:text-lg transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ color: "var(--text-color)" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem voluptas quaerat obcaecati at
          reiciendis consectetur ipsum odio omnis maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid exercitationem voluptas quaerat obcaecati.
        </p>

        <div
          className={`p-5 rounded-xl space-y-2 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{
            background: "rgba(46, 46, 46, 0.4)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <p className="text-sm uppercase tracking-wider font-medium" style={{ color: "var(--head-text)" }}>
            Education
          </p>
          <p className="text-base font-semibold" style={{ color: "var(--card-dark-text-light)" }}>
            Shri Ramdeobaba College of Engineering and Management
          </p>
          <p className="text-sm" style={{ color: "var(--card-dark-text)" }}>
            CGPA : <span className="font-bold">9.13</span>
          </p>
        </div>

        <div
          className={`flex w-full py-4 justify-evenly gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/resume.pdf"
            className="flex items-center justify-center gap-2 p-3 rounded-lg flex-1 font-medium transition-all duration-500 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              color: "var(--foreground)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Download size={18} className="transition-transform duration-500 group-hover:translate-y-1" />
            <span>Download Resume</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 p-3 rounded-lg flex-1 font-medium transition-all duration-500 hover:scale-105 group"
            style={{
              background: "rgba(30, 30, 30, 0.4)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              color: "var(--foreground)",
            }}
          >
            <Mail size={18} className="transition-transform duration-500 group-hover:rotate-12" />
            <span>Get in touch</span>
          </Link>
        </div>
      </div>

      <div
        className={`flex-1 h-full flex items-center justify-center p-4 lg:p-8 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div
          className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 animate-float"
          style={{
            background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
            padding: "4px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/images/Mushan.jpg"
            alt="Netal Sarda profile picture"
          />
          {/* Inner glow effect */}
          <div
            className="absolute inset-0 rounded-3xl opacity-50"
            style={{
              background: "radial-gradient(circle at 50% 50%, transparent 70%, rgba(255, 255, 255, 0.1))",
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default AboutHero
