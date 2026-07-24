"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const navItems = [
  { name: "HOME", href: "#home", id: "01" },
  { name: "ABOUT", href: "#about", id: "02" },
  { name: "SKILLS", href: "#skills", id: "03" },
  { name: "PROJECTS", href: "#projects", id: "04" },
  { name: "EXPERIENCE", href: "#experience", id: "05" },
  { name: "CONTACT", href: "#contact", id: "06" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
        scrolled ? "bg-[#030305]/80 backdrop-blur-xl border-b border-white/[0.05] py-4 shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-[0_0_15px_rgba(176,38,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,255,204,0.6)] transition-shadow duration-500">
          <span className="font-heading font-bold text-sm text-black">S</span>
        </div>
        <span className="font-heading font-bold tracking-widest text-sm text-white group-hover:text-brand-cyan transition-colors">
          SATHVIKA
        </span>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className="relative flex items-center gap-2 group py-2"
          >
            <span className="text-[10px] text-gray-500 font-mono group-hover:text-brand-purple transition-colors">
              {item.id}
            </span>
            <span className={`text-xs font-medium tracking-widest transition-colors ${activeItem === item.name ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
              {item.name}
            </span>
            {activeItem === item.name && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full shadow-[0_0_8px_rgba(0,255,204,0.8)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Social Sidebar (Fixed Left) */}
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto"></div>
        <a href="https://github.com/SathvikaBoina" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-cyan hover:scale-110 transition-all drop-shadow-[0_0_5px_rgba(0,255,204,0)] hover:drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/sathvika-boina-56a636373" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-blue hover:scale-110 transition-all drop-shadow-[0_0_5px_rgba(0,119,255,0)] hover:drop-shadow-[0_0_8px_rgba(0,119,255,0.8)]">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:sathvika.boina5@gmail.com" className="text-gray-400 hover:text-brand-purple hover:scale-110 transition-all drop-shadow-[0_0_5px_rgba(176,38,255,0)] hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]">
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20 mx-auto"></div>
      </div>
    </motion.header>
  );
}
