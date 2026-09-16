"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Award, FileCheck } from "lucide-react";

const BADGES = [
  { label: "ODPC Registered (Kenya)", icon: ShieldCheck },
  { label: "SOC 2 Type II", icon: Lock },
  { label: "HIPAA Compliant", icon: Award },
  { label: "FERPA Certified", icon: FileCheck },
];

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
      {BADGES.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2 text-[#4B5468] group"
          >
            <Icon
              size={14}
              className="text-[#4B5468] group-hover:text-[#00F5A0] transition-colors duration-300"
            />
            <span className="terminal-font text-[10px] tracking-[0.2em] uppercase">
              {badge.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}