"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock3,
  BadgeCheck,
  BriefcaseBusiness,
  Smile,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const FEATURES = [
  {
    title: "Faster Hiring Process",
    desc: "We shortlist verified candidates quickly so you can fill roles without delays.",
    icon: Clock3,
    accent: "bg-sky-100 text-sky-600",
  },
  {
    title: "Better Quality Matches",
    desc: "Role-based screening ensures you meet candidates who fit your team and goals.",
    icon: BadgeCheck,
    accent: "bg-violet-100 text-violet-600",
  },
  {
    title: "Flexible Staffing Options",
    desc: "Direct hire, contract, and temporary staffing built around your business needs.",
    icon: BriefcaseBusiness,
    accent: "bg-rose-100 text-rose-600",
  },
  {
    title: "Smooth Candidate Experience",
    desc: "Clear communication, fast updates, and support from start to onboarding.",
    icon: Smile,
    accent: "bg-emerald-100 text-emerald-600",
  },
];

export default function WhyChooseUsStaffing() {
  return (
    <section className="w-full py-5 md:py-20 bg-(--foreground) font-[Urbanist]">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-[#123c56] md:text-4xl">
            Why Choose Us?
          </h2>

          <div className="mx-auto mt-3 h-0.75 w-12 rounded-full bg-[#ff7a45]" />
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12">
          {/* Left cards */}
          <div className="md:col-span-6">
            <div className="space-y-4">
              {FEATURES.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${f.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-extrabold text-[#123c56] md:text-[15px]">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#123c56]/60 md:text-sm">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:col-span-6"
          >
            <div className="relative overflow-hidden rounded-md border border-white/70 bg-white/60 ">
              {/* blue outline like screenshot */}
              <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-4 ring-sky-400/70" />

              <div className="relative aspect-4/3 w-full md:aspect-5/4">
                <Image
                  src="/images/banner-2.jpg"
                  alt="Staffing support"
                  fill
                  className="object-cover"
                  priority
                />

                {/* soft right fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20" />

                {/* bottom blend */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f3f3f3] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
