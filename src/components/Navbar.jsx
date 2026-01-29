"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { WORKFORCE_SOLUTIONS, IT_SOLUTIONS, INDUSTRIES_WE_SERVE } from "@/lib/sitemapData";
import { slugify } from "@/lib/slugify";

function Dropdown({ label, basePath, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg">
          <div className="p-2">
            {items.map((x) => (
              <Link
                key={x.label}
                href={`${basePath}/${slugify(x.label)}`}
                className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                {x.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-bold" style={{ color: "#204814" }}>
          YourBrand
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              {x.label}
            </Link>
          ))}

          <Dropdown label="Workforce Solutions" basePath="/workforce-solutions" items={WORKFORCE_SOLUTIONS} />
          <Dropdown label="Industries We Serve" basePath="/industries-we-serve" items={INDUSTRIES_WE_SERVE} />
          <Dropdown label="IT Solutions" basePath="/it-solutions" items={IT_SOLUTIONS } />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-zinc-100 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: "#204814" }}>
                Menu
              </span>
              <button
                type="button"
                className="rounded-xl p-2 hover:bg-zinc-100"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {nav.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {x.label}
                </Link>
              ))}

              <div className="mt-2">
                <p className="px-3 py-2 text-xs font-semibold text-zinc-500">Workforce Solutions</p>
                {WORKFORCE_SOLUTIONS.map((x) => (
                  <Link
                    key={x.label}
                    href={`/workforce-solutions/${slugify(x.label)}`}
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {x.label}
                  </Link>
                ))}
              </div>

              <div className="mt-2">
                <p className="px-3 py-2 text-xs font-semibold text-zinc-500">Industries We Serve</p>
                {INDUSTRIES_WE_SERVE.map((x) => (
                  <Link
                    key={x.label}
                    href={`/industries-we-serve/${slugify(x.label)}`}
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {x.label}
                  </Link>
                ))}
              </div>

              <div className="mt-2">
                <p className="px-3 py-2 text-xs font-semibold text-zinc-500">IT Solutions</p>
                {IT_SOLUTIONS.map((x) => (
                  <Link
                    key={x.label}
                    href={`/it-solutions/${slugify(x.label)}`}
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
