import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="min-h-screen bg-void text-[#F5F7FA] axiom-grid-bg relative overflow-x-hidden">
      {/* Ambient radial glow at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.08), transparent 60%)",
        }}
      />

      {/* Content container */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}