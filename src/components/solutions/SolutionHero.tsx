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

export function SolutionHero({ data }: SolutionHeroProps) {
  const bgImage = SECTOR_BG[data.key] ?? "/images/hero-datacenter.jpg";

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.40,
          filter: "saturate(1.3) contrast(1.1) brightness(0.85)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(10,13,20,0.9) 0%, rgba(10,13,20,0.65) 35%, rgba(${data.accentRgb}, 0.15) 70%, rgba(${data.accentRgb}, 0.25) 100%)`,
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, rgba(${data.accentRgb}, 0.18) 0%, transparent 55%)`,
        }}
      />

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${data.accentRgb},0.20) 0%, transparent 60%)`,
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 backdrop-blur-md"
          style={{
            borderColor: `rgba(${data.accentRgb}, 0.4)`,
            backgroundColor: `rgba(${data.accentRgb}, 0.08)`,
            boxShadow: `0 0 32px rgba(${data.accentRgb}, 0.20)`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor: data.accent,
              boxShadow: `0 0 8px ${data.accent}`,
            }}
          />
          <span
            className="terminal-font text-[11px] tracking-[0.25em] uppercase font-medium"
            style={{ color: data.accent }}
          >
            {data.heroEyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mb-6 drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)]"
        >
          {data.heroHeadline}
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${data.accent} 0%, #F5F7FA 100%)`,
            }}
          >
            {data.heroHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#C7CDD8] max-w-2xl leading-relaxed mb-10"
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
            className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: data.accent,
              color: "#0A0D14",
              boxShadow: `0 0 40px rgba(${data.accentRgb}, 0.4), 0 8px 24px rgba(0,0,0,0.4)`,
            }}
          >
            {data.heroCTA}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#systems"
            className="inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-medium text-[#C7CDD8] hover:text-white transition-all duration-200 backdrop-blur-md"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              backgroundColor: "rgba(10,13,20,0.4)",
            }}
          >
            See the systems →
          </a>
        </motion.div>
      </div>
    </section>
  );
}