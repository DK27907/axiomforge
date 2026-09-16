"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SolutionData } from "@/lib/solutions-data";

interface SolutionCTAProps {
  data: SolutionData;
}

export function SolutionCTA({ data }: SolutionCTAProps) {
  return (
    <section id="forge" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border p-10 md:p-16 text-center overflow-hidden"
          style={{
            borderColor: `${data.accent}40`,
            backgroundColor: "#0F131C",
            boxShadow: `0 0 80px rgba(${data.accentRgb}, 0.10), inset 0 0 0 1px rgba(${data.accentRgb}, 0.15)`,
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
                background: `radial-gradient(circle, rgba(${data.accentRgb},0.12) 0%, transparent 60%)`,
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] mb-4 leading-tight">
              {data.ctaHeadline}
            </h2>
            <p className="text-base text-[#8B94A7] max-w-xl mx-auto mb-8 leading-relaxed">
              {data.ctaSubline}
            </p>

            <a
              href="mailto:hello@axiomforge.co.ke?subject=Institutional access request"
              className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium transition-all duration-200 text-[#0A0D14]"
              style={{
                backgroundColor: data.accent,
                boxShadow: `0 0 40px rgba(${data.accentRgb}, 0.3)`,
              }}
            >
              {data.ctaButton}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mt-5">
              No sales call · Immediate sandbox access
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}