"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { SolutionsDropdown } from "./SolutionsDropdown";

const NAV_LINKS = [
  { href: "/security-architecture", label: "Architecture" },
  { href: "/pricing", label: "Pricing" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > previous && latest > 120) {
      setHidden(true);
      setSolutionsOpen(false);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-3 px-4"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="relative flex items-center justify-between gap-2 h-16 pl-3 pr-2 rounded-2xl transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(255, 255, 255, 0.75)",
              boxShadow: scrolled
                ? "0 1px 2px rgba(11,17,32,0.05), 0 8px 24px rgba(11,17,32,0.08), 0 24px 48px rgba(11,17,32,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"
                : "0 1px 2px rgba(11,17,32,0.03), 0 4px 16px rgba(11,17,32,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Logo + Wordmark — visible on all screen sizes */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0 pl-1 min-w-0"
            >
              <Image
                src="/axiomforge-logo.png"
                alt="AxiomForge"
                width={44}
                height={44}
                priority
                className="object-contain shrink-0"
                style={{ width: "auto", height: "auto", maxWidth: 44, maxHeight: 44 }}
              />

              <div className="flex flex-col leading-none min-w-0">
                {/* Company name — LARGER on mobile (17px) and desktop (16px) */}
                <span className="font-bold text-[17px] sm:text-[15px] tracking-tight text-slate-900 truncate">
                  Axiom<span className="text-[#0E7490]">Forge</span>
                </span>
                {/* Tagline — LARGER on mobile (9px) and desktop (8px) */}
                <span className="terminal-font text-[9px] sm:text-[8px] tracking-[0.22em] text-slate-500 uppercase mt-1 truncate font-medium">
                  Digital Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    solutionsOpen
                      ? "text-slate-900 bg-slate-100/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  Solutions
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <SolutionsDropdown isOpen={solutionsOpen} />
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-all duration-200 rounded-lg hover:bg-slate-100/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-1.5">
              <Link
                href="https://app.axiomforge.co.ke"
                className="px-3 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100/60"
              >
                Sign In
              </Link>

              <Link
                href="#forge"
                className="group relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-[13px] font-semibold text-white transition-all duration-200 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0B1120 100%)",
                  boxShadow:
                    "0 1px 2px rgba(11,17,32,0.15), 0 4px 16px rgba(11,17,32,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(14,116,144,0.35), transparent 70%)",
                  }}
                />
                <span className="relative flex items-center gap-1.5">
                  Forge Your System
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100/60 transition-colors shrink-0"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 md:hidden">
          <div className="px-6 py-6 flex flex-col gap-1">
            {[
              { href: "/solutions/healthcare", label: "Healthcare", accent: "#047857" },
              { href: "/solutions/education", label: "Education", accent: "#1E40AF" },
              { href: "/solutions/enterprise", label: "Enterprise", accent: "#0E7490" },
              { href: "/security-architecture", label: "Architecture Vault", accent: null },
              { href: "/pricing", label: "Pricing", accent: null },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors font-medium"
              >
                {item.accent && (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: `0 0 8px ${item.accent}`,
                    }}
                  />
                )}
                <span className="text-base">{item.label}</span>
              </Link>
            ))}

            <div className="h-px bg-slate-200 my-4" />

            <Link
              href="#forge"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-white"
              style={{
                background:
                  "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0B1120 100%)",
                boxShadow: "0 4px 16px rgba(11,17,32,0.2)",
              }}
            >
              Forge Your System
              <ArrowRight size={16} />
            </Link>

            <Link
              href="https://app.axiomforge.co.ke"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center text-sm text-slate-500 py-2 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}