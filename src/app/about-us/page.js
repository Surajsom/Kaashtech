"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Heart, 
  Globe2, 
  ArrowRight, 
  Fingerprint,
  CheckCircle2,
  Compass
} from "lucide-react";

const values = [
  { title: "Radical Integrity", icon: ShieldCheck, desc: "We operate with total transparency, ensuring every partnership is built on trust." },
  { title: "Agile Precision", icon: Zap, desc: "Speed is nothing without accuracy. Our technical vetting is surgical." },
  { title: "Human-Centric Tech", icon: Heart, desc: "We believe technology should serve people. Empathy drives our engineering." },
  { title: "Global Synergy", icon: Globe2, desc: "Diversity isn't a metric; it's our engine. We harmonize global perspectives." },
];

export default function AboutUsPage() {
  const { scrollYProgress } = useScroll();
  const helixY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO - COMPANY ABOUT */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
          <motion.div style={{ y: helixY }} className="h-[200%] w-full">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="flex justify-around py-20 border-b border-[#1b4c53]/10" />
             ))}
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]">
            <Fingerprint size={16} /> Established 2026
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-[0.85] tracking-tighter uppercase">
            WE ARE <br /> <span className="italic font-light text-[#3a7e88]">SYNC.</span>
          </h1>
          <p className="mt-12 text-xl md:text-2xl text-[#1b4c53]/70 font-medium max-w-2xl mx-auto leading-relaxed italic">
            "A specialized workforce catalyst designed to bridge the gap between complex industrial challenges and elite technical talent."
          </p>
        </div>
      </section>

      {/* 2. ADDED SECTION: ABOUT OUR AGENCY (DARK GREEN THEME) */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] relative z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
        {/* Technical Schematic Background Decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%"><defs><pattern id="schematic" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="#f9faed" /><path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f9faed" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#schematic)" /></svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-white/10 rounded-[3rem]" />
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/5">
              <img src="/images/StaffingToggleSection.jpg" alt="About Agency" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-10 -right-10 bg-[#3a7e88] p-5 rounded-3xl text-[#f9faed] shadow-2xl">
              <span className="block text-3xl font-black italic uppercase">Pathway</span>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">for both employer and employee.</span>
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 mb-6 text-[#3a7e88] font-black uppercase text-xs tracking-[0.4em]">
              <Compass size={14} className="animate-spin-slow" /> About Our Agency
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#f9faed] leading-[0.9] tracking-tighter uppercase mb-8">
              Reliable & <br /> <span className="italic font-light text-[#3a7e88]">Cost Efficient.</span>
            </h2>
            <p className="text-xl text-[#f9faed]/80 font-medium leading-relaxed mb-8 italic border-l-4 border-[#3a7e88] pl-6">
              Long established fact that reader will be distracted the readable of pages when looking at its layout. 
            </p>
            <p className="text-[#f9faed]/50 mb-10 leading-relaxed text-lg">
              Pioneering the future of work by connecting exceptional talent with transformative opportunities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Strategic Recruitment", "Cost-Efficient Models", "Vetted Tech Talent", "Pathway Support"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#f9faed] font-bold uppercase text-[10px] tracking-widest">
                  <CheckCircle2 size={16} className="text-[#3a7e88]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - THE FUTURE FLOW */}
      <section className="bg-[#1b4c53] pb-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="p-16 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-md">
            <Target className="text-[#3a7e88] mb-8" size={48} />
            <h2 className="text-5xl font-bold text-[#f9faed] mb-6 tracking-tighter italic">Our Mission</h2>
            <p className="text-[#f9faed]/60 text-lg leading-relaxed">To engineer a frictionless global economy where talent meets challenge. We power progress through surgical workforce alignment.</p>
          </div>
          <div className="p-16 bg-[#113136] rounded-[4rem] border border-[#f9faed]/10">
            <Eye className="text-[#3a7e88] mb-8" size={48} />
            <h2 className="text-5xl font-bold text-[#f9faed] mb-6 tracking-tighter italic">Our Vision</h2>
            <p className="text-[#f9faed]/60 text-lg leading-relaxed">A future where borders are invisible to innovation. We envision a worldwide ecosystem of synchronized workforces.</p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES - CARDS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 text-[#1b4c53]">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase">Core Values.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative p-[1px] rounded-[3rem] overflow-hidden bg-[#1b4c53]/10">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#3a7e88_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#f9faed] p-10 rounded-[2.9rem] h-full shadow-sm">
                  <v.icon className="text-[#3a7e88] mb-6" size={40} />
                  <h3 className="text-2xl font-bold text-[#1b4c53] mb-4 uppercase">{v.title}</h3>
                  <p className="text-[#1b4c53]/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIVERSITY & INNOVATION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-[#1b4c53] uppercase leading-[0.9] tracking-tighter">
              Innovation Through <br /> <span className="text-[#3a7e88] italic font-light">Perspectives.</span>
            </h2>
            <div className="w-24 h-1 bg-[#3a7e88] my-10" />
            <p className="text-xl text-[#1b4c53]/70 font-medium italic">"Commitment to Diversity & Inclusion is our greatest breakthrough."</p>
          </div>
          <div className="space-y-12 text-[#1b4c53]">
            <p className="text-lg opacity-70">We source from 40+ countries, ensuring localized expertise and cognitive diversity that drives radical innovation for our partners.</p>
          </div>
        </div>
      </section>
    </div>
  );
}