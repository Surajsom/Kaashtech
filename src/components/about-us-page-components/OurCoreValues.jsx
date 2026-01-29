"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Handshake } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurCoreValues() {
  return (
    <section className="relative bg-[#4b2e35] py-24 overflow-hidden">
      {/* soft circle background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-red-300">
            Our Core Values
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Principles That Guide Everything We Do
          </h2>

          <p className="mt-5 text-white/70">
            Principles that guide every decision we make and every interaction
            we have.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* Card 1 */}
          <motion.div
            variants={item}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-red-300/40 transition"
          >
            <ShieldCheck className="h-10 w-10 text-red-300 mb-6" />

            <h3 className="text-xl font-semibold text-white mb-4">
              Integrity First
            </h3>

            <p className="text-white/70 leading-relaxed">
              We believe that trust is the foundation of any successful
              partnership. We are committed to operating with unwavering
              honesty, transparency, and ethical principles in all our
              interactions with clients, candidates, and team members. Doing
              the right thing is not just a policy; it&apos;s our promise.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-red-300/40 transition"
          >
            <Lightbulb className="h-10 w-10 text-red-300 mb-6" />

            <h3 className="text-xl font-semibold text-white mb-4">
              Driven by Innovation
            </h3>

            <p className="text-white/70 leading-relaxed">
              The technology landscape is in a constant state of evolution, and
              so are we. We embrace change, encourage curiosity, and constantly
              seek new and better ways to serve our clients and candidates. We
              leverage cutting-edge tools and a forward-thinking mindset to stay
              ahead of the curve and deliver solutions built for tomorrow.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-red-300/40 transition"
          >
            <Handshake className="h-10 w-10 text-red-300 mb-6" />

            <h3 className="text-xl font-semibold text-white mb-4">
              Commitment to Partnership
            </h3>

            <p className="text-white/70 leading-relaxed">
              We view our clients and candidates as long-term partners in
              success. We invest the time to understand their unique goals and
              challenges, building lasting relationships based on mutual trust,
              respect, and shared success. Your victory is our victory, and we
              are dedicated to providing the support and expertise needed to
              achieve it.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
