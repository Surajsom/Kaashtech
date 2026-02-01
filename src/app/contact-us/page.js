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
    <div className="bg-[#f9faed] min-h-screen font-sans selection:bg-[#1b4c53] selection:text-white">
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
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
    </div>
  );
}
