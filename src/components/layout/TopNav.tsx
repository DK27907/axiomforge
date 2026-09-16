"use client";

import Link from "next/link";
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
    // Hide on scroll down, reveal on scroll up
    if (latest > previous && latest > 120) {
      setHidden(true);
      setSolutionsOpen(false);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
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
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#0A0D14]/80 backdrop-blur-xl border-b border-[#1F2533]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-7 h-7 rounded border border-[#1F2533] bg-[#0F131C] flex items-center justify-center group-hover:border-[#06B6D4]/50 transition-colors">
                <div className="w-2 h-2 bg-[#06B6D4] rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-[#F5F7FA]">
              Axiom<span className="text-[#8B94A7]">Forge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Solutions dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors rounded-md ${
                  solutionsOpen ? "text-[#F5F7FA] bg-[#161B26]/60" : ""
                }`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <SolutionsDropdown isOpen={solutionsOpen} />
            </div>

            {/* Other links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors rounded-md hover:bg-[#161B26]/60"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://app.axiomforge.co.ke"
              className="px-3.5 py-2 text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#forge"
              className="group relative flex items-center gap-1.5 rounded-md bg-[#F5F7FA] px-4 py-2 text-sm font-medium text-[#0A0D14] hover:bg-white transition-all duration-200"
            >
              Forge Your System
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#F5F7FA]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0D14] pt-16 md:hidden">
          <div className="px-6 py-6 flex flex-col gap-1">
            {[
              { href: "/solutions/healthcare", label: "Healthcare", accent: "#00F5A0" },
              { href: "/solutions/education", label: "Education", accent: "#2563EB" },
              { href: "/solutions/enterprise", label: "Enterprise", accent: "#06B6D4" },
              { href: "/security-architecture", label: "Architecture Vault", accent: null },
              { href: "/pricing", label: "Pricing", accent: null },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#F5F7FA] hover:bg-[#161B26] transition-colors"
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

            <div className="h-px bg-[#1F2533] my-4" />

            <Link
              href="#forge"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md bg-[#F5F7FA] px-4 py-3 text-base font-medium text-[#0A0D14]"
            >
              Forge Your System
              <ArrowRight size={16} />
            </Link>

            <Link
              href="https://app.axiomforge.co.ke"
              className="mt-2 text-center text-sm text-[#8B94A7] py-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}