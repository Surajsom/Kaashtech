"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Settings, 
  Stethoscope, 
  ShieldCheck, 
  Dna, 
  Cpu, 
  Droplets, 
  Factory, 
  Wifi, 
  Microchip,
  ArrowRight,
  Globe2
} from "lucide-react";
import Link from "next/link";

const industries = [
  { name: "Banking & Finance", icon: Building2, path: "/industries/banking-and-finance", desc: "Digital banking and secure fintech infrastructure." },
  { name: "Engineering", icon: Settings, path: "/industries/engineering", desc: "Computational design and structural technical delivery." },
  { name: "Healthcare", icon: Stethoscope, path: "/industries/healthcare", desc: "Patient-centric tech and health data ecosystems." },
  { name: "Insurance", icon: ShieldCheck, path: "/industries/insurance", desc: "Risk-mitigated technology and claims automation." },
  { name: "Life Science", icon: Dna, path: "/industries/life-science", desc: "Bioinformatics and R&D infrastructure scaling." },
  { name: "Technology", icon: Cpu, path: "/industries/technology", desc: "SaaS acceleration and cloud-native engineering." },
  { name: "Oil & Gas", icon: Droplets, path: "/industries/oil-and-gas ", desc: "Industrial flow and resource intelligence systems." },
  { name: "Manufacturing", icon: Factory, path: "/industries/manufacturing", desc: "Industry 4.0 and smart factory automation." },
  { name: "Telecom", icon: Wifi, path: "/industries/telecom", desc: "5G infrastructure and network virtualization." },
  { name: "Semiconductor", icon: Microchip, path: "/industries/semiconductor-and-embedded-systems", desc: "Nanometer precision and embedded system logic." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#f9faed] min-h-screen selection:bg-[#1b4c53] selection:text-white font-sans overflow-x-hidden py-12">
      
      {/* 1. DYNAMIC GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%">
          <pattern id="industryGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1b4c53" strokeWidth="1" />
            <circle cx="40" cy="40" r="1" fill="#1b4c53" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#industryGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-[10px] font-black uppercase tracking-[0.4em]"
          >
            <Globe2 size={14} className="animate-spin-slow" /> Domain Expertise
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter uppercase">
            Global <br /> <span className="italic font-light text-[#3a7e88]">Sectors.</span>
          </h1>
          <p className="mt-12 text-xl mb-5 text-[#1b4c53]/60 font-medium max-w-3xl mx-auto leading-relaxed">
            We provide surgical technical alignment across the world's most 
            critical industries, transforming complex challenges into digital certainty.
          </p>
        </div>

        {/* INDUSTRY CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, i) => (
            <Link key={i} href={industry.path}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-px rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/5 h-full"
              >
                {/* Lighting Border Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#3a7e88_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-white p-7 md:p-12 rounded-[3.4rem] h-full shadow-sm flex flex-col justify-between border border-[#1b4c53]/5">
                  <div>
                    <div className="w-16 h-16 bg-[#f9faed] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1b4c53] transition-colors duration-500">
                      <industry.icon className="text-[#3a7e88] group-hover:text-[#f9faed] transition-colors duration-500" size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1b4c53] mb-4 tracking-tighter uppercase leading-none">
                      {industry.name}
                    </h3>
                    <p className="text-[#1b4c53]/50 text-sm leading-relaxed mb-8">
                      {industry.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[#3a7e88] font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                    Explore Solutions <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* FINAL CALLOUT */}
      <section className="pb-40 px-6">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto mt-12 bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter text-center leading-none uppercase">
              Don't see your <br /> <span className="italic font-light justify-center text-[#3a7e88]">Industry?</span>
            </h2>
            <p className="text-[#f9faed]/40 text-lg mb-12 max-w-2xl font-medium mx-auto">
              Our technical precision isn't limited by category. Let's discuss your 
              custom engineering or staffing requirements.  
            </p>
            <Link href = "/contact-us">
          <div className="w-16 h-16 rounded-full border border-[#f9faed]/30 mx-auto flex items-center justify-center hover:bg-[#f9faed] hover:text-[#1b4c53] cursor-pointer transition-all">
            <ArrowRight />
          </div>
          </Link>

           
          </div>
          {/* Decorative Gear Background */}
          <Settings size={400} className="absolute -bottom-20 -right-20 text-white/5 animate-spin-slow pointer-events-none" />
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}