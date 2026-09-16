"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, GraduationCap, Building2, Shield } from "lucide-react";

const SOLUTIONS = [
  {
    href: "/solutions/healthcare",
    label: "Healthcare",
    tagline: "HIPAA & ODPC compliant medical AI.",
    icon: Heart,
    accent: "#00F5A0",
    glowClass: "hover:border-[#00F5A0]/50 hover:shadow-[0_0_32px_rgba(0,245,160,0.15)]",
  },
  {
    href: "/solutions/education",
    label: "Education",
    tagline: "FERPA-aligned campus infrastructure.",
    icon: GraduationCap,
    accent: "#2563EB",
    glowClass: "hover:border-[#2563EB]/50 hover:shadow-[0_0_32px_rgba(37,99,235,0.15)]",
  },
  {
    href: "/solutions/enterprise",
    label: "Enterprise",
    tagline: "Autonomous corporate agents.",
    icon: Building2,
    accent: "#06B6D4",
    glowClass: "hover:border-[#06B6D4]/50 hover:shadow-[0_0_32px_rgba(6,182,212,0.15)]",
  },
];

interface SolutionsDropdownProps {
  isOpen: boolean;
}

export function SolutionsDropdown({ isOpen }: SolutionsDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 pt-3 w-[640px]"
        >
          <div className="rounded-xl border border-[#1F2533] bg-[#0F131C]/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/60">
            {/* Sector cards grid */}
            <div className="grid grid-cols-1 gap-2 mb-3">
              {SOLUTIONS.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`group flex items-start gap-3 rounded-lg border border-transparent p-3 transition-all duration-200 ${s.glowClass}`}
                  >
                    <div
                      className="shrink-0 mt-0.5 rounded-md p-2"
                      style={{ backgroundColor: `${s.accent}15` }}
                    >
                      <Icon size={18} style={{ color: s.accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#F5F7FA] group-hover:text-white transition-colors">
                        {s.label}
                      </div>
                      <div className="text-xs text-[#8B94A7] mt-0.5 leading-relaxed">
                        {s.tagline}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#1F2533] my-3" />

            {/* Architecture Vault link */}
            <Link
              href="/security-architecture"
              className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-all duration-200 hover:border-[#2A3242] hover:bg-[#161B26]/50"
            >
              <div className="shrink-0 rounded-md p-2 bg-[#161B26]">
                <Shield size={18} className="text-[#8B94A7] group-hover:text-[#F5F7FA] transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#F5F7FA]">
                  Architecture Vault
                </div>
                <div className="text-xs text-[#8B94A7] mt-0.5">
                  Open-source data isolation audit. Verify our guardrails.
                </div>
              </div>
              <div className="terminal-font text-[10px] text-[#4B5468] group-hover:text-[#8B94A7] tracking-widest uppercase">
                Audit
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}