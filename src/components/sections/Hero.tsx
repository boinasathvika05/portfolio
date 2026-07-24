"use client";

import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/DesignSystem";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Global Centered Glowing Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent opacity-70 blur-3xl mix-blend-screen" />
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full max-w-7xl relative z-10 flex flex-col items-center justify-center h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center w-full">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left gap-10 max-w-[600px] mx-auto lg:mx-0 w-full"
          >
            {/* Header section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="text-brand-cyan font-mono tracking-[0.3em] uppercase text-sm">Boina Sathvika</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight">
                AI ENGINEER <br />
                <span className="text-gradient">& FULL STACK DEV</span>
              </h1>
            </div>

            {/* Subtitle & Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start space-y-6 w-full"
            >
              <h2 className="text-xl md:text-2xl font-mono text-brand-blue tracking-wider leading-relaxed">
                AI Engineer <span className="text-gray-600">|</span> Backend <span className="text-gray-600">|</span> Full Stack
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                Focusing on <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Backend Engineering</span>, and <span className="text-white font-medium">Generative AI</span>. Specializing in building scalable LLM applications and reliable backend systems using <span className="text-brand-purple">FastAPI, Next.js, Java, Python</span>, and <span className="text-brand-cyan">MongoDB</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-start gap-6 w-full">
              <PrimaryButton href="#projects">View Projects</PrimaryButton>
              <SecondaryButton href="#contact">Contact Me</SecondaryButton>
            </div>

            {/* Statistics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 border-t border-white/10 w-full"
            >
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-white font-mono">9.5+</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase mt-1">CGPA (2027)</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-brand-blue font-mono">2nd</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase mt-1">Rank in CSE</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-brand-purple font-mono">2</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase mt-1">Publications</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10"></div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-brand-cyan font-mono">50+</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase mt-1">LeetCode</span>
              </div>
            </motion.div>
            
          </motion.div>

          {/* Right Column: Interactive Code Window / Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full flex items-center justify-center perspective-1000 p-4 lg:p-8"
          >
            {/* The Face (Foreground Hologram) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[450px] max-h-[70vh] aspect-square z-10 drop-shadow-[0_0_50px_rgba(176,38,255,0.4)] mix-blend-screen"
            >
              {/* Layer 1: Galaxy Portal (Background) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-50 mix-blend-screen rounded-full overflow-hidden blur-sm z-0"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-purple via-black to-brand-cyan rounded-full" />
                <Image src="/images/hero_galaxy_1784827291097.jpg" alt="Galaxy" fill className="object-cover opacity-60 mix-blend-lighten" />
              </motion.div>

              {/* Masking the square image into a glowing circle for better blending */}
              <div className="absolute inset-2 rounded-full overflow-hidden mask-image-radial z-10">
                <Image 
                  src="/images/hero_photo.jpg" 
                  alt="Boina Sathvika" 
                  fill 
                  className="object-cover mix-blend-lighten brightness-110 contrast-125"
                  priority
                />
              </div>
              
              {/* Tech Rings */}
              <div className="absolute inset-0 border border-brand-cyan/20 rounded-full animate-[spin_10s_linear_infinite] z-20 pointer-events-none" />
              <div className="absolute -inset-4 border border-brand-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse] z-20 pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-12 hidden lg:flex items-center gap-4"
      >
        <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 h-full w-full bg-brand-cyan"
             initial={{ x: '-100%' }}
             animate={{ x: '100%' }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
        </div>
        <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
