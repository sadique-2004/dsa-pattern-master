"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a12]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-9 object-contain" />
        </Link>

        {/* 🔥 RIGHT SIDE (Premium Actions) */}
       <div className="hidden md:flex items-center gap-3">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/offerunlocked/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2 px-4 py-2 rounded-lg
      bg-[#0A66C2] text-white
      hover:bg-[#004182]
      transition-colors duration-200
    "
  >
    <FaLinkedinIn className="w-4 h-4" />
    <span className="text-sm font-medium">Follow</span>
  </a>

  {/* Discord */}
  <a
    href="https://discord.gg/NpcUCmJEUJ"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2 px-4 py-2 rounded-lg
      bg-[#5865F2] text-white
      hover:bg-[#4752C4]
      transition-colors duration-200
    "
  >
    <BsDiscord className="w-4 h-4" />
    <span className="text-sm font-medium">Join</span>
  </a>

</div>

        {/* 🔥 MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden px-6 pb-4 space-y-4 bg-[#0a0a12]/90 backdrop-blur-xl border-t border-white/10"
        >
          
          <a
            href="https://www.linkedin.com/company/offerunlocked/"
            className="flex items-center gap-2 text-gray-300"
          >
            <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
            Follow on LinkedIn
          </a>

          <a
            href="https://discord.gg/NpcUCmJEUJ"
            className="flex items-center gap-2 text-gray-300"
          >
            <BsDiscord className="w-4 h-4 text-[#5865F2]" />
            Join Discord
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}