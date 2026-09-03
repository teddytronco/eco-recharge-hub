import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BulletList, Card, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/blocks";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/logistica")({
  head: () => ({
    meta: [
      { title: "Logística y transporte | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Empaque según condición, segregación, documentación de embarque y coordinación regional para el transporte de baterías de litio.",
      },
      {
        property: "og:title",
        content: "Logística y transporte | Reciclaje de Baterías Latinoamérica",
      },
      {
        property: "og:description",
        content:
          "Planeación de embarques de baterías de litio como mercancía peligrosa, con documentación previa a cada movimiento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/logistica" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/logistica" }],
  }),
  component: LogisticsPage,
});

function LogisticsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={t.logistics.title}
        subtitle={t.logistics.subtitle}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {t.logistics.blocks.map((b, i) => (
            <Card key={b.t} title={b.t} index={i + 1}>
              {b.d}
            </Card>
          ))}
        </div>
      </Section>
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle title={t.logistics.checklistTitle} />
            <div className="mt-6">
              <BulletList items={t.logistics.checklist} />
            </div>
          </div>
          <img
            src={logistics}
            alt={t.logistics.alt}
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
