"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Wifi, 
  TowerControl as RadioTower, 
  Signal, 
  Zap, 
  Share2, 
  ShieldCheck, 
  ArrowRight, 
  Globe2,
  Cpu,
  Unplug
} from "lucide-react";
import Link from 'next/link';
const pillars = [
  { 
    title: "5G Infrastructure", 
    icon: Zap, 
    desc: "Deploying high-density small cell networks and core 5G architectures for lightning-fast mobile connectivity." 
  },
  { 
    title: "Network Virtualization", 
    icon: Share2, 
    desc: "Implementing NFV and SDN solutions to reduce hardware dependency and increase operational agility." 
  },
  { 
    title: "OSS/BSS Modernization", 
    icon: Cpu, 
    desc: "Updating legacy billing and operational support systems with cloud-native, automated workflows." 
  },
  { 
    title: "Edge Cloud Sync", 
    icon: Globe2, 
    desc: "Distributing compute power to the network edge to support real-time applications and reduce backhaul latency." 
  },
];

export default function TelecomIndustryPage() {
  const { scrollYProgress } = useScroll();
  const waveOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE FREQUENCY FLOW */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Frequency Wave Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-full h-75 border-t border-b border-[#1b4c53]/20"
              style={{ top: `${25 + i * 10}%` }}
            />
          ))}
          <motion.div 
             animate={{ x: [-100, 100] }}
             transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
             className="absolute w-1 h-full bg-gradient-to-b from-transparent via-[#1b4c53]/20 to-transparent blur-sm"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Signal size={14} className="inline mr-2 animate-pulse" /> Next-Gen Carrier Solutions
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            SIGNAL <br /> <span className="italic font-light text-[#3a7e88] text-7xl md:text-9xl">UNBOUND.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xxl mx-auto leading-relaxed">
            Powering the world's connectivity through software-defined networks, 
            intelligent spectrum management, and resilient telecom infrastructure.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE NETWORK CORE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Virtualized <br /> Velocity.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                The future of telecom is software. We bridge the gap between physical 
                hardware and digital agility, enabling carriers to deploy services 
                at the speed of code while maintaining five-nines reliability.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <RadioTower className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">SD-WAN & Open RAN Integration</span>
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

      {/* 3. LIGHTING BORDER CARDS - CONNECTIVITY PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">CONNECT. VIRTUALIZE. BROADCAST.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Spectrum Orchestration",
                detail: "Dynamic allocation of radio frequencies using AI to maximize throughput and minimize interference in high-traffic urban zones.",
              },
              {
                title: "Zero-Trust Carrier Security",
                detail: "Hardening the signaling layer and subscriber data planes against modern cyber threats with end-to-end identity verification.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-px rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
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
      <section className="pb-32 md:px-6 px-4">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          <Wifi className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Bridge the <br /> Distance.
          </h2>
          <Link href="/contact-us">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center gap-4 cursor-pointer bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Start Your Telecom Project <ArrowRight />
          </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}