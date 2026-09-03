import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Cinco etapas con puntos de control: solicitud, evaluación de riesgo, propuesta, embarque y expediente documental del material.",
      },
      { property: "og:title", content: "Proceso | Reciclaje de Baterías Latinoamérica" },
      {
        property: "og:description",
        content:
          "Proceso verificable y documentado para el manejo de baterías de litio al final de su vida útil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/proceso" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/proceso" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={t.process.title} subtitle={t.process.subtitle} />
      <Section>
        <ol className="relative space-y-px">
          {t.process.steps.map((s, i) => (
            <li
              key={s.t}
              className="grid gap-4 border-b border-border py-8 sm:grid-cols-[7rem_1fr] sm:gap-10"
            >
              <span className="text-3xl font-semibold text-accent-foreground/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-semibold">{s.t}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 rounded-lg border border-border bg-secondary/60 p-7">
          <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">
            {t.process.noteTitle}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{t.process.note}</p>
        </div>
        <div className="mt-8">
          <EmergencyNotice />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
