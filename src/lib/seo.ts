export const SITE_URL = "https://eco-recharge-hub.lovable.app";

export const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export type SeoInput = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function pageHead({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  type = "website",
  robots,
  jsonLd,
}: SeoInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(robots ? [{ name: "robots", content: robots }] : []),
      { property: "og:title", content: ogTitle ?? title },

      { property: "og:description", content: ogDescription ?? description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(jsonLd
      ? {
          scripts: (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((data) => ({
            type: "application/ld+json",
            children: JSON.stringify(data),
          })),
        }
      : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Battery waste management and recycling logistics",
    provider: {
      "@type": "Organization",
      name: "Reciclaje de Baterías Latinoamérica",
      url: SITE_URL,
    },
    areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
    url: absoluteUrl(path),
  };
}
