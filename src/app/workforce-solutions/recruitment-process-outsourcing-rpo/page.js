"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Settings, 
  Workflow, 
  BarChart4, 
  Users2, 
  ClipboardCheck, 
  ArrowRight, 
  Share2, 
  Layers 
} from "lucide-react";
import Link from 'next/link';
const pillars = [
  {
    title: "Full-Cycle RPO",
    icon: Workflow,
    desc: "We own the entire process, from requisition to onboarding, acting as your internal talent acquisition team.",
    anim: { rotate: [0, 90, 0] }
  },
  {
    title: "Project RPO",
    icon: Layers,
    desc: "Scale up for specific hiring spikes or new office launches without increasing your permanent HR headcount.",
    anim: { y: [0, -10, 0] }
  },
  {
    title: "Data & Analytics",
    icon: BarChart4,
    desc: "Real-time reporting on cost-per-hire, time-to-fill, and quality-of-hire to drive strategic decisions.",
    anim: { scaleY: [1, 1.3, 1] }
  },
  {
    title: "Brand Management",
    icon: Users2,
    desc: "We promote and protect your employer brand, ensuring a world-class candidate experience at every touchpoint.",
    anim: { scale: [1, 1.1, 1] }
  },
];

export default function RPOPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the "Gear" background elements
  const gearRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="bg-[#f9faed] min-h-screen py-4 selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE ENGINE ROOM */}
      <section className="relative py-5 flex items-center justify-center overflow-hidden px-6 text-center">
        {/* Creative Background: Rotating Subtle Gears */}
        <motion.div 
          style={{ rotate: gearRotate }}
          className="absolute -top-20 -left-20 opacity-[0.03] text-[#1b4c53] pointer-events-none"
        >
          <Settings size={600} strokeWidth={0.5} />
        </motion.div>
        
        <div className="relative z-10 max-w-5xl mb-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-[#1b4c53]/5 border border-[#1b4c53]/20 text-[#1b4c53] text-xs font-black uppercase tracking-[0.3em]"
          >
            <Share2 size={14} /> Integrated Talent Partnership
          </motion.div>
          
          <h1 className="text-8xl md:text-[9rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            TALENT <br /> <span className="italic font-light text-[#3a7e88]">ENGINE.</span>
          </h1>
          
          <p className="mt-3 font-[Urbanist] mb-14 text-xl text-[#1b4c53]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Revolutionize your hiring infrastructure. We don't just find talent; 
            we build the sustainable systems that power your company's growth.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - OPERATIONAL EXCELLENCE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[#f9faed] leading-tight mb-8">
                Your Process, <br /> Optimized.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-12" />
              
              <div className="space-y-6">
                 {[
                   "Reduction in recruitment spend by up to 35%",
                   "Standardized hiring workflows across global offices",
                   "Improved diversity and inclusion metrics",
                   "Seamless technology integration (ATS/HRIS)"
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-4 text-[#f9faed]/80">
                      <ClipboardCheck className="text-[#3a7e88]" size={20} />
                      <span className="text-lg font-medium tracking-tight font-[Urbanist]">{text}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: "rgba(249,250,237,0.05)" }}
                  className="p-10 border border-[#f9faed]/10 rounded-[3rem] bg-[#1b4c53] transition-all group"
                >
                  <motion.div 
                    animate={item.anim}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#f9faed] mb-8 inline-block opacity-70 group-hover:opacity-100"
                  >
                    <item.icon size={40} strokeWidth={1.2} />
                  </motion.div>
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - THE RPO MATURITY */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic uppercase">The Maturity Model.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Scalability on Demand",
                detail: "Our RPO solutions are built to flex. Whether you are hiring 10 people or 1,000, our infrastructure expands and contracts to meet your real-time demand.",
              },
              {
                title: "Tech-Enabled Hiring",
                detail: "We deploy the latest in AI sourcing, automated scheduling, and video interviewing to ensure your process is modern, fast, and frictionless.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Viewport-triggered Lighting Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)]"
                />

                <div className="relative bg-[#f9faed] p-16 rounded-[3.4rem] h-full flex flex-col justify-between">
                   <div className="space-y-6">
                    <div className="flex gap-2">
                       {[...Array(3)].map((_, dot) => (
                         <div key={dot} className="w-8 h-1 bg-[#1b4c53]/10 group-hover:bg-[#1b4c53] transition-all" 
                              style={{ transitionDelay: `${dot * 150}ms` }} />
                       ))}
                    </div>
                    <h3 className="text-3xl font-bold text-[#1b4c53] tracking-tighter">{card.title}</h3>
                    <p className="text-[#1b4c53]/70 text-lg leading-relaxed font-medium">{card.detail}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      

      {/* 4. FINAL CTA - TRANSFORM YOUR TA */}
      <section className="pb-32 px-2">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] md:p-22 p-12 text-center text-[#f9faed] relative overflow-hidden"
        >
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a7e88]/10 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-8xl font-bold mb-10 tracking-tighter">
            Upgrade Your <br /> Infrastructure.
          </h2>
          <p className="text-[#f9faed]/50 text-xl mb-14 max-w-xl mx-auto font-medium font-[Urbanist]">
            Let’s discuss how an RPO partnership can deliver predictable, 
            high-quality hiring results for your organization.
          </p>
          <Link href = "/contact-us">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-md md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Consult Our RPO Experts <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}