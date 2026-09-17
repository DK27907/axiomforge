"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function VaultHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center px-6 py-24 overflow-hidden">
      {/* FULL-CLARITY image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/vault-servers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          filter: "brightness(0.55) saturate(1.05) contrast(1.05)",
        }}
      />

      {/* Cyan/blue cinematic wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 40%, rgba(14,116,144,0.45) 70%, rgba(30,64,175,0.55) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, transparent 25%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Cyan grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(103,232,249,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#67E8F9]/40 bg-white/10 backdrop-blur-xl mb-6"
        >
          <ShieldCheck size={13} className="text-[#67E8F9]" />
          <span className="terminal-font text-[11px] tracking-[0.25em] uppercase text-[#67E8F9] font-medium">
            Architecture Vault · Open Audit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mb-6 drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)]"
        >
          We Don&apos;t Ask You To Trust Us.
          <br />
          <span className="bg-gradient-to-r from-[#67E8F9] to-[#93C5FD] bg-clip-text text-transparent">
            We Ask You To Verify Us.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
        >
          Every AxiomForge deployment runs inside a physically isolated
          database container. A school&apos;s data can never touch a
          hospital&apos;s pipeline. This page shows you exactly how — in plain
          language and diagrammatic form.
        </motion.p>
      </div>
    </section>
  );
}