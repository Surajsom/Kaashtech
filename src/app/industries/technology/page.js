"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, 
  Terminal, 
  Cloud, 
  Zap, 
  Code2, 
  Smartphone, 
  ArrowRight, 
  Braces,
  GitBranch,
  Rocket
} from "lucide-react";
import Link from 'next/link';
const pillars = [
  { 
    title: "SaaS Acceleration", 
    icon: Rocket, 
    desc: "Optimizing multi-tenant architectures and subscription-based logic for rapid global scaling." 
  },
  { 
    title: "DevOps & CI/CD", 
    icon: GitBranch, 
    desc: "Automating deployment pipelines to ensure zero-downtime releases and high-velocity engineering." 
  },
  { 
    title: "Edge Computing", 
    icon: Cpu, 
    desc: "Distributing computational power closer to the source for ultra-low latency and real-time processing." 
  },
  { 
    title: "Cloud-Native Dev", 
    icon: Cloud, 
    desc: "Building containerized applications that leverage serverless scalability and resilient failovers." 
  },
];

export default function TechnologyIndustryPage() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE DIGITAL FLUX */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Circuitry Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 L200,100 L250,50 L400,50 L450,150 L600,150 L800,100"
              stroke="#1b4c53"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M100,200 L300,200 L350,250 L500,250 L550,150 L750,150"
              stroke="#1b4c53"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Braces size={14} className="inline mr-2" /> High-Performance Tech Stack
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            HYPER <br /> <span className="italic font-light text-[#3a7e88]">SCALE.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xxl mx-auto leading-relaxed">
            Empowering the world's most innovative tech companies with robust 
            architectures, automated workflows, and future-proof engineering.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE INNOVATION ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Iterative <br /> Velocity.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                In the technology sector, speed is the ultimate currency. We provide 
                the specialized engineering depth required to ship faster, scale 
                limitlessly, and maintain total system stability under heavy load.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Terminal className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Full-Cycle Product Lifecycle Management</span>
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

      {/* 3. LIGHTING BORDER CARDS - TECH PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">BUILD. SCALE. DOMINATE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Microservices & Serverless",
                detail: "Decoupling complex monoliths into manageable, high-performance services that scale independently based on demand.",
              },
              {
                title: "AI & ML Model Deployment",
                detail: "Architecting the infrastructure required to train, deploy, and monitor production-ready machine learning models at scale.",
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
      <section className="pb-32 md:px-6 px-4">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          <Code2 className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Ship with <br /> Velocity.
          </h2>
           <Link href="/contact-us">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className=" inline-flex items-center md:gap-4 gap-2 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Start Your Tech Project <ArrowRight />
          </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}