"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Terminal,
  Layout,
  Cpu,
  Brain
} from "lucide-react";
import { SectionContainer, SectionHeading, GlassCard, Badge } from "@/components/ui/DesignSystem";

const skillCategories = [
  { 
    name: "Programming", icon: <Code2 className="w-6 h-6 text-brand-cyan" />, angle: 0, radius: 110,
    items: [
      { name: "Python", level: "Advanced", desc: "Data processing, AI & Backend" },
      { name: "Java", level: "Advanced", desc: "Spring Boot, OOP, DSA" },
      { name: "HTML, CSS", level: "Advanced", desc: "Frontend Web Design" },
    ]
  },
  { 
    name: "GenAI", icon: <Brain className="w-6 h-6 text-brand-purple" />, angle: 45, radius: 160,
    items: [
      { name: "OpenAI & Gemini API", level: "Advanced", desc: "Multimodal LLMs & Agents" },
      { name: "Prompt Engineering", level: "Advanced", desc: "LLM optimization & tuning" },
      { name: "LLM Applications", level: "Advanced", desc: "Semantic Search & Vectors" },
      { name: "MCP", level: "Intermediate", desc: "Model Context Protocol" },
    ]
  },
  { 
    name: "AI", icon: <Cpu className="w-6 h-6 text-pink-400" />, angle: 90, radius: 120,
    items: [
      { name: "Hugging Face", level: "Intermediate", desc: "Open-source ML models" },
      { name: "n8n", level: "Intermediate", desc: "AI Workflow automation" },
      { name: "Data Processing", level: "Advanced", desc: "Data pipelines & processing" },
    ]
  },
  { 
    name: "Backend", icon: <Terminal className="w-6 h-6 text-green-400" />, angle: 135, radius: 180,
    items: [
      { name: "FastAPI", level: "Advanced", desc: "High-performance Python APIs" },
      { name: "Spring Boot", level: "Intermediate", desc: "Enterprise Java backend" },
      { name: "Next.js APIs", level: "Intermediate", desc: "Serverless functions" },
    ]
  },
  { 
    name: "Databases", icon: <Database className="w-6 h-6 text-yellow-400" />, angle: 180, radius: 140,
    items: [
      { name: "MongoDB & MySQL", level: "Advanced", desc: "NoSQL & Relational data" },
      { name: "Firebase & Firestore", level: "Advanced", desc: "Realtime DB & Auth" },
      { name: "Pinecone", level: "Intermediate", desc: "Vector embeddings DB" },
      { name: "Supabase", level: "Intermediate", desc: "PostgreSQL & backend apps" },
    ]
  },
  { 
    name: "Cloud", icon: <Cloud className="w-6 h-6 text-blue-400" />, angle: 225, radius: 200,
    items: [
      { name: "AWS", level: "Familiar", desc: "Cloud Foundations" },
      { name: "Vercel & Render", level: "Intermediate", desc: "Frontend/Backend deployment" },
      { name: "Cloudinary", level: "Intermediate", desc: "Media management & CDN" },
    ]
  },
  { 
    name: "Tools", icon: <Layout className="w-6 h-6 text-orange-400" />, angle: 270, radius: 130,
    items: [
      { name: "Git & GitHub", level: "Advanced", desc: "Version control & CI" },
      { name: "Cursor / VS Code", level: "Advanced", desc: "IDE & AI coding tools" },
      { name: "Postman", level: "Intermediate", desc: "API testing" },
    ]
  },
  { 
    name: "Core CS", icon: <Code2 className="w-6 h-6 text-red-400" />, angle: 315, radius: 170,
    items: [
      { name: "Data Structures", level: "Advanced", desc: "Optimization & Logic" },
      { name: "System Design", level: "Intermediate", desc: "Scalable architecture" },
      { name: "OOP", level: "Advanced", desc: "Design patterns & principles" },
    ]
  },
];

export function Skills() {
  return (
    <SectionContainer id="skills" maxWidth="7xl">
      
      {/* Background Orbits */}
      <div className="absolute inset-0 flex items-center justify-end lg:pr-20 opacity-20 pointer-events-none z-0">
        <div className="absolute w-[200px] h-[200px] rounded-full border border-brand-cyan/30 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-brand-purple/30 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-brand-blue/20 animate-[spin_40s_linear_infinite]" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-start">
        <SectionHeading 
          subtitle="My Arsenal" 
          title={<span>TECH THAT <br /><span className="text-gradient">POWERS ME.</span></span>} 
        />
        
        <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light mb-16 max-w-[65ch] text-left">
          I specialize in building intelligent AI applications and scalable backend systems. Here is a comprehensive look at the technologies and concepts I work with daily.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 items-center w-full">
          
          {/* Left Side: Content & Grid */}
          <div className="xl:col-span-8 flex flex-col gap-6 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 w-full">
            {skillCategories.map((cat, i) => (
              <GlassCard key={i} className="!p-5 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {cat.icon}
                    <h4 className="text-white font-heading font-bold text-lg">{cat.name}</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex flex-col bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-bold text-white tracking-wide">{item.name}</span>
                          <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full">{item.level}</span>
                        </div>
                        <span className="text-xs text-gray-400">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right Side: Orbital System */}
        <div className="xl:col-span-4 h-[500px] w-full relative flex items-center justify-center">
          
          {/* Glowing Central Core */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ 
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute z-20 w-24 h-24 bg-gradient-to-tr from-brand-purple to-brand-cyan rounded-lg drop-shadow-[0_0_50px_rgba(176,38,255,0.8)] flex items-center justify-center transform perspective-1000"
          >
            <div className="w-20 h-20 bg-black/50 backdrop-blur-sm rounded-md border border-white/20 flex items-center justify-center">
              <span className="text-white font-heading font-bold tracking-widest text-xs">CORE</span>
            </div>
          </motion.div>

          {/* Orbiting Nodes */}
          {skillCategories.map((skill, index) => {
            return (
              <motion.div
                key={index}
                className="absolute z-30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div 
                  className="flex flex-col items-center gap-3 absolute group"
                  style={{
                    x: Math.cos((skill.angle * Math.PI) / 180) * skill.radius,
                    y: Math.sin((skill.angle * Math.PI) / 180) * skill.radius,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:scale-125 group-hover:border-brand-cyan transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,204,0.5)] cursor-pointer">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-xs text-gray-400 tracking-wider group-hover:text-white transition-colors bg-[#030305]/80 px-2 py-1 rounded-full whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

        </div>

        </div>
      </div>
    </SectionContainer>
  );
}
