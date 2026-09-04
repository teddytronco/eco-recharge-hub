import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { materials } from "@/content/materials";
import { places } from "@/content/coverage";
import { articles } from "@/content/resources";

const staticPaths = [
  "/",
  "/servicios",
  "/proceso",
  "/materiales",
  "/compra-de-baterias-usadas",
  "/cobertura",
  "/cumplimiento",
  "/logistica",
  "/recursos",
  "/nosotros",
  "/contacto",
  "/legal",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          ...staticPaths,
          ...materials.map((m) => `/materiales/${m.slug}`),
          ...places.map((p) => `/cobertura/${p.slug}`),
          ...articles.map((a) => `/recursos/${a.slug}`),
        ];
        const lastmod = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
