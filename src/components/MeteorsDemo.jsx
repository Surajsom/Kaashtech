"use client";

import React from "react";
import { Meteors } from "@/components/ui/Meteors";
import Footer from "@/components/Footer";

export function MeteorsDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-full ">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden border border-gray-800 bg-[#008000] shadow-xl">
          <div className=" flex h-7 w-7 items-center justify-center rounded-full border border-gray-500">
           
          </div>

          <Footer />
          {/* Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
