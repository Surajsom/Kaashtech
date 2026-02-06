import Image from "next/image";
import Hero from "@/components/Hero";
import StaffingToggleSection from "@/components/StaffingToggleSection";
import AboutAgencySplitCard from "@/components/AboutAgencySplitCard";
import StaffingSolutionsMovingHoverCards from "@/components/StaffingSolutionsHoverCards";
import IndustriesHiringSection from "@/components/IndustriesHiringSection";
import WhyChooseUsStaffing from "@/components/WhyChooseUS";
import GlobalLocation from "@/components/GlobalLocation";
import LeadershipSection from "@/components/LeadershipSection";
import GlobalMap from "@/components/GlobalMap";

export default function Home() {
  return (
    <div>
      <Hero  />
      <StaffingToggleSection />
      <AboutAgencySplitCard />
      <StaffingSolutionsMovingHoverCards/>
      <IndustriesHiringSection/>
      <WhyChooseUsStaffing/>
      <GlobalLocation/>
      <LeadershipSection/>
 
    </div>
  );
}
