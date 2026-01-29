"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Linkedin, UserCircle2, Building2, Paperclip, CheckCircle2 } from "lucide-react";

export default function ContactUsPage() {
  const [userType, setUserType] = useState("employer");
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "173d77a9-cdb3-4731-a043-5280736c8d7f");
    formData.append("subject", `Website Submission: ${userType}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        (event.target).reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-[#f9faed] min-h-screen font-sans selection:bg-[#1b4c53] selection:text-white">
      
      {/* 1. CREATIVE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1b4c53" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT: CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-8xl lg:text-[10rem] font-black text-[#1b4c53] leading-[0.8] tracking-tighter uppercase mb-8">
              Let's <br /> <span className="italic font-light text-9xl text-[#3a7e88]">Connect.</span>
            </h1>
            <p className="text-[#1b4c53]/60 text-xl max-w-md font-medium">
              Transforming businesses and careers through strategic IT synchronization.
            </p>

            {/* SELECTION BOX */}
            <div className="mt-12 inline-flex p-1.5 bg-[#1b4c53]/5 rounded-[2rem] border border-[#1b4c53]/10">
              <button 
                onClick={() => { setUserType("employer"); setIsSuccess(false); }}
                className={`px-10 py-5 rounded-[1.6rem] font-bold transition-all flex items-center gap-3 ${userType === "employer" ? "bg-[#1b4c53] text-[#f9faed] shadow-2xl" : "text-[#1b4c53]/40"}`}
              >
                <Building2 size={18} /> Employer
              </button>
              <button 
                onClick={() => { setUserType("employee"); setIsSuccess(false); }}
                className={`px-10 py-5 rounded-[1.6rem] font-bold transition-all flex items-center gap-3 ${userType === "employee" ? "bg-[#1b4c53] text-[#f9faed] shadow-2xl" : "text-[#1b4c53]/40"}`}
              >
                <UserCircle2 size={18} /> Candidate
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: THE FORM */}
        <motion.div 
          layout
          className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(27,76,83,0.15)] border border-[#1b4c53]/5"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key={userType}
                onSubmit={onSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1b4c53]/40 ml-4">Full Name</label>
                    <input name="name" required placeholder="Jane Doe" className="w-full bg-[#f9faed] rounded-3xl p-5 outline-none focus:ring-2 focus:ring-[#3a7e88] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1b4c53]/40 ml-4">Email Address</label>
                    <input name="email" type="email" required placeholder="jane@company.com" className="w-full bg-[#f9faed] rounded-3xl p-5 outline-none focus:ring-2 focus:ring-[#3a7e88] transition-all" />
                  </div>
                </div>

                {userType === "employer" ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#1b4c53]/40 ml-4">Company</label>
                      <input name="company" placeholder="Acme Inc." className="w-full bg-[#f9faed] rounded-3xl p-5 outline-none" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 text-center">
                    <button type="button" className="w-full bg-[#0077b5] text-white p-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#005c8c] transition-all">
                      <Linkedin size={20} /> Apply with LinkedIn
                    </button>
                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#1b4c53]/10"></span></div>
                      <span className="relative bg-white px-4 text-[10px] font-black text-[#1b4c53]/20 uppercase">Or upload manual</span>
                    </div>
                    <label className="group w-full flex flex-col items-center justify-center border-2 border-dashed border-[#1b4c53]/10 rounded-3xl p-10 hover:bg-[#f9faed] cursor-pointer transition-all">
                      <Paperclip className="text-[#3a7e88] mb-2" />
                      <span className="text-sm font-bold text-[#1b4c53]">Click to upload Resume</span>
                      <input type="file" name="attachment" className="hidden" />
                    </label>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1b4c53]/40 ml-4">Message</label>
                  <textarea name="message" rows={4} placeholder="How can we help?" className="w-full bg-[#f9faed] rounded-3xl p-5 outline-none resize-none" />
                </div>

                <button 
                  type="submit" 
                  disabled={result === "Sending...."}
                  className="w-full bg-[#1b4c53] text-[#f9faed] p-7 rounded-3xl font-black text-xl shadow-2xl shadow-[#1b4c53]/20 flex items-center justify-center gap-4 group"
                >
                  {result === "Sending...." ? "SENDING..." : "SYNC NOW"}
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-[#1b4c53] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <CheckCircle2 size={48} className="text-[#3a7e88]" />
                </div>
                <h2 className="text-5xl font-black text-[#1b4c53] mb-4 uppercase tracking-tighter leading-none">Submission <br /> Received.</h2>
                <p className="text-[#1b4c53]/60 font-medium">We will reach out shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-12 text-[#3a7e88] font-black text-xs uppercase tracking-widest border-b-2 border-[#3a7e88]"
                >
                  Go Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}