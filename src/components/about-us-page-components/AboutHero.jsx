"use client";

import Image from "next/image";
import PageBanner from "../ui/PageBanner";

export default function AboutHero() {
  return (
    <PageBanner
      item={{
        img: "/about/contactbanner.png",
        tittle: "About Company",
        path: "HOME – ABOUT COMPANY",
        desc: "Reliable & Cost Efficient Recruitment Agency Based On US",
      }}
    />
  );
}
