"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setState("error");
      setMessage("Enter a valid institutional email.");
      setTimeout(() => setState("idle"), 3000);
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage-hero" }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setState("success");
      setMessage("Received. We'll be in touch within 6 hours.");
      setTimeout(() => {
        setState("idle");
        setEmail("");
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);
      setState("error");
      setMessage("Something went wrong. Try again.");
      setTimeout(() => setState("idle"), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div
        className={`group relative flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 rounded-xl border bg-white transition-all duration-300 shadow-md ${
          state === "error"
            ? "border-[#DC2626] shadow-[0_8px_32px_rgba(220,38,38,0.15)]"
            : state === "success"
              ? "border-[#00A86B] shadow-[0_8px_32px_rgba(0,168,107,0.15)]"
              : "border-slate-200 focus-within:border-[#0891B2]/60 focus-within:shadow-[0_8px_32px_rgba(8,145,178,0.15)]"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="institutional-email@yourorg.co.ke"
          disabled={state === "loading" || state === "success"}
          className="flex-1 bg-transparent px-5 py-4 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={state === "loading" || state === "success"}
          className="group/btn relative flex items-center justify-center gap-2 m-1.5 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-slate-800 disabled:opacity-80 disabled:cursor-not-allowed"
        >
          <AnimatePresence mode="wait" initial={false}>
            {state === "loading" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 size={14} className="animate-spin" />
                Forging...
              </motion.span>
            ) : state === "success" ? (
              <motion.span
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={14} />
                Sent
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                Forge Your System
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={`flex items-center justify-center gap-2 mt-3 text-xs terminal-font tracking-wide ${
              state === "error"
                ? "text-[#DC2626]"
                : state === "success"
                  ? "text-[#00A86B]"
                  : "text-slate-500"
            }`}
          >
            {state === "error" && <AlertCircle size={12} />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="terminal-font text-[10px] tracking-widest uppercase text-slate-400 text-center mt-4">
        No sales call. No commitment. Immediate sandbox access.
      </div>
    </form>
  );
}