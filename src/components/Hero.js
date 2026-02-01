"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Hire Smarter. Grow Faster.",
    subtitle: "Staffing solutions built for modern companies",
    desc: "We connect you with skilled, verified talent quickly—so you can scale teams, reduce hiring time, and stay ahead of the competition.",
    image:
      "/images/ban-1.jpg",
    boxTitle: "Hire Smarter",
  },
  {
    id: 2,
    title: "The Right Talent, Right on Time.",
    subtitle: "From sourcing to onboarding — we handle it all",
    desc: "Whether you need contract, permanent, or project-based hiring, we deliver the right candidates with speed, quality, and confidence.",
    image:
      "/images/ban-2.jpg",
    boxTitle: "Right Talent",
  },
  {
    id: 3,
    title: "Build Teams That Deliver Results.",
    subtitle: "Fast hiring. Better matches. Stronger teams.",
    desc: "Our expert recruiters and smart screening process help you hire top performers who fit your role, culture, and goals.",
    image:
      "/images/ban-3.jpg",
    boxTitle: "Teams",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // ✅ Auto change slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[active];

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] min-h-130 overflow-hidden">
      {/* Background Image */}
     <div className="absolute inset-0 overflow-hidden">
  <Image
    src={currentSlide.image}
    alt="Hero-banner"
    fill
    priority
    className="object-cover scale-105 transition-all duration-700"
  />
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-xl md:max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black text-white/90 leading-none tracking-tighter">
              {currentSlide.title}
              <br />
            </h1>
              <span className="italic font-light text-(--foreground)">{currentSlide.subtitle}</span>

            <p className="text-white/80 mt-2 md:mt-2 text-xs sm:text-sm md:text-base max-w-md md:max-w-lg">
              {currentSlide.desc}
            </p>

            {/* Scroll icon */}
            <div className="mt-6 md:mt-8 flex items-center gap-3 text-white/80">
              <span className="text-xl md:text-2xl animate-bounce">↓</span>
              <span className="text-xs md:text-sm">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Boxes Responsive */}
      <div
        className="
          absolute bottom-6 md:bottom-8 
          left-1/2 md:left-auto md:right-10 
          -translate-x-1/2 md:translate-x-0
          z-20 
          w-[95%] md:w-auto
        "
      >
        <div
          className="
            flex gap-3 
            overflow-x-auto md:overflow-visible
            scrollbar-hide
            px-1
          "
        >
          {slides.map((item, index) => {
            const isActive = index === active;

            return (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`
                  shrink-0
                  w-27.5 sm:w-32.5 md:w-40
                  h-23.75 sm:h-27.5 md:h-32.5
                  border border-white/40
                  flex flex-col justify-between p-3 md:p-4 text-left
                  transition-all duration-300 font-[Urbanist]
                  ${
                    isActive
                      ? "bg-white/25 backdrop-blur-md"
                      : "bg-transparent hover:bg-white/10"
                  }
                `}
              >
                <span className="text-white/80 text-xs md:text-sm font-semibold">
                  {String(item.id).padStart(2, "0")}
                </span>

                <span className="text-white text-sm sm:text-base md:text-lg font-medium whitespace-pre-line">
                  {item.boxTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    
    </section>
  );
}
