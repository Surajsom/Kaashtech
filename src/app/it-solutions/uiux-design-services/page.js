"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Palette, 
  PenTool, 
  LayoutTemplate, 
  Eye, 
  Layers, 
  ArrowRight, 
  Figma, 
  Move,
  Search
} from "lucide-react";

const pillars = [
  { 
    title: "User Research", 
    icon: Search, 
    desc: "Behavioral analysis and persona mapping to ensure every design choice is backed by real user data." 
  },
  { 
    title: "Rapid Prototyping", 
    icon: Move, 
    desc: "High-fidelity interactive prototypes that allow you to feel the product experience before a single line of code is written." 
  },
  { 
    title: "Visual Design", 
    icon: Palette, 
    desc: "Aesthetic excellence combined with brand-aligned design systems for a consistent global presence." 
  },
  { 
    title: "Usability Testing", 
    icon: Eye, 
    desc: "Rigorous testing phases to identify friction points and optimize for the most intuitive user journey." 
  },
];

export default function UIUXDesignPage() {
  const { scrollYProgress } = useScroll();
  const shapeScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE HUMAN ELEMENT */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 text-center">
        {/* Organic Floating Shapes Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            style={{ scale: shapeScale }}
            animate={{ 
              rotate: [0, 360],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-[#1b4c53]/5 bg-[#1b4c53]/5 opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            Human-Centric Experiences
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            VISUAL <br /> <span className="italic font-light text-[#3a7e88]">EMPATHY.</span>
          </h1>
          <p className="mt-10 text-xl md:mb-18 text-[#1b4c53]/70 font-medium font-[Urbanist]  max-w-2xl mx-auto leading-relaxed">
            Designing digital products that don't just look beautiful—they feel 
            instinctive, accessible, and purposeful.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE DESIGN THINKING HUB */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Form follows <br /> Feeling.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist] ">
                Great design isn't a coat of paint—it's the core of the product. We utilize 
                the Design Thinking methodology to solve complex user problems, turning 
                cluttered interfaces into fluid, enjoyable journeys.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <PenTool className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Iterative Prototyping Ecosystem</span>
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
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist] ">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - DESIGN PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">RESEARCH. IDEATE. DELIVER.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Design System Architecture",
                detail: "We build scalable component libraries that ensure consistency across all your digital touchpoints, making future development 2x faster.",
              },
              {
                title: "Accessibility-First UX",
                detail: "Ensuring your product is usable by everyone. We adhere to WCAG standards to provide inclusive experiences for users with diverse needs.",
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
          <LayoutTemplate className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Design Your <br /> Experience.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Start Designing Now <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}