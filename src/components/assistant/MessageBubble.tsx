"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  accent: string;
  animate?: boolean;
  onDone?: () => void;
}

export function MessageBubble({
  role,
  content,
  accent,
  animate = false,
  onDone,
}: MessageBubbleProps) {
  const [displayed, setDisplayed] = useState(animate ? "" : content);

  useEffect(() => {
    if (!animate) {
      setDisplayed(content);
      return;
    }

    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(content.slice(0, i));
      if (i >= content.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, 12);

    return () => clearInterval(interval);
  }, [content, animate, onDone]);

  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div
        className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5"
        style={{
          backgroundColor: isUser ? "#1F2533" : `${accent}15`,
          border: `1px solid ${isUser ? "#1F2533" : `${accent}30`}`,
        }}
      >
        {isUser ? (
          <User size={12} className="text-[#8B94A7]" />
        ) : (
          <Sparkles size={12} style={{ color: accent }} />
        )}
      </div>

      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-relaxed ${
          isUser ? "text-[#F5F7FA]" : "text-[#D1D5DB]"
        }`}
        style={{
          backgroundColor: isUser ? "#161B26" : "#0F131C",
          border: "1px solid #1F2533",
        }}
      >
        {displayed}
        {animate && displayed.length < content.length && (
          <span
            className="inline-block w-1.5 h-3.5 ml-0.5 align-middle animate-pulse"
            style={{ backgroundColor: accent }}
          />
        )}
      </div>
    </motion.div>
  );
}