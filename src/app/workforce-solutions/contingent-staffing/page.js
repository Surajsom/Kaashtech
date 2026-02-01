"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Users, Shield, Cpu, Globe, Rocket, ArrowRight } from "lucide-react";
import Link from 'next/link';
const pillars = [
  {
    title: "Rapid Scale",
    icon: Zap,
    desc: "Deploy entire teams in days, not months.",
  },
  {
    title: "Global Reach",
    icon: Globe,
    desc: "Access specialized talent across borders.",
  },
  {
    title: "Tech-Vetted",
    icon: Cpu,
    desc: "AI-driven screening for technical precision.",
  },
  {
    title: "Compliance",
    icon: Shield,
    desc: "Zero-risk payroll and legal management.",
  },
];

// Animation Variants for the Container and Items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each pillar's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ContingentPage() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] border-[1px] border-[#1b4c53]/10 rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-10 left-[-10%] w-100 h-100 bg-[#1b4c53]/5 rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold tracking-widest uppercase"
          >
            On-Demand Workforce
          </motion.div>
          <h1 className="text-8xl md:text-9xl font-black text-[#1b4c53] leading-none tracking-tighter">
            STAY <br /> <span className="italic font-light">FLUID.</span>
          </h1>
          <p className="my-8 mb-20 text-xl text-[#1b4c53]/70 font-medium max-w-lg mx-auto font-[Urbanist]">
            Contingent staffing that moves at the speed of your ambition.
            Flexible. Precise. Powerful.
          </p>
        </div>
      </section>

      {/* 2. THE "DEEP GREEN" FOCUS SECTION */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#f9faed] leading-tight mb-6">
                Why Contingent <br /> Works for You
              </h2>
              <div className="w-20 h-1 bg-[#f9faed]/30 mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-8 font-[Urbanist]">
                In a volatile market, agility is your greatest asset. Our
                contingent model allows you to test new markets and scale
                projects without the weight of permanent headcount.
              </p>
            </div>

            {/* PILLARS GRID WITH ANIMATIONS */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-8"
            >
              {pillars.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "rgba(249, 250, 237, 0.05)" }}
                  className="p-6 rounded-3xl transition-colors duration-300 group"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5 
                    }}
                  >
                    <item.icon size={40} className="text-[#3a7e88] mb-4 group-hover:text-white" />
                  </motion.div>
                  <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-snug font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE KEY POINTS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#1b4c53] text-4xl font-bold italic tracking-tight">
              The Core Advantages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Dynamic Bench",
                detail: "Active access to specialized developers, designers, and managers.",
              },
              {
                title: "Cost Efficiency",
                detail: "Reduce fixed costs by 30% by paying only for active project hours.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[3rem] overflow-hidden bg-[#1b4c53]/10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#1b4c53_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-[#f9faed] p-12 rounded-[2.9rem] h-full">
                  <h3 className="text-3xl font-bold text-[#1b4c53] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#1b4c53]/70 text-lg leading-relaxed ">
                    {card.detail}
                  </p>

                  <div className="mt-8 flex gap-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full bg-[#1b4c53]/20 group-hover:bg-[#1b4c53] transition-colors"
                        style={{ transitionDelay: `${dot * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ y: -10 }}
          className="max-w-5xl mx-auto bg-[#1b4c53] rounded-[4rem] p-16 text-center text-[#f9faed] shadow-2xl shadow-[#1b4c53]/40"
        >
          <Rocket className="mx-auto mb-8 w-12 h-12 text-[#f9faed] opacity-50" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to augment?
          </h2>
          <p className="text-[#f9faed]/60 text-xl mb-12 max-w-xl mx-auto font-[Urbanist]">
            Get a tailored list of contingent talent within 24 hours.
          </p>
          <Link href = "/contact-us">
          <div className="w-16 h-16 rounded-full border border-[#f9faed]/30 mx-auto flex items-center justify-center hover:bg-[#f9faed] hover:text-[#1b4c53] cursor-pointer transition-all">
            <ArrowRight />
          </div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}