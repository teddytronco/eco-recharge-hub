import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Card, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/blocks";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Diagnóstico, empaque técnico, transporte coordinado, logística inversa y expediente documental para baterías de litio industriales.",
      },
      { property: "og:title", content: "Servicios | Reciclaje de Baterías Latinoamérica" },
      {
        property: "og:description",
        content:
          "Servicios de gestión de baterías de litio para operaciones industriales en Latinoamérica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicios" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={t.services.title} subtitle={t.services.subtitle} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
