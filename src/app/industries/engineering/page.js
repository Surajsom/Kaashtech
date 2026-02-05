"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Settings,
  Ruler,
  Layers,
  Cpu,
  ArrowRight,
  HardHat,
  Factory,
  Component,
  Lightbulb,
  Compass,
} from "lucide-react";
import Link from 'next/link';

const pillars = [
  {
    title: "Product Engineering",
    icon: Component,
    desc: "End-to-end product lifecycle management from initial CAD prototyping to final manufacturing readiness.",
  },
  {
    title: "Industrial IoT",
    icon: Factory,
    desc: "Smart factory solutions that integrate sensory data with operational logic for autonomous production.",
  },
  {
    title: "Structural Analysis",
    icon: Layers,
    desc: "Advanced stress-testing and simulation models to ensure safety and longevity in high-performance environments.",
  },
  {
    title: "Automated Systems",
    icon: Settings,
    desc: "Designing robotic process automation and control systems for complex mechanical infrastructures.",
  },
];

export default function EngineeringPage() {
  const { scrollYProgress } = useScroll();

  // Engineering-specific parallax and rotations
  const blueprintX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const dashOffset = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans overflow-x-hidden">
      {/* --- DYNAMIC ENGINEERING BACKGROUND LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* 1. Moving Drafting Grid */}
        <motion.div
          style={{ x: blueprintX }}
          className="absolute inset-0 opacity-[0.05]"
          dangerouslySetInnerHTML={{
            __html: `
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="draftGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="0" cy="0" r="1.5" fill="#1b4c53" />
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1b4c53" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#draftGrid)" />
            </svg>
          `,
          }}
        />

        {/* 2. Self-Drawing Technical Compass Circle */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              stroke="#1b4c53"
              strokeWidth="0.2"
              fill="none"
              strokeDasharray="10 5"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 50 0 L 50 100 M 0 50 L 100 50"
              stroke="#1b4c53"
              strokeWidth="0.1"
            />
          </svg>
        </div>

        {/* 3. Scanning Laser Line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#3a7e88]/20 to-transparent shadow-[0_0_15px_rgba(58,126,136,0.5)]"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center px-6">
          <div className="relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
            >
              <Compass size={14} className="inline mr-2" /> Precision Technical
              Delivery
            </motion.div>
            <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
              SOLVE <br />{" "}
              <span className="italic font-light text-[#3a7e88]">BUILT.</span>
            </h1>
            <p className="mt-10 text-xl font-[Urbanist] md:mb-12 text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
              Merging computational power with physical precision to engineer
              solutions that withstand the test of time and environmental
              forces.
            </p>
          </div>
        </section>

        {/* 2. THE DEEP GREEN SECTION */}
        <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                  Calculated <br /> Innovation.
                </h2>
                <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
                <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                  Modern engineering requires a fusion of hardware reliability
                  and software intelligence. We provide the expertise to
                  optimize your infrastructure, reduce material waste, and
                  increase mechanical efficiency.
                </p>
                <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <Ruler className="text-[#3a7e88]" size={32} />
                  <span className="font-bold text-xl italic tracking-tight ">
                    Micron-Level Accuracy Standards
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -10,
                      backgroundColor: "rgba(249, 250, 237, 0.05)",
                      borderColor: "rgba(58,126,136,0.5)",
                    }}
                    className="p-10 border border-[#f9faed]/10 rounded-[3rem] bg-[#113136] transition-all group overflow-hidden relative"
                  >
                    {/* Subtle Internal Pulse Animation */}
                    <motion.div
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute inset-0 bg-[#3a7e88]/5 pointer-events-none"
                    />

                    <item.icon
                      className="text-[#3a7e88] mb-6 group-hover:text-[#f9faed] transition-colors relative z-10"
                      size={40}
                    />
                    <h4 className="text-[#f9faed] text-2xl font-bold mb-4 tracking-tight relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-[#f9faed]/40 text-sm leading-relaxed relative z-10 font-[Urbanist]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. LIGHTING BORDER CARDS */}
        <section className="py-32 px-6 bg-[#f9faed]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">
                DRAFT. SIMULATE. CONSTRUCT.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "FEA & Computational Fluid Dynamics",
                  detail:
                    "Utilizing advanced Finite Element Analysis to predict how products react to real-world forces, vibration, heat, and fluid flow.",
                },
                {
                  title: "Sustainable Infrastructure",
                  detail:
                    "Engineering solutions focused on longevity and energy efficiency, reducing the total carbon footprint of industrial operations.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="group relative p-[1px] rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="relative bg-[#f9faed] p-16 rounded-[3.9rem] h-full shadow-sm">
                    <h3 className="text-3xl font-bold text-[#1b4c53] mb-6 tracking-tighter">
                      {card.title}
                    </h3>
                    <p className="text-[#1b4c53]/70 text-xl leading-relaxed font-light italic">
                      "{card.detail}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-32 md:px-4 px-2">
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
          >
            {/* Spinning Technical Gear Decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 opacity-10"
            >
              <Settings size={300} strokeWidth={1} />
            </motion.div>

            <HardHat className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
              Architect the <br /> Impossible.
            </h2>
            <Link href="/contact-us">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center md:gap-4 mx-auto bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
              >
                Start Your Engineering Project <ArrowRight />
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
