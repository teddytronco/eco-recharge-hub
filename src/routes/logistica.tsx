import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BulletList, Card, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/blocks";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/logistica")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/logistica",
      title: "Log\u00edstica y transporte de bater\u00edas de litio | Reciclaje de Bater\u00edas Latinoam\u00e9rica",
      description: "Empaque, unidades da\u00f1adas o defectuosas, consolidaci\u00f3n regional y coordinaci\u00f3n de transporte de bater\u00edas de litio en M\u00e9xico y Latinoam\u00e9rica.",
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
