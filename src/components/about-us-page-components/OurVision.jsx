"use client";

import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">

        {/* Small label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider"
        >
          Our Mission
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          Our Vision for the Future
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 h-[3px] bg-primary rounded-full"
        />

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 text-lg text-gray-600 leading-relaxed"
        >
          We envision a world where geographical boundaries do not limit access
          to opportunity. Our goal is to create a seamless, global talent
          ecosystem where innovative companies can connect with skilled
          professionals, fostering a diverse and inclusive workforce that
          drives technological advancement for everyone. We aim to be the most
          trusted and effective bridge between ambition and achievement in the
          tech industry.
        </motion.p>
      </div>
    </section>
  );
}
