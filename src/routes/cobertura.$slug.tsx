import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, PageHero, Section } from "@/components/site/blocks";
import { findPlace, places } from "@/content/coverage";
import { ui } from "@/content/ui";
import { breadcrumbLd, pageHead, serviceLd } from "@/lib/seo";

function seoTitle(slug: string, name: string) {
  if (slug === "nuevo-leon") {
    return "Reciclaje de baterías en Monterrey y Nuevo León | Baterías de litio";
  }
  return `Reciclaje y disposición de baterías en ${name}`;
}

export const Route = createFileRoute("/cobertura/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const place = findPlace(params.slug);
    if (!place) throw notFound();
    return { slug: place.slug };
  },
  head: ({ params }) => {
    const place = findPlace(params.slug);
    if (!place) {
      return { meta: [{ title: "Zona no encontrada" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/cobertura/${place.slug}`;
    const name = place.name.es;
    const title = `${seoTitle(place.slug, name)} | XD Materials`;
    const description =
      place.slug === "nuevo-leon"
        ? "Reciclaje de baterías de litio en Monterrey y Nuevo León: retiro coordinado, empaque conforme, transporte con operadores autorizados y expediente documental para el generador."
        : `Gestión de disposición de baterías de litio en ${name}: evaluación del material, empaque, transporte coordinado y documentación de destino para generadores industriales.`;
    return pageHead({
      path,
      title,
      description,
      jsonLd: [
        serviceLd({
          name: seoTitle(place.slug, name),
          description,
          path,
          areaServed: [name, place.regionLabel.es],
        }),
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Cobertura", path: "/cobertura" },
          { name, path },
        ]),
      ],
    });
  },
  component: CoverageDetail,
});

function CoverageDetail() {
  const { lang, t } = useI18n();
  const { slug } = Route.useParams();
  const place = findPlace(slug)!;
  const siblings = places.filter((p) => p.region === place.region && p.slug !== slug).slice(0, 9);

  const heading =
    lang === "es"
      ? `Reciclaje y gestión de baterías en ${place.name.es}`
      : `Battery recycling and management in ${place.name.en}`;

  return (
    <>
      <PageHero eyebrow={place.regionLabel[lang]} title={heading} subtitle={place.intro[lang]} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{ui.coverage.sectors[lang]}</h2>
            <div className="mt-5">
              <BulletList items={place.sectors[lang]} />
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">{ui.coverage.corridors[lang]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {place.corridors[lang]}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">{ui.coverage.regulatory[lang]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {place.regulatory[lang]}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {ui.coverage.note[lang]}
        </p>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{ui.coverage.inRegion[lang]}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/cobertura/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-accent"
                >
                  {p.name[lang]}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/cobertura"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {ui.coverage.backToHub[lang]}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>
      <CtaBand />
      <span className="sr-only">{t.brand.name}</span>
    </>
  );
}
