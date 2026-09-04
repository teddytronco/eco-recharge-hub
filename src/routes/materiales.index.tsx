import { faqLd, pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, EmergencyNotice, PageHero, Section, SectionTitle } from "@/components/site/blocks";
import { Faq } from "@/components/site/Faq";
import { faqItems } from "@/content/faq";
import { materials as materialList } from "@/content/materials";
import { ui } from "@/content/ui";
import materials from "@/assets/materials.jpg";

export const Route = createFileRoute("/materiales/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/materiales",
      title: "Materiales aceptados: baterías de litio, EV, almacenamiento y más | Reciclaje de Baterías Latinoamérica",
      description: "Celdas, módulos, packs de EV, sistemas de almacenamiento, herramientas eléctricas, electrodomésticos y electrónicos. Aceptación sujeta a evaluación técnica previa.",
      jsonLd: faqLd(faqItems.map((i) => ({ q: i.q.es, a: i.a.es }))),
    }),
  component: MaterialsPage,
});

function MaterialsPage() {
  const { lang, t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={t.materials.title}
        subtitle={t.materials.subtitle}
      />
      <Section>
        <SectionTitle
          title={ui.materials.categoriesTitle[lang]}
          subtitle={ui.materials.categoriesSubtitle[lang]}
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materialList.map((m) => (
            <li key={m.slug}>
              <Link
                to="/materiales/$slug"
                params={{ slug: m.slug }}
                className="group flex h-full flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <div>
                  <h3 className="text-base font-semibold">{m.name[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.description[lang]}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground/80">
                  {ui.materials.viewMaterial[lang]}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <img
            src={materials}
            alt={t.materials.alt}
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{t.materials.acceptedTitle}</h2>
            <div className="mt-5">
              <BulletList items={t.materials.accepted} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{t.materials.conditionsTitle}</h2>
            <div className="mt-5">
              <BulletList items={t.materials.conditions} tone="warn" />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{t.materials.excludedTitle}</h2>
            <div className="mt-5">
              <BulletList items={t.materials.excluded} tone="deny" />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-7">
          <h2 className="text-lg font-semibold">{t.materials.valorizationTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t.materials.valorizationBody}
          </p>
          <Link
            to="/compra-de-baterias-usadas"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.materials.valorizationCta}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10">
          <EmergencyNotice />
        </div>
      </Section>
      <Faq />
      <CtaBand />
    </>
  );
}
