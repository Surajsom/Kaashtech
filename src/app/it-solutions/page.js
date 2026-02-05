"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Database, 
  BarChart3, 
  Megaphone, 
  RefreshCcw, 
  Code2, 
  Briefcase, 
  Cpu, 
  Server, 
  Smartphone, 
  Figma,
  ArrowRight,
  Settings
} from "lucide-react";
import Link from "next/link";

const solutions = [
  { name: "AI Chatbot Solution", icon: MessageSquare, path: "/it-solutions/ai-chatbot-solution", desc: "Intelligent conversational agents driven by neural language processing." },
  { name: "Blockchain Solutions", icon: Database, path: "/it-solutions/blockchain-solutions", desc: "Decentralized ledgers for secure, transparent, and immutable data." },
  { name: "Business Analytics", icon: BarChart3, path: "/it-solutions/business-analytics", desc: "Turning raw data into strategic insights with predictive modeling." },
  { name: "Digital Marketing", icon: Megaphone, path: "/it-solutions/digital-marketing", desc: "Data-driven growth strategies and precision audience targeting." },
  { name: "Digital Transformation", icon: RefreshCcw, path: "/it-solutions/digital-transformation", desc: "Modernizing legacy systems into agile, cloud-native architectures." },
  { name: "Enterprise App Dev", icon: Code2, path: "/it-solutions/enterprise-application-development", desc: "Scalable, high-performance applications built for complex logic." },
  { name: "Business Solutions", icon: Briefcase, path: "/it-solutions/enterprise-business-solutions", desc: "Custom ERP and CRM integrations to streamline operations." },
  { name: "Internet of Things (IoT)", icon: Cpu, path: "/it-solutions/internet-of-things-(iot)", desc: "Connecting physical assets with intelligent sensory networks." },
  { name: "IT Infra & Support", icon: Server, path: "/it-solutions/it-infrastructure-and-support", desc: "Zero-downtime server management and robust security protocols." },
  { name: "Mobility Services", icon: Smartphone, path: "/it-solutions/mobility-services", desc: "Native and cross-platform mobile experiences for the modern era." },
  { name: "UI/UX Design Services", icon: Figma, path: "/it-solutions/uiux-design-services", desc: "Scientific user research paired with high-fidelity visual design." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#f9faed] min-h-screen py-10 selection:bg-[#1b4c53] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. CIRCUIT PULSE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%">
          <pattern id="circuitGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1b4c53" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="2" fill="#1b4c53" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuitGrid)" />
        </svg>
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1b4c53] to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40">
        
        {/* HEADER */}
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-[10px] font-black uppercase tracking-[0.4em]"
          >
            <Settings size={14} className="animate-spin-slow" /> Tech Ecosystem
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter uppercase">
            IT <br /> <span className="italic font-light text-[#3a7e88]">Solutions.</span>
          </h1>
          <p className="mt-12 text-xl text-[#1b4c53]/60 mb-10 font-medium max-w-2xl mx-auto leading-relaxed font-[Urbanist]">
            From the cloud to the edge, we engineer robust digital foundations 
            that empower enterprises to outpace market volatility.
          </p>
        </div>

        {/* SOLUTIONS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, i) => (
            <Link key={i} href={item.path}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-[1px] rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/5 h-full"
              >
                {/* Conic Glow Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#3a7e88_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-white p-12 rounded-[3.4rem] h-full shadow-sm flex flex-col justify-between border border-[#1b4c53]/5">
                  <div>
                    <div className="w-16 h-16 bg-[#1b4c53] rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#1b4c53]/10">
                      <item.icon className="text-[#3a7e88]" size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-[#1b4c53] mb-4 tracking-tighter uppercase leading-none">
                      {item.name}
                    </h3>
                    <p className="text-[#1b4c53]/50 text-sm leading-relaxed mb-8 font-[Urbanist]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[#3a7e88] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Initialize Project <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      

      {/* FOOTER CTA */}
      <section className="pb-40 px-6 mt-12">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
              Build your <br /> <span className="italic font-light text-[#3a7e88]">Digital Moat.</span>
            </h2>
            <p className="text-[#f9faed]/40 text-lg mb-12 max-w-xl mx-auto">
              Future-proof your enterprise with custom-engineered IT solutions 
              delivered by our global nexus of talent.
            </p>
              <Link href = "/contact-us">
          <div className="w-16 h-16 rounded-full border border-[#f9faed]/30 mx-auto flex items-center justify-center hover:bg-[#f9faed] hover:text-[#1b4c53] cursor-pointer transition-all">
            <ArrowRight />
          </div>
          </Link>

          </div>
          <Cpu size={500} className="absolute -top-20 -left-20 text-white/5 opacity-20 pointer-events-none" />
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
}