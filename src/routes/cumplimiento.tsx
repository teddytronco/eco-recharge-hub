import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { FileClock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  Card,
  ContactActions,
  CtaBand,
  PageHero,
  Section,
  SectionTitle,
} from "@/components/site/blocks";

export const Route = createFileRoute("/cumplimiento")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/cumplimiento",
      title: "Cumplimiento y documentaci\u00f3n de residuos peligrosos | Recyc Latam",
      description: "Manifiestos, bit\u00e1coras y evidencia de destino: qu\u00e9 documentaci\u00f3n recibe el generador en cada proyecto de disposici\u00f3n de bater\u00edas de litio.",
    }),
  component: CompliancePage,
});

function CompliancePage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={t.compliance.title}
        subtitle={t.compliance.subtitle}
      />
      <Section>
        <SectionTitle title={t.compliance.principlesTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.compliance.principles.map((p, i) => (
            <Card key={p.t} title={p.t} index={i + 1}>
              {p.d}
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionTitle title={t.compliance.registryTitle} subtitle={t.compliance.registryNote} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.compliance.slots.map((s) => (
            <div
              key={s.t}
              className="flex gap-4 rounded-lg border border-dashed border-border bg-card p-6"
            >
              <FileClock className="size-5 shrink-0 text-muted-foreground" aria-hidden />
              <div>
                <h3 className="text-base font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                <span className="mt-3 inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {t.common.pending}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs text-muted-foreground">{t.common.editableNote}</p>
      </Section>

      <Section>
        <div className="rounded-lg border border-border bg-card p-7 sm:p-9">
          <h2 className="text-xl font-semibold tracking-tight">{t.compliance.requestTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            {t.compliance.requestBody}
          </p>
          <ContactActions className="mt-6" />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
