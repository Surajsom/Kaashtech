"use client";

import React from "react";
import { motion } from "framer-motion";


export default function PageBanner({ title, subtitle, imageUrl }) {
  return (
    <>
    <div className="relative h-[60vh] w-full overflow-hidden flex items-end">
      {/* 1. THE BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* 2. THE GREEN BLEND (Overlay) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1b4c53] via-[#1b4c53]/40 to-transparent" />
      
      {/* 3. OPTIONAL SIDE VIGNETTE (Adds Depth) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1b4c53]/60 via-transparent to-transparent" />

      {/* 4. CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {subtitle && (
            <p className="text-(--foreground) font-bold tracking-[0.4em] uppercase text-sm mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-8xl font-black text-[#f9faed] tracking-tighter leading-none italic uppercase">
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
    </>
  );
}