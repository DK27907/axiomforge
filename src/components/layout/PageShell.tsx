import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#EAEEF3] text-[#0B1120] axiom-grid-bg relative overflow-x-hidden">
      {/* Ambient top gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(14, 116, 144, 0.07), rgba(30, 64, 175, 0.03) 40%, transparent 70%)",
        }}
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}