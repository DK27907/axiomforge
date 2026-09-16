"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

interface SolutionHeroProps {
  data: SolutionData;
}

export function SolutionHero({ data }: SolutionHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 py-24 overflow-hidden">
      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${data.accentRgb},0.10) 0%, rgba(${data.accentRgb},0.03) 30%, transparent 65%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="terminal-font text-[11px] tracking-[0.3em] uppercase mb-6"
          style={{ color: data.accent }}
        >
          {data.heroEyebrow}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-[1.05] max-w-4xl mb-6"
        >
          {data.heroHeadline}
          <br />
          <span style={{ color: data.accent }}>{data.heroHighlight}</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#8B94A7] max-w-2xl leading-relaxed mb-10"
        >
          {data.heroSubline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#forge"
            className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: data.accent,
              color: "#0A0D14",
              boxShadow: `0 0 32px rgba(${data.accentRgb}, 0.25)`,
            }}
          >
            {data.heroCTA}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#systems"
            className="text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors"
          >
            See the systems →
          </a>
        </motion.div>
      </div>
    </section>
  );
}