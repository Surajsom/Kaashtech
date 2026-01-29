"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ActiveServiceSelector } from "@/components/ActiveServiceSelector";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import {
  workforceSolutions,
  industriesWeServe,
  itSolutions,
} from "@/lib/sitemapData";
import StaffingToggleSection from "@/components/StaffingToggleSection";
import AboutAgencySplitCard from "@/components/AboutAgencySplitCard";
import StaffingSolutionsHoverCards from "@/components/StaffingSolutionsHoverCards";
import Transition from "@/components/ui/Transition";
import { MeteorsDemo } from "@/components/MeteorsDemo";
import IndustriesHiringSection from "@/components/IndustriesHiringSection";

export default function HomePage() {
  return (
    <>
      <Transition>
        <StaffingToggleSection />
        <AboutAgencySplitCard />
        <StaffingSolutionsHoverCards />
        <IndustriesHiringSection/>
      </Transition>
    </>
  );
}
