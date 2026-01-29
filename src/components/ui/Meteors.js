"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Meteors = ({ number = 20, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    >
      {meteors.map((_, idx) => {
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-white/10 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#c3c3c372] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: Math.random() * 100 + "%", // ✅ FULL WIDTH RANDOM
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.floor(Math.random() * 5 + 5) + "s",
            }}
          />
        );
      })}
    </motion.div>
  );
};
