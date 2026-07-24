"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2026",
    title: "Software Engineering Job Sim",
    description: "JPMorgan Chase & Co. - Completed practical tasks in Kafka Integration and REST APIs."
  },
  {
    year: "2026",
    title: "Virtual Internship Program",
    description: "ServiceNow - Agentic AI and ServiceNow Administration Fundamentals."
  },
  {
    year: "2026",
    title: "DSA for DeepTech Bootcamp",
    description: "Brain O Vision & AICTE - Intensive training program on Data Structures & Algorithms."
  },
  {
    year: "2024",
    title: "Smart India Hackathon Finalist",
    description: "SIH 2024 - Reached the final rounds for innovative problem solving."
  }
];

export function Timeline() {
  return (
    <section id="experience" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      
      {/* Background Image: The Mountain */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/journey_mountain_1784827326915.jpg" 
          alt="Journey Mountain" 
          fill 
          className="object-cover opacity-30 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-[#030305]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-[#030305]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col relative z-10 w-full">
        
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-gray-400 font-mono tracking-[0.3em] uppercase text-sm">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            MY JOURNEY <br />
            <span className="text-gradient">SO FAR.</span>
          </h3>
        </div>

        <div className="relative pl-8 md:pl-0">
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-[120px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent shadow-[0_0_15px_rgba(176,38,255,0.8)]" />

          <div className="flex flex-col gap-16 md:gap-24">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16 group"
              >
                {/* Glowing Dot on Line */}
                <div className="absolute -left-[5px] md:left-[113px] top-[6px] w-4 h-4 rounded-full bg-brand-purple border-2 border-white shadow-[0_0_15px_#b026ff] group-hover:bg-brand-cyan group-hover:shadow-[0_0_20px_#00ffcc] transition-all duration-300 z-10" />
                
                {/* Year */}
                <div className="hidden md:block w-20 text-right pt-1">
                  <span className="font-heading font-bold text-xl text-white group-hover:text-brand-cyan transition-colors">{event.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 ml-4 md:ml-8 max-w-lg">
                  <div className="md:hidden font-heading font-bold text-xl text-brand-cyan mb-2">{event.year}</div>
                  <div className="glass-panel p-6 rounded-2xl border-white/5 group-hover:border-white/20 transition-all duration-300 group-hover:translate-x-2">
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <button className="mt-16 w-max group px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center gap-2">
          <span className="font-mono tracking-widest text-sm uppercase">View Full Timeline</span>
        </button>
      </div>

    </section>
  );
}
