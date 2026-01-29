"use client";

import Image from "next/image";

export default function AboutHero({item}) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src={item.img} // put image in public folder
        alt={item.tittle}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F4D0F]/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <p className="mb-3 text-sm text-white/70">
            {item.path}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {item.tittle}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {item.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
