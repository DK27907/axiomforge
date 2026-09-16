import { PageShell } from "@/components/layout/PageShell";

export default function Home() {
  return (
    <PageShell>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-10 px-6 py-20">
        {/* Terminal status line */}
        <div className="terminal-font text-xs tracking-widest text-[#4B5468] uppercase">
          ◉ System Online · ODPC Registered · Nairobi
        </div>

        {/* The Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center max-w-4xl leading-[1.05]">
          AxiomForge{" "}
          <span className="bg-gradient-to-r from-[#00F5A0] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
            Command
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[#8B94A7] text-lg max-w-2xl text-center leading-relaxed">
          Design system + layout shell loaded. Navbar, dropdown, footer all live.
          Ready for the homepage sections.
        </p>

        {/* Terminal command demo */}
        <div className="terminal-font text-sm bg-[#0F131C] border border-[#1F2533] rounded-lg px-5 py-3">
          <span className="text-[#00F5A0]">$</span>{" "}
          <span className="text-[#8B94A7]">
            axiomforge deploy --tenant=ke-med-7a3
          </span>
          <span className="ml-2 animate-pulse text-[#06B6D4]">▊</span>
        </div>

        {/* Sector cards preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 w-full max-w-5xl">
          <div className="bento-card glow-medical">
            <div className="terminal-font text-xs tracking-widest text-[#00F5A0] uppercase mb-3">
              ◢ Healthcare
            </div>
            <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
              PHI Isolation
            </div>
            <div className="text-[#8B94A7] text-sm leading-relaxed">
              HIPAA &amp; ODPC compliant medical AI.
            </div>
          </div>

          <div className="bento-card glow-academic">
            <div className="terminal-font text-xs tracking-widest text-[#2563EB] uppercase mb-3">
              ◢ Education
            </div>
            <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
              Campus Scale
            </div>
            <div className="text-[#8B94A7] text-sm leading-relaxed">
              FERPA-aligned academic infrastructure.
            </div>
          </div>

          <div className="bento-card glow-ops">
            <div className="terminal-font text-xs tracking-widest text-[#06B6D4] uppercase mb-3">
              ◢ Enterprise
            </div>
            <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
              System Friction Zero
            </div>
            <div className="text-[#8B94A7] text-sm leading-relaxed">
              Autonomous corporate agents. Always on.
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}