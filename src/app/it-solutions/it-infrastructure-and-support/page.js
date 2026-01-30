"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Server, 
  ShieldAlert, 
  Headphones, 
  Activity, 
  Database, 
  Cloud, 
  ArrowRight, 
  HardDrive,
  Network,
  Lock
} from "lucide-react";

const pillars = [
  { 
    title: "Proactive Monitoring", 
    icon: Activity, 
    desc: "24/7 network surveillance using AI-driven tools to detect and resolve anomalies before they impact uptime." 
  },
  { 
    title: "Server Management", 
    icon: Server, 
    desc: "Optimization and maintenance of on-premise, cloud, and hybrid server environments for peak performance." 
  },
  { 
    title: "Disaster Recovery", 
    icon: Database, 
    desc: "Automated cloud backups and rapid-recovery protocols to ensure zero data loss in any scenario." 
  },
  { 
    title: "Cybersecurity Ops", 
    icon: Lock, 
    desc: "Hardening your infrastructure with firewalls, encryption, and continuous vulnerability patching." 
  },
];

export default function InfrastructureSupportPage() {
  const { scrollYProgress } = useScroll();
  const lineScroll = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#f9faed] md:p-3 min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE RESILIENT CORE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Data-Center Line Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-around">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              style={{ y: lineScroll }}
              className="w-[1px] h-full bg-[#1b4c53]"
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <ShieldAlert size={14} className="inline mr-2" /> Mission-Critical Reliability
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            CORE <br /> <span className="italic font-light text-[#3a7e88]">BASE.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Engineering robust IT foundations and 24/7 support structures that empower 
            your enterprise to scale without technical friction.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE INFRASTRUCTURE ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Ironclad <br /> Architecture.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                Infrastructure is the silent engine of your business. We design and support 
                environments that are not only secure but also elastic—expanding your compute 
                and storage power as your demands evolve.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Headphones className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Rapid Response Technical Desk</span>
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

      {/* 3. LIGHTING BORDER CARDS - SUPPORT PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">MONITOR. SECURE. SUPPORT.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Cloud-Hybrid Strategy",
                detail: "We manage the delicate balance between on-premise hardware and cloud agility, ensuring seamless data flow and cost optimization across environments.",
              },
              {
                title: "End-to-End Governance",
                detail: "Comprehensive management of your IT lifecycle—from hardware procurement and setup to security auditing and strategic upgrades.",
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
            Build Your <br /> Fortress.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all groupl"
          >
            Fortify Your Infrastructure <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}