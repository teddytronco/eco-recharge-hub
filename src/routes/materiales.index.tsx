import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import materials from "@/assets/materials.jpg";

export const Route = createFileRoute("/materiales/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/materiales",
      title: "Materiales aceptados: bater\u00edas de litio, EV, almacenamiento y m\u00e1s | Reciclaje de Bater\u00edas Latinoam\u00e9rica",
      description: "Celdas, m\u00f3dulos, packs de EV, sistemas de almacenamiento, herramientas el\u00e9ctricas, electrodom\u00e9sticos y electr\u00f3nicos. Aceptaci\u00f3n sujeta a evaluaci\u00f3n t\u00e9cnica previa.",
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
