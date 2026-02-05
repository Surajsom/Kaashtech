"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Linkedin,
  UserCircle2,
  Building2,
  Paperclip,
  CheckCircle2,
  Globe2,
  MapPin,
  Mail,
  ArrowUpRight,
  Phone,
  Clock ,
} from "lucide-react";

export default function ContactUsPage() {
  const [userType, setUserType] = useState("employer");
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // ✅ NEW STATES
  const [fileError, setFileError] = useState("");
  const [fileName, setFileName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setFileError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const file = form.attachment?.files?.[0];

    // ✅ FILE VALIDATION (ONLY FOR CANDIDATE)
    if (userType === "employee" && file) {
      if (file.type !== "application/pdf") {
        setFileError("Only PDF files are allowed");
        setResult("");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be under 5MB");
        setResult("");
        return;
      }
    }

    formData.append("access_key", "8b5ef8ba-9f7d-41ca-b024-583c159b6b44");
    formData.append("subject", `Website Submission: ${userType}`);
    formData.append("from_name", "Contact Page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        setFileName("");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-[#f9faed] min-h-screen font-sans pb-20 selection:bg-[#1b4c53] selection:text-white">
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#1b4c53"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-8xl lg:text-[10rem] font-black text-[#1b4c53] leading-[0.8] tracking-tighter uppercase mb-8 text-center md:text-left">
              Let's <br />
              <span className="italic font-light text-7xl md:text-9xl text-[#3a7e88]">
                Connect.
              </span>
            </h1>

            <p className="text-[#1b4c53]/60 text-xl max-w-md font-medium text-center md:text-left justify-center">
              Transforming businesses and careers through strategic IT
              synchronization.
            </p>

            <div className="mt-12 flex mx-15 md:mx-0 md:mr-35 p-1.5 bg-[#1b4c53]/5 rounded-4xl border border-[#1b4c53]/10 md:flex-row flex-col justify-center md:justify-around">
              <button
                onClick={() => {
                  setUserType("employer");
                  setIsSuccess(false);
                }}
                className={`px-3 md:px-7 py-5 grow  rounded-[1.6rem] font-bold justify-center md:justify-start transition-all flex items-center gap-3 ${
                  userType === "employer"
                    ? "bg-[#1b4c53] text-[#f9faed]"
                    : "text-[#1b4c53]/40"
                }`}
              >
                <Building2 size={18} /> Employer
              </button>

              <button
                onClick={() => {
                  setUserType("employee");
                  setIsSuccess(false);
                }}
                className={`px-3 md:px-7 py-5 grow rounded-[1.6rem] font-bold transition-all justify-center md:justify-start flex items-center gap-3 ${
                  userType === "employee"
                    ? "bg-[#1b4c53] text-[#f9faed]"
                    : "text-[#1b4c53]/40"
                }`}
              >
                <UserCircle2 size={18} /> Candidate
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <motion.div className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(27,76,83,0.15)] border border-[#1b4c53]/5">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                onSubmit={onSubmit}
                encType="multipart/form-data"
                className="space-y-8"
              >
                {/* NAME & EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-[#f9faed] rounded-3xl p-5"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-[#f9faed] rounded-3xl p-5"
                  />
                </div>

                {userType === "employer" ? (
                  <input
                    name="company"
                    placeholder="Company Name"
                    className="w-full bg-[#f9faed] rounded-3xl p-5"
                  />
                ) : (
                  <div className="space-y-4 text-center">
                    <label className="group w-full flex flex-col items-center justify-center border-2 border-dashed rounded-3xl p-10 cursor-pointer">
                      <Paperclip />
                      <span className="font-bold">
                        {fileName || "Upload Resume (PDF only)"}
                      </span>
                      <input
                        type="file"
                        name="attachment"
                        accept=".pdf"
                        id="attachment"
                        className="hidden"
                        onChange={(e) => {
                          setFileName(e.target.files[0]?.name || "");
                          setFileError("");
                        }}
                      />
                    </label>
                    {fileError && (
                      <p className="text-red-500 text-xs">{fileError}</p>
                    )}
                  </div>
                )}

                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-[#f9faed] rounded-3xl p-5 resize-none"
                />

                <button
                  type="submit"
                  disabled={result === "Sending...."}
                  className="w-full bg-[#1b4c53] text-[#f9faed] p-7 rounded-3xl font-black text-xl flex justify-center gap-3"
                >
                  {result === "Sending...." ? "SENDING..." : "SYNC NOW"}
                  <Send />
                </button>
              </motion.form>
            ) : (
              <motion.div className="text-center py-20">
                <CheckCircle2 size={64} className="mx-auto text-[#3a7e88]" />
                <h2 className="text-5xl font-black mt-6 text-[#1b4c53]">
                  Submission Received
                </h2>
                <p className="text-[#1b4c53]/60 mt-2">
                  We will reach out shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="px-5 bg-[#f9faed] border-t border-[#1b4c53]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 pb-15 h-fit lg:gap-0 rounded-[4rem] overflow-hidden shadow-2xl bg-white border border-[#1b4c53]/5">
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div className="p-12 lg:p-20 bg-[#1b4c53] text-[#f9faed] flex flex-col justify-center relative overflow-hidden">
            {/* Decorative Blueprint Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="mapGrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#f9faed"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#3a7e88]/20 border border-[#3a7e88]/30 text-[#3a7e88] text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <span className="w-2 h-2 rounded-full bg-[#3a7e88] animate-pulse" />{" "}
                Global Headquarters
              </motion.div>

              <h2 className="text-5xl font-black mb-12 tracking-tighter uppercase italic leading-none">
                Visit Our <br />{" "}
                <span className="text-[#3a7e88] not-italic font-light">
                  Nexus.
                </span>
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-14 h-14 border-white/10 flex items-center justify-center group-hover:bg-[#3a7e88] transition-all duration-500">
                    <MapPin
                      size={24}
                      className="text-[#3a7e88] group-hover:text-[#f9faed]"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#3a7e88] mb-1">
                      Office Location
                    </h4>
                    <p className="text-xl font-medium opacity-80 leading-snug">
                      123 Innovation Drive, Tech District
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                   <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#3a7e88] mb-1">
                      Office Location
                    </h4>
                    <p className="text-xl font-medium opacity-80 leading-snug">
                      123 Innovation Drive, Tech District
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 border-white/10 flex items-center justify-center group-hover:bg-[#3a7e88] transition-all duration-500">
                      <Mail
                        size={24}
                        className="text-[#3a7e88] group-hover:text-[#f9faed]"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#3a7e88] mb-1">
                        Email Sync
                      </h4>
                      <p className="text-lg font-bold">contact@kaashtech.com</p>
                    </div>
                  </div>
                 
                </div>

                {/* Operational Hours */}
                <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                   
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#3a7e88]"
                  >
                    Get Directions <ArrowUpRight size={14} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE MAP PLACEHOLDER */}
          <div className="relative h-[500px] lg:h-auto bg-[#f9faed] overflow-hidden">
            {/* Custom Map Styling for the Theme */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050c58!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) opacity(0.8)",
              }}
              allowFullScreen
              loading="lazy"
            />

           
          </div>
        </div>
      </div>
    </div>
  );
}
