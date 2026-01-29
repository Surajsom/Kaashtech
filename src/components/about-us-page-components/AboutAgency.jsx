"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, CircleDashed } from "lucide-react";
import WelcomeElement from "../ui/WelcomeElement";

export default function AboutAgency() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#faf7f4] py-20 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center">
            {/* Grid bg */}
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(#f0dcd1_1px,transparent_1px),linear-gradient(90deg,#f0dcd1_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Bottom image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about/contactbanner.png"
                alt="Team"
                width={420}
                height={300}
                className="object-cover"
              />
            </div>

            {/* Top image */}
            <div className="absolute -top-10 right-0 z-20 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/hero-banner-meeting-with-client.jpg"
                alt="Work"
                width={300}
                height={240}
                className="object-cover"
              />

              {/* PLAY BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition">
                  <Play className="h-6 w-6 text-primary" />
                </span>
              </button>
            </div>

            {/* Bag */}
            <div className="absolute -bottom-8 -left-6 z-20">
              <Image
                src="/about/hero-banner-meeting-with-client.jpg"
                alt="Bag"
                width={90}
                height={90}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <WelcomeElement
              className="lg:justify-start"
              item=" About Our Agency"
            />
            <h2 className="text-3xl mt-5 md:text-4xl font-bold text-gray-900  text-center lg:text-left">
              Commitment to Diversity 
 <br /> & Inclusion
            </h2>

            <p className="mt-5 text-gray-600 max-w-xl text-center lg:text-left">
              At KaashTech, we believe that diverse teams build better products
              and create more innovative solutions. We are committed to
              fostering an inclusive environment where every voice is heard,
              valued, and respected.
            </p>

            <div className="mt-8 mx-10 lg:mx-0 flex flex-row gap-3 items-center rounded-[8px_30px_8px_30px] bg-[#f3e9e3] px-6 py-4 shadow-md">
              <div className="font-medium text-gray-800 text-center mx-auto flex items-center flex-row gap-2">
                <CircleDashed className="text-red-400 w-10 h-10 md:w-5 md:h-5" />
                <p>Pathway for both employer and employee.</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <Image
                src="/images/kaashtech-logo.png"
                alt="Founder"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Kaastech</p>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
              <span className="ml-8 text-3xl italic text-gray-400 font-serif">
                Sign
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-white p-2"
            >
              <X className="h-5 w-5" />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
