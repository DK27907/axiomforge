import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ContextualAssistant } from "@/components/assistant/ContextualAssistant";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AxiomForge — Autonomous AI Systems for Kenyan Infrastructure",
  description:
    "No sales loops. No legacy bloat. Custom, isolated AI agents built natively for Kenyan healthcare compliance, academic scale, and enterprise efficiency.",
  metadataBase: new URL("https://axiomforge.co.ke"),
  openGraph: {
    title: "AxiomForge — Autonomous AI Systems",
    description:
      "Custom AI agents with absolute data isolation. ODPC compliant. HIPAA aligned.",
    url: "https://axiomforge.co.ke",
    siteName: "AxiomForge",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxiomForge — Autonomous AI Systems",
    description: "Custom AI agents with absolute data isolation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="antialiased bg-void">
        <TopNav />
        <main className="pt-20">{children}</main>
        <Footer />
        <ContextualAssistant />
        <WhatsAppButton />
      </body>
    </html>
  );
}