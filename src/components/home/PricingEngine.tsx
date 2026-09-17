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
      {/* FULL-CLARITY image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/pricing-data.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          filter: "brightness(0.5) saturate(1.05) contrast(1.05)",
        }}
      />

      {/* Cinematic dark wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.65) 40%, rgba(14,116,144,0.35) 75%, rgba(11,17,32,0.85) 100%)",
        }}
      />

      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="terminal-font text-[10px] tracking-[0.3em] uppercase text-white/60 mb-4"
        >
          ◢ Transparent Pricing · No Sales Call
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          Pricing You Can Read
          <br />
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Without Booking A Call.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          Every competitor hides their matrix. We publish ours in KES and USD.
          Slide to your scale. That&apos;s your price. No asterisks.
        </motion.p>
      </div>

      {/* Sector tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 justify-center mb-10 relative z-10"
      >
        {SECTOR_ORDER.map((key) => {
          const s = PRICING[key];
          const isActive = key === sector;
          return (
            <button
              key={key}
              onClick={() => handleSectorChange(key)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-xs terminal-font tracking-widest uppercase transition-all duration-200 backdrop-blur-xl"
              style={{
                borderColor: isActive ? s.accent : "rgba(255,255,255,0.2)",
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                backgroundColor: isActive
                  ? s.accent
                  : "rgba(255,255,255,0.08)",
                boxShadow: isActive
                  ? `0 8px 24px ${s.accent}66`
                  : "none",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: isActive ? "#FFFFFF" : s.accent,
                  opacity: isActive ? 1 : 0.6,
                }}
              />
              {s.label}
            </button>
          );
        })}
      </motion.div>

      {/* Pricing panels — frosted glass over the image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10"
      >
        <div className="lg:col-span-3 rounded-2xl glass-panel p-8">
          <PricingSlider cfg={cfg} value={unitValue} onChange={setUnitValue} />

          <div className="h-px bg-slate-200 my-8" />

          <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-500 mb-4">
            Every engagement includes:
          </div>
          <ul className="space-y-3">
            {cfg.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
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

        <div
          className="lg:col-span-2 rounded-2xl p-8 flex flex-col glass-panel"
          style={{
            borderColor: `${cfg.accent}55`,
          }}
        >
          <div className="mb-7">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-500 mb-2">
              Base Implementation
            </div>
            <div
              className="terminal-font text-2xl font-semibold tracking-tight"
              style={{ color: cfg.accent }}
            >
              <AnimatedNumber value={price.implementation} formatter={formatKES} />
            </div>
            <div className="text-xs text-slate-500 mt-1">
              One-time · 4-6 week delivery
            </div>
          </div>

          <div className="mb-7">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-500 mb-2">
              Monthly Operations
            </div>
            <div
              className="terminal-font text-2xl font-semibold tracking-tight"
              style={{ color: cfg.accent }}
            >
              <AnimatedNumber value={price.monthly} formatter={formatKES} />
              <span className="text-sm text-slate-500 font-normal">/mo</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Includes monitoring · scaling · attestation
            </div>
          </div>

          <div className="h-px bg-slate-200 mb-7" />

          <div className="mb-8">
            <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-500 mb-2">
              First-Year Total
            </div>
            <div className="terminal-font text-3xl font-bold tracking-tight text-slate-900">
              <AnimatedNumber value={price.firstYearUSD} formatter={formatUSD} />
            </div>
            <div className="text-xs text-slate-500 mt-1">
              <AnimatedNumber value={price.firstYearTotal} formatter={formatKES} />{" "}
              at KES 129/USD
            </div>
          </div>

          <div className="mt-auto">
            <a
              href="#forge"
              className="group flex items-center justify-center gap-2 w-full rounded-lg py-3 text-sm font-semibold transition-all duration-200 text-white shadow-md hover:shadow-lg"
              style={{ backgroundColor: cfg.accent }}
            >
              Lock This Quote
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-500 text-center mt-3">
              No sales call required
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

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