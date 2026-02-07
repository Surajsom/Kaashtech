"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Landmark,
  Microscope,
  Factory,
  Fuel,
  Radio,
  Cpu,
  ChevronRight,
} from "lucide-react";
import WelcomeElement from "./ui/WelcomeElement";


const INDUSTRIES = [
  {
    id: "Banking",
    label: "Banking & Finance",
    subtitle: "Secure finance staffing",
    jobsText: "26 Jobs in 10 Different Companies",
    icon: Landmark,
    image:
      "/images/pagesimages/industry-finance-bg.png",
  },
  {
    id: "Life-Science",
    label: "Life Science",
    subtitle: "Research-ready teams",
    jobsText: "14 Jobs in 6 Different Companies",
    icon: Microscope,
    image:
      "/images/pagesimages/industry-lifescience-bg.png",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    subtitle: "MProduction & plant talent",
    jobsText: "32 Jobs in 12 Different Companies",
    icon: Factory,
    image:
      "/images/pagesimages/industries-manufacturing-bg.png",
  },
  {
    id: "Telecom",
    label: "Telecom",
    subtitle: "Network & telecom staffing",
    jobsText: "19 Jobs in 8 Different Companies",
    icon: Radio,
    image:
      "/images/pagesimages/industry-telecom-bg.png",
  },
  {
    id: "Technology",
    label: "Technology",
    subtitle: "Top tech professionals",
    jobsText: "40 Jobs in 15 Different Companies",
    icon: Cpu,
    image:
      "/images/pagesimages/industry-technology-bg.png",
  },
  {
    id: "Oil&Gas",
    label: "Oil & Gas",
    subtitle: "Energy workforce solutions",
    jobsText: "21 Jobs in 9 Different Companies",
    icon: Fuel,
    image:
      "/images/pagesimages/industry-oilgas-bg.png",
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
    <section className="w-full bg-(--background) font-[Urbanist]">
      <div className="mx-auto w-full max-w-350 px-4 py-10 md:px-8 md:py-14">
        <div className="relative overflow-hidden rounded-3xl">
          {/* subtle pattern background */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full border border-white/15" />
            <div className="absolute left-24 top-28 h-85 w-85 rounded-full border border-white/10" />
            <div className="absolute -bottom-44 left-10 h-130 w-130 rounded-full border border-white/10" />
            <div className="absolute right-20 top-12 h-105 w-105 rounded-full border border-white/10" />
            <div className="absolute right-16 bottom-10 h-60 w-60 rounded-full border border-white/10" />
          </div>

          {/* content wrapper */}
          <div className="relative grid min-h-85 grid-cols-1 gap-8 bg-(--background) p-6 md:min-h-95 md:grid-cols-12 md:p-10">
            {/* LEFT PANEL */}
            <div className="md:col-span-5 items-start">
              <div className="flex flex-col">
                <WelcomeElement className="justify-start px-4 text-(--foreground)" item="OUR SERVICE AREAS" />
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
                      className={`group flex w-full items-center gap-4 rounded-sm px-3 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                        isActive
                          ? "bg-transparent hover:bg-white/5"
                          : "bg-transparent hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`grid h-11 w-11 place-items-center rounded-sm border transition-all duration-300 ${
                          isActive
                            ? "border-(--secondary-foreground)/60 bg-(--secondary-foreground)/15"
                            : "border-white/10 bg-white/5"
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
                            isActive ? "text-(--secondary-foreground)" : "text-white"
                          }`}
                        >
                          {item.label}
                        </p>
                        <div
                          className={`mt-3 h-0.5 transition-all duration-300 ${
                            isActive ? "w-full bg-(--secondary-foreground)" : "w-4 bg-white/10"
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
                className={`relative h-60 overflow-hidden rounded-sm transition-opacity duration-300 md:h-full ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-(--background) via-(--background)/35  to-transparent" />

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
