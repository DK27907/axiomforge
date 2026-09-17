"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

interface SolutionHeroProps {
  data: SolutionData;
}

const SECTOR_BG: Record<string, string> = {
  healthcare: "/images/healthcare-clinic.jpg",
  education: "/images/education-campus.jpg",
  enterprise: "/images/enterprise-office.jpg",
};

const SECTOR_TINT: Record<string, string> = {
  healthcare: "rgba(4, 120, 87, 0.55)",
  education: "rgba(30, 64, 175, 0.55)",
  enterprise: "rgba(14, 116, 144, 0.55)",
};

export function SolutionHero({ data }: SolutionHeroProps) {
  const bgImage = SECTOR_BG[data.key] ?? "/images/hero-datacenter.jpg";
  const tint = SECTOR_TINT[data.key] ?? "rgba(15, 23, 42, 0.55)";

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 py-24 overflow-hidden">
      {/* FULL-CLARITY image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          filter: "brightness(0.58) saturate(1.05) contrast(1.05)",
        }}
      />

      {/* Sector color cinematic overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.45) 35%, ${tint} 75%, rgba(11,17,32,0.65) 100%)`,
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, transparent 25%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Light grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl mb-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor: data.accent,
              boxShadow: `0 0 10px ${data.accent}`,
            }}
          />
          <span
            className="terminal-font text-[11px] tracking-[0.25em] uppercase font-medium text-white"
          >
            {data.heroEyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mb-6 drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)]"
        >
          {data.heroHeadline}
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${data.accent} 0%, #FFFFFF 100%)`,
            }}
          >
            {data.heroHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
        >
          {data.heroSubline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#forge"
            className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            style={{ backgroundColor: data.accent }}
          >
            {data.heroCTA}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#systems"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 backdrop-blur-xl transition-all duration-200"
          >
            See the systems →
          </a>
        </motion.div>
      </div>
    </section>
  );
}