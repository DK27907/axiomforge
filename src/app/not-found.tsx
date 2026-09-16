import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ArrowRight, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="terminal-font text-[11px] tracking-[0.3em] uppercase text-[#06B6D4] mb-6">
            ◢ 404 · Route Not Found
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F5F7FA] mb-6 leading-tight">
            This path doesn&apos;t
            <br />
            <span className="text-[#06B6D4]">exist in our grid.</span>
          </h1>

          <p className="text-base text-[#8B94A7] mb-10 leading-relaxed max-w-lg mx-auto">
            The route you requested is not mapped. Try one of the entry points
            below, or head back to the command center.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-medium text-[#0A0D14]"
            >
              <Home size={14} />
              Back to Home
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/solutions/healthcare"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1F2533] px-6 py-3 text-sm text-[#8B94A7] hover:text-[#F5F7FA] hover:border-[#2A3242] transition-all"
            >
              <Compass size={14} />
              Explore Solutions
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { href: "/solutions/healthcare", label: "Healthcare" },
              { href: "/solutions/education", label: "Education" },
              { href: "/solutions/enterprise", label: "Enterprise" },
              { href: "/security-architecture", label: "Architecture" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="terminal-font text-[10px] tracking-widest uppercase text-[#4B5468] hover:text-[#06B6D4] transition-colors py-3"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}