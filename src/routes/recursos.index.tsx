import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CtaBand, PageHero, Section } from "@/components/site/blocks";
import { articles } from "@/content/resources";
import { ui } from "@/content/ui";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/recursos/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/recursos",
      title: "Recursos técnicos sobre disposición de baterías de litio | Reciclaje de Baterías Latinoamérica",
      description:
        "Guías prácticas sobre clasificación, empaque, documentación y exportación de baterías de litio al final de su vida útil en México y Latinoamérica.",
      jsonLd: breadcrumbLd([
        { name: "Inicio", path: "/" },
        { name: "Recursos", path: "/recursos" },
      ]),
    }),
  component: ResourcesHub,
});

function ResourcesHub() {
  const { lang, t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={ui.resources.title[lang]}
        subtitle={ui.resources.intro[lang]}
      />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug} className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-lg font-semibold leading-snug">{a.title[lang]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {a.description[lang]}
              </p>
              <Link
                to="/recursos/$slug"
                params={{ slug: a.slug }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                {ui.resources.read[lang]}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {ui.resources.disclaimer[lang]}
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
