import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

// /home-2 is an A/B variant of / and is deliberately left out — indexing
// duplicate homepages splits ranking signals between them.
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
