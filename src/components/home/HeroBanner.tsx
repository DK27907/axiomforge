"use client";

import { motion } from "framer-motion";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { TrustStrip } from "./TrustStrip";

export function HeroBanner() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Full-color datacenter image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/hero-datacenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          filter: "saturate(1.4) contrast(1.15) brightness(0.9)",
        }}
      />

      {/* Diagonal color wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,13,20,0.85) 0%, rgba(6,20,35,0.7) 30%, rgba(6,182,212,0.15) 60%, rgba(37,99,235,0.20) 100%)",
        }}
      />

      {/* Radial spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(6,182,212,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Animated pulse glow */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.06) 30%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#00F5A0]/30 bg-[#0A0D14]/60 backdrop-blur-md terminal-font text-xs tracking-widest text-[#00F5A0] uppercase shadow-[0_0_24px_rgba(0,245,160,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_rgba(0,245,160,0.9)] animate-pulse" />
          ODPC Registered · Nairobi · Since 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center leading-[1.05] max-w-5xl drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)]"
        >
          <span className="text-white">Autonomous AI Systems.</span>
          <br />
          <span className="bg-gradient-to-r from-[#00F5A0] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
            Forged for Your Exact Infrastructure.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg text-[#C7CDD8] max-w-2xl text-center leading-relaxed"
        >
          No sales loops. No legacy bloat. We engineer custom, isolated AI
          agents and contextual chatbots built natively for{" "}
          <span className="text-[#00F5A0] font-medium">Kenyan healthcare compliance</span>,{" "}
          <span className="text-[#4F8FFF] font-medium">academic scale</span>, and{" "}
          <span className="text-[#06B6D4] font-medium">enterprise efficiency</span>.
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,13,20,0.5), #0A0D14)",
        }}
      />
    </section>
  );
}