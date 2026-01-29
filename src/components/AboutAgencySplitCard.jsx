"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BookOpen } from "lucide-react";
import WelcomeElement from "./ui/WelcomeElement";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutAgencySplitCard() {
  return (
    <section className="relative w-full bg-white font-[Urbanist] mt-0">
      {/* BACKGROUND SHAPES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#efe7df] [clip-path:polygon(0_50%,18%_62%,35%_52%,50%_64%,68%_54%,82%_68%,100%_56%,100%_100%,0_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mx-auto grid w-[min(60vw,1100px)] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:grid-cols-2">
            {/* LEFT SIDE (IMAGE + DARK CARD) */}
            <div className="grid lg:grid-rows-[1fr_1fr]">
              {/* Top Image */}
              <div className="relative ">
                <img
                  src="/images/contactbanner.png"
                  alt="Agency team"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Bottom Dark Card */}
              <div className="relative flex items-center justify-center bg-[#3b2330] px-8 py-12 text-center text-white">
                <div className="max-w-sm">
                  <div className="mx-auto grid  w-[50%] place-items-center rounded-2xl border border-white/20 bg-white/10">
                    <BookOpen className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold leading-snug">
                    Educational Resources
                    <br />
                    for Job Seekers
                  </h3>

                  <motion.div className="mt-6 inline-flex overflow-hidden rounded-xl border border-white/20"
                   whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                    <button className="bg-[#ff4d57] px-5 py-3 text-xs font-bold tracking-wider text-white hover:opacity-90 transition">
                      GUIDES & E-BOOKS
                    </button>
                    <button className="grid w-12 place-items-center bg-[#ff4d57] hover:opacity-90 transition">
                      <Download className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>

                {/* small divider line like screenshot */}
                <div className="absolute left-0 top-0 w-[1px] bg-white/10 hidden lg:block" />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="p-8 md:p-12">
              {/* Eyebrow */}
              <WelcomeElement item={"ABOUT OUR AGENCY"} />

              <h2 className=" text-xl font-extrabold leading-tight tracking-tight text-black/90 md:text-4xl">
                Staffing Partners: Reliable & Cost Efficient Recruitment Agency
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
                Long established fact that reader will be distracted the
                readable of pages when looking at its layout. The point using
                lorem ipsum has a more-or-less normal distribution of letters.
              </p>

              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black/70 hover:text-black transition"
              >
                <ArrowRight className="h-4 w-4" />
                MORE ABOUT US
              </Link>

              {/* QUOTE CARD */}
              <motion.div className="mt-5 rounded-3xl bg-[#efe7df] p-6 md:p-7"
               whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                <div className="flex gap-4">
                  <div className="h-10 w-[3px] rounded-full bg-[#ff4d57]" />

                  <p className="text-sm font-semibold leading-relaxed text-black/80">
                    Pathway for both employer and employee.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/kaashtech-logo.png"
                      alt="Founder"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-black/80">
                        Chowdhury
                      </p>
                      <p className="text-xs text-black/50">Founder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
