"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Globe2, 
  MapPin, 
  Clock, 
  PlaneTakeoff, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Users 
} from "lucide-react";

const pillars = [
  {
    title: "Time-Zone Sync",
    icon: Clock,
    desc: "Strategic nearshoring ensures a minimum of 6 hours of overlapping workday for real-time collaboration.",
    anim: { rotate: [0, 360] }
  },
  {
    title: "Elite Offshore Hubs",
    icon: Globe2,
    desc: "Access specialized talent in top-tier global tech hubs with a focus on English proficiency and technical depth.",
    anim: { scale: [1, 1.1, 1] }
  },
  {
    title: "Cultural Alignment",
    icon: Users,
    desc: "We prioritize teams with high cultural proximity to ensure seamless communication and shared work ethics.",
    anim: { y: [0, -8, 0] }
  },
  {
    title: "Operational Efficiency",
    icon: Cpu,
    desc: "Drastically reduce labor costs without sacrificing the quality of your engineering or back-office output.",
    anim: { opacity: [1, 0.6, 1] }
  },
];

export default function GlobalSolutionsPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the World Map Background
  const mapOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]);
  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE BORDERLESS HUB */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Creative Background: Abstract World Map Grid */}
        <motion.div 
          style={{ opacity: mapOpacity, scale: mapScale }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="w-[80%] h-[80%] border-[1px] border-[#1b4c53] rounded-full opacity-20 animate-ping" />
          <div className="w-[60%] h-[60%] border-[1px] border-[#1b4c53] rounded-full opacity-30" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#1b4c53]/5 border border-[#1b4c53]/20 text-[#1b4c53] text-xs font-black uppercase tracking-widest"
          >
            <PlaneTakeoff size={14} /> Borderless Talent Delivery
          </motion.div>
          
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-[0.85] tracking-tighter">
            GLOBAL <br /> <span className="italic font-light text-[#3a7e88]">REACH.</span>
          </h1>
          
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            From Nearshore proximity to Offshore scale—we build your global 
            center of excellence with vetted, world-class talent.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE STRATEGIC EDGE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[6rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-bold text-[#f9faed] leading-tight mb-8 tracking-tight">
                Nearshore Speed. <br /> Offshore Scale.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-12" />
              
              <div className="space-y-8">
                {[
                  { label: "Nearshore", text: "Same-day collaboration, shared culture, and high-velocity output." },
                  { label: "Offshore", text: "Round-the-clock development, high-volume scalability, and cost optimization." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-[#3a7e88] shrink-0" size={24} />
                    <div>
                      <h4 className="text-[#f9faed] font-bold text-lg">{item.label}</h4>
                      <p className="text-[#f9faed]/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 237, 0.04)" }}
                  className="p-10 border border-[#f9faed]/10 rounded-[3.5rem] bg-[#1b4c53] shadow-xl transition-all"
                >
                  <motion.div 
                    animate={item.anim}
                    transition={{ duration: item.title === "Time-Zone Sync" ? 10 : 3, repeat: Infinity, ease: "linear" }}
                    className="text-[#f9faed] mb-8 inline-block"
                  >
                    <item.icon size={40} strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER KEY POINTS (THE TIMEZONE MAP) */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">SYNCHRONIZED SOLUTIONS.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                title: "Seamless Integration",
                detail: "We don't believe in 'throw it over the wall' outsourcing. Our teams are integrated directly into your Slack, Jira, and culture.",
              },
              {
                title: "Global Compliance Hub",
                detail: "Localized HR, payroll, and office space managed by us. You get the talent; we handle the international complexity.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Lighting Border Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)]"
                />

                <div className="relative bg-[#f9faed] p-16 rounded-[3.9rem] h-full flex flex-col justify-between">
                   <div>
                    <div className="flex items-center gap-4 mb-8">
                        <MapPin className="text-[#1b4c53] group-hover:animate-bounce" />
                        <div className="h-[1px] flex-1 bg-[#1b4c53]/10" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1b4c53] mb-6">{card.title}</h3>
                    <p className="text-[#1b4c53]/70 text-lg leading-relaxed">{card.detail}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - EXPAND BORDERS */}
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-24 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          {/* Animated "Signal" Background */}
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 m-auto w-96 h-96 border border-[#3a7e88]/50 rounded-full"
          />
          
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Your Team, <br /> Everywhere.
          </h2>
          <p className="text-[#f9faed]/50 text-xl mb-14 max-w-xl mx-auto font-medium">
            Scale your engineering and operations with a global strategy that 
            actually works.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl group shadow-2xl transition-all"
          >
            Build My Global Team <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}