"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { Persona } from "@/lib/assistant-personas";
import { getResponse } from "@/lib/assistant-responses";
import { MessageBubble } from "./MessageBubble";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  animate: boolean;
}

interface AssistantPanelProps {
  persona: Persona;
  onClose: () => void;
}

export function AssistantPanel({ persona, onClose }: AssistantPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", content: persona.greeting, animate: true },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([
      { id: 0, role: "assistant", content: persona.greeting, animate: true },
    ]);
    setInput("");
  }, [persona.name, persona.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 250);
  }, [persona.name]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: trimmed,
      animate: false,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      const reply = getResponse(persona, trimmed);
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
        animate: true,
      };
      setMessages((m) => [...m, botMsg]);
      setIsThinking(false);
    }, 600);
  }

  function handleSuggestion(text: string) {
    setInput(text);
    inputRef.current?.focus();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="w-[360px] h-[520px] rounded-xl overflow-hidden flex flex-col border backdrop-blur-xl shadow-2xl"
      style={{
        backgroundColor: "rgba(10, 13, 20, 0.95)",
        borderColor: "#1F2533",
        boxShadow: `0 0 60px rgba(${persona.accentRgb}, 0.12), 0 20px 60px rgba(0,0,0,0.6)`,
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: "#1F2533" }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: persona.accent,
              boxShadow: `0 0 8px ${persona.accent}`,
            }}
          />
          <div>
            <div className="text-[12px] font-semibold text-[#F5F7FA] leading-tight">
              {persona.name}
            </div>
            <div
              className="terminal-font text-[9px] tracking-widest uppercase"
              style={{ color: persona.accent }}
            >
              {persona.role}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-md text-[#4B5468] hover:text-[#F5F7FA] hover:bg-[#161B26] transition-colors"
          aria-label="Close assistant"
        >
          <X size={14} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
      >
        {messages.map((m) => (
          <MessageBubble
            key={m.id}
            role={m.role}
            content={m.content}
            accent={persona.accent}
            animate={m.animate}
          />
        ))}

        {isThinking && (
          <div className="flex gap-2.5">
            <div
              className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
              style={{
                backgroundColor: `${persona.accent}15`,
                border: `1px solid ${persona.accent}30`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: persona.accent }}
              />
            </div>
            <div className="flex items-center gap-1 px-3 py-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: persona.accent }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {messages.length === 1 && !isThinking && (
          <div className="pt-3 space-y-1.5">
            <div className="terminal-font text-[9px] tracking-widest uppercase text-[#4B5468] mb-2">
              Try asking:
            </div>
            {persona.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="block w-full text-left text-[12px] text-[#8B94A7] hover:text-[#F5F7FA] px-2.5 py-1.5 rounded-md border border-[#1F2533] hover:border-[#2A3242] hover:bg-[#161B26]/60 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-3 py-3 border-t flex items-center gap-2"
        style={{ borderColor: "#1F2533" }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          disabled={isThinking}
          className="flex-1 bg-[#0F131C] border border-[#1F2533] rounded-lg px-3 py-2 text-[12px] text-[#F5F7FA] placeholder:text-[#4B5468] outline-none focus:border-[#2A3242] transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isThinking}
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            backgroundColor: input.trim() ? persona.accent : "#1F2533",
            color: input.trim() ? "#0A0D14" : "#4B5468",
          }}
          aria-label="Send message"
        >
          <Send size={13} />
        </button>
      </form>
    </motion.div>
  );
}