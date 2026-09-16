"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { getPersonaForPath } from "@/lib/assistant-personas";
import { AssistantPanel } from "./AssistantPanel";

export function ContextualAssistant() {
  const pathname = usePathname();
  const persona = getPersonaForPath(pathname);
  const [open, setOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (open) setHasInteracted(true);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <AssistantPanel persona={persona} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        onClick={() => setOpen((v) => !v)}
        className="group relative flex items-center gap-2.5 rounded-full border pl-3 pr-5 py-2.5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: `${persona.accent}40`,
          backgroundColor: "rgba(10, 13, 20, 0.9)",
          boxShadow: `0 0 32px rgba(${persona.accentRgb}, 0.15), 0 4px 20px rgba(0,0,0,0.4)`,
        }}
        aria-label={open ? "Close assistant" : "Open AxiomForge assistant"}
      >
        <div className="relative flex items-center justify-center">
          <span
            className="absolute w-4 h-4 rounded-full animate-ping opacity-40"
            style={{ backgroundColor: persona.accent }}
          />
          <span
            className="relative w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: persona.accent }}
          >
            {open ? (
              <X size={9} className="text-[#0A0D14]" strokeWidth={3} />
            ) : (
              <Sparkles size={9} className="text-[#0A0D14]" strokeWidth={3} />
            )}
          </span>
        </div>

        <span className="terminal-font text-[11px] tracking-widest uppercase font-medium text-[#F5F7FA]">
          {open ? "Close" : "Ask Axio"}
        </span>

        {!hasInteracted && !open && (
          <span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: persona.accent,
              boxShadow: `0 0 8px ${persona.accent}`,
            }}
          />
        )}
      </motion.button>
    </div>
  );
}