"use client";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-(--background) text-(--foreground) font-[Urbanist]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/images/kaashtech-dark.png')" }}
              ></div>

              <h2 className="text-xxl md:text-xl font-semibold text-(--color-text)">
                Kaashtech
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              We are professional organization that offers specialized expertise
              advice.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-(--color-text) font-semibold mb-4">Service</h3>
            <ul className="space-y-2 md:text-sm text-md">
              <li>UI Design</li>
              <li>Web Design</li>
              <li>Branding</li>
              <li>Webflow</li>
              <li>Development</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-(--color-text) font-semibold mb-4">Company</h3>
            <ul className="space-y-2 md:text-sm text-md">
              <li>
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                {" "}
                <Link href="/workforce-solutions">Workforce Solutions</Link>
              </li>
              <li>
                {" "}
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                {" "}
                <Link href="/it-solutions">IT Solution</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-(--color-text) font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              “Looking for talent or a job? Let’s talk.”
            </p>

            <Link
              href="/contact-us"
              className="bg-yellow-300 cursor-pointer px-12 py-2 rounded-3xl hover:bg-(--scrolleddown-background) hover:text-yellow-300 text-(--background)"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              © 2025 <span className="text-white">Kaashtech</span>
            </p>

            <div className="flex items-center gap-4">
              <span>Follow Us</span>

              <span>
                <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-300 duration-300 hover:scale-110" />
              </span>
              <span>
                <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-300 duration-300 hover:scale-110" />
              </span>
              <span>
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-yellow-300 duration-300 hover:scale-110" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
