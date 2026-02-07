"use client";

import { X, Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Topstripe from "./Topstripe";
import { motion, AnimatePresence } from "framer-motion";
import {
  INDUSTRIES_WE_SERVE,
  IT_SOLUTIONS,
  WORKFORCE_SOLUTIONS,
} from "@/data/sitemapData";

function MobileLinks({ items }) {
  return items.map((item, index) => (
    <Link key={index} href={item.href} onClick={() => setOpen(false)}>
      {item.label}
    </Link>
  ));
}

function DesktopDropdown({ title, items, align = "left", noScroll = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-(--secondary-foreground) hover:scale-105 transition cursor-pointer">
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`
              absolute top-full mt-3
              w-[520px]
              rounded-xl border border-white/10
              bg-white text-black shadow-xl overflow-hidden
              ${align === "right" ? "right-0" : "left-0"}
            `}
          >
            <div
              className={`
                p-2 grid grid-cols-2 gap-2
                ${noScroll ? "" : "max-h-[380px] overflow-y-auto"}
              `}
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-gray-100 transition"
                >
                  <p className="text-sm font-semibold leading-tight">
                    {item.label}
                  </p>

                  {item.desc && (
                    <p className="text-[11px] text-gray-500 leading-snug mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile panel on ESC
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div
        className={`hidden md:flex items-center justify-between text-sm h-10 
        bg-slate-900 transition-all duration-300 
        ${scrolled ? "-translate-y-full opacity-0 h-0 overflow-hidden" : "translate-y-0"}`}
      >
        <Topstripe />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`w-full transition-all duration-300 z-50 font-[Urbanist] uppercase text-(--foreground)
        ${
          scrolled
            ? "fixed top-0 bg-(--background) backdrop-blur-md shadow-2xl"
            : "relative bg-(--scrolleddown-background) bg-clip-padding backdrop-filter backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-foreground">
          {/* LOGO */}
          <Link href="/" className="text-xl font-semibold">
            <img
              src={
                scrolled
                  ? "/images/kaashtech-logo-final.png"
                  : "/images/kaashtech-logo-final.png"
              }
              alt="logo"
              width={scrolled ? 120 : 140}
              height={scrolled ? 34 : 40}
              className="transition-all duration-300"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase text-foreground">
            {/* No Dropdown */}
            <Link
              href="/"
              className="hover:text-(--secondary-foreground) hover:scale-105 transition"
            >
              Home
            </Link>

            {/* Workforce Solutions Dropdown */}
            <DesktopDropdown
              title="WORKFORCE SOLUTIONS"
              className="hover:text-(--secondary-foreground) hover:scale-105 transition"
              items={WORKFORCE_SOLUTIONS}
            />

            {/* Industries We Serve Dropdown */}
            <DesktopDropdown
              title="INDUSTRIES WE SERVE"
              items={INDUSTRIES_WE_SERVE}
            />

            {/* IT Solutions Dropdown */}
            <DesktopDropdown
              title="IT SOLUTIONS"
              align="right"
              noScroll={true}
              items={IT_SOLUTIONS}
            />

            {/* No Dropdown */}
            <Link
              href="/contact-us"
              className="hover:text-(--secondary-foreground) hover:scale-105 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/about-us"
              className="hover:text-(--secondary-foreground) hover:scale-105 transition"
            >
              About Us
            </Link>
          </div>

          {/* ================= RIGHT ICONS ================= */}
          <div className="flex items-center gap-4 md:hidden z-5000">
            <button onClick={() => setOpen(true)} className="relative z-10">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Prevent layout jump when navbar becomes fixed */}
      {scrolled && <div className="h-16" />}

      {/* ================= MOBILE OVERLAY + PANEL ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 z-40 font-[Urbanist]"
              onClick={() => setOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 font-[Urbanist]"
            >
              <div className="p-6 h-full overflow-y-auto text-blue-950">
                <button className="text-xl mb-6" onClick={() => setOpen(false)}>
                  <X />
                </button>

                {/* MOBILE LINKS */}
                <div className="space-y-4 text-lg font-medium flex flex-col text-blue-950">
                  <Link href="/" onClick={() => setOpen(false)}>
                    Home
                  </Link>

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      Workforce Solutions
                    </p>
                    <div className="flex flex-col gap-3 pl-3 text-base">
                      <MobileLinks items={WORKFORCE_SOLUTIONS} />
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      Industries We Serve
                    </p>
                    <div className="flex flex-col gap-3 pl-3 text-base">
                      <MobileLinks items={INDUSTRIES_WE_SERVE} />
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      IT Solutions
                    </p>
                    <div className="flex flex-col gap-3 pl-3 text-base">
                      <MobileLinks items={IT_SOLUTIONS} />
                    </div>
                  </div>
                  <Link href="/about-us" onClick={() => setOpen(false)}>
                    About Us
                  </Link>

                  <Link href="/contact-us" onClick={() => setOpen(false)}>
                    Contact Us
                  </Link>
                </div>

                <hr className="my-6" />

                {/* ABOUT US */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">About Us</h3>
                  <p className="text-sm text-gray-600">
                    Our mission is to empower organizations by providing
                    intelligent and scalable workforce solutions. We are
                    dedicated to identifying and nurturing the world's top
                    technology talent, fostering connections that drive
                    innovation and build diverse teams that reflect the global
                    marketplace.
                  </p>
                </div>

                <hr className="my-6" />

                {/* CONTACT DETAILS */}
                <div className="space-y-2 text-sm font-[Urbanist]">
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p>📍 30 N Gould St Ste R, Sheridan WY 82801</p>
                  <p>✉️ contact@kaashtech.com</p>
                  {/* <p>📞 +61 123 456 789</p> */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
