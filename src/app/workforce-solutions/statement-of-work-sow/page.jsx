"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FileCheck, 
  Milestone, 
  Target, 
  PieChart, 
  ChevronRight, 
  PenTool, 
  CalendarDays,
  ShieldAlert
} from "lucide-react";

const pillars = [
  {
    title: "Outcome Based",
    icon: Target,
    desc: "Shift the risk from your shoulders to ours with fixed-price, deliverable-based agreements.",
    anim: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }
  },
  {
    title: "Milestone Tracking",
    icon: Milestone,
    desc: "Payments are only triggered upon the successful completion of predefined project phases.",
    anim: { x: [0, 10, 0] }
  },
  {
    title: "Defined Scope",
    icon: PenTool,
    desc: "Eliminate scope creep with ironclad SOW documentation that defines exactly what is included.",
    anim: { rotate: [0, -15, 0] }
  },
  {
    title: "Performance ROI",
    icon: PieChart,
    desc: "Full visibility into project health and budget utilization through transparent reporting.",
    anim: { rotateY: [0, 180, 360] }
  },
];

export default function SOWPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the "Blueprint Grid"
  const blueprintY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE BLUEPRINT */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Creative Background: Technical Grid & Blueprint Lines */}
        <motion.div 
          style={{ y: blueprintY }}
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
        >
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#1b4c53 1px, transparent 1px), linear-gradient(90deg, #1b4c53 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
          <svg className="absolute w-full h-full">
            <motion.path 
              d="M 0 200 L 400 200 L 500 300 L 1200 300" 
              fill="none" stroke="#1b4c53" strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold tracking-[0.3em] uppercase"
          >
            <FileCheck size={14} /> Result-Centric Management
          </motion.div>
          
          <h1 className="text-7xl md:text-[9rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            PROVE <br /> <span className="italic font-light text-[#3a7e88]">VALUE.</span>
          </h1>
          
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Move beyond headcounts. Our Statement of Work solutions provide 
            the governance and accountability required for complex project delivery.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE GOVERNANCE MODEL */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#f9faed] leading-tight mb-8">
                Execution with <br /> Certainty.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-12" />
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Risk Mitigation", icon: ShieldAlert, text: "Fixed-price models protect your budget from unforeseen project delays." },
                  { title: "Timeline Mastery", icon: CalendarDays, text: "Aggressive milestone scheduling ensures projects stay on a strict delivery track." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10">
                    <item.icon className="text-[#3a7e88] shrink-0" size={28} />
                    <div>
                      <h4 className="text-[#f9faed] font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-[#f9faed]/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 237, 0.05)" }}
                  className="p-10 border border-[#f9faed]/10 rounded-[3.5rem] bg-[#1b4c53] transition-all group"
                >
                  <motion.div 
                    animate={item.anim}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#f9faed] mb-8 inline-block opacity-80"
                  >
                    <item.icon size={40} strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LIGHTING BORDER - PROJECT TRANSPARENCY */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic uppercase">The SOW Roadmap.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Output-Based Billing",
                detail: "Eliminate the 'Timesheet Culture.' We bill based on completed work packets and verified milestones, aligning our incentives with your success.",
              },
              {
                title: "End-to-End Governance",
                detail: "From initial scoping to final sign-off, our SOW managers provide constant oversight to ensure technical and quality standards are met.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Lighting Border Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)]"
                />

                <div className="relative bg-[#f9faed] p-16 rounded-[3.4rem] h-full flex flex-col justify-between border border-[#1b4c53]/5">
                   <div className="space-y-6">
                    <div className="flex items-center text-[#1b4c53]/30">
                       <span className="text-xs font-black tracking-widest">PHASE 0{i + 1}</span>
                       <div className="h-[1px] flex-1 bg-[#1b4c53]/10 ml-4" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1b4c53] tracking-tighter">{card.title}</h3>
                    <p className="text-[#1b4c53]/70 text-lg leading-relaxed font-medium italic">"{card.detail}"</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - START THE PROJECT */}
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ y: -10 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-24 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          {/* Creative Detail: Concentric Circles representing Targets */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
             {[...Array(4)].map((_, j) => (
               <div key={j} className="absolute inset-0 m-auto border border-white rounded-full" 
                    style={{ width: `${(j + 1) * 25}%`, height: `${(j + 1) * 25}%` }} />
             ))}
          </div>

          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Deliver with <br /> Confidence.
          </h2>
          <p className="text-[#f9faed]/50 text-xl mb-14 max-w-xl mx-auto font-medium">
            Turn your complex requirements into a streamlined, milestone-driven 
            project today.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-6 bg-[#f9faed] text-[#1b4c53] px-12 py-6 rounded-full font-black text-xl cursor-pointer group shadow-xl"
          >
            Draft My SOW <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}