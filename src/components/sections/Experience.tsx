"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Award, GraduationCap, ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeading, GlassCard } from "@/components/ui/DesignSystem";

const experienceEvents = [
  {
    type: "internship",
    duration: "Aug 2025 - Nov 2025",
    title: "Java Programming Intern",
    organization: "CodTech IT Solutions Pvt. Ltd.",
    description: "Completed a 3-month internship focused on Core Java, Object-Oriented Programming, and software development fundamentals. Developed programming solutions to improve problem-solving and logical thinking skills.",
    skills: ["Core Java", "OOP", "Exception Handling", "Problem Solving"],
    icon: <Briefcase className="w-5 h-5" />,
    image: "/images/java internship-codtech it solutions.png"
  },
  {
    type: "research",
    duration: "Feb 2026",
    title: "Research Paper Presentation",
    organization: "ICNGISTM'26 International Conference",
    description: "Authored and presented the research paper 'Location-Via-Link Ride Booking System for Elderly Users'. Researched and proposed an accessibility-focused ride booking solution.",
    skills: ["Research", "Accessibility Design", "Public Speaking"],
    icon: <Award className="w-5 h-5" />,
    image: "/images/international conference -siiet.png"
  },
  {
    type: "internship",
    duration: "2026",
    title: "Software Engineering Virtual Experience",
    organization: "JPMorgan Chase & Co.",
    description: "Completed practical tasks in software engineering, gaining hands-on experience in enterprise systems.",
    skills: ["Software Engineering", "System Design"],
    icon: <Briefcase className="w-5 h-5" />,
    image: "/images/jp morgan -job stimualation.jpg"
  },
  {
    type: "internship",
    duration: "2026",
    title: "Virtual Internship Program",
    organization: "ServiceNow",
    description: "Completed specialized training and tasks on the ServiceNow platform, focusing on agentic AI and administration fundamentals.",
    skills: ["ServiceNow", "Agentic AI", "Platform Administration"],
    icon: <Briefcase className="w-5 h-5" />,
    image: "/images/service now certificate.jpg"
  },
  {
    type: "award",
    duration: "2026",
    title: "State-Level Paper Presentation (2nd Place)",
    organization: "TECHSPARK-2K26, Vignan's Foundation",
    description: "Won 2nd place in the State-Level Paper Presentation, demonstrating strong technical communication skills.",
    skills: ["Technical Writing", "Presentation"],
    icon: <Award className="w-5 h-5" />,
    image: "/images/2 nd in paper presentation-vignan.png"
  },
  {
    type: "workshop",
    duration: "2024",
    title: "AI Automation Workshop",
    organization: "Technical Workshop",
    description: "Participated in an intensive workshop focusing on AI automation and modern technology stacks.",
    skills: ["AI Automation", "Emerging Tech"],
    icon: <GraduationCap className="w-5 h-5" />,
    image: "/images/ai workshop automation workshop certificate.png"
  },
  {
    type: "award",
    duration: "2024-25",
    title: "2nd Rank in CSE",
    organization: "Sri Indu Institute of Engineering & Technology",
    description: "Ranked 2nd in the Computer Science & Engineering department for the Academic Year 2024-25.",
    skills: ["Academic Excellence", "Core CS"],
    icon: <Award className="w-5 h-5" />,
    image: "/images/college second-siiet.png"
  }
];

export function Experience() {
  return (
    <SectionContainer id="experience" maxWidth="6xl">
      
      {/* Background Image: The Mountain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/journey_mountain_1784827326915.jpg" 
          alt="Journey Mountain" 
          fill 
          className="object-cover opacity-30 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-[#030305]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-[#030305]" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        
        <SectionHeading 
          subtitle="Experience" 
          title={<span>MY JOURNEY <br /><span className="text-gradient">SO FAR.</span></span>}
          centered={true}
        />

        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent shadow-[0_0_15px_rgba(176,38,255,0.8)]" />

          <div className="flex flex-col gap-12 md:gap-24">
            {experienceEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-purple border-2 border-[#0A0F1E] shadow-[0_0_15px_#b026ff] group-hover:bg-brand-cyan group-hover:shadow-[0_0_20px_#00ffcc] transition-all duration-300 z-20 mt-6 md:mt-0" />
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    
                    {/* Date/Duration */}
                    <div className="font-heading font-bold text-xl text-brand-cyan mb-4">
                      {event.duration}
                    </div>

                    <GlassCard className="!p-6 md:!p-8 w-full text-left">
                      <div className={`flex items-start gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan shadow-inner">
                          {event.icon}
                        </div>
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : ''}`}>
                          <h4 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight">{event.title}</h4>
                          <span className="text-brand-purple font-mono text-sm tracking-wide mt-1">{event.organization}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6 font-light">
                        {event.description}
                      </p>

                      {/* Skills Learned */}
                      <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                        {event.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-xs font-mono text-gray-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className={`flex ${isEven ? 'md:justify-end' : ''}`}>
                        <a href={event.image} target="_blank" rel="noopener noreferrer" className={`group/btn inline-flex items-center gap-2 text-sm font-mono text-brand-cyan hover:text-white transition-colors ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <span className="tracking-widest uppercase">View Certificate</span>
                          <ArrowRight className={`w-4 h-4 transition-transform ${isEven ? 'group-hover/btn:-translate-x-1 rotate-180 md:rotate-0 md:group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                        </a>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
