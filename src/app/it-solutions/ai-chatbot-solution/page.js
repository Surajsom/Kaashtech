"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Bot, MessageSquare, BrainCircuit, Zap, ArrowRight, Languages, Clock, ShieldCheck } from "lucide-react";

const pillars = [
  { title: "NLP Integration", icon: BrainCircuit, desc: "Advanced Natural Language Processing for human-like understanding." },
  { title: "24/7 Automation", icon: Clock, desc: "Instant customer support without the need for human intervention." },
  { title: "Multi-Platform", icon: MessageSquare, desc: "Deploy across WhatsApp, Web, and Social Media seamlessly." },
  { title: "Self-Learning", icon: Bot, desc: "Bots that evolve and improve based on every user interaction." },
];

export default function AIChatbotPage() {
    const { scrollYProgress } = useScroll();
    // Unique parallax for direct hire - subtle horizontal shift
    const xLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div className="bg-[#f9faed] py-12 min-h-screen font-sans selection:bg-[#1b4c53] selection:text-white">


      {/* HERO SECTION AND BACKGROUND ANIMATION */}
      <section className="relative flex items-center justify-center overflow-hidden ">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ x: xLeft }}
          className="absolute top-[15%] left-[-5%] w-[300px] h-[300px] border border-[#1b4c53]/10 rounded-[3rem] rotate-12 pointer-events-none"
        />
        <motion.div
          style={{ x: xRight }}
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] border border-[#1b4c53]/5 rounded-full pointer-events-none"
        />

        <div className="text-center max-w-4xl">

          <div className="inline-block mb-8 px-6 py-2 rounded-full border border-[#1b4c53] text-[#1b4c53] text-sm font-bold uppercase tracking-widest">
            AI & Automation
          </div>
          <h1 className="text-7xl px-2 md:text-[9rem] font-black text-[#1b4c53] leading-none tracking-tighter p-6">
            INTELLIGENT <br /> <span className="italic font-light text-[#3a7e88]">CONVERSE.</span>
          </h1>
          <p className="md:mt-10 mt-4 text-xl font-[Urbanist] px-2 text-[#1b4c53]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Revolutionize your customer experience with intelligent, 24/7 AI-driven chatbots that convert conversations into growth.
          </p>
        </div>
      </section>

      {/* CORE CONTENT SECTION - DARK GREEN */}
      <section className="bg-[#1b4c53] py-32 px-6 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#f9faed] leading-tight mb-8">
                Human logic, <br /> Digital speed.
              </h2>
              <div className="w-24 h-1 bg-[#3a7e88] mb-10" />
              <p className="text-[#f9faed]/60 text-lg leading-relaxed mb-8 font-[Urbanist]">
                Our chatbot solutions integrate seamlessly with your existing CRM and support tools, providing a unified experience for your customers while drastically reducing manual workload.
              </p>
              <div className="flex items-center gap-4 text-[#3a7e88] font-bold">
                <Languages size={24} /> <span>Native Support for 50+ Global Languages</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <div
                  key={i}
                  className="p-10 border border-[#f9faed]/10 rounded-[3rem] bg-[#113136] hover:border-[#3a7e88] transition-colors group"
                >
                  <item.icon className="text-[#3a7e88] mb-6 group-hover:text-[#f9faed] transition-colors" size={40} />
                  <h4 className="text-[#f9faed] text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#f9faed]/40 text-sm leading-relaxed font-[Urbanist]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LIGHTING BORDER CARDS - NO BACKGROUND MOTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Sentiment Analysis",
                detail: "Our bots don't just read words—they understand emotions, allowing for complex empathetic routing of support tickets.",
              },
              {
                title: "Lead Qualification",
                detail: "Automate your sales funnel by having your bot qualify leads and book meetings directly into your team's calendar.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative p-[1px] rounded-[4rem] overflow-hidden bg-[#3a7e88]/30 hover:bg-[#3a7e88] transition-all duration-500"
              >
                <div className="relative bg-[#1b4c53] p-16 rounded-[3.9rem] h-full">
                  <h3 className="text-[#f9faed] text-3xl font-bold mb-6 tracking-tighter">{card.title}</h3>
                  <p className="text-[#f9faed]/50 text-xl leading-relaxed font-light italic">"{card.detail}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#f9faed] px-6 my-18">
        <div className="max-w-5xl mx-auto bg-[#1b4c53] rounded-[4rem] p-20 text-center shadow-2xl">
          <Bot className="mx-auto mb-8 w-16 h-16 text-[#f9faed]" />
          <h2 className="text-[#f9faed] text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Ready to <br /> Automate?
          </h2>
          <button className="bg-[#f9faed] text-[#1b4c53] px-6 py-6 rounded-full font-black text-md md:text-xl hover:scale-105 transition-transform flex items-center gap-4 mx-auto">
            Get Started Now <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}