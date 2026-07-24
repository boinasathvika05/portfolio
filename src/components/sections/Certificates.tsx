"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Award, X, Calendar, Building } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SectionHeading } from "@/components/ui/DesignSystem";

const certificates = [
  { id: 1, title: "DSA for DeepTech Bootcamp", issuer: "Brain O Vision", year: "2026", image: "/images/certificates/dsa.jpg" },
  { id: 2, title: "Virtual Internship Program", issuer: "ServiceNow", year: "2026", image: "/images/service now certificate.jpg" },
  { id: 3, title: "Software Engineering Job Sim", issuer: "JPMorgan Chase", year: "2026", image: "/images/jp morgan -job stimualation.jpg" },
  { id: 4, title: "Java Internship", issuer: "CODTech IT Solutions", year: "2024", image: "/images/java internship-codtech it solutions.png" },
  { id: 5, title: "2nd in Paper Presentation", issuer: "Vignan", year: "2024", image: "/images/2 nd in paper presentation-vignan.png" },
  { id: 6, title: "AI Automation Workshop", issuer: "Workshop", year: "2024", image: "/images/ai workshop automation workshop certificate.png" },
  { id: 8, title: "InnovateX", issuer: "Scient", year: "2024", image: "/images/innovatex-scient.png" },
  { id: 9, title: "International Conference", issuer: "SIIET", year: "2024", image: "/images/international conference -siiet.png" },
  { id: 10, title: "Paper Presentation Participation", issuer: "Scient", year: "2024", image: "/images/paper presentation participation certificate in scient.png" },
  { id: 7, title: "College First", issuer: "SIIET", year: "2024", image: "/images/college second-siiet.png" },
];

function CertificateCard({ cert, onClick, index }: { cert: any, onClick: () => void, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="snap-center relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[28vw] max-w-[420px] aspect-[4/3] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl cursor-pointer group"
    >
      {/* Inner Image Container */}
      <div className="absolute inset-2 md:inset-3 rounded-lg overflow-hidden bg-[#030305]" style={{ transform: "translateZ(30px)" }}>
        {cert.image ? (
          <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-brand-purple/5">
            <Award className="w-12 h-12 text-brand-purple/50 mb-4" />
            <span className="text-gray-500 font-mono text-xs text-center px-4">{cert.title}</span>
          </div>
        )}
      </div>

      {/* Hover Glow & Border */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-brand-purple via-brand-cyan to-transparent opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 -z-10" />
      <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/30 transition-colors duration-700 z-20 pointer-events-none" />
    </motion.div>
  );
}

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  // Scroll Progress for background intensity
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  // Global Cursor Glow
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedCert]);

  return (
    <section ref={sectionRef} id="achievements" className="relative min-h-screen bg-[#030305] overflow-hidden py-32 flex flex-col justify-center">
      
      {/* LAYER 5: Global Cursor Glow */}
      <motion.div 
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none z-0 hidden lg:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* LAYER 2: Aurora Background Glow */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center transition-opacity duration-1000">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-brand-purple/10 blur-[150px] rounded-[100%]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vh] bg-brand-cyan/10 blur-[120px] rounded-[100%] mix-blend-screen" />
      </motion.div>

      {/* LAYER 1: Parallax Noise/Stars */}
      <motion.div style={{ y: yParallax, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="w-full h-full bg-[url('/images/noise.png')] mix-blend-overlay opacity-30" />
        {/* Synthetic Stars for Layer 1 Depth */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-white/30 rounded-full blur-[2px]" />
        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-brand-cyan/40 rounded-full blur-[1px]" />
      </motion.div>

      {/* LAYER 3: Side Ambient Effects (Circuit Lines & Floating Dots) */}
      <div className="absolute inset-y-0 left-0 w-[15vw] hidden xl:block pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
        <motion.div 
          animate={{ y: [0, -800] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute left-12 top-[100%] w-[1px] h-48 bg-gradient-to-b from-transparent via-brand-cyan/30 to-transparent" 
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[80px] top-1/3 w-2 h-2 rounded-full bg-brand-purple/40 blur-[2px]" 
        />
      </div>
      
      <div className="absolute inset-y-0 right-0 w-[15vw] hidden xl:block pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-80" />
        <motion.div 
          animate={{ y: [0, 800] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-12 bottom-[100%] w-[1px] h-64 bg-gradient-to-b from-transparent via-brand-purple/30 to-transparent" 
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[100px] top-2/3 w-1.5 h-1.5 rounded-full bg-brand-cyan/40 shadow-[0_0_12px_#00ffcc]" 
        />
      </div>

      {/* Top Divider */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* LAYER 4: MAIN CONTENT & GALLERY */}
      <div className="w-full flex flex-col items-center relative z-10 h-full justify-center">
        
        {/* Generous Spacing for Header */}
        <motion.div 
          style={{ y: textY, opacity: bgOpacity }}
          className="w-full text-center mb-20 px-6"
        >
          <SectionHeading 
            subtitle="Certificates & Milestones" 
            title={<span>DIGITAL <span className="text-gradient">GALLERY.</span></span>}
            centered={true}
          />
          <p className="mt-8 text-gray-400 font-light w-full max-w-[90vw] lg:max-w-4xl mx-auto text-lg leading-relaxed">
            A curated collection of my academic achievements, professional certifications, and technical milestones.
          </p>
        </motion.div>

        {/* Interactive Responsive Gallery */}
        <div className="w-full relative">
          <div className="flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[7.5vw] lg:px-[15vw] pb-24 pt-8">
            {certificates.map((cert, idx) => (
              <CertificateCard 
                key={cert.id} 
                cert={cert} 
                index={idx}
                onClick={() => setSelectedCert(cert)} 
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Divider */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* FULLSCREEN GLASS MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12"
          >
            {/* Dark Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setSelectedCert(null)} />
            
            {/* Modal Content Wrapper */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#050507] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Presentation */}
              <div className="w-full lg:w-[65%] bg-[#020203] p-8 lg:p-12 flex items-center justify-center relative min-h-[40vh] border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 to-transparent opacity-50 pointer-events-none" />
                {selectedCert.image ? (
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
                  >
                     <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain bg-black/50" />
                  </motion.div>
                ) : (
                  <Award className="w-32 h-32 text-gray-800" />
                )}
              </div>

              {/* Data & Details */}
              <div className="w-full lg:w-[35%] p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-b from-white/[0.03] to-transparent overflow-y-auto relative">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 text-brand-cyan mb-6">
                    <Building className="w-4 h-4" />
                    <span className="font-mono text-xs tracking-widest uppercase">{selectedCert.issuer}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6 leading-tight">
                    {selectedCert.title}
                  </h2>

                  <div className="flex items-center gap-3 text-gray-400 mb-8 border-b border-white/10 pb-8">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm tracking-wider">{selectedCert.year}</span>
                  </div>

                  <div className="space-y-8 text-gray-400 font-light leading-relaxed">
                    <p className="text-base">
                      Awarded for exceptional performance and technical excellence. This milestone represents a significant step in mastering modern software engineering principles, collaborative development, and critical problem-solving skills.
                    </p>
                    
                    <div>
                      <h4 className="text-white font-medium mb-4 tracking-wide text-sm uppercase">Key Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Technical Excellence", "Problem Solving", "Innovation"].map(skill => (
                          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
