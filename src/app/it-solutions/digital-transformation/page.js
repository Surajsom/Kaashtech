"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  RefreshCcw, 
  Cloud, 
  Zap, 
  Layers, 
  ArrowRight, 
  Network,
  Binary
} from "lucide-react";

const pillars = [
  { 
    title: "Legacy Modernization", 
    icon: RefreshCcw, 
    desc: "Refactoring outdated monoliths into agile, microservices-based architectures." 
  },
  { 
    title: "Cloud-First Strategy", 
    icon: Cloud, 
    desc: "Seamless migration and optimization across AWS, Azure, and Google Cloud environments." 
  },
  { 
    title: "Process Automation", 
    icon: Zap, 
    desc: "Implementing intelligent workflows and AI to eliminate operational bottlenecks." 
  },
  { 
    title: "Data Democracy", 
    icon: Network, 
    desc: "Breaking down silos to ensure data is accessible and actionable across the enterprise." 
  },
];

export default function DigitalTransformationPage() {
  const { scrollYProgress } = useScroll();
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE EVOLUTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Shifting Geometric Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            style={{ rotate: rotateShape }}
            className="w-[500px] h-[500px] border border-[#1b4c53]/10 rounded-[3rem] opacity-20"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-[300px] h-[300px] border border-[#3a7e88]/20 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            Evolution & Agility
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            RE <br /> <span className="italic font-light text-[#3a7e88]">VOLVE.</span>
          </h1>
          <p className="font-[Urbanist] mt-10 text-xl md:mb-18 text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Transcending traditional business models to thrive in a digital-first economy through structural and cultural innovation.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE ARCHITECTURE OF CHANGE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Future-Proof <br /> Infrastructure.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist] ">
                Digital transformation is not just about technology; it's about changing how you deliver value. We help you rebuild your core systems for extreme speed and scalability.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Binary className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Adaptive Enterprise Framework</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 237, 0.05)" }}
                  className="p-10 border border-[#f9faed]/10 rounded-[3rem] bg-[#113136] transition-all group"
                >
                  <item.icon className="text-[#3a7e88] mb-6 group-hover:text-[#f9faed] transition-colors" size={40} />
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - THE TRANSFORMATION ROADMAP */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">ADAPT. INTEGRATE. OVERTAKE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Digital Culture Shift",
                detail: "We don't just hand over tools; we train your teams to embrace agile methodologies and a 'fail-fast, learn-faster' mindset.",
              },
              {
                title: "Ecosystem Integration",
                detail: "Connecting disparate software stacks into a unified, high-performing ecosystem that supports cross-departmental growth.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-[#f9faed] p-16 rounded-[3.9rem] h-full shadow-sm">
                  <h3 className="text-3xl font-bold text-[#1b4c53] mb-6 tracking-tighter">{card.title}</h3>
                  <p className="text-[#1b4c53]/70 text-xl leading-relaxed font-light italic">"{card.detail}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-24 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          <Layers className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Evolve Your <br /> Foundation.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Begin Transformation <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}