import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://axiomforge.co.ke";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/solutions/healthcare", priority: 0.9, freq: "monthly" as const },
    { path: "/solutions/education", priority: 0.9, freq: "monthly" as const },
    { path: "/solutions/enterprise", priority: 0.9, freq: "monthly" as const },
    { path: "/security-architecture", priority: 0.85, freq: "monthly" as const },
    { path: "/pricing", priority: 0.85, freq: "weekly" as const },
    { path: "/faqs", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.6, freq: "yearly" as const },
    { path: "/about", priority: 0.6, freq: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}