"use client";

import Image from "next/image";
import { useState } from "react";

export default function IndustriesOverview({ data }) {
  const [active, setActive] = useState(data[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* LEFT SIDE */}
      <div className="lg:col-span-2">
        <span className="text-sm uppercase text-green-600 font-semibold">
          Industries We Serve
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Understanding Your HR Needs Better
        </h2>

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={active?.pagedata?.img || "/sitemap-images/default.jpg"}
            alt={active.label}
            width={900}
            height={500}
            className="w-full h-[360px] object-cover"
          />
        </div>

        {/* TEXT */}
        <h3 className="text-xl font-semibold mb-2">
          {active.label}
        </h3>

        <p className="text-gray-600 mb-4">
          {active?.pagedata?.description || active.desc}
        </p>

        <p className="text-gray-500">
          We help companies in the {active.label} industry hire faster, reduce
          risk, and scale with confidence.
        </p>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="space-y-3">
        {data.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item)}
            className={`w-full text-left px-5 py-4 rounded-lg border transition flex justify-between items-center
              ${
                active.label === item.label
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-50 hover:bg-green-50 border-gray-200"
              }
            `}
          >
            <div>
              <p className="font-medium">{item.label}</p>
              <span className="text-sm opacity-80">{item.desc}</span>
            </div>
            <span className="text-lg">○</span>
          </button>
        ))}
      </div>

    </section>
  );
}
