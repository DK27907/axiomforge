"use client";

import { motion } from "framer-motion";
import { Sector, SECTORS } from "@/lib/simulator-responses";

interface SectorTabsProps {
  active: Sector;
  onChange: (sector: Sector) => void;
}

const SECTOR_ORDER: Sector[] = ["healthcare", "education", "enterprise"];

export function SectorTabs({ active, onChange }: SectorTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center">
      {SECTOR_ORDER.map((key) => {
        const cfg = SECTORS[key];
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg border text-xs terminal-font tracking-widest uppercase transition-all duration-200 backdrop-blur-md"
            style={{
              borderColor: isActive ? cfg.accent : "rgba(255,255,255,0.15)",
              color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
              backgroundColor: isActive
                ? cfg.accent
                : "rgba(255,255,255,0.06)",
              boxShadow: isActive
                ? `0 8px 24px ${cfg.accent}55`
                : "none",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: isActive ? "#FFFFFF" : cfg.accent,
                opacity: isActive ? 1 : 0.6,
              }}
            />
            {cfg.label}
            {isActive && (
              <motion.div
                layoutId="sector-tab-glow"
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.25)`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}