import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/proceso")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/proceso",
      title: "Proceso de disposici\u00f3n de bater\u00edas de litio paso a paso | Reciclaje de Bater\u00edas Latinoam\u00e9rica",
      description: "Del diagn\u00f3stico del material al expediente de destino: c\u00f3mo se ejecuta un proyecto de disposici\u00f3n de bater\u00edas de litio, etapa por etapa.",
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
