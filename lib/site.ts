import type { Metadata } from "next";

/**
 * Canonical origin for metadata, sitemap and robots.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is attached.
 * Until then preview/production builds fall back to the deployment URL
 * Vercel injects, so absolute URLs are never wrong-by-default.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Oragonlabs";

/**
 * Per-page metadata. The root layout's `openGraph` block is inherited
 * wholesale by any page that doesn't define its own, so pages that skip
 * this would share the homepage's share card.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

/** Routes in the public sitemap, in crawl-priority order. */
export const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/labs", priority: 0.9 },
  { path: "/products", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/investors", priority: 0.6 },
] as const;
