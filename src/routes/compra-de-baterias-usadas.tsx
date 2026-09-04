import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import { valorizacion } from "@/content/valorizacion";
import { materials } from "@/content/materials";
import { breadcrumbLd, faqLd, pageHead, serviceLd } from "@/lib/seo";

const PATH = "/compra-de-baterias-usadas";

export const Route = createFileRoute("/compra-de-baterias-usadas")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PATH,
      title: "Compra de baterías usadas en México | Evaluación y retiro",
      description: valorizacion.description.es,
      jsonLd: [
        serviceLd({
          name: "Compra y valorización de baterías usadas",
          description: valorizacion.description.es,
          path: PATH,
          areaServed: ["México", "Centroamérica", "Sudamérica"],
        }),
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Compra de baterías usadas", path: PATH },
        ]),
        faqLd(valorizacion.faq.map((f) => ({ q: f.q.es, a: f.a.es }))),
      ],
    }),
  component: ValorizacionPage,
});

function ValorizacionPage() {
  const { lang, t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={valorizacion.title[lang]}
        subtitle={valorizacion.description[lang]}
      />
      <Section>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {valorizacion.intro[lang]}
        </p>
        <Link
          to="/contacto"
          search={{ material: valorizacion.name[lang] }}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {valorizacion.cta[lang]}
          <ArrowRight className="size-4" aria-hidden />
        </Link>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{valorizacion.factorsTitle[lang]}</h2>
            <div className="mt-5">
              <BulletList items={[...valorizacion.factors[lang]]} />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{valorizacion.typesTitle[lang]}</h2>
            <div className="mt-5">
              <BulletList items={[...valorizacion.types[lang]]} />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-7">
          <h2 className="text-lg font-semibold">{valorizacion.honestyTitle[lang]}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {valorizacion.honesty[lang]}
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-7">
          <h2 className="text-lg font-semibold">{valorizacion.stepsTitle[lang]}</h2>
          <ol className="mt-5 space-y-3">
            {valorizacion.steps[lang].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <EmergencyNotice />
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{valorizacion.faqTitle[lang]}</h2>
          <dl className="mt-6 space-y-6">
            {valorizacion.faq.map((f, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-6">
                <dt className="text-sm font-semibold">{f.q[lang]}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{valorizacion.relatedTitle[lang]}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m) => (
              <li key={m.slug}>
                <Link
                  to="/materiales/$slug"
                  params={{ slug: m.slug }}
                  className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-accent"
                >
                  {m.name[lang]}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
