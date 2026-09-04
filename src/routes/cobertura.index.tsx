import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CtaBand, PageHero, Section } from "@/components/site/blocks";
import { places, regionOrder } from "@/content/coverage";
import { ui } from "@/content/ui";
import { breadcrumbLd, pageHead, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/cobertura/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/cobertura",
      title: "Reciclaje de baterías en México y Latinoamérica | Cobertura",
      description:
        "Gestión de disposición de baterías en México, Centroamérica y Sudamérica: estados y países donde coordinamos retiro, transporte y destino documentado de baterías de litio.",
      jsonLd: [
        serviceLd({
          name: "Reciclaje y gestión de baterías en México y Latinoamérica",
          description:
            "Coordinación de retiro, empaque, transporte y destino documentado de baterías de litio y otras químicas en México, Centroamérica y Sudamérica.",
          path: "/cobertura",
          areaServed: ["México", "Centroamérica", "Sudamérica"],
        }),
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Cobertura", path: "/cobertura" },
        ]),
      ],
    }),
  component: CoverageHub,
});

function CoverageHub() {
  const { lang, t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={ui.coverage.title[lang]}
        subtitle={ui.coverage.intro[lang]}
      />
      <Section>
        {regionOrder.map((region) => {
          const list = places.filter((p) => p.region === region);
          if (!list.length) return null;
          return (
            <div key={region} className="mb-12 last:mb-0">
              <h2 className="text-xl font-semibold tracking-tight">
                {list[0].regionLabel[lang]}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
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
            </div>
          );
        })}
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {ui.coverage.note[lang]}
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
