"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionContainer({ id, children, className = "", maxWidth = "7xl" }: { id?: string, children: ReactNode, className?: string, maxWidth?: "5xl" | "6xl" | "7xl" | "90rem" | "full" }) {
  const maxWidthClass = {
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "90rem": "max-w-[90rem]",
    "full": "max-w-full"
  }[maxWidth];

  return (
    <section id={id} className={`relative min-h-screen py-24 md:py-32 flex flex-col justify-center overflow-hidden ${className}`}>
      <div className={`container mx-auto px-6 md:px-12 lg:px-16 w-full ${maxWidthClass} relative z-10 flex flex-col items-center`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ subtitle, title, centered = false }: { subtitle: string, title: ReactNode, centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 mb-16 w-full ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className="text-gray-400 font-mono tracking-[0.3em] uppercase text-sm">{subtitle}</h2>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
        {title}
      </h3>
    </div>
  );
}

export function GlassCard({ children, className = "", hoverEffect = true }: { children: ReactNode, className?: string, hoverEffect?: boolean }) {
  return (
    <div className={`bg-[#0A0F1E]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 md:p-8 transition-all duration-[400ms] ease-out ${hoverEffect ? 'hover:-translate-y-1 hover:bg-white/[0.04] hover:border-brand-cyan/40 hover:shadow-[0_12px_40px_rgba(0,255,204,0.15)]' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children, color = "cyan" }: { children: ReactNode, color?: "cyan" | "purple" | "blue" }) {
  const colorMap = {
    cyan: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
    purple: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
    blue: "text-brand-blue bg-brand-blue/10 border-brand-blue/20"
  };
  
  return (
    <span className={`px-3 py-1.5 rounded-full border text-xs font-mono uppercase tracking-widest ${colorMap[color]}`}>
      {children}
    </span>
  );
}

export function PrimaryButton({ children, onClick, href }: { children: ReactNode, onClick?: () => void, href?: string }) {
  const baseClass = "group relative px-8 py-4 bg-brand-purple/20 hover:bg-brand-purple/40 text-white font-medium rounded-full overflow-hidden transition-all duration-[250ms] ease-out shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_30px_rgba(176,38,255,0.6)] border border-brand-purple/50 flex items-center gap-2 w-max";
  
  if (href) {
    return (
      <a href={href} className={baseClass}>
        <span className="font-mono tracking-widest text-sm uppercase relative z-10">{children}</span>
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClass}>
      <span className="font-mono tracking-widest text-sm uppercase relative z-10">{children}</span>
    </button>
  );
}

export function SecondaryButton({ children, onClick, href }: { children: ReactNode, onClick?: () => void, href?: string }) {
  const baseClass = "group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full overflow-hidden transition-all duration-[250ms] ease-out border border-white/10 hover:border-white/30 flex items-center gap-2 w-max";
  
  if (href) {
    return (
      <a href={href} className={baseClass}>
        <span className="font-mono tracking-widest text-sm uppercase relative z-10">{children}</span>
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClass}>
      <span className="font-mono tracking-widest text-sm uppercase relative z-10">{children}</span>
    </button>
  );
}
