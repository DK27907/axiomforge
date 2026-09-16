import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AxiomForge — Autonomous AI Systems",
    short_name: "AxiomForge",
    description:
      "Custom, isolated AI agents built for Kenyan healthcare, education, and enterprise.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0D14",
    theme_color: "#06B6D4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}