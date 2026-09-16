"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import {
  Sector,
  PRICING,
  computePrice,
  formatKES,
  formatUSD,
} from "@/lib/pricing";
import { PricingSlider } from "./PricingSlider";

const SECTOR_ORDER: Sector[] = ["healthcare", "education", "enterprise"];

export function PricingEngine() {
  const [sector, setSector] = useState<Sector>("healthcare");
  const cfg = PRICING[sector];
  const [unitValue, setUnitValue] = useState<number>(cfg.defaultValue);

  function handleSectorChange(next: Sector) {
    setSector(next);
    setUnitValue(PRICING[next].defaultValue);
  }

  const price = computePrice(sector, unitValue);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="terminal-font text-[10px] tracking-[0.3em] uppercase text-[#4B5468] mb-4"
        >
          ◢ Transparent Pricing · No Sales Call
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4 leading-tight"
        >
          Pricing You Can Read
          <br />
          <span className="text-[#8B94A7]">Without Booking A Call.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-[#8B94A7] max-w-2xl mx-auto leading-relaxed"
        >
          Every competitor hides their matrix. We publish ours in KES and USD.
          Slide to your scale. That's your price. No asterisks.
        </motion.p>
      </div>

      {/* Sector tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 justify-center mb-10"
      >
        {SECTOR_ORDER.map((key) => {
          const s = PRICING[key];
          const isActive = key === sector;
          return (
            <button
              key={key}
              onClick={() => handleSectorChange(key)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-xs terminal-font tracking-widest uppercase transition-all duration-200"
              style={{
                borderColor: isActive ? s.accent : "#1F2533",
                color: isActive ? s.accent : "#8B94A7",
                backgroundColor: isActive
                  ? `rgba(${s.accentRgb}, 0.06)`
                  : "transparent",
                boxShadow: isActive
                  ? `0 0 24px rgba(${s.accentRgb}, 0.15)`
                  : "none",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: s.accent,
                  boxShadow: isActive ? `0 0 8px ${s.accent}` : "none",
                  opacity: isActive ? 1 : 0.4,
                }}
              />
              {s.label}
            </button>
          );
        })}
      </motion.div>

      {/* Pricing panel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        {/* Left — slider + includes */}
        <div
          className="lg:col-span-3 rounded-2xl border bg-[#0F131C]/70 backdrop-blur-sm p-8"
          style={{
            borderColor: "#1F2533",
            boxShadow: `0 0 60px rgba(${cfg.accentRgb}, 0.06)`,
          }}
        >
          <PricingSlider cfg={cfg} value={unitValue} onChange={setUnitValue} />

          {/* Divider */}
          <div className="h-px bg-[#1F2533] my-8" />

          {/* Includes list */}
          <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-4">
            Every engagement includes:
          </div>
          <ul className="space-y-3">
            {cfg.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#8B94A7]">
                <Check
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: cfg.accent }}
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — the totals */}
        <div
          className="lg:col-span-2 rounded-2xl border p-8 flex flex-col"
          style={{
            borderColor: `${cfg.accent}30`,
            backgroundColor: `rgba(${cfg.accentRgb}, 0.03)`,
            boxShadow: `0 0 60px rgba(${cfg.accentRgb}, 0.10), inset 0 0 0 1px rgba(${cfg.accentRgb}, 0.15)`,
          }}
        >
          {/* Base implementation */}
          <div className="mb-7">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-2">
              Base Implementation
            </div>
            <div
              className="terminal-font text-2xl font-semibold tracking-tight"
              style={{ color: cfg.accent }}
            >
              <AnimatedNumber value={price.implementation} formatter={formatKES} />
            </div>
            <div className="text-xs text-[#4B5468] mt-1">
              One-time · 4-6 week delivery
            </div>
          </div>

          {/* Monthly */}
          <div className="mb-7">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-2">
              Monthly Operations
            </div>
            <div
              className="terminal-font text-2xl font-semibold tracking-tight"
              style={{ color: cfg.accent }}
            >
              <AnimatedNumber value={price.monthly} formatter={formatKES} />
              <span className="text-sm text-[#8B94A7] font-normal">/mo</span>
            </div>
            <div className="text-xs text-[#4B5468] mt-1">
              Includes monitoring · scaling · attestation
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1F2533] mb-7" />

          {/* First-year total */}
          <div className="mb-8">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-2">
              First-Year Total
            </div>
            <div className="terminal-font text-3xl font-bold tracking-tight text-[#F5F7FA]">
              <AnimatedNumber value={price.firstYearUSD} formatter={formatUSD} />
            </div>
            <div className="text-xs text-[#4B5468] mt-1">
              <AnimatedNumber value={price.firstYearTotal} formatter={formatKES} /> at KES {129}/USD
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <a
              href="#forge"
              className="group flex items-center justify-center gap-2 w-full rounded-lg py-3 text-sm font-medium transition-all duration-200 text-[#0A0D14]"
              style={{ backgroundColor: cfg.accent }}
            >
              Lock This Quote
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] text-center mt-3">
              No sales call required
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Numbers that animate smoothly between values.
 */
function AnimatedNumber({
  value,
  formatter,
}: {
  value: number;
  formatter: (n: number) => string;
}) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={Math.round(value)}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
      >
        {formatter(value)}
      </motion.span>
    </AnimatePresence>
  );
}