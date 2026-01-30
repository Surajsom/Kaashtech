"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Search, 
  Layers, 
  Database, 
  ArrowRight, 
  LineChart, 
  Focus
} from "lucide-react";

const pillars = [
  { 
    title: "Predictive Analytics", 
    icon: TrendingUp, 
    desc: "Use historical data to forecast future trends and stay ahead of market shifts." 
  },
  { 
    title: "Real-time BI", 
    icon: LineChart, 
    desc: "Live dashboards that provide a pulse on your business operations every second." 
  },
  { 
    title: "Data Warehousing", 
    icon: Database, 
    desc: "Centralize fragmented data sources into a single, high-performance source of truth." 
  },
  { 
    title: "Customer Insights", 
    icon: Search, 
    desc: "Deep-dive into behavior patterns to improve retention and lifetime value." 
  },
];

export default function BusinessAnalyticsPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE DATA STREAM */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Data Points Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [-20, 20, -20],
                opacity: [0.03, 0.08, 0.03]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute text-[#1b4c53]"
              style={{ 
                top: `${10 * i}%`, 
                left: `${12 * i}%` 
              }}
            >
              <BarChart3 size={150 + i * 10} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            Intelligence & Insights
          </motion.div>
          <h1 className="text-8xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            DATA <br /> <span className="italic font-light text-[#3a7e88]">VISION.</span>
          </h1>
          <p className="mt-10 font-[Urbanist] md:mb-16 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Converting complex datasets into clear, actionable strategies that drive revenue and operational excellence.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE ANALYTICS ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Clarity in <br /> Complexity.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                Stop guessing and start knowing. Our analytics framework processes millions of data points to reveal the hidden patterns that determine your success.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Focus className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Precision Intelligence Mapping</span>
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
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - STRATEGIC PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">MEASURE. OPTIMIZE. SCALE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Advanced Data Mining",
                detail: "We extract non-obvious patterns from large datasets to identify new market opportunities and operational bottlenecks.",
              },
              {
                title: "Self-Service BI",
                detail: "We empower your entire team with intuitive dashboards that allow non-technical users to query data and generate reports.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-px rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-(-100%) bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
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
          <PieChart className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Actionable <br /> Analytics.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Unlock Your Data <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}