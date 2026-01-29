"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, Target, ArrowRight, ShieldCheck, Search } from 'lucide-react';

const cards = [
  {
    title: "Direct Access",
    desc: "Bypass the noise. Get direct access to elite professionals who aren't on public job boards.",
    icon: <Search className="w-8 h-8" />,
    color: "from-emerald-400 to-green-600"
  },
  {
    title: "Executive Vetting",
    desc: "Our 100-point inspection ensures every candidate is technically proficient and culturally aligned.",
    icon: <UserCheck className="w-8 h-8" />,
    color: "from-green-400 to-cyan-500"
  },
  {
    title: "Ironclad Guarantee",
    desc: "We stand by our placements. If it's not a perfect fit within 90 days, we make it right—no questions asked.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-lime-400 to-emerald-600"
  }
];

export default function DirectHireGreen() {
  return (
    <section className="relative min-h-screen bg-[#05150d] text-emerald-50 py-24 px-6 overflow-hidden">
      
      {/* Dynamic Green Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest"
          >
            Direct Hire Division
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-8 tracking-tighter"
          >
            Hiring, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-200">
              Simplified.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            We don’t just fill roles; we fuel growth. Experience a staffing partnership 
            built on transparency, speed, and precision.
          </motion.p>
        </div>

        {/* The "Cool" Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-10 rounded-[2.5rem] bg-emerald-950/40 border border-emerald-800/30 hover:border-emerald-400/50 transition-all duration-500"
            >
              {/* Floating Animated Icon */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-emerald-950 mb-8 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40`}
              >
                {card.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-emerald-50">
                {card.title}
              </h3>
              
              <p className="text-emerald-100/50 leading-relaxed mb-6">
                {card.desc}
              </p>

              {/* Decorative line that expands on hover */}
              <div className="h-1 w-12 bg-emerald-500/30 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Creative CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-emerald-900/50 to-green-950/50 border border-emerald-500/20 text-center relative overflow-hidden"
        >
          {/* Subtle noise/texture overlay could go here */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Let’s build your A-Team.</h2>
          
          <button className="group relative px-10 py-5 bg-emerald-400 text-emerald-950 font-black rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95">
            <span className="relative z-10">GET STARTED</span>
            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}