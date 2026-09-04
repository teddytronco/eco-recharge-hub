import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BulletList, CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import { findMaterial, materials } from "@/content/materials";
import { ui } from "@/content/ui";
import { breadcrumbLd, pageHead, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/materiales/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const material = findMaterial(params.slug);
    if (!material) throw notFound();
    return { slug: material.slug };
  },
  head: ({ params }) => {
    const material = findMaterial(params.slug);
    if (!material) {
      return { meta: [{ title: "Material no encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/materiales/${material.slug}`;
    return pageHead({
      path,
      title: `${material.title.es} | Recyc Latam`,
      description: material.description.es,
      jsonLd: [
        serviceLd({
          name: material.title.es,
          description: material.description.es,
          path,
          areaServed: ["México", "Centroamérica", "Sudamérica"],
        }),
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Materiales", path: "/materiales" },
          { name: material.name.es, path },
        ]),
      ],
    });
  },
  component: MaterialDetail,
});

function MaterialDetail() {
  const { lang, t } = useI18n();
  const { slug } = Route.useParams();
  const material = findMaterial(slug)!;
  const others = materials.filter((m) => m.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={material.title[lang]}
        subtitle={material.description[lang]}
      />
      <Section>
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {material.intro[lang]}
        </p>
        <Link
          to="/contacto"
          search={{ material: material.name[lang] }}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {lang === "es"
            ? `Cotizar disposición de ${material.name.es}`
            : `Get a quote for ${material.name.en}`}
          <ArrowRight className="size-4" aria-hidden />
        </Link>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{ui.materials.risks[lang]}</h2>
            <div className="mt-5">
              <BulletList items={material.risks[lang]} tone="warn" />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{ui.materials.packaging[lang]}</h2>
            <div className="mt-5">
              <BulletList items={material.packaging[lang]} />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{ui.materials.documentation[lang]}</h2>
            <div className="mt-5">
              <BulletList items={material.documentation[lang]} />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">{ui.materials.who[lang]}</h2>
            <div className="mt-5">
              <BulletList items={material.who[lang]} />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-border bg-card p-7">
          <h2 className="text-lg font-semibold">{ui.materials.brands[lang]}</h2>
          <div className="mt-5">
            <BulletList items={material.brands[lang]} />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
            {ui.materials.brandsNote[lang]}
          </p>
        </div>

        <div className="mt-10">
          <EmergencyNotice />
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{ui.materials.seeAll[lang]}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => (
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
