"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#030305] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-l-2 border-brand-cyan shadow-[0_0_15px_rgba(0,255,204,0.5)]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-b-2 border-r-2 border-brand-purple shadow-[0_0_15px_rgba(176,38,255,0.5)]"
          />
          <span className="font-heading font-bold text-2xl text-white">S</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple shadow-[0_0_10px_rgba(0,255,204,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-brand-cyan font-mono text-xs tracking-widest uppercase animate-pulse">
            INITIALIZING EXPERIENCE {progress}%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
