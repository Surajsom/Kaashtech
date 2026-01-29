"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Accelerate your business",
    subtitle: "Sustainable Growth",
    desc: "We bring a fresh, dynamic perspective to every client relationship, driven by a relentless energy that sparks action.",
    image:
     '/hero-banner-meeting-with-client.jpg',
    boxTitle: "Tax\nstrategy",
  },
  {
    id: 2,
    title: "Build smarter teams",
    subtitle: "With Better Hiring",
    desc: "Hire faster with better talent pipelines and build long-term workforce stability for your company.",
    image:
     "/hero-banner-meeting-with-client.jpg",
    boxTitle: "Consulting\nService",
  },
  {
    id: 3,
    title: "Turn data into results",
    subtitle: "Business Insights",
    desc: "Make decisions with real-time insights, analytics, and strategies that improve performance.",
    image:
      "/hero-banner-meeting-with-client.jpg",
    boxTitle: "Business\nAnalyse",
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  // ✅ Auto Slide Change
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[active];

  return (
    <section className="relative w-full h-[90vh] min-h-(550px) overflow-hidden">
        
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
              {currentSlide.title}
              <br />
              <span className="font-normal">{currentSlide.subtitle}</span>
            </h1>

            <p className="text-white/80 mt-5 text-sm md:text-base max-w-lg">
              {currentSlide.desc}
            </p>

            {/* Scroll Down Icon */}
            <div className="mt-8 flex items-center gap-3 text-white/80">
              <span className="text-2xl animate-bounce">↓</span>
              <span className="text-sm">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Boxes */}
      <div className="absolute bottom-8 right-5 md:right-10 z-20 flex gap-3">
        {slides.map((item, index) => {
          const isActive = index === active;

          return (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`w-(120px) md:w-(160px) h-(110px) md:h-(130px) border border-white/40 
              flex flex-col justify-between p-4 text-left transition-all duration-300
              ${
                isActive
                  ? "bg-white/25 backdrop-blur-md"
                  : "bg-transparent hover:bg-white/10"
              }`}
            >
              <span className="text-white/80 text-sm font-semibold">
                {String(item.id).padStart(2, "0")}
              </span>

              <span className="text-white text-base md:text-lg font-medium whitespace-pre-line">
                {item.boxTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Small Up Button (optional like image) */}
      <button
        className="absolute bottom-6 right-6 md:right-8 z-30 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </section>
  );
}
