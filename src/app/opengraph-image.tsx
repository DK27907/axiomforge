import { ImageResponse } from "next/og";

export const alt = "AxiomForge — Autonomous AI Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0D14",
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
          backgroundImage:
            "linear-gradient(#141922 1px, transparent 1px), linear-gradient(90deg, #141922 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#06B6D4",
            fontSize: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "10px",
              height: "10px",
              borderRadius: "2px",
              backgroundColor: "#06B6D4",
            }}
          />
          <span>ODPC Registered · Nairobi · Est. 2024</span>
        </div>

        {/* Headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "84px",
              fontWeight: 700,
              color: "#F5F7FA",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Autonomous AI Systems.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "84px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              backgroundImage:
                "linear-gradient(90deg, #00F5A0 0%, #06B6D4 50%, #2563EB 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Forged for Your Infrastructure.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "36px",
              fontWeight: 600,
              color: "#F5F7FA",
              letterSpacing: "-0.02em",
            }}
          >
            <span>Axiom</span>
            <span style={{ color: "#8B94A7" }}>Forge</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#8B94A7",
              letterSpacing: "0.15em",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            axiomforge.co.ke
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}