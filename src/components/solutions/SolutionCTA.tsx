"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

interface SolutionCTAProps {
  data: SolutionData;
}

export function SolutionCTA({ data }: SolutionCTAProps) {
  return (
    <section id="forge" className="relative py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border p-10 md:p-16 text-center overflow-hidden bg-white shadow-md"
          style={{
            borderColor: `${data.accent}40`,
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-[600px] h-[600px] rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(${data.accentRgb},0.08) 0%, transparent 60%)`,
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              {data.ctaHeadline}
            </h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              {data.ctaSubline}
            </p>

            <a
              href="mailto:info@axiomforge.co.ke?subject=Institutional access request"
              className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 text-white shadow-md hover:shadow-lg"
              style={{
                backgroundColor: data.accent,
              }}
            >
              {data.ctaButton}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-400 mt-5">
              No sales call · Immediate sandbox access
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}