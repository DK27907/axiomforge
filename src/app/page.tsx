export default function Home() {
  return (
    <main className="min-h-screen axiom-grid-bg flex flex-col items-center justify-center gap-10 p-10">
      {/* Terminal status line */}
      <div className="terminal-font text-xs tracking-widest text-[#4B5468] uppercase">
        ◉ System Online · ODPC Registered · Nairobi
      </div>

      {/* The Headline */}
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-center max-w-4xl leading-[1.05]">
        AxiomForge{" "}
        <span className="bg-gradient-to-r from-[#00F5A0] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
          Command
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="text-[#8B94A7] text-lg max-w-2xl text-center leading-relaxed">
        Design system loaded. Matte-black canvas. Neon sector accents ready.
        The AxiomForge visual identity is now live.
      </p>

      {/* Terminal command demo */}
      <div className="terminal-font text-sm bg-[#0F131C] border border-[#1F2533] rounded-lg px-5 py-3">
        <span className="text-[#00F5A0]">$</span>{" "}
        <span className="text-[#8B94A7]">axiomforge deploy --tenant=ke-med-7a3</span>
        <span className="ml-2 animate-pulse text-[#06B6D4]">▊</span>
      </div>

      {/* The Bento Grid — Three sector cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 w-full max-w-5xl">
        {/* Healthcare — Medical Emerald */}
        <div className="bento-card glow-medical">
          <div className="terminal-font text-xs tracking-widest text-[#00F5A0] uppercase mb-3">
            ◢ Healthcare
          </div>
          <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
            PHI Isolation
          </div>
          <div className="text-[#8B94A7] text-sm leading-relaxed">
            HIPAA &amp; ODPC compliant medical AI. Absolute data boundary.
          </div>
        </div>

        {/* Education — Academic Sapphire */}
        <div className="bento-card glow-academic">
          <div className="terminal-font text-xs tracking-widest text-[#2563EB] uppercase mb-3">
            ◢ Education
          </div>
          <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
            Campus Scale
          </div>
          <div className="text-[#8B94A7] text-sm leading-relaxed">
            FERPA-aligned academic infrastructure. Streamline administration.
          </div>
        </div>

        {/* Enterprise — Operations Cyan */}
        <div className="bento-card glow-ops">
          <div className="terminal-font text-xs tracking-widest text-[#06B6D4] uppercase mb-3">
            ◢ Enterprise
          </div>
          <div className="text-[#F5F7FA] font-semibold text-lg mb-1">
            System Friction Zero
          </div>
          <div className="text-[#8B94A7] text-sm leading-relaxed">
            Autonomous corporate agents. API-connected. Always on.
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="terminal-font text-[10px] tracking-[0.25em] uppercase text-[#4B5468] mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span>ODPC Registered (Kenya)</span>
        <span>·</span>
        <span>SOC 2 Type II</span>
        <span>·</span>
        <span>HIPAA Compliant</span>
        <span>·</span>
        <span>FERPA Certified</span>
      </div>
    </main>
  );
}