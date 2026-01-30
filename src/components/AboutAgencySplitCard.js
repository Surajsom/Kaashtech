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
    <section className="relative w-full bg-(--foreground) font-[Urbanist] mt-0">
      {/* BACKGROUND SHAPES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-130 w-screen -translate-x-1/2 -translate-y-1/2 bg-[#76b06f4e] [clip-path:polygon(0_50%,18%_62%,35%_52%,50%_64%,68%_54%,82%_68%,100%_56%,100%_100%,0_100%)]" />
      </div>

      <div className="relative mx-auto max-w-max px-6 py-16 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mx-auto grid w-[min(80vw,1100px)] md:w-[min(60vw,1100px)] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:grid-cols-2">
            {/* LEFT SIDE (IMAGE + DARK CARD) */}
            <div className="grid lg:grid-rows-[1fr_1fr]">
              {/* Top Image */}
              <div className="relative ">
                <img
                  src="/images/banner-2.jpg"
                  alt="Agency team"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-top from-black/10 via-transparent to-transparent" />
              </div>

              {/* Bottom Dark Card */}
              <div className="relative flex items-center justify-center bg-(--scrolleddown-background) px-8 py-12 text-center text-white">
                <div className="max-w-sm">
                  <div className="mx-auto grid py-2 w-[50%] place-items-center rounded-2xl border border-white/20 bg-white/10">
                    <BookOpen className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold leading-snug">
                    Educational Resources
                    <br />
                    for Job Seekers
                  </h3>

                  <motion.div
                    className="mt-6 inline-flex overflow-hidden rounded-xl border border-white/20"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <button className="bg-[#F0F8A4] px-5 py-3 text-xs font-bold tracking-wider text-black/50 hover:opacity-90 transition">
                      GUIDES & E-BOOKS
                    </button>

                    <button className="grid w-12 place-items-center bg-[#F0F8A4] hover:opacity-90 transition mx-auto">
                      <a
                        href="./KaashTech_Job_Seeker_Guide.pdf"
                        download
                        aria-label="Download E-Books"
                      >
                        <Download className="text-black/50 " />
                      </a>
                    </button>
                  </motion.div>
                </div>

                {/* small divider line like screenshot */}
                <div className="absolute left-0 top-0 w-px bg-white/10 hidden lg:block" />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="p-8 md:p-12 text-(--background)">
              {/* Eyebrow */}
              <WelcomeElement className="md:text-[10rem] justify-center font-black text-[#1b4c53] leading-none tracking-tighte" item={"ABOUT OUR AGENCY"} />

              <h2 className=" text-5xl md:text-[3rem] mt-3 font-black text-background leading-none tracking-tighter text-center md:text-left">
                Staffing Partners: Reliable & Cost Efficient Recruitment Agency
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed  text-black/55 md:text-base">
                KaashTech is a modern staffing partner helping businesses hire smarter through direct hiring, payrolling, and workforce solutions—connecting the right talent with the right teams.
              </p>

              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black/70 hover:text-black transition"
              >
                <ArrowRight className="h-8 w-4" />
                MORE ABOUT US
              </Link>

              {/* QUOTE CARD */}
              <motion.div
                className="mt-5 rounded-3xl bg-[#76b06f84] p-6 md:p-7"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex gap-4">
                  <div className="h-10 w-0.75 rounded-full bg-[#75B06F]" />

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
