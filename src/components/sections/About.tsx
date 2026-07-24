"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Brain, Code2, Compass, Lightbulb } from "lucide-react";
import { SectionContainer, SectionHeading, GlassCard, Badge } from "@/components/ui/DesignSystem";
const interests = [
  { icon: <Brain className="w-5 h-5 text-brand-purple" />, label: "Generative AI & LLMs" },
  { icon: <Code2 className="w-5 h-5 text-brand-cyan" />, label: "Backend & Full Stack" },
  { icon: <Compass className="w-5 h-5 text-brand-blue" />, label: "System Design & Cloud" },
  { icon: <Lightbulb className="w-5 h-5 text-white" />, label: "Data Structures & Algos" },
];

const education = [
  { institution: "Sri Indu Institute of Engineering and Technology", degree: "B.Tech in Computer Science Engineering", score: "CGPA: 9.5+", date: "Expected 2027", achievement: "2nd Rank in CSE Dept (2024-25)" },
  { institution: "Balapur Chaitanya Junior College", degree: "Intermediate (MPC)", score: "99%", date: "2021 - 2023", achievement: "State Board Excellence" },
  { institution: "Satyam International School", degree: "Secondary School Certificate (SSC)", score: "CGPA: 10.0", date: "2021", achievement: "Perfect 10 CGPA" }
];

export function About() {

  return (
    <SectionContainer id="about" maxWidth="7xl">
      <SectionHeading subtitle="01. About Me" title={<span>THE <span className="text-gradient">ARCHITECT</span> BEHIND THE CODE</span>} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 w-full">
        
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-[65ch]">
          <p>
            I am <strong className="text-white font-medium">Boina Sathvika</strong>, an AI Engineering-focused Computer Science undergraduate dedicated to bridging the gap between theoretical machine learning and production-ready software systems. 
          </p>
          <p>
            My expertise lies in architecting intelligent backends using <span className="text-brand-purple">FastAPI and Next.js</span>, integrating generative AI models like <span className="text-brand-cyan">Google Gemini and OpenAI</span>, and designing scalable infrastructure. 
          </p>
          <p>
            Currently pursuing my B.Tech at Sri Indu Institute of Engineering with a <strong className="text-white font-medium">9.5+ CGPA</strong> (1st Rank in CSE Dept), I actively explore the frontiers of Deep Learning and Full-Stack Engineering to build tools that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Badge color="cyan">FastAPI</Badge>
            <Badge color="purple">Next.js</Badge>
            <Badge color="blue">GenAI</Badge>
          </div>

          <div className="mt-8">
            <a 
              href="/resume.docx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-purple/20 text-white font-mono text-sm tracking-widest uppercase border border-brand-purple/50 hover:bg-brand-purple/40 transition-colors shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_30px_rgba(176,38,255,0.5)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              View My Resume
            </a>
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <div className="lg:col-span-5 flex justify-center w-full relative">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-brand-purple/30 drop-shadow-[0_0_40px_rgba(176,38,255,0.3)] glass-panel z-10"
          >
            <Image 
              src="/images/profile-new.jpg" 
              alt="Sathvika Boina" 
              fill 
              className="object-cover"
            />
            {/* Ambient Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-4 border border-brand-cyan/20 rounded-2xl" />
          </motion.div>
          {/* Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none z-0" />
        </div>

      </div>

      {/* Academic Journey Timeline */}
      <div className="w-full flex flex-col mt-12">
        <h4 className="text-2xl font-heading font-bold text-white mb-12">ACADEMIC JOURNEY</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Phase 1 */}
          <GlassCard>
            <div className="flex flex-col h-full gap-4">
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase">2023 - 2027</span>
              <h5 className="text-xl font-bold text-white leading-tight">B.Tech in CSE (AI & ML)</h5>
              <p className="text-sm text-gray-400">Sri Indu Institute of Engineering</p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-lg font-mono text-brand-purple">9.5+ CGPA</span>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">1st Rank</p>
              </div>
            </div>
          </GlassCard>

          {/* Phase 2 */}
          <GlassCard>
            <div className="flex flex-col h-full gap-4">
              <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">2021 - 2023</span>
              <h5 className="text-xl font-bold text-white leading-tight">Intermediate (MPC)</h5>
              <p className="text-sm text-gray-400">Sri Chaitanya Junior College</p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-lg font-mono text-brand-blue">96.3%</span>
              </div>
            </div>
          </GlassCard>

          {/* Phase 3 */}
          <GlassCard>
            <div className="flex flex-col h-full gap-4">
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase">2020 - 2021</span>
              <h5 className="text-xl font-bold text-white leading-tight">Secondary School (SSC)</h5>
              <p className="text-sm text-gray-400">Sri Chaitanya High School</p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-lg font-mono text-brand-cyan">10/10 GPA</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionContainer>
  );
}
