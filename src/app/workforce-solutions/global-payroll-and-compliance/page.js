"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Globe, 
  ShieldCheck, 
  Coins, 
  FileText, 
  Scale, 
  Briefcase, 
  ArrowRight, 
  Lock 
} from "lucide-react";
import Link from 'next/link';
const pillars = [
  {
    title: "Global Payroll",
    icon: Coins,
    desc: "Pay your international team in 140+ currencies with a single click.",
    anim: { rotate: [0, 10, -10, 0] }
  },
  {
    title: "Legal Compliance",
    icon: Scale,
    desc: "Stay compliant with local labor laws, taxes, and mandatory benefits.",
    anim: { y: [0, -5, 0] }
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
    desc: "Enterprise-grade encryption for all sensitive employee information.",
    anim: { scale: [1, 1.1, 1] }
  },
  {
    title: "Contract Mgmt",
    icon: FileText,
    desc: "Locally compliant contracts tailored to specific regional requirements.",
    anim: { x: [0, 5, 0] }
  },
];

export default function GlobalPayrollPage() {
  const { scrollYProgress } = useScroll();
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#f9faed] min-h-screen md:pt-12 selection:bg-[#1b4c53] selection:text-white">
      
      {/* 1. HERO SECTION - THE BORDERLESS THEME */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Creative Background: Moving Grid of Dots & Circles */}
        <motion.div 
          style={{ x: backgroundX }}
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          dangerouslySetInnerHTML={{ __html: `
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#1b4c53" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          `}}
        />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#1b4c53]/5 border border-[#1b4c53]/20 text-[#1b4c53] text-xs font-black uppercase tracking-[0.3em]"
          >
            <Lock size={12} /> Secure Global Infrastructure
          </motion.div>
          
          <h1 className="text-8xl md:text-9xl font-black text-[#1b4c53] leading-none tracking-tighter">
            WORLD <br /> <span className="italic font-light text-[#3a7e88] text-7xl md:text-8xl">UNLOCKED.</span>
          </h1>
          
          <p className="mt-8 text-xl mb-18 font-[Urbanist] text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Eliminate the complexity of international expansion. We handle the payroll, 
            so you can focus on the people.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - COMPLIANCE ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 overflow-hidden">
        {/* Animated Icon Orbits */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-white rounded-full" 
            />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#f9faed] leading-tight mb-6">
                Compliant Everywhere. <br /> Complicated Nowhere.
              </h2>
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                Our global EOR (Employer of Record) framework ensures your business stays 
                on the right side of international law, no matter where your team lives.
              </p>
              
              <motion.div 
                whileInView={{ width: ["0%", "100%"] }}
                viewport={{ once: true }}
                className="h-[1px] bg-gradient-to-r from-[#f9faed]/40 to-transparent mb-10"
              />
              
              <div className="flex items-center gap-6">
                 <div className="text-[#f9faed] p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Globe className="animate-[spin_10s_linear_infinite]" size={32} />
                 </div>
                 <div className="text-[#f9faed]">
                    <p className="text-sm font-bold uppercase opacity-50 tracking-widest">Active Coverage</p>
                    <p className="text-2xl font-bold italic font-serif">150+ Jurisdictions</p>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 border border-[#f9faed]/10 rounded-[3rem] bg-emerald-950/20 hover:bg-[#f9faed]/5 transition-all"
                >
                  <motion.div 
                    whileInView={item.anim}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#f9faed] mb-6"
                  >
                    <item.icon size={36} strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-[#f9faed] text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER KEY ADVANTAGES */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end mb-20 gap-6">
            <h2 className="text-[#1b4c53] text-5xl font-black text-center md:text-left tracking-tighter">THE CORE <br /> ASSURANCE.</h2>
            <p className="text-[#1b4c53]/60 max-w-xs font-medium text-right font-[Urbanist]">Built for the modern, distributed world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Unified Dashboard",
                detail: "View all international hires, salaries, and tax documents in one centralized, secure location.",
              },
              {
                title: "Automated Tax Filings",
                detail: "We handle the regional tax withholding and filing, ensuring total accuracy with local authorities.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Viewport Lighting Border Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.5 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)]"
                />

                <div className="relative bg-[#f9faed] p-14 rounded-[3.4rem] h-full">
                  <div className="w-2 h-10 bg-[#1b4c53] absolute left-0 top-1/2 -translate-y-1/2 group-hover:h-full transition-all duration-700" />
                  <h3 className="text-3xl font-bold text-[#1b4c53] mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#1b4c53]/70 text-lg leading-relaxed font-medium">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - GLOBAL SCALE */}
      <section className="pb-32 px-2">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] shadow-3xl shadow-[#1b4c53]/50 relative overflow-hidden"
        >
          {/* Background Text Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[20rem] font-black pointer-events-none select-none">
            GLOBE
          </div>

          <Briefcase className="mx-auto mb-10 w-16 h-16 text-[#3a7e88]" />
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight ">
            Ready to hire <br /> anywhere?
          </h2>
          <Link href = "/contact-us">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-[#f9faed] text-[#1b4c53] md:px-12 md:py-6 px-8 py-3 rounded-full font-black text-xl cursor-pointer shadow-xl group"
          >
            Start Global Expansion <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}