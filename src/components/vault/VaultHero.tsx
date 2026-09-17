"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function VaultHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center px-6 py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/vault-servers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.38,
          filter: "saturate(1.5) contrast(1.15) brightness(0.85)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,13,20,0.9) 0%, rgba(6,182,212,0.15) 50%, rgba(37,99,235,0.22) 100%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, rgba(6,182,212,0.20) 0%, transparent 55%)",
        }}
      />

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#06B6D4]/50 bg-[#06B6D4]/10 backdrop-blur-md mb-6"
          style={{ boxShadow: "0 0 32px rgba(6,182,212,0.25)" }}
        >
          <ShieldCheck size={13} className="text-[#06B6D4]" />
          <span className="terminal-font text-[11px] tracking-[0.25em] uppercase text-[#06B6D4] font-medium">
            Architecture Vault · Open Audit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mb-6 drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)]"
        >
          We Don&apos;t Ask You To Trust Us.
          <br />
          <span className="bg-gradient-to-r from-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
            We Ask You To Verify Us.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#C7CDD8] max-w-2xl leading-relaxed"
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