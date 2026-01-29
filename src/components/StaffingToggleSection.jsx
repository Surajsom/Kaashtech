"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  ArrowRight,
  FileText,
  Umbrella,
  Crown,
  UserCog,
} from "lucide-react";
import WelcomeElement from "@/components/ui/WelcomeElement";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const panel = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function TogglePill({ active, icon: Icon, label, onClick }) {
  return (
    <motion.button
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      onClick={onClick}
      className={
        "group relative flex items-center justify-between nunito-sans gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all " +
        (active
          ? "bg-white shadow-sm border-black/10"
          : "bg-[rgba(0,0,0,0.02)] hover:bg-white border-black/10")
      }
    >
      <span className="flex items-center gap-3">
        <span
          className={
            "grid h-8 w-8 place-items-center rounded-lg border transition nunito-sans" +
            (active ? "bg-rose-50 border-rose-200" : "bg-white border-black/10")
          }
        >
          <Icon
            className={
              "h-4 w-4 " + (active ? "text-rose-500" : "text-black/70")
            }
          />
        </span>
        <span className="text-black/80 nunito-sans text-center md:text-left">{label}</span>
      </span>

      <span
        className={
          "grid h-8 w-8 place-items-center rounded-lg border transition " +
          (active ? "bg-rose-50 border-rose-200" : "bg-white border-black/10")
        }
      >
        <span
          className={
            "text-base leading-none transition-transform " +
            (active ? "-translate-y-[1px]" : "translate-y-[1px]")
          }
        >
          {active ? "↑" : "↓"}
        </span>
      </span>
    </motion.button>
  );
}

export default function StaffingToggleSection() {
  const [mode, setMode] = useState("employers");

  const content =
    mode === "employers"
      ? {
          eyebrow: "Find the Employees",
          title: "Hire Your Next \nCandidate On Eazy Recruitz",
          desc: "We help companies hire faster with verified talent pipelines, flexible staffing, and smart recruitment solutions.",
          points: [
            {
              icon: FileText,
              title: "Understand Your Needs",
              sub: "We align roles, skills, and timelines.",
            },
            {
              icon: Umbrella,
              title: "Find the Perfect Candidate",
              sub: "Screened profiles ready to join.",
            },
          ],
          cta: "Your Required Talent",
        }
      : {
          eyebrow: "Find Your Right Place",
          title: "Explore Your Career Path With Eazy Recruitz",
          desc: "Get matched with the right opportunities, build your profile, and apply with confidence for roles that fit you.",
          points: [
            {
              icon: Crown,
              title: "Executive Opportunities",
              sub: "Leadership and senior roles.",
            },
            {
              icon: UserCog,
              title: "Non Executive Opportunities",
              sub: "Growth roles for every level.",
            },
          ],
          cta: "Your Required Talent",
        };

  return (
    <section className="w-full bg-white font-[Urbanist]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-10">
        {/* TOP HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-2 text-[11px] tracking-widest text-rose-500">
            <WelcomeElement item={"WELCOME TO KAASTECH RECRUITZ"} />
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black/90 md:text-5xl">
            Modern Day Staffing Agency
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/50 md:text-base">
            Long established fact that a reader will be distracted by the
            readable content of a page.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-12 grid items-center md:gap-10 lg:grid-cols-2 justify-center font-mono">
          {/* LEFT ILLUSTRATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="order-2 lg:order-1"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="relative  w-full max-w-[520px]">
              <div className="absolute -inset-6 rounded-[32px] bg-[rgba(0,0,0,0.02)] blur-2xl" />

              {/* Replace with your image */}
              <img
                src="/images/StaffingToggleSection.jpg"
                alt="Staffing illustration"
                className="relative w-full rounded-3xl"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="order-1 lg:order-2 md:w-[35vw] sm:p-7 mx-auto "
            
          >
            {/* TOGGLE BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 justify-center font-sans m-5">
              <TogglePill
                active={mode === "employers"}
                icon={Briefcase}
                label="For Employers"
                onClick={() => setMode("employers")}
                className="grow"
                
              />

              <TogglePill
                active={mode === "employees"}
                icon={Users}
                label="For Employees"
                onClick={() => setMode("employees")}
                className="grow "
              />
            </div>

            {/* SWITCHING CONTENT */}
            <motion.div
              key={mode}
              variants={panel}
              initial="hidden"
              animate="show"
              className="mt-6"
            >
              <p className="text-xs text-center md:text-left font-semibold uppercase tracking-widest text-rose-500">
                {content.eyebrow}
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-center leading-tight text-black/90 md:text-4xl">
                {content.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
                {content.desc}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.points.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[rgba(0,0,0,0.02)] p-4 md:justify-center"
                  >
                    <div className="grid h-11 w-11 place-items-center md:my-auto rounded-2xl bg-white border border-black/10">
                      <p.icon className="h-5 w-5 text-black/70 " />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-black/80">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-black/50">{p.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/"
               
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black/80 hover:text-black transition"
              >
                <ArrowRight className="h-4 w-4 hover:color-green-300" />
                <span className="hover:text-green-300">Your Required Talent</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
