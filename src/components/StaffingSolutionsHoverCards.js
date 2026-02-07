"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, User2, Briefcase } from "lucide-react";
import WelcomeElement from "./ui/WelcomeElement";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import cardsmergedata from"../lib/cardsdatmerge"

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const carddat = cardsmergedata();
export default function StaffingSolutionsMovingHoverCards() {
  return (
    <section className="relative w-full font-[Urbanist] bg-(--foreground) ">
      {/* Background zig shape */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[55%] h-130 w-350 -translate-x-1/2 -translate-y-1/2 bg-[#76b06f4e] [clip-path:polygon(0_40%,15%_52%,30%_45%,45%_58%,60%_48%,75%_62%,100%_50%,100%_100%,0_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:pt-20 ">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <WelcomeElement className="md:text-[10rem] justify-center font-black text-(--background) leading-none tracking-tighte" item="SOLUTIONS WE PROVIDE" />

          <h2 className="text-5xl md:text-[4rem] font-black text-(--background) leading-none tracking-tighter">
            Inspiring Staffing Solutions
          </h2>

          <p className="font-[Urbanist] text-(--background) text-md md:text-lg mt-3">
            Future-ready staffing solutions built to connect great companies with great talent.
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <div className="mt-14">
          <InfiniteMovingCards
            items={carddat}
            direction="right" // ✅ left or right
            speed="slow" // fast | normal | slow
            pauseOnHover={true} // pause when mouse on slider
            className="w-full"
            renderItem={(c, i) => (
              <motion.a
                href={c.href}
                className="group/card relative w-[320px] cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-md shadow-[0_18px_55px_rgba(0,0,0,0.14)]">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover/card:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover/card:bg-black/35" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-10 opacity-0 transition duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                    <div className="mx-5 mb-5 overflow-hidden rounded-lg">
                      <div className="bg-(--background) px-8 py-4 text-center text-sm text-white/80">
                        {c.desc}
                      </div>
                      <div className="bg-(--scrolleddown-background) px-8 py-3 text-center text-xs font-bold tracking-widest text-white">
                        <span className="inline-flex items-center justify-center gap-2">
                          <ArrowRight className="h-4 w-4" />  
                          MORE DETAILS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 top-[68%] w-[78%] -translate-x-1/2 rounded-lg border border-black/10 bg-(--primary-foreground) px-5 py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition duration-300 group-hover/card:translate-y-2 group-hover/card:opacity-0">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl">
                    <c.icon className="h-5 w-5 text-black/60 " />
                  </div>
                  <p className="mt-3 text-base font-bold text-black/60">
                    {c.title}
                  </p>
                </div>

                <p className="mt-10 mb-20 text-center text-[11px] font-bold tracking-widest text-black/60">
                  MORE DETAILS
                </p>
              </motion.a>
            )}
          />
        </div>
      </div>
    </section>
  );
}
