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
      { href: "/simulator", label: "Live Simulator" },
      { href: "/api", label: "API Reference" },
      { href: "https://app.axiomforge.co.ke", label: "Client Login" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { href: "/compliance/odpc", label: "ODPC Registration" },
      { href: "/compliance/hipaa", label: "HIPAA Alignment" },
      { href: "/compliance/ferpa", label: "FERPA Certification" },
      { href: "/compliance/soc2", label: "SOC 2 Type II" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1F2533] bg-[#0A0D14] relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top section — brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand block */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded border border-[#1F2533] bg-[#0F131C] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#06B6D4] rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-[#F5F7FA]">
                Axiom<span className="text-[#8B94A7]">Forge</span>
              </span>
            </Link>
            <p className="text-sm text-[#8B94A7] leading-relaxed max-w-xs">
              Autonomous AI systems with absolute data isolation. Built in Nairobi for Kenyan infrastructure.
            </p>

            {/* Location badge */}
            <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_rgba(0,245,160,0.8)]" />
              Nairobi, Kenya
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8B94A7] hover:text-[#F5F7FA] transition-colors"
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
        <div className="mt-14 pt-8 border-t border-[#1F2533] flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468]">
            Certified:
          </span>
          {["ODPC Registered (Kenya)", "SOC 2 Type II", "HIPAA Compliant", "FERPA Certified"].map(
            (label) => (
              <span
                key={label}
                className="text-xs text-[#8B94A7] flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#00F5A0]" />
                {label}
              </span>
            ),
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#1F2533] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468]">
            © {new Date().getFullYear()} AxiomForge Ltd · All rights reserved
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/legal/terms"
              className="text-xs text-[#4B5468] hover:text-[#8B94A7] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/privacy"
              className="text-xs text-[#4B5468] hover:text-[#8B94A7] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/dpa"
              className="text-xs text-[#4B5468] hover:text-[#8B94A7] transition-colors"
            >
              Data Processing Agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}