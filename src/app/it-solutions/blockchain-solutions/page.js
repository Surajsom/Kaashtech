"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, ShieldCheck, Database, Boxes, Lock, FileText, Coins, ArrowRight, Share2 } from "lucide-react";

const pillars = [
  { title: "Smart Contracts", icon: FileText, desc: "Self-executing protocols that ensure total transaction transparency." },
  { title: "DeFi Protocols", icon: Coins, desc: "Building decentralized financial ecosystems with institutional security." },
  { title: "DApp Development", icon: Boxes, desc: "Custom decentralized applications built for enterprise-grade scale." },
  { title: "Private Ledgers", icon: Lock, desc: "Secure internal blockchain networks for sensitive data management." },
];

export default function BlockchainPage() {
  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans">
      
      {/* 1. HERO SECTION - ANIMATED NODES */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Floating Background Nodes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -50, 0], 
                x: [0, 30, 0],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute opacity-[0.05] text-[#1b4c53]"
              style={{ 
                top: `${20 * i}%`, 
                left: `${15 * i}%` 
              }}
            >
              <Share2 size={100 + i * 20} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-[0.3em]"
          >
            Web3 & Ledger Technology
          </motion.div>
          <h1 className="text-7xl md:text-[9rem] px-2 font-black text-[#1b4c53] leading-none tracking-tighter">
            TRUST <br /> <span className="italic font-light text-[#3a7e88]">DECENTRAL.</span>
          </h1>
          <p className="mt-8 font-[Urbanist] text-xl md:mb-16 text-[#1b4c53]/70 font-medium max-w-xl mx-auto leading-relaxed">
            Revolutionizing security and transparency through immutable blockchain architectures tailored for the modern enterprise.
          </p>
        </div>
      </section>

      {/* 2. THE DEEP GREEN SECTION */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem] -mt-20 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Immutable <br /> Security.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-10 font-[Urbanist]">
                We bridge the gap between legacy systems and Web3. Our solutions ensure your data is tamper-proof, transparent, and distributed.
              </p>
              <div className="flex items-center gap-4 text-[#f9faed] bg-white/5 p-6 rounded-2xl border border-white/10">
                 <LinkIcon className="text-[#3a7e88]" size={32} />
                 <span className="font-bold text-xl italic">Distributed Ledger Experts</span>
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
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING BORDER CARDS */}
      <section className="py-32 px-6 bg-[#f9faed]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Asset Tokenization",
                detail: "Convert physical assets into digital tokens, enabling fractional ownership and instant global liquidity.",
              },
              {
                title: "Custom Consensus",
                detail: "We develop custom consensus mechanisms (PoS, PoW, PoA) optimized for your specific network performance needs.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative p-[1px] rounded-[4rem] overflow-hidden bg-[#1b4c53]/10"
              >
                {/* Lighting Border Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
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
          whileHover={{ y: -10 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-24 text-center text-[#f9faed] relative overflow-hidden shadow-2xl shadow-[#1b4c53]/40"
        >
          <Boxes className="mx-auto mb-10 w-20 h-20 text-[#3a7e88] opacity-50" />
          <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
            Decentralize <br /> Today.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-[#f9faed] text-[#1b4c53] md:px-14 md:py-7 px-10 py-4 rounded-full font-black text-sm md:text-xl hover:shadow-[0_0_40px_rgba(249,250,237,0.2)] transition-all group"
          >
            Start Your Web3 Journey <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}