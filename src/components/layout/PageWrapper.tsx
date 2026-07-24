"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimatedBackground } from "./AnimatedBackground";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
      <div className="relative w-full">
        {mounted && <CustomCursor />}
        <AnimatedBackground />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </div>
    </ReactLenis>
  );
}
