"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor movement
  const cursorXVal = useMotionValue(0);
  const cursorYVal = useMotionValue(0);
  const cursorX = useSpring(cursorXVal, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(cursorYVal, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorXVal.set(e.clientX - 16);
      cursorYVal.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          x: isHovering ? -16 : 0,
          y: isHovering ? -16 : 0,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full border border-brand-cyan shadow-[0_0_15px_rgba(0,255,204,0.5)] flex items-center justify-center bg-brand-purple/10"
      >
        <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full shadow-[0_0_10px_#00ffcc]"></div>
      </motion.div>
    </motion.div>
  );
}
