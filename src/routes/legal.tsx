import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, useI18n } from "@/lib/i18n";
import { PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/legal")({
  staticData: { sitemap: false },
  head: () =>
    pageHead({
      path: "/legal",
      title: "Aviso legal y privacidad | XD Materials",
      description: "Tratamiento de datos personales y condiciones de uso del sitio.",
      robots: "noindex",
    }),
  component: LegalPage,
});

function LegalPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero title={t.legal.title} subtitle={t.legal.subtitle} />
      <Section>
        <div className="max-w-3xl space-y-10">
          {t.legal.sections.map((s, i) => (
            <article key={s.t}>
              <h2 className="text-lg font-semibold">
                <span className="mr-3 text-accent-foreground/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.t}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
          <p className="border-t border-border pt-8 text-sm text-muted-foreground">
            {CONTACT.email} · {CONTACT.phoneDisplay}
          </p>
        </div>
      </Section>
    </>
  );
}
