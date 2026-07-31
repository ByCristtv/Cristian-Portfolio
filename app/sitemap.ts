import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...routes, ...projectRoutes];
}
