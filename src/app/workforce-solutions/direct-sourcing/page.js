"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  UserSearch, 
  Network, 
  Database, 
  Zap, 
  ArrowRight, 
  Magnet, 
  Layers, 
  Fingerprint 
} from "lucide-react";

const pillars = [
  {
    title: "Brand Leverage",
    icon: Magnet,
    desc: "Utilize your employer brand to attract high-quality talent directly to your private pool.",
    anim: { y: [0, -10, 0] }
  },
  {
    title: "Private Talent Clouds",
    icon: Database,
    desc: "Build a proprietary ecosystem of pre-vetted silver-medalists and known alumni.",
    anim: { scale: [1, 1.1, 1] }
  },
  {
    title: "Curation Engine",
    icon: UserSearch,
    desc: "Expert curation that filters thousands of applicants into a top-tier shortlist.",
    anim: { rotate: [0, 15, 0] }
  },
  {
    title: "Automated Sourcing",
    icon: Zap,
    desc: "AI-powered matching that identifies the right talent before the job is even posted.",
    anim: { opacity: [1, 0.5, 1] }
  },
];

export default function DirectSourcingPage() {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the "Direct Line" background elements
  const lineTranslate = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white md:pt-12">
      
      {/* 1. HERO SECTION - THE ATTTRACTION THEME */}
      <section className="relative mb-5 h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Creative Background: Floating Network Lines */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <motion.div 
            style={{ x: lineTranslate }}
            className="w-full h-full flex flex-col justify-around"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[1px] w-full bg-[#1b4c53] shadow-[0_0_15px_#1b4c53]" />
            ))}
          </motion.div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold tracking-[0.2em] uppercase"
          >
            <Fingerprint size={14} /> Identity-Driven Sourcing
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black text-[#1b4c53] leading-none tracking-tighter">
            DIRECT <br /> <span className="italic font-light text-[#3a7e88]">CONNECTION.</span>
          </h1>
          
          <p className=" font-[Urbanist] mt-8 mb-17 text-xl text-[#1b4c53]/70 font-medium max-w-lg mx-auto leading-relaxed">
            Own your talent ecosystem. Reduce reliance on external agencies and 
            source directly from your own private talent cloud.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE CURATION HUB */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
            >
              <h2 className="text-5xl font-bold text-[#f9faed] leading-tight mb-6">
                Your Brand, <br /> Your Talent.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                Direct sourcing turns your employer brand into a talent magnet. 
                We provide the technology and human curation to manage your 
                talent cloud, reducing costs by up to 40%.
              </p>
              
              <div className="flex flex-col gap-4">
                 {['Reduced Cost-per-Hire', 'Enhanced Candidate Experience', 'Proprietary Talent Data'].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-[#f9faed]/80">
                      <div className="w-1 h-1 rounded-full bg-[#3a7e88]" />
                      <span className="text-sm font-semibold tracking-wide">{item}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(249, 250, 237, 0.05)" }}
                  className="group p-8 border border-[#f9faed]/10 rounded-[2.5rem] transition-all"
                >
                  <motion.div 
                    animate={item.anim}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#f9faed] mb-6 inline-block"
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

      {/* 3. LIGHTING BORDER KEY ADVANTAGES (VIEWPORT DRIVEN) */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">THE PRIVATE CLOUD EDGE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Total Candidate Ownership",
                detail: "Every candidate in your cloud belongs to you. No recurring agency fees—just a growing, reusable asset.",
              },
              {
                title: "Seamless ATS Integration",
                detail: "Our direct sourcing layer sits perfectly atop your existing tech stack, enhancing it with curated talent flows.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Lighting Border Animation only active in viewport */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)]"
                />

                <div className="relative bg-[#f9faed] p-12 rounded-[2.9rem] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-[#1b4c53] mb-6">{card.title}</h3>
                    <p className="text-[#1b4c53]/70 text-lg leading-relaxed">{card.detail}</p>
                  </div>
                  
                  {/* Creative Sourcing Visual Detail */}
                  <div className="mt-10 flex items-center gap-2">
                    <Layers size={16} className="text-[#1b4c53]/30" />
                    <div className="h-[2px] flex-1 bg-[#1b4c53]/5 group-hover:bg-[#1b4c53]/20 transition-all" />
                    <Network size={16} className="text-[#1b4c53]/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - TAKE OWNERSHIP */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] shadow-2xl shadow-[#1b4c53]/30 relative overflow-hidden"
        >
          {/* Animated Wave Background */}
          <motion.div 
            animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3a7e88]/10 rounded-full blur-[100px]"
          />

          <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter">
            Stop Searching. <br /> Start Owning.
          </h2>
          <p className="text-[#f9faed]/60 text-xl mb-12 max-w-xl font-[Urbanist] mx-auto font-medium leading-relaxed">
            Revolutionize your recruitment spend with a direct sourcing strategy 
            that builds long-term talent equity.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#f9faed] text-[#1b4c53] px-10 py-6 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_30px_rgba(249,250,237,0.3)] transition-all group"
          >
            Explore Direct Sourcing <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}