"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/60">
      {/* content */}
      <div className="relative z-50 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl border border-border/60" />
              <div>
                <h3 className="text-base font-semibold text-background">
                  YourBrand
                </h3>
                <p className="text-sm text-muted-foreground">
                  Modern workforce solutions.
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Build faster, hire smarter, and scale your team with reliable
              solutions that fit your business.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="rounded-lg border border-border/60 px-3 py-2 text-sm text-background/80 hover:text-background transition"
              >
                Contact
              </a>
              <a
                href="#"
                className="rounded-lg border border-border/60 px-3 py-2 text-sm text-background/80 hover:text-background transition"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-background">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-background transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-background">
                Support
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-background transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-background">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Get product updates and hiring insights directly in your inbox.
            </p>

            <form className="mt-4 flex w-full items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-xl border border-border/60 bg-background/40 px-4 text-sm text-background outline-none placeholder:text-muted-foreground focus:border-border"
              />
              <button
                type="submit"
                className="h-11 rounded-xl border border-border/60 px-4 text-sm text-background/80 hover:text-background transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to receive emails from us.
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-background transition"
            >
              Instagram
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-background transition"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-background transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
