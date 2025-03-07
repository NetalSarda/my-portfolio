"use client"

import { useState } from "react"
import { Instagram, Github, Linkedin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[600px]">
      {/* Contact Form Section */}
      <div className="flex-1 p-8 md:p-14 bg-white">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="border p-2 w-full"
            />
          </div>

          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white p-2">
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links Section - Changed from black to pink */}
      <div className="flex-1 p-18 pr:12 md:p-12 bg-[var(--card-dark-bg)] text-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-12">Connect With Us</h2>

        <div className="space-y-10">
          <a href="#" className="flex items-center gap-3 hover:text-pink-200 transition-colors">
            <Instagram size={24} />
            <span className="text-lg">Instagram</span>
          </a>

          <a href="#" className="flex items-center gap-3 hover:text-pink-200 transition-colors">
            <Github size={24} />
            <span className="text-lg">GitHub</span>
          </a>

          <a href="#" className="flex items-center gap-3 hover:text-pink-200 transition-colors">
            <Linkedin size={24} />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}