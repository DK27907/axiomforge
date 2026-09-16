"use client";

import { motion } from "framer-motion";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { TrustStrip } from "./TrustStrip";

export function HeroBanner() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(37,99,235,0.04) 30%, transparent 65%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Terminal status line */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 terminal-font text-xs tracking-widest text-[#4B5468] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_rgba(0,245,160,0.8)] animate-pulse" />
          ODPC Registered · Nairobi · Since 2024
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center leading-[1.05] max-w-5xl"
        >
          <span className="text-[#F5F7FA]">Autonomous AI Systems.</span>
          <br />
          <span className="bg-gradient-to-r from-[#00F5A0] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
            Forged for Your Exact Infrastructure.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg text-[#8B94A7] max-w-2xl text-center leading-relaxed"
        >
          No sales loops. No legacy bloat. We engineer custom, isolated AI
          agents and contextual chatbots built natively for{" "}
          <span className="text-[#00F5A0]">Kenyan healthcare compliance</span>,{" "}
          <span className="text-[#2563EB]">academic scale</span>, and{" "}
          <span className="text-[#06B6D4]">enterprise efficiency</span>.
        </motion.p>

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="w-full mt-4"
        >
          <EmailCaptureForm />
        </motion.div>

        {/* Trust strip */}
        <TrustStrip />
      </div>

      {/* Bottom fade — blends hero into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,13,20,0.6), #0A0D14)",
        }}
      />
    </section>
  );
}