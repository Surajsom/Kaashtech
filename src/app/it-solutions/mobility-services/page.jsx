"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Layout,
  Navigation,
  Zap,
  Layers,
  ArrowRight,
  Wifi,
  ShieldCheck,
  MousePointer2,
} from "lucide-react";

const pillars = [
  {
    title: "Native iOS & Android",
    icon: Smartphone,
    desc: "High-performance, feature-rich native applications engineered for the latest hardware capabilities.",
  },
  {
    title: "Cross-Platform Dev",
    icon: Layers,
    desc: "Using React Native and Flutter to build beautiful, consistent apps with a single codebase for speed-to-market.",
  },
  {
    title: "Enterprise MDM",
    icon: ShieldCheck,
    desc: "Mobile Device Management strategies to secure and manage your corporate fleet across the globe.",
  },
  {
    title: "Mobile UI/UX",
    icon: MousePointer2,
    desc: "Human-centric design focused on thumb-friendly navigation and lightning-fast mobile interactions.",
  },
];

export default function MobilityServicesPage() {
 

  const { scrollYProgress } = useScroll();
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      {/* 1. HERO SECTION - THE MOTION FLOW */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Floating Elements Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                y: floatY,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${15 * i}%`,
                left: `${10 * i}%`,
              }}
              animate={{
                x: [0, 20, 0],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bg-[#1b4c53] rounded-full blur-2xl"
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Wifi size={14} className="inline mr-2 animate-pulse" />{" "}
            Mobile-First Ecosystems
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            MOVE <br />{" "}
            <span className="italic font-light text-[#3a7e88]">FAST.</span>
          </h1>
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Empowering the modern workforce with seamless, secure, and highly
            performant mobile solutions that bridge the gap between office and
            field.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE PERFORMANCE HUB */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Unbound <br /> Efficiency.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                Mobility is no longer a luxury—it’s the standard. We build
                enterprise apps that synchronize in real-time, work offline, and
                provide a consumer-grade experience for your professional users.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                <Navigation className="text-[#3a7e88]" size={32} />
                <span className="font-bold text-xl italic tracking-tight">
                  Geo-Spatial & Real-Time Sync
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
                  }}
                  className="p-10 border border-[#f9faed]/10 rounded-[3rem] bg-[#113136] transition-all group"
                >
                  <item.icon
                    className="text-[#3a7e88] mb-6 group-hover:text-[#f9faed] transition-colors"
                    size={40}
                  />
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - MOBILITY STRATEGY */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">
              DESIGN. BUILD. DEPLOY.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Offline-First Sync",
                detail:
                  "Ensuring your field teams can work without interruption, even in low-connectivity areas, with robust data conflict resolution and background syncing.",
              },
              {
                title: "Scalable Mobile Backend",
                detail:
                  "High-concurrency serverless backends engineered specifically to handle millions of mobile requests with sub-second latency.",
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
      <section className="pb-32 px-6">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-24 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          <Zap className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Go Mobile <br /> Today.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl hover:shadow-xl transition-all"
          >
            Launch Your Mobile Strategy <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
