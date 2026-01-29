"use client";

import Image from "next/image";

export function HeroCarousel({ slides, activeIndex }) {
  const slide = slides[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
      <div className="relative h-[320px] w-full sm:h-[420px]">
        <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h1 className="text-2xl font-semibold text-white sm:text-4xl">{slide.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">{slide.subtitle}</p>
      </div>
    </div>
  );
}