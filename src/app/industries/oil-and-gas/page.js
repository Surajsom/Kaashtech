"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Droplets, 
  Factory, 
  Settings2, 
  ShieldAlert, 
  HardHat, 
  Zap, 
  ArrowRight, 
  BarChart4, 
  Network,
  Truck
} from "lucide-react";

const pillars = [
  { 
    title: "Digital Oilfield", 
    icon: Network, 
    desc: "Implementing end-to-end IoT connectivity to monitor wellhead pressure and production flow in real-time." 
  },
  { 
    title: "Predictive Maintenance", 
    icon: Settings2, 
    desc: "AI-driven analytics to predict equipment failure in refineries, reducing downtime and environmental risk." 
  },
  { 
    title: "Asset Management", 
    icon: Factory, 
    desc: "Comprehensive digital tracking of global infrastructure, from offshore rigs to cross-country pipelines." 
  },
  { 
    title: "HSE Compliance", 
    icon: ShieldAlert, 
    desc: "Digital Health, Safety, and Environment systems to ensure total site safety and regulatory transparency." 
  },
];

export default function OilGasIndustryPage() {
  const { scrollYProgress } = useScroll();
  const pipelineFlow = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE RESOURCE FLOW */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Pipeline/Flow Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex flex-col justify-around">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-[2px] bg-[#1b4c53] relative overflow-hidden">
              <motion.div 
                style={{ left: pipelineFlow }}
                className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-[#1b4c53] to-transparent"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Droplets size={14} className="inline mr-2" /> Upstream & Downstream Tech
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            POWER <br /> <span className="italic font-light text-[#3a7e88]">FLUID.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xxl mx-auto leading-relaxed">
            Optimizing energy production through industrial automation, 
            intelligent asset tracking, and mission-critical data integrity.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE OPERATIONAL ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Uninterrupted <br /> Intelligence.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                In the energy sector, every minute of downtime costs millions. We build 
                the high-resilience IT infrastructure required to operate in extreme 
                environments, ensuring your data flows as reliably as your product.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <HardHat className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Ruggedized Edge Computing Standards</span>
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

      {/* 3. LIGHTING BORDER CARDS - ENERGY PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">EXTRACT. ANALYZE. DELIVER.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Remote Monitoring Systems",
                detail: "Secure, low-latency satellite and cellular integration for monitoring offshore rigs and remote pumping stations without site visits.",
              },
              {
                title: "Supply Chain Transparency",
                detail: "End-to-end digital tracking of oil and gas products from extraction to the pump, ensuring total custody and quality control.",
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
          <Zap className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Fuel the <br /> Innovation.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Power Your Operations <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}