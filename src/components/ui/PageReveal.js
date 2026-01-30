"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);

  const slices = [
    { left: "0%", bg: "#1b4c53" }, // slice 1
    { left: "33.333%", bg: "#1b4c53" }, // slice 2
    { left: "66.666%", bg: "#1b4c53" }, // slice 3
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-transparent"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          {slices.map((slice, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-1/3 overflow-hidden"
              style={{ left: slice.left }}
            >
              {/* This is the cover inside each slice */}
              <motion.div
                initial={{ x: "0%" }}
                animate={{
                  x: "100%", // ✅ moves only inside slice width
                  transition: {
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                className="h-full w-full"
                style={{ backgroundColor: slice.bg }}
              />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


