"use client"

import Link from "next/link"
import { Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            textShadow: "0 5px 15px var(--text-shadow)",
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
          Hi, I'm Netal Sarda, a full-stack developer with experience building scalable web applications from the ground up. I specialize in modern JavaScript frameworks like React and Node.js, and I'm passionate about creating seamless user experiences backed by solid backend architecture. I've worked across frontend, backend, and DevOps, and I enjoy turning complex problems into clean, efficient solutions.
        </p>


        <div
          className={`md:flex w-full py-4 justify-evenly gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={downloadResume}
          className="flex w-full mb-4 md:mb-0 items-center justify-center gap-2 p-3 rounded-lg flex-1 font-medium transition-all duration-500 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              color: "var(--foreground)",
              boxShadow: "0 10px 25px var(--text-shadow)",
            }}
          >
            <Download size={18} className="transition-transform duration-500 group-hover:translate-y-1" />
            <span>Download Resume</span>
          </button>
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
        className={`flex-1 h-full flex items-start justify-center p-4 lg:p-8 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ marginTop: '-2rem' }}
      >
        <div
          className="relative w-2/3 max-w-md mx-auto overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 animate-float"
          style={{
            background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
            padding: "4px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
            animation: "float 6s ease-in-out infinite",
            height: '400px', // doubled from 200px to 400px
            minHeight: 'unset',
            maxHeight: '400px', // doubled from 200px to 400px
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/images/Netal.jpg"
            alt="Netal profile picture"
            style={{ height: '100%', objectFit: 'cover' }}
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
