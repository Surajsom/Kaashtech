"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Globe,
  Magnet,
  FileText,
  Navigation,
  Activity,
  ArrowRight,
  Zap,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const workforceServices = [
  {
    name: "Contingent Staffing",
    icon: Zap,
    path: "/workforce-solutions/contingent-staffing",
    desc: "Agile, on-demand talent for rapid project scaling and market fluctuations.",
  },
  {
    name: "Direct Hire & Executive Search",
    icon: UserCheck,
    path: "/workforce-solutions/direct-hire",
    desc: "Precision placement for long-term leadership and specialized technical roles.",
  },
  {
    name: "Global Payroll & Compliance",
    icon: Globe,
    path: "/workforce-solutions/global-payroll-and-compliance",
    desc: "Zero-risk international employment management and tax legalities.",
  },
  {
    name: "Direct Sourcing",
    icon: Magnet,
    path: "/workforce-solutions/direct-sourcing",
    desc: "Leveraging your brand to attract and curate a private talent community.",
  },
  {
    name: "Statement of Work (SOW)",
    icon: FileText,
    path: "/workforce-solutions/statement-of-work-sow",
    desc: "Project-based deliverables management with defined milestones and outcomes.",
  },
  {
    name: "Nearshore & Offshore Solutions",
    icon: Navigation,
    path: "/workforce-solutions/nearshore-and-offshore-solutions",
    desc: "Strategic geographic talent distribution for cost and time-zone optimization.",
  },
  {
    name: "Recruitment Process Outsourcing",
    icon: Activity,
    path: "/workforce-solutions/recruitment-process-outsourcing-rpo",
    desc: "Full-cycle recruitment management to reduce time-to-hire and overhead.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WorkforceSolutionsPage() {
  return (
    <div className="bg-[#f9faed] min-h-screen py-10 selection:bg-[#1b4c53] selection:text-white font-sans overflow-x-hidden">
      {/* 1. ORGANIC NODE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0">
        <svg width="100%" height="100%">
          <pattern
            id="humanGrid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="60" cy="60" r="1.5" fill="#1b4c53" />
            <motion.circle
              cx="60"
              cy="60"
              r="30"
              fill="none"
              stroke="#1b4c53"
              strokeWidth="0.2"
              animate={{ r: [30, 50, 30], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#humanGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40">
        {/* HEADER */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-[10px] font-black uppercase tracking-[0.4em] bg-[#f9faed]/80 backdrop-blur-sm"
          >
            <Users size={14} /> Human Capital Logistics
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black text-[#1b4c53] leading-none tracking-tighter uppercase">
            Global <br />{" "}
            <span className="italic font-light text-[#3a7e88]">Talent.</span>
          </h1>
          <p className="mt-12 text-xl text-[#1b4c53]/60 font-medium max-w-2xl mx-auto mb-5 leading-relaxed italic">
            "Surgical workforce alignment that eliminates the friction between
            ambition and execution on a global scale."
          </p>
        </div>

        {/* WORKFORCE CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workforceServices.map((service, i) => (
            <Link key={i} href={service.path}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-[1px] rounded-[3.5rem] overflow-hidden bg-[#1b4c53]/5 h-full"
              >
                {/* Conic Lighting Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#3a7e88_270deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative bg-white p-12 rounded-[3.4rem] h-full shadow-sm flex flex-col justify-between border border-[#1b4c53]/5 group-hover:border-transparent transition-colors">
                  <div>
                    <div className="w-16 h-16 bg-[#f9faed] rounded-2xl flex items-center justify-center mb-8 border border-[#1b4c53]/5 group-hover:bg-[#1b4c53] transition-all duration-500">
                      <service.icon
                        className="text-[#3a7e88] group-hover:text-[#f9faed] transition-colors"
                        size={32}
                      />
                    </div>
                    <h3 className="text-3xl font-black text-[#1b4c53] mb-4 tracking-tighter uppercase leading-none">
                      {service.name}
                    </h3>
                    <p className="text-[#1b4c53]/50 text-sm leading-relaxed mb-12">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[#3a7e88] font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                    Scale Workforce <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* FINAL CTA SECTION */}
      <section className="pb-40 px-6">
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="max-w-6xl mx-auto mt-12 bg-[#1b4c53] rounded-[5rem] p-20 text-center text-[#f9faed] relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter text-center leading-none uppercase">
              Activate your <br />{" "}
              <span className="italic font-light justify-center text-[#3a7e88]">
                Edge.
              </span>
            </h2>
            <p className="text-[#f9faed]/40 text-lg mb-12 max-w-2xl font-medium mx-auto">
              Join the elite enterprises scaling with precision. Get your custom
              workforce strategy in 24 hours.
            </p>
            <Link href="/contact-us">
              <div className="w-16 h-16 rounded-full border border-[#f9faed]/30 mx-auto flex items-center justify-center hover:bg-[#f9faed] hover:text-[#1b4c53] cursor-pointer transition-all">
                <ArrowRight />
              </div>
            </Link>
          </div>
          {/* Decorative Gear Background */}
          <Globe
            size={400}
            className="absolute -bottom-20 -right-20 text-white/5 animate-spin-slow pointer-events-none"
          />
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
