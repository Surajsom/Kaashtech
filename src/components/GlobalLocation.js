"use client";
import dynamic from "next/dynamic";

const GlobalMap = dynamic(
  () => import("@/components/GlobalMap"),
  { ssr: false } // 🔥 KEY FIX
);


export default function GlobalLocation() {
  return (
    <section className="w-full bg-(--foreground) font-[Urbanist]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl md:text-[4rem] font-black text-(--background) leading-none tracking-tighter">
            GLOCAL{" "}
            <span className="font-medium text-black/70">
              (Global &amp; Local)
            </span>{" "}
            <span className="text-red-500">Footprints</span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-black/60 md:text-base font-[Urbanist]">
            We have our own registered entities in each country, with local teams
            on the ground for better support
          </p>
        </div>

        {/* Map */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* responsive image wrapper */}
            <div className="w-full" >
              <GlobalMap/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
