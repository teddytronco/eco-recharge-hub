import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "./careers";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/carreras")({
  head: () => ({
    meta: [
      { title: "Carreras en XD Materials | Vacantes" },
      { name: "description", content: "Vacantes en XD Materials: Battery Sourcing / Business Development Executive y coordinación EHS. Construye con nosotros el destino de las baterías de autos eléctricos." },
      { property: "og:title", content: "Carreras en XD Materials" },
      { property: "og:description", content: "Las baterías de los autos eléctricos necesitan un destino. Constrúyelo con nosotros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/careers") }],
  }),
  component: CareersPage,
});
