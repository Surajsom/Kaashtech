"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  Globe, 
  ArrowRight, 
  Scale,
  Coins,
  Banknote, Zap
} from "lucide-react";
import PageBanner from "../../../components/ui/PageBanner1";

const pillars = [
  { 
    title: "Fintech Innovation", 
    icon: Zap, 
    desc: "Deploying high-speed transaction engines and mobile-first banking experiences for the digital age." 
  },
  { 
    title: "Fraud Prevention", 
    icon: ShieldCheck, 
    desc: "AI-driven anomaly detection systems that protect assets and identify threats in real-time." 
  },
  { 
    title: "Regulatory Tech", 
    icon: Scale, 
    desc: "Automating KYC, AML, and global compliance reporting to reduce risk and operational costs." 
  },
  { 
    title: "Wealth Management", 
    icon: TrendingUp, 
    desc: "Data-heavy investment platforms with predictive modeling for high-net-worth portfolio optimization." 
  },
];

export default function BankingFinancePage() {
  const { scrollYProgress } = useScroll();
  const vaultRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <>
    <PageBanner 
      title="Banking & Finance" 
      subtitle="Secure, Scalable, and Compliant Financial Technology Solutions for the Modern Era." 
      imageUrl="/banners/banking-finance-banner.jpg" 
    />
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - THE SECURE VAULT */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Vault Door Visual Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            style={{ rotate: vaultRotate }}
            className="absolute w-[600px] h-[600px] border-[2px] border-[#1b4c53]/10 rounded-full flex items-center justify-center"
          >
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-10 bg-[#1b4c53]/10" 
                style={{ 
                  transform: `rotate(${i * 30}deg) translateY(-280px)` 
                }} 
              />
            ))}
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-[300px] h-[300px] bg-[#3a7e88]/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.4em]"
          >
            <Lock size={14} className="inline mr-2" /> Institutional Grade Security
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter">
            WEALTH <br /> <span className="italic font-light text-[#3a7e88]">SECURED.</span>
          </h1>
          <p className="mt-10 text-xl text-[#1b4c53]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Architecting the future of finance with robust, compliant, and 
            high-performance technology solutions for global banking leaders.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION - THE FINANCIAL ENGINE */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Uncompromising <br /> Integrity.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10">
                In banking, there is no room for error. We build transaction-critical 
                infrastructure that handles billions in volume while maintaining the highest 
                levels of encryption and data sovereignty.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Coins className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic tracking-tight">Multi-Currency Settlement Layers</span>
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

      {/* 3. LIGHTING BORDER CARDS - BANKING PILLARS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#1b4c53] text-4xl md:text-6xl font-black tracking-tighter italic">TRUST. SCALE. INNOVATE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Core Banking Modernization",
                detail: "We help traditional institutions migrate from rigid legacy mainframes to flexible, cloud-native banking cores without disrupting daily operations.",
              },
              {
                title: "Digital Wallet Ecosystems",
                detail: "Developing secure, contactless payment solutions and mobile wallets with integrated loyalty programs and real-time ledger updates.",
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
          <Banknote className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Invest in the <br /> Future.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] px-14 py-7 rounded-full font-black text-xl hover:shadow-xl transition-all"
          >
            Launch Your Fintech Solution <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
    </>
  );
}