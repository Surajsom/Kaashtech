"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Truck,
  UtensilsCrossed,
  Factory,
  GraduationCap,
  Code2,
  Headphones,
  ChevronRight,
} from "lucide-react";
import WelcomeElement from "./ui/WelcomeElement";

const INDUSTRIES = [
  {
    id: "logistics",
    label: "Logistics & Services",
    subtitle: "Logistics & Services Industries",
    jobsText: "26 Jobs in 10 Different Companies",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    subtitle: "Hospitality Industries",
    jobsText: "14 Jobs in 6 Different Companies",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    subtitle: "Manufacturing Industries",
    jobsText: "32 Jobs in 12 Different Companies",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "education",
    label: "Education & Government",
    subtitle: "Education & Government Industries",
    jobsText: "19 Jobs in 8 Different Companies",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "software",
    label: "Software/IT",
    subtitle: "Software & IT Industries",
    jobsText: "40 Jobs in 15 Different Companies",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "support",
    label: "Front Line Support",
    subtitle: "Front Line Support Industries",
    jobsText: "21 Jobs in 9 Different Companies",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  },
];
function nextIndustry() {
  setFade(false);
  setTimeout(() => {
    setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    setFade(true);
  }, 200);
}

export default function IndustriesHiringSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const active = useMemo(() => INDUSTRIES[activeIndex], [activeIndex]);

  function nextIndustry() {
    setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
  }

  return (
    <section className="w-full bg-[#3b2730]">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
        <div className="relative overflow-hidden rounded-3xl">
          {/* subtle pattern background */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/15" />
            <div className="absolute left-24 top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
            <div className="absolute -bottom-44 left-10 h-[520px] w-[520px] rounded-full border border-white/10" />
            <div className="absolute right-20 top-12 h-[420px] w-[420px] rounded-full border border-white/10" />
            <div className="absolute right-16 bottom-10 h-[240px] w-[240px] rounded-full border border-white/10" />
          </div>

          {/* content wrapper */}
          <div className="relative grid min-h-[340px] grid-cols-1 gap-8 bg-[#3b2730] p-6 md:min-h-[380px] md:grid-cols-12 md:p-10">
            {/* LEFT PANEL */}
            <div className="md:col-span-5 items-start">
              <div className="flex flex-col">
                <WelcomeElement className="justify-start px-4" item="OUR SERVICE AREAS" />
                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Industries Hiring
                </h2>
              </div>

              <div className="mt-8 space-y-2">
                {INDUSTRIES.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = idx === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setFade(false); // fade out
                        setTimeout(() => {
                          setActiveIndex(idx); // change image
                          setFade(true); // fade in
                        }, 200);
                      }}
                      className={`group flex w-full items-center gap-4 rounded-2xl px-3 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                        isActive
                          ? "bg-transparent hover:bg-white/5"
                          : "bg-transparent hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`grid h-11 w-11 place-items-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-[#ff5a6a]/60 bg-[#ff5a6a]/15"
                            : "border-white/15 bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 transition-colors duration-300 ${
                            isActive ? "text-white/80" : "text-white/80"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <p
                          className={`text-sm font-semibold transition-colors duration-300 md:text-[15px] ${
                            isActive ? "text-[#ff5a6a]" : "text-white"
                          }`}
                        >
                          {item.label}
                        </p>
                        <div
                          className={`mt-3 h-[2px] transition-all duration-300 ${
                            isActive ? "w-full bg-[#ff5a6a]" : "w-4 bg-white/10"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-xs font-semibold transition-colors duration-300 ${
                          isActive ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        {/* small helper */}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative md:col-span-7">
              <div
                className={`relative h-[240px] overflow-hidden rounded-xl transition-opacity duration-300 md:h-full ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* image */}
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.subtitle}
                  fill
                  className="object-cover"
                  priority
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2730]/95 via-[#3b2730]/35 to-transparent" />

                {/* bottom content */}
                <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
                  <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                    {active.subtitle}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {active.jobsText}
                  </p>
                  <div className="mt-4 h-px w-44 bg-white/20" />
                </div>

                {/* next button */}
                <button
                  type="button"
                  onClick={nextIndustry}
                  className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white text-[#3b2730] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 md:bottom-10 md:right-10"
                  aria-label="Next industry"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
