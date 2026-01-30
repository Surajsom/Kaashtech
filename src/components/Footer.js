'use client';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="border-t border-border bg-(--background) text-(--foreground) font-[Urbanist]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <h2 className="text-xl font-semibold text-(--color-text)">
                Kaashtech
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              We are professional organization that offers
              specialized expertise advice.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-(--color-text) font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
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
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-(--color-text) font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Feel free to reach out if you want to collaborate
              with us, or simply chat.
            </p>

            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm text-gray-800 outline-none"
              />
              <button className="px-4 text-slate-900 font-bold">
                ➤
              </button>
            </div>
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
       
              <span><Facebook className="w-5 h-5"/></span>
              <span><Twitter className="w-5 h-5"/></span>
              <span><Linkedin className="w-5 h-5" /></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
