import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, useI18n } from "@/lib/i18n";
import { Card, ContactActions, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/blocks";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Equipo enfocado en la gestión responsable de baterías de litio en Latinoamérica: prudencia técnica, transparencia y servicio bilingüe.",
      },
      { property: "og:title", content: "Nosotros | Reciclaje de Baterías Latinoamérica" },
      {
        property: "og:description",
        content:
          "Quiénes somos y cómo trabajamos con clientes industriales en la gestión de baterías de litio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/nosotros" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={t.about.title} subtitle={t.about.subtitle} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
          <div className="rounded-lg border border-border bg-secondary/60 p-7">
            <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
              {t.about.contactTitle}
            </h2>
            <p className="mt-4 text-lg font-semibold">{t.about.contactName}</p>
            <p className="mt-1 text-sm text-muted-foreground">{CONTACT.phoneDisplay}</p>
            <p className="text-sm break-all text-muted-foreground">{CONTACT.email}</p>
            <ContactActions className="mt-6" />
          </div>
        </div>
      </Section>
      <Section muted>
        <SectionTitle title={t.about.valuesTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v, i) => (
            <Card key={v.t} title={v.t} index={i + 1}>
              {v.d}
            </Card>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
