"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Search, 
  Target, 
  Award, 
  UsersRound, 
  Handshake, 
  TrendingUp, 
  ArrowRight, 
  UserPlus 
} from "lucide-react";

const pillars = [
  {
    title: "Precision Matching",
    icon: Target,
    desc: "We look beyond the resume to find cultural and technical alignment.",
  },
  {
    title: "Executive Search",
    icon: Search,
    desc: "Discreet and rigorous headhunting for leadership positions.",
  },
  {
    title: "Talent Strategy",
    icon: Award,
    desc: "Consultative approach to building your core foundation.",
  },
  {
    title: "Growth Driven",
    icon: TrendingUp,
    desc: "Placements designed for long-term retention and impact.",
  },
];

export default function DirectHirePage() {
  const { scrollYProgress } = useScroll();
  // Unique parallax for direct hire - subtle horizontal shift
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white">
      
      {/* 1. HERO SECTION - THE FOUNDATION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Decorative Background: Moving Squares/Grids suggesting Structure */}
        <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{duration: 15, repeat: Infinity}}
          style={{ x: xLeft }}
          className="absolute top-[15%] left-[-5%] w-[300px] h-[300px] border border-[#1b4c53]/10 rounded-[3rem] rotate-12 pointer-events-none"
        />
        <motion.div 
          style={{ x: xRight }}
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] border border-[#1b4c53]/5 rounded-full pointer-events-none"
        />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold tracking-widest uppercase"
          >
            Permanent Placement
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black text-[#1b4c53] leading-none tracking-tighter">
            BUILD <br /> <span className="italic font-light text-[#3a7e88]">LEGACY.</span>
          </h1>
          <p className="mt-8 text-xl text-[#1b4c53]/70 font-medium max-w-lg mx-auto leading-relaxed">
            Finding the key players who don't just fill a seat, but transform your company culture.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE METHODOLOGY */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-[0_-20px_50px_rgba(27,76,83,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#f9faed] leading-tight mb-6 tracking-tight">
                Direct Hiring <br /> Without the Noise
              </h2>
              <div className="w-20 h-1 bg-[#f9faed]/30 mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-8">
                Permanent hires are an investment in your future. Our rigorous 
                vetting process ensures that every candidate we present is a 
                high-caliber match for your long-term goals.
              </p>
              
              <div className="flex gap-4 items-center text-[#f9faed]">
                <Handshake size={32} className="opacity-50" />
                <span className="font-bold tracking-wide italic">Partnering for Success</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 250, 237, 0.05)" }}
                  className="p-8 border border-[#f9faed]/10 rounded-[2.5rem] transition-all cursor-default"
                >
                  <item.icon size={36} className="text-[#f9faed] mb-6 opacity-80" />
                  <h4 className="text-[#f9faed] text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ADVANTAGES (LIGHTING BORDER) */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#1b4c53] text-4xl md:text-5xl font-bold italic tracking-tight">
              The Placement Edge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Retention Focused",
                detail: "We focus on the '90-day success' metric. Our direct-hire candidates have a 92% retention rate over 2 years.",
              },
              {
                title: "Passive Talent Access",
                detail: "We reach the talent that isn't looking. Our network includes top-tier professionals exclusively available through us.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Lighting Border Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-[#f9faed] p-12 rounded-[2.9rem] h-full shadow-sm">
                  <h3 className="text-3xl font-bold text-[#1b4c53] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#1b4c53]/70 text-lg leading-relaxed">
                    {card.detail}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <UsersRound className="text-[#1b4c53]/30 group-hover:text-[#1b4c53] transition-colors" />
                    <div className="h-[1px] w-full bg-[#1b4c53]/10 group-hover:bg-[#1b4c53]/30 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="max-w-5xl mx-auto bg-[#1b4c53] rounded-[4rem] p-16 text-center text-[#f9faed] relative overflow-hidden"
        >
          {/* Subtle background glow for CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a7e88]/20 to-transparent pointer-events-none" />
          
          <UserPlus className="mx-auto mb-8 w-12 h-12 text-[#f9faed] opacity-50" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
            Hire Your Future.
          </h2>
          <p className="text-[#f9faed]/60 text-xl mb-12 max-w-xl mx-auto">
            Ready to secure the talent that will define your next decade? Let’s start the search.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full border border-[#f9faed]/30 mx-auto flex items-center justify-center hover:bg-[#f9faed] hover:text-[#1b4c53] cursor-pointer transition-all group"
          >
            <ArrowRight className="group-hover:rotate-[-45deg] transition-transform" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}