"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Globe2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck,
  Terminal
} from "lucide-react";

const pillars = [
  { 
    title: "Microservices", 
    icon: Layers, 
    desc: "Decoupled architectures that allow for independent scaling and rapid deployment cycles." 
  },
  { 
    title: "Custom ERP/CRM", 
    icon: Server, 
    desc: "Tailored business management software designed specifically for your unique workflows." 
  },
  { 
    title: "Cloud-Native Dev", 
    icon: Globe2, 
    desc: "Applications built from the ground up to leverage the full power of distributed cloud computing." 
  },
  { 
    title: "API-First Design", 
    icon: Code2, 
    desc: "Building robust integration layers that allow your enterprise tools to talk to each other seamlessly." 
  },
];

export default function EnterpriseAppPage() {
  const { scrollYProgress } = useScroll();
  const gridShift = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#f9faed] pt-5 min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE CODE ARCHITECTURE */}
      <section className="relative flex items-center justify-center overflow-hidden px-6">
        {/* Animated Developer Grid Background */}
        <motion.div 
          style={{ y: gridShift }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          dangerouslySetInnerHTML={{ __html: `
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="devGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1b4c53" stroke-width="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#devGrid)" />
            </svg>
          `}}
        />

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Terminal size={14} /> Full-Stack Engineering
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            CORE <br /> <span className="italic font-light text-[#3a7e88]">BUILT.</span>
          </h1>
          <p className="mt-10 text-xl mb-22 font-[Urbanist] text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Architecting mission-critical applications that solve complex business 
            challenges with pixel-perfect precision and enterprise-grade security.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE PERFORMANCE LAYER */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Scalable by <br /> Design.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 font-[Urbanist] text-lg leading-relaxed mb-10">
                In the enterprise world, downtime isn't an option. Our development methodology 
                prioritizes load-balancing, automated testing, and CI/CD pipelines to ensure 
                your software performs at peak under any pressure.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <ShieldCheck className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Zero-Vulnerability Delivery Standards</span>
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

      {/* 3. LIGHTING BORDER CARDS - ENGINEERING PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">ENGINEER. DEPLOY. SCALE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Monolith to Microservices",
                detail: "We refactor bulky legacy code into modern service-oriented architectures, reducing maintenance costs and increasing development speed.",
              },
              {
                title: "High-Concurrency Apps",
                detail: "Engineered to handle millions of simultaneous requests with real-time data processing and low-latency response times.",
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
            Architect Your <br /> Future.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-6 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)]"
          >
            Start Developing Now <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}