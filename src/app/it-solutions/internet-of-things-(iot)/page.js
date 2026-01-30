"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, 
  Radio, 
  Zap, 
  Smartphone, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight, 
  Share2, 
  Waves,
  Signal
} from "lucide-react";

const pillars = [
  { 
    title: "Edge Intelligence", 
    icon: Cpu, 
    desc: "Deploying machine learning models directly on devices for real-time decision making and reduced latency." 
  },
  { 
    title: "Sensor Networks", 
    icon: Radio, 
    desc: "Architecting massive scale mesh networks to collect environmental and industrial data with 99.9% uptime." 
  },
  { 
    title: "Fleet Management", 
    icon: Smartphone, 
    desc: "Centralized command centers to monitor, update, and secure thousands of global IoT assets simultaneously." 
  },
  { 
    title: "Protocol Security", 
    icon: ShieldCheck, 
    desc: "Implementing hardware-level encryption and secure boot to protect your ecosystem from edge-to-cloud." 
  },
];

export default function IoTPage() {
  const { scrollYProgress } = useScroll();
  const signalScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE DIGITAL SIGNAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Signal Pulse Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 2], opacity: [0.2, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 1.3,
                ease: "easeOut" 
              }}
              className="absolute border border-[#1b4c53] rounded-full"
              style={{ width: '400px', height: '400px' }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full md:mt-6 border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Signal size={14} className="inline mr-2 animate-pulse " /> Industrial & Consumer IoT
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            LIVE <br /> <span className="italic font-light text-[#3a7e88]">DATA.</span>
          </h1>
          <p className="mt-10 md:mb-14 text-xl font-[Urbanist] text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Bridging the physical and digital divide through high-performance 
            connected ecosystems and real-time operational intelligence.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE CONNECTED CORE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Autonomous <br /> Ecosystems.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                IoT is about more than just connectivity—it’s about autonomy. We build systems 
                that sense, analyze, and act without human intervention, driving unprecedented 
                levels of efficiency in manufacturing, logistics, and smart cities.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Waves className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Ultra-Low Latency Data Fabric</span>
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

      {/* 3. LIGHTING BORDER CARDS - SENSORY PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">SENSE. ANALYZE. ACTIVATE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Digital Twin Integration",
                detail: "We create virtual replicas of your physical assets to simulate performance and predict maintenance needs before failures occur.",
              },
              {
                title: "LPWAN Connectivity",
                detail: "Optimized for long-range, low-power communication (LoRaWAN/Sigfox) to ensure devices stay connected for years on a single battery.",
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
          <Share2 className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Connect the <br /> Invisible.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Deploy Your IoT Solution <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}