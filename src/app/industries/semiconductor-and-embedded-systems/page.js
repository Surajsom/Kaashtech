"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, 
  Microchip, 
  Binary, 
  Zap, 
  Settings, 
  ShieldCheck, 
  ArrowRight, 
  Layers,
  SearchCode,
  CircuitBoard
} from "lucide-react";

const pillars = [
  { 
    title: "Firmware Development", 
    icon: SearchCode, 
    desc: "Low-level C/C++ engineering for real-time operating systems (RTOS) and bare-metal performance." 
  },
  { 
    title: "SoC Design Support", 
    icon: Layers, 
    desc: "Assisting in System-on-Chip architecture validation and post-silicon bring-up workflows." 
  },
  { 
    title: "Edge AI Integration", 
    icon: Binary, 
    desc: "Optimizing neural network models for deployment on resource-constrained microcontrollers (MCUs)." 
  },
  { 
    title: "Hardware Abstraction", 
    icon: Settings, 
    desc: "Building robust HAL layers to ensure seamless communication between custom hardware and high-level software." 
  },
];

export default function SemiconductorPage() {
  const { scrollYProgress } = useScroll();
  const traceDraw = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE SILICON CANVAS */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Circuit Trace Background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
          <svg width="800" height="800" viewBox="0 0 800 800" className="w-full h-full max-w-4xl">
            <motion.path
              d="M100,100 L200,100 L200,200 L300,200 L300,150 L500,150 L500,400 L700,400"
              fill="none"
              stroke="#1b4c53"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
             <motion.path
              d="M700,700 L600,700 L600,500 L400,500 L400,600 L200,600 L100,400"
              fill="none"
              stroke="#1b4c53"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Microchip size={14} className="inline mr-2" /> Silicon-to-Software Engineering
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            NANO <br /> <span className="italic font-light text-[#3a7e88]">BUILT.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xxl mx-auto leading-relaxed">
            Architecting high-performance embedded systems where software meets 
            physical hardware at the speed of light.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE LOGIC CORE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Deterministic <br /> Precision.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                In the embedded world, every byte and microsecond counts. We provide 
                the deep engineering expertise required to build low-power, 
                high-reliability systems for consumer electronics, automotive, 
                and industrial automation.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <CircuitBoard className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">RTOS & Bare-Metal Optimization</span>
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

      {/* 3. LIGHTING BORDER CARDS - EMBEDDED PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">ARCHITECT. CODE. INTEGRATE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Safety-Critical Validation",
                detail: "Ensuring embedded software meets stringent MISRA C standards and ISO 26262 functional safety requirements for automotive and industrial use.",
              },
              {
                title: "Post-Silicon Bring-up",
                detail: "Expert support in the critical phase of getting the first software stack running on new prototype hardware with hardware-in-the-loop (HIL) testing.",
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
          <Cpu className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Think in <br /> Silicon.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Deploy Your Embedded Solution <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}