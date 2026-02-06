"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Lorem",
    role: "Chief Executive Architect",
    image: "/images/OIP.jpg",
    linkedin: "#",
  },
  {
    name: "Lorem",
    role: "Director of Global Talent",
    image: "/images/OIP.jpg",
    linkedin: "#",
  },
  {
    name: "Lorem",
    role: "Head of Engineering",
    image: "/images/OIP.jpg",
    linkedin: "#",
  },
  {
    name: "Lorem",
    role: "VP of Digital Solutions",
    image: "/images/OIP.jpg",
    linkedin: "#",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeadershipSection() {
  return (
    <section className="py-32 px-6 bg-[#f9faed] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#3a7e88] font-black uppercase text-xs tracking-[0.5em] mb-4"
            >
              The Core Team
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-[#1b4c53] uppercase leading-[0.85] tracking-tighter italic">
              Architects <br />{" "}
              <span className="not-italic font-light">of Sync.</span>
            </h2>
          </div>
          <p className="text-[#1b4c53]/50 text-lg font-medium max-w-xs italic border-l-2 border-[#3a7e88] pl-6">
            Visionaries bridging the gap between physical engineering and
            digital intelligence.
          </p>
        </div>

        {/* LEADERS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-square overflow-hidden rounded-md bg-[#1b4c53]/5 border border-[#1b4c53]/5">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* GLASSMORPHISM LINKEDIN OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end md:backdrop-blur-[2px]">
                  <motion.a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ rotate: 0, scale: 0.8 }}
                    whileHover={{  scale: 1 }}
                    className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-2xl"
                  >
                    <Linkedin className='text-black' size={24} />
                  </motion.a>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-8 px-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black text-[#1b4c53] uppercase tracking-tighter">
                    {leader.name}
                  </h3>
                  <ArrowUpRight
                    className="text-[#3a7e88] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </div>
                <p className="text-[#3a7e88] font-bold text-[10px] uppercase tracking-widest">
                  {leader.role}
                </p>
              </div>

              {/* DECORATIVE ELEMENT */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#1b4c53]/5 rounded-[3rem] -z-10 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
