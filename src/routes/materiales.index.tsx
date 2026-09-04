import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import materials from "@/assets/materials.jpg";

export const Route = createFileRoute("/materiales")({
  head: () => ({
    meta: [
      { title: "Materiales aceptados | Reciclaje de Baterías Latinoamérica" },
      {
        name: "description",
        content:
          "Celdas, módulos, packs, chatarra de proceso y material fuera de especificación. Aceptación sujeta a evaluación técnica previa.",
      },
      {
        property: "og:title",
        content: "Materiales aceptados | Reciclaje de Baterías Latinoamérica",
      },
      {
        property: "og:description",
        content:
          "Qué materiales de baterías de litio evaluamos y qué condiciones requieren manejo especial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/materiales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/materiales" }],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={t.materials.title}
        subtitle={t.materials.subtitle}
      />
      <Section>
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

        <div className="mt-10">
          <EmergencyNotice />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
