import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Card, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/blocks";

export const Route = createFileRoute("/servicios")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/servicios",
      title: "Gesti\u00f3n de bater\u00edas: servicios de recolecci\u00f3n y disposici\u00f3n | Recyc Latam",
      description: "Servicios de gesti\u00f3n de bater\u00edas para industria: evaluaci\u00f3n del material, empaque, retiro, transporte con operadores autorizados y documentaci\u00f3n de destino final.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={t.services.title} subtitle={t.services.subtitle} />
      <Section>
        <SectionTitle title={t.services.itemsTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Card key={s.t} title={s.t} index={i + 1}>
              {s.d}
            </Card>
          ))}
        </div>
      </Section>
      <Section muted>
        <SectionTitle title={t.services.notIncludedTitle} subtitle={t.services.notIncluded} />
      </Section>
      <CtaBand />
    </>
  );
}
