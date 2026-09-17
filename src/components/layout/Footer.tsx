import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions/healthcare", label: "Healthcare Command" },
      { href: "/solutions/education", label: "Academic Scale" },
      { href: "/solutions/enterprise", label: "Enterprise Engine" },
      { href: "/security-architecture", label: "Architecture Vault" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/pricing", label: "Transparent Pricing" },
      { href: "/#simulator", label: "Live Simulator" },
      { href: "/faqs", label: "FAQs" },
      { href: "https://app.axiomforge.co.ke", label: "Client Login" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { href: "/security-architecture#odpc", label: "ODPC Registration" },
      { href: "/security-architecture#hipaa", label: "HIPAA Alignment" },
      { href: "/security-architecture#ferpa", label: "FERPA Certification" },
      { href: "/security-architecture#soc2", label: "SOC 2 Type II" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faqs", label: "FAQs" },
      { href: "/security-architecture", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0B1120] overflow-hidden border-t border-white/5">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Cyan radial glow at top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(14,116,144,0.20), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand block */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded border border-white/15 bg-white/5 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#67E8F9] rounded-sm shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-white">
                Axiom<span className="text-white/60">Forge</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Autonomous AI systems with absolute data isolation. Built in
              Nairobi for Kenyan infrastructure.
            </p>

            <div className="terminal-font text-[10px] tracking-widest uppercase text-white/50 mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Nairobi, Kenya
            </div>

            <div className="mt-4 space-y-1.5">
              <a
                href="mailto:info@axiomforge.co.ke"
                className="block text-xs text-white/70 hover:text-white transition-colors"
              >
                info@axiomforge.co.ke
              </a>
              <a
                href="https://wa.me/254748249882"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-white/70 hover:text-white transition-colors"
              >
                WhatsApp +254 748 249 882
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="terminal-font text-[10px] tracking-widest uppercase text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="terminal-font text-[10px] tracking-widest uppercase text-white/40">
            Certified:
          </span>
          {[
            "ODPC Registered (Kenya)",
            "SOC 2 Type II",
            "HIPAA Compliant",
            "FERPA Certified",
          ].map((label) => (
            <span
              key={label}
              className="text-xs text-white/75 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-[#34D399]" />
              {label}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="terminal-font text-[10px] tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} AxiomForge Ltd · All rights reserved
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/faqs"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/security-architecture"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Security
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}