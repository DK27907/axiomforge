"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function VaultHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center px-6 py-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.03) 30%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/5 mb-6"
        >
          <ShieldCheck size={12} className="text-[#06B6D4]" />
          <span className="terminal-font text-[10px] tracking-[0.2em] uppercase text-[#06B6D4]">
            Architecture Vault · Open Audit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-[1.05] max-w-4xl mb-6"
        >
          We Don&apos;t Ask You To Trust Us.
          <br />
          <span className="text-[#06B6D4]">We Ask You To Verify Us.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#8B94A7] max-w-2xl leading-relaxed"
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