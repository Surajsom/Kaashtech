"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  BarChart4, 
  Network, 
  Lightbulb, 
  Workflow, 
  ShieldAlert, 
  ArrowRight, 
  Settings2,
  Gem,
  LineChart
} from "lucide-react";

const pillars = [
  { 
    title: "Operational Strategy", 
    icon: Lightbulb, 
    desc: "Aligning your technological investments with your long-term commercial objectives for maximum impact." 
  },
  { 
    title: "Workflow Automation", 
    icon: Workflow, 
    desc: "Re-engineering manual processes into automated, high-velocity digital workstreams." 
  },
  { 
    title: "Change Management", 
    icon: Settings2, 
    desc: "Guiding your workforce through digital adoption to ensure cultural and operational synergy." 
  },
  { 
    title: "Risk & Governance", 
    icon: ShieldAlert, 
    desc: "Establishing robust frameworks to protect enterprise data and ensure global regulatory compliance." 
  },
];

export default function EnterpriseBusinessSolutionsPage() {
  const { scrollYProgress } = useScroll();
  const lineOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE SYNCHRONIZATION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Intersecting Connective Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 3, delay: i * 0.5 }}
              className="absolute border-l border-[#1b4c53]"
              style={{ 
                height: '150%', 
                left: `${20 * i}%`, 
                top: '-25%',
                rotate: `${15 * i}deg`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Gem size={14} className="inline mr-2" /> Unified Enterprise Framework
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            BUSINESS <br /> <span className="italic font-light text-[#3a7e88]">SYNC.</span>
          </h1>
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Optimizing the enterprise landscape through holistic technology 
            integration and strategic process modernization.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE CORE STRATEGY */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Precision <br /> Operations.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                True enterprise transformation happens at the intersection of strategy and execution. 
                We provide the blueprints and the tools to synchronize your global operations, 
                eliminating waste and unlocking new revenue streams.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <LineChart className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Performance-Driven Growth Modeling</span>
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

      {/* 3. LIGHTING BORDER CARDS - SYSTEMIC PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">STRATEGIZE. ALIGN. EXECUTE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Inter-Departmental Sync",
                detail: "We eliminate the 'silo effect' by creating unified data environments where Sales, Ops, and Finance speak the same digital language.",
              },
              {
                title: "Scalable Governance",
                detail: "Implement management frameworks that grow with your company, ensuring quality and compliance aren't sacrificed for speed.",
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
          <Network className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Unify Your <br /> Enterprise.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl hover:shadow-xl transition-all"
          >
            Optimize Your Business <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}