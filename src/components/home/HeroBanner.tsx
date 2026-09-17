"use client";

import { motion } from "framer-motion";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { TrustStrip } from "./TrustStrip";

export function HeroBanner() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* FULL-CLARITY image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/hero-datacenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          filter: "brightness(0.62) saturate(0.95) contrast(1.05)",
        }}
      />

      {/* Cinematic color wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,17,32,0.72) 0%, rgba(15,23,42,0.55) 40%, rgba(14,116,144,0.35) 75%, rgba(30,64,175,0.45) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(11,17,32,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl terminal-font text-xs tracking-widest text-white uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
          ODPC Registered · Nairobi · Since 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center leading-[1.05] max-w-5xl text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]"
        >
          <span>Autonomous AI Systems.</span>
          <br />
          <span className="bg-gradient-to-r from-[#6EE7B7] via-[#67E8F9] to-[#93C5FD] bg-clip-text text-transparent">
            Forged for Your Exact Infrastructure.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg text-white/90 max-w-2xl text-center leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
        >
          No sales loops. No legacy bloat. We engineer custom, isolated AI
          agents and contextual chatbots built natively for{" "}
          <span className="text-[#6EE7B7] font-semibold">Kenyan healthcare compliance</span>,{" "}
          <span className="text-[#93C5FD] font-semibold">academic scale</span>, and{" "}
          <span className="text-[#67E8F9] font-semibold">enterprise efficiency</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="w-full mt-4"
        >
          <EmailCaptureForm />
        </motion.div>

        <TrustStrip />
      </div>

      {/* Bottom fade — very short, dark only. Next section handles transition */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(11,17,32,0.6))",
        }}
      />
    </section>
  );
}