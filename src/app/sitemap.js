import { buildAllRoutes } from "@/lib/sitemapParser";

export default function sitemap() {
  const routes = buildAllRoutes();
  const baseUrl = "https://example.com"; // change this

  return routes.map((r) => ({
    url: `${baseUrl}${r.url}`,
    lastModified: new Date(),
  }));
}