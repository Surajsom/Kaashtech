"use client";
import { MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBadge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show badge when navbar is sticky (you can adjust this number)
      if (window.scrollY > 120) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={goTop}
          initial={{
            y: "-120vh",
            opacity: 0,
            scale: 0.85,
            rotate: -8,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          }}
          exit={{
            y: "-120vh",
            opacity: 0,
            scale: 0.9,
            rotate: 6,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1], // smooth premium easing
          }}
          className="fixed right-7 bottom-[10%] z-9999 h-20 w-9 rounded-md bg-(--scrolleddown-background) text-white shadow-xl flex flex-col items-center justify-center gap-2"
        >
          <span className="text-3xl leading-none">
            <MoveUp />
          </span>
          <span className="text-xs font-bold tracking-widest font-mono">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
