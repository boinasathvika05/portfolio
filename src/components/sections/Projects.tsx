"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Activity, ScanFace, FileWarning, Briefcase } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { SectionContainer, SectionHeading } from "@/components/ui/DesignSystem";

const projects = [
  {
    id: 1,
    title: "CARBONBUDDY AI",
    description: "AI-powered sustainability platform helping users measure, understand, and reduce carbon footprints via GenAI.",
    longDescription: "CarbonBuddy AI addresses climate change challenges by using Google Gemini AI for personalized coaching, automated carbon footprint analysis, and smart utility bill scanning. Users can track their sustainability metrics, get actionable eco-friendly habits, and participate in daily challenges. Built with Next.js 16, Supabase, and Gemini API.",
    features: ["Personalized Carbon Score", "AI Carbon Coach via Gemini", "Smart Utility Bill Scanner", "JWT Authentication"],
    tech: ["Next.js 16", "React 19", "Supabase", "Gemini AI", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/boinasathvika05/CARBONBUDDY-AI",
    demo: "https://carbonbuddy-ai.vercel.app",
    icon: <ScanFace className="w-6 h-6 text-brand-purple" />,
    color: "purple",
    featured: true
  },
  {
    id: 2,
    title: "MEESHO AI COMMERCE TWIN",
    description: "AI-driven seller assistant that acts as a digital business companion for Meesho entrepreneurs.",
    longDescription: "Meesho AI Twin centralizes online business operations into a single intelligent dashboard powered by Google Gemini AI and Supabase. It provides real-time analytics, AI-powered insights, inventory intelligence, and personalized recommendations to help sellers optimize operations and improve engagement.",
    features: ["Real-time Seller Dashboard", "AI-powered Business Recommendations", "Inventory Monitoring", "AI-generated Product Content"],
    tech: ["Next.js 15", "React 19", "Supabase", "Gemini API"],
    image: "/images/meesho-project.png",
    github: "https://github.com/boinasathvika05/meesho-commerece--twin-ai.git",
    demo: "https://meesho-commerece-twin-ai.vercel.app",
    icon: <Activity className="w-6 h-6 text-brand-cyan" />,
    color: "cyan"
  },
  {
    id: 3,
    title: "SKILL-MIRROR AI",
    description: "Comprehensive AI-powered developer skills platform for mock interviews and resume analysis.",
    longDescription: "A developer skills platform built with Expo React Native and Express. Features include DSA practice with radar charts, AI Code Analyzer, Interview Simulator, Resume Analyzer, and a Career Advisor, all powered by OpenAI via Replit AI integrations.",
    features: ["AI Code Analyzer", "Coding Interview Simulator", "Role-specific Resume Analyzer", "GitHub Analyzer"],
    tech: ["React Native", "Express", "TypeScript", "OpenAI"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/boinasathvika05/Skill-Mirror-AI",
    demo: "",
    icon: <Briefcase className="w-6 h-6 text-brand-blue" />,
    color: "blue"
  },
  {
    id: 4,
    title: "VECTORSHIFT DAG EDITOR",
    description: "Premium visual node-based editor for constructing and executing complex Directed Acyclic Graphs.",
    longDescription: "A SaaS-tier visual node-based editor designed for constructing and executing complex DAGs. It empowers users to build computational pipelines seamlessly using a drag-and-drop interface, bringing together text processing, LLM nodes, and APIs into cohesive workflows. Driven by React Flow and a FastAPI topological execution engine.",
    features: ["Visual Node Editor via ReactFlow", "Topological Execution Engine", "Live Data Propagation", "Import/Export JSON Pipelines"],
    tech: ["React", "FastAPI", "Zustand", "NetworkX"],
    image: "/images/dag-project.png",
    github: "https://github.com/boinasathvika05/DAG.git",
    demo: "https://dag-alpha.vercel.app",
    icon: <FileWarning className="w-6 h-6 text-red-400" />,
    color: "red"
  },
  {
    id: 5,
    title: "TABLE RESERVATION SYSTEM",
    description: "Full-stack restaurant table reservation system built during my internship.",
    longDescription: "A comprehensive table reservation platform that allows users to book, manage, and track restaurant reservations in real-time. Designed to handle high-concurrency booking requests with a smooth user experience.",
    features: ["Real-time Booking", "User Authentication", "Admin Dashboard", "Availability Tracking"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/boinasathvika05/table-reservation.git",
    demo: "https://table-reservation-internship.onrender.com",
    icon: <Activity className="w-6 h-6 text-green-400" />,
    color: "green"
  }
];

export type ProjectType = typeof projects[0];

function TiltCard({ project, onClick }: { project: ProjectType, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[28vw] max-w-[420px] min-h-[500px] flex flex-col rounded-2xl bg-[#0A0F1E]/80 backdrop-blur-md group cursor-pointer transition-all duration-500
        ${project.featured ? 'border border-brand-purple shadow-[0_0_40px_rgba(176,38,255,0.3)] scale-[1.02] z-20' : 'border border-white/10 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,204,0.2)] z-10'}
      `}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#050505]/80 pointer-events-none" style={{ transform: "translateZ(0px)" }}>
        
        {/* Glow behind image */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[80px] opacity-30 ${project.featured ? 'bg-brand-purple' : 'bg-brand-cyan'}`} />

        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6" style={{ transform: "translateZ(30px)" }}>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
              {project.icon}
            </div>
            {project.featured && (
              <span className="px-3 py-1 bg-brand-purple/20 border border-brand-purple/50 rounded-full text-[10px] font-mono tracking-widest text-brand-purple uppercase">
                Featured
              </span>
            )}
          </div>

          {/* Image/Preview */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-6" style={{ transform: "translateZ(40px)" }}>
            <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Text Content */}
          <div style={{ transform: "translateZ(50px)" }} className="flex-1">
            <h4 className={`text-2xl font-heading font-bold mb-2 ${project.featured ? 'text-white' : 'text-gray-200'}`}>
              {project.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Footer: Tech Stack & Links */}
          <div style={{ transform: "translateZ(60px)" }} className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`flex-1 py-2 text-xs font-mono tracking-widest uppercase rounded-lg border flex items-center justify-center gap-2 transition-colors
                  ${project.featured ? 'bg-brand-purple/20 border-brand-purple/50 hover:bg-brand-purple/40 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'}`}>
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <SectionContainer id="projects" maxWidth="90rem">
      
      <div className="w-full flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div className="flex-1">
          <SectionHeading 
            subtitle="Projects" 
            title={<span>THINGS I&apos;VE BUILT <br /><span className="text-gradient">WITH PASSION.</span></span>} 
          />
        </div>
        <button className="group px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center gap-2 whitespace-nowrap mb-16 md:mb-16">
          <span className="font-mono tracking-widest text-sm uppercase">See All Projects</span>
        </button>
      </div>

      {/* Horizontal Scroll / Carousel Container */}
      <div className="w-full relative -mx-6 md:-mx-12 lg:-mx-16 overflow-hidden self-center">
        {/* Fading edges for carousel */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#030305] to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#030305] to-transparent z-30 pointer-events-none" />
        
        <div className="flex gap-8 overflow-x-auto pb-16 pt-8 px-[10vw] md:px-[5vw] snap-x snap-mandatory hide-scrollbar" style={{ perspective: "1500px" }}>
          {projects.map((project) => (
            <div key={project.id} className="snap-center h-full flex">
              <TiltCard project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-[#050505]/95 border border-white/10 rounded-2xl shadow-2xl hide-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#050505]" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan">
                      {selectedProject.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-sm font-mono text-brand-purple uppercase tracking-widest mb-3">Key Features</h4>
                  <ul className="flex flex-col gap-2 mb-8">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-brand-cyan mt-1">▹</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <h4 className="text-sm font-mono text-brand-purple uppercase tracking-widest mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.demo && (
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 text-sm font-mono tracking-widest uppercase rounded-lg bg-brand-purple/20 border border-brand-purple/50 hover:bg-brand-purple/40 text-white flex items-center justify-center gap-2 transition-colors text-center">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-white transition-colors flex items-center justify-center">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
