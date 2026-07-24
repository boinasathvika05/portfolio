"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { SectionContainer, SectionHeading } from "@/components/ui/DesignSystem";

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SectionContainer id="contact" maxWidth="6xl">
      
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        
        {/* Top Content: Text & Header */}
        <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-400 font-mono tracking-[0.3em] uppercase text-sm mb-4">Let's Connect</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            IDEAS. COLLABS. <br /><span className="text-gradient">IMPACT.</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-base md:text-xl font-light max-w-[90vw] lg:max-w-4xl mx-auto">
            I'm always open to discussing new opportunities, creative collaborations, or building something epic.
          </p>
        </div>

        {/* Center: Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20 w-full max-w-4xl mx-auto">
          <a href="mailto:sathvikaboina05@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-brand-purple transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-purple/50 group-hover:bg-brand-purple/10 transition-all shadow-[0_0_15px_rgba(176,38,255,0)] group-hover:shadow-[0_0_15px_rgba(176,38,255,0.4)]">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm tracking-widest hidden md:block">EMAIL</span>
          </a>
          
          <div className="flex items-center gap-4 text-gray-400 group">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-all shadow-[0_0_15px_rgba(0,255,204,0)] group-hover:shadow-[0_0_15px_rgba(0,255,204,0.4)]">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm tracking-widest hidden md:block">LOCATION</span>
          </div>

          <a href="https://linkedin.com/in/sathvika-boina-56a636373" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-brand-blue transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10 transition-all shadow-[0_0_15px_rgba(0,119,255,0)] group-hover:shadow-[0_0_15px_rgba(0,119,255,0.4)]">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm tracking-widest hidden md:block">LINKEDIN</span>
          </a>

          <a href="https://github.com/boinasathvika05" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <Github className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm tracking-widest hidden md:block">GITHUB</span>
          </a>
        </div>
        
        {/* Bottom CTA Button */}
        <button className="group relative px-10 py-5 bg-brand-purple/20 hover:bg-brand-purple/40 text-white font-medium rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_40px_rgba(176,38,255,0.6)] border border-brand-purple/50 flex items-center justify-center gap-4 mb-24 hover:-translate-y-1">
          <span className="relative z-10 font-mono tracking-[0.2em] text-sm uppercase">Send a Message</span>
          <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[150px] pointer-events-none rounded-full" />
      </div>
    </SectionContainer>
  );
}
