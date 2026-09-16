"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254748249882?text=Hi%20AxiomForge%2C%20I%27d%20like%20to%20talk."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1.4 }}
      className="fixed bottom-6 left-6 z-[60] group flex items-center gap-2.5 rounded-full border pl-3 pr-5 py-2.5 backdrop-blur-xl transition-all duration-300"
      style={{
        borderColor: "rgba(37,211,102,0.4)",
        backgroundColor: "rgba(10, 13, 20, 0.9)",
        boxShadow:
          "0 0 32px rgba(37,211,102,0.15), 0 4px 20px rgba(0,0,0,0.4)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute w-4 h-4 rounded-full animate-ping opacity-40 bg-[#25D366]" />
        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-[#25D366]">
          <MessageCircle size={10} className="text-[#0A0D14]" strokeWidth={3} />
        </span>
      </div>
      <span className="terminal-font text-[11px] tracking-widest uppercase font-medium text-[#F5F7FA]">
        WhatsApp Us
      </span>
    </motion.a>
  );
}