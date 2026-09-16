"use client";

import { SectorPricing, formatNumber } from "@/lib/pricing";

interface PricingSliderProps {
  cfg: SectorPricing;
  value: number;
  onChange: (next: number) => void;
}

export function PricingSlider({ cfg, value, onChange }: PricingSliderProps) {
  const pct = ((value - cfg.min) / (cfg.max - cfg.min)) * 100;

  return (
    <div className="w-full">
      {/* Label row */}
      <div className="flex items-baseline justify-between mb-4">
        <label className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468]">
          Operational Scale
        </label>
        <div
          className="terminal-font text-sm tracking-wide"
          style={{ color: cfg.accent }}
        >
          {formatNumber(value)} {cfg.unit}
        </div>
      </div>

      {/* Slider track */}
      <div className="relative h-1.5 rounded-full bg-[#1F2533]">
        {/* Filled portion */}
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all"
          style={{
            width: `${pct}%`,
            backgroundColor: cfg.accent,
            boxShadow: `0 0 12px rgba(${cfg.accentRgb}, 0.6)`,
          }}
        />

        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-[#0A0D14] pointer-events-none transition-all"
          style={{
            left: `${pct}%`,
            borderColor: cfg.accent,
            boxShadow: `0 0 16px rgba(${cfg.accentRgb}, 0.8)`,
          }}
        />

        {/* Real input — invisible, on top */}
        <input
          type="range"
          min={cfg.min}
          max={cfg.max}
          step={cfg.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ WebkitAppearance: "none" }}
          aria-label={`Operational scale: ${cfg.unit}`}
        />
      </div>

      {/* Min / max labels */}
      <div className="flex justify-between mt-3 terminal-font text-[10px] tracking-widest text-[#4B5468] uppercase">
        <span>{formatNumber(cfg.min)}</span>
        <span>{formatNumber(cfg.max)}</span>
      </div>
    </div>
  );
}