"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Factory, 
  Settings, 
  Cpu, 
  Zap, 
  Workflow, 
  ShieldCheck, 
  ArrowRight, 
  Wrench,
  Container,
  Activity
} from "lucide-react";

const pillars = [
  { 
    title: "Smart Factory (IoT)", 
    icon: Factory, 
    desc: "Implementing interconnected sensor networks to monitor production lines and environmental conditions in real-time." 
  },
  { 
    title: "Robotic Automation", 
    icon: Settings, 
    desc: "Integrating advanced robotics and PLC control systems to increase throughput and eliminate manual bottlenecking." 
  },
  { 
    title: "Predictive Analytics", 
    icon: Activity, 
    desc: "Using machine learning to anticipate machinery maintenance needs, reducing unplanned downtime by up to 40%." 
  },
  { 
    title: "Supply Chain Sync", 
    icon: Container, 
    desc: "Building transparent, real-time tracking systems for raw materials and finished goods inventory management." 
  },
];

export default function ManufacturingIndustryPage() {
  const { scrollYProgress } = useScroll();
  const gearRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE ASSEMBLY LINE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Mechanical Blueprint Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
          <motion.div 
            style={{ rotate: gearRotate }}
            className="absolute w-[800px] h-[800px] border-[1px] border-[#1b4c53] rounded-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] border-[1px] border-[#1b4c53] rounded-full"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Workflow size={14} className="inline mr-2" /> Industry 4.0 Solutions
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            SMART <br /> <span className="italic font-light text-[#3a7e88]">BUILT.</span>
          </h1>
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Optimizing the factory floor with intelligent automation, real-time 
            data visualization, and resilient industrial software architectures.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE PRODUCTION CORE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Lean <br /> Intelligence.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                True digital manufacturing is about more than just robots; it's about 
                visibility. We provide the digital tools to track every cycle, 
                monitor energy consumption, and ensure that your production line 
                never stops evolving.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Wrench className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">OEE (Overall Equipment Effectiveness) Optimization</span>
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
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - INDUSTRIAL PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">AUTOMATE. MONITOR. SCALE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Digital Twin Simulation",
                detail: "Creating high-fidelity virtual models of your production environment to simulate workflow changes and stress-test new layouts before physical implementation.",
              },
              {
                title: "Edge-to-Cloud Integration",
                detail: "Seamlessly bridging the gap between factory-floor PLC data and enterprise-level ERP systems for 360-degree operational visibility.",
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
            Engineer the <br /> Future.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl hover:shadow-xl transition-all"
          >
            Start Your Factory Project <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}