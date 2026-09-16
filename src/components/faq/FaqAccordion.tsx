"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpen?: number;
}

export function FaqAccordion({ items, defaultOpen = -1 }: FaqAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="rounded-xl border bg-[#0F131C] overflow-hidden transition-colors"
            style={{
              borderColor: isOpen ? "rgba(6,182,212,0.35)" : "#1F2533",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#161B26]/40 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-[#F5F7FA] leading-snug">
                {item.q}
              </span>
              <span
                className="shrink-0 w-7 h-7 rounded-md border flex items-center justify-center transition-colors"
                style={{
                  borderColor: isOpen ? "rgba(6,182,212,0.5)" : "#1F2533",
                  backgroundColor: isOpen ? "rgba(6,182,212,0.08)" : "transparent",
                }}
              >
                {isOpen ? (
                  <Minus size={13} className="text-[#06B6D4]" />
                ) : (
                  <Plus size={13} className="text-[#8B94A7]" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-[#8B94A7] leading-relaxed border-t border-[#1F2533] pt-5">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}