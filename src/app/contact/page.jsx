"use client";

import { useState, useEffect } from "react";
import { Instagram, Github, Linkedin, Send, User, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldFocus, setFieldFocus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);

    // Simulate successful form submission for demo purposes
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        const resetTimer = setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
        
        return () => clearTimeout(resetTimer);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Background orbs with different positions and animations
  const orbs = [
    { size: 'w-64 h-64', position: '-top-32 -right-32', delay: '0s', duration: '20s' },
    { size: 'w-80 h-80', position: '-bottom-40 -left-20', delay: '5s', duration: '25s' },
  ];

  return (
    <div className="flex flex-col mt-10 p-8 md:flex-row w-full min-h-[600px] relative overflow-hidden rounded-3xl">
 

      {/* Contact Form Section */}
      <div 
        className={`flex-1 p-8 md:p-14 relative backdrop-blur-lg transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(135deg, transparent, var(--gradient-start) 100%)",
            filter: "blur(20px)",
          }}
        />

        <h2 
          className="text-3xl font-bold mb-8 relative"
          style={{
            background: "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          Get in touch
        </h2>

        {isSubmitted ? (
          <div 
            className="bg-opacity-20 bg-green-500 backdrop-blur-md text-white p-6 rounded-lg flex flex-col items-center justify-center h-[350px] transition-all duration-500"
            style={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div 
              className="w-20 h-20 mb-6 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Send size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
            <p className="text-center mb-4">Thank you for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="space-y-2">
              <label 
                htmlFor="name"
                className="text-sm font-medium"
                style={{ color: "var(--text-color)" }}
              >
                Name
              </label>
              <div className="relative">
                <User 
                  size={18} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  style={{ 
                    color: fieldFocus === 'name' ? "var(--text-gradient-start)" : "var(--text-color)",
                    opacity: fieldFocus === 'name' ? "1" : "0.5",
                    transition: "all 0.3s ease"
                  }}
                />
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus('name')}
                  onBlur={() => setFieldFocus(null)}
                  required
                  className="pl-10 pr-4 py-3 w-full rounded-lg transition-all duration-300 focus:ring-2 focus:outline-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${fieldFocus === 'name' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
                    color: "var(--text-color)",
                    boxShadow: fieldFocus === 'name' ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: "var(--text-color)" }}
              >
                Email
              </label>
              <div className="relative">
                <Mail 
                  size={18} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  style={{ 
                    color: fieldFocus === 'email' ? "var(--text-gradient-start)" : "var(--text-color)",
                    opacity: fieldFocus === 'email' ? "1" : "0.5",
                    transition: "all 0.3s ease"
                  }}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus('email')}
                  onBlur={() => setFieldFocus(null)}
                  required
                  className="pl-10 pr-4 py-3 w-full rounded-lg transition-all duration-300 focus:ring-2 focus:outline-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${fieldFocus === 'email' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
                    color: "var(--text-color)",
                    boxShadow: fieldFocus === 'email' ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="message"
                className="text-sm font-medium"
                style={{ color: "var(--text-color)" }}
              >
                Message
              </label>
              <div className="relative">
                <MessageSquare 
                  size={18} 
                  className="absolute left-3 top-3 text-gray-400"
                  style={{ 
                    color: fieldFocus === 'message' ? "var(--text-gradient-start)" : "var(--text-color)",
                    opacity: fieldFocus === 'message' ? "1" : "0.5",
                    transition: "all 0.3s ease"
                  }}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFieldFocus('message')}
                  onBlur={() => setFieldFocus(null)}
                  required
                  className="pl-10 pr-4 py-3 w-full rounded-lg transition-all duration-300 focus:ring-2 focus:outline-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${fieldFocus === 'message' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
                    color: "var(--text-color)",
                    boxShadow: fieldFocus === 'message' ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none",
                  }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              style={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                color: "var(--foreground)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Social Links Section */}
      <div 
        className={`flex-1 p-8 md:p-14 flex flex-col justify-center items-center relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background: "rgba(42, 42, 42, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
          transitionDelay: "200ms",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at center, var(--gradient-end), transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <h2 
          className="text-3xl font-bold mb-12 relative"
          style={{
            background: "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Connect With Me
        </h2>

        <div className="space-y-8 relative">
          {[
            { icon: <Instagram size={24} />, text: "Instagram", href: "#" },
            { icon: <Github size={24} />, text: "GitHub", href: "#" },
            { icon: <Linkedin size={24} />, text: "LinkedIn", href: "#" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className="flex items-center gap-4 p-4 rounded-lg group transition-all duration-300 hover:translate-x-2"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                width: "220px",
              }}
            >
              <div 
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                {social.icon}
              </div>
              <span 
                className="text-lg transition-all duration-300 relative"
                style={{ color: "var(--card-dark-text-light)" }}
              >
                {social.text}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-50"
                  style={{
                    background: "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
                  }}
                ></span>
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(20px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
}