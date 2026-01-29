"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  Search, 
  Zap, 
  Activity, 
  Scale, 
  ArrowRight, 
  Lock,
  PieChart,
  HardHat,
  Crosshair
} from "lucide-react";

const pillars = [
  { 
    title: "InsurTech Modernization", 
    icon: Zap, 
    desc: "Transforming legacy policy management into agile, cloud-native systems for rapid market response." 
  },
  { 
    title: "AI Risk Assessment", 
    icon: Crosshair, 
    desc: "Leveraging machine learning to refine underwriting precision and predict loss ratios with higher accuracy." 
  },
  { 
    title: "Claims Automation", 
    icon: Activity, 
    desc: "Digitizing the claims journey with automated verification and instant payment triggers." 
  },
  { 
    title: "Compliance Governance", 
    icon: Scale, 
    desc: "Real-time auditing and global regulatory reporting to ensure total operational sovereignty." 
  },
];

export default function InsurancePage() {
  const { scrollYProgress } = useScroll();
  const shieldRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE PROTECTIVE RADAR */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 text-center">
        {/* Animated Radar/Shield Layers Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            style={{ rotate: shieldRotate }}
            className="absolute w-[500px] h-[500px] border-2 border-[#1b4c53]/5 rounded-[4rem] rotate-45"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] border border-dashed border-[#1b4c53]/10 rounded-full"
          />
          <div className="absolute w-[300px] h-[300px] bg-[#3a7e88]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={14} className="inline mr-2" /> Risk-Mitigated Ecosystems
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            TRUST <br /> <span className="italic font-light text-[#3a7e88]">ASSURED.</span>
          </h1>
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Architecting the digital foundation for a secure future. We turn high-risk 
            operational challenges into predictable, data-driven insurance certainties.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE CORE PROTECTION */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Unfailing <br /> Reliability.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                In the insurance landscape, technology is the engine of trust. 
                We provide the high-availability infrastructure required to 
                manage millions of policies and process global claims with 
                uncompromising accuracy.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Lock className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Enterprise Data Sovereignty</span>
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
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS - INSURANCE STRATEGY */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">PROTECT. PREDICT. PREVAIL.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Fractional Policy Architecture",
                detail: "Enabling flexible, on-demand insurance products through API-led microservices that integrate instantly into third-party platforms.",
              },
              {
                title: "Telematics & IoT Sync",
                detail: "Directly linking real-world data from connected devices to underwriting models for ultra-accurate, usage-based insurance pricing.",
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
          <PieChart className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Cover the <br /> Future.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl hover:shadow-xl transition-all"
          >
            Start Your Insurance Project <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}