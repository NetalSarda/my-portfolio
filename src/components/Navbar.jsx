"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useConfig } from "@/contexts/ConfigContext";
import { AlignJustify, Circle, ListOrdered, X } from "lucide-react";
import { useState } from "react";

const HamBurgerMenu = ({ open ,setOpen }) => {
  return (
    <div
    onClick={()=>{setOpen(false)}}
      className={`fixed -top-4 -left-4 h-screen w-screen bg-white transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } sm:hidden flex flex-col items-center justify-center gap-6`}
    >
      <nav className="flex flex-col items-center gap-6">
        {[
          { href: "/about", label: "ABOUT" },
          { href: "/portfolio", label: "PORTFOLIO" },
          { href: "/contact", label: "CONTACT" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-zinc-800 text-lg uppercase font-semibold tracking-wider relative group px-6 py-2 rounded-lg transition-all duration-300"
          >
            <span className="relative z-10">{label}</span>
            <motion.div
              className="absolute inset-0 -z-0 rounded-lg bg-white/0 group-hover:bg-white/30 transition-all duration-300"
              layoutId={`highlight-${label}`}
            />
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-[2px] bg-zinc-800/50 group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default function Navbar() {
  const config = useConfig();

  const [open, setOpen] = useState(false);

  if (config.clicked) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`lg:absolute flex justify-between top-0 w-full h-24 px-4 md:px-4 z-50 pt-4`}
    >
      <div className="bg-[var(--nav-bg)] flex-row-reverse sm:flex-row backdrop-blur-sm h-full w-full flex items-center justify-between px-2 md:px-12 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl">
        <Link
          href="/"
          className="text-xl font-light tracking-wider hover:opacity-70 transition-all duration-300 relative group"
        >
          <span className="relative px-4 z-10 font-serif">NETAL SARDA</span>
          <motion.div
            className="absolute inset-0 -z-0 rounded-lg bg-white/0 group-hover:bg-white/20 transition-all duration-300"
            layoutId="highlight"
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-8 md:gap-12">
          {[
            { href: "/about", label: "ABOUT" },
            { href: "/portfolio", label: "PORTFOLIO" },
            { href: "/contact", label: "CONTACT" },
          ].map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              className="text-zinc-800 text-sm uppercase tracking-wider relative group px-4 py-2 rounded-lg transition-all duration-300"
            >
              <span className="relative z-10">{label}</span>
              <motion.div
                className="absolute inset-0 -z-0 rounded-lg bg-white/0 group-hover:bg-white/20 transition-all duration-300"
                layoutId={`highlight-${label}`}
              />
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-800/50 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
        </nav>
        <div
          className="flex-1 sm:hidden flex z-40 px-8"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <AlignJustify />}
        </div>

        <HamBurgerMenu open={open} setOpen={setOpen} />
      </div>
    </motion.div>
  );
}
