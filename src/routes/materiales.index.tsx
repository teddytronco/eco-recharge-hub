import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, Car, Factory, Laptop, Wrench, Zap } from "lucide-react";
import { ChemistryGuide } from "@/components/site/ChemistryGuide";
import { EmergencyNotice, PageHero, Section, SectionTitle } from "@/components/site/blocks";
import { useI18n } from "@/lib/i18n";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/materiales/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/materiales",
      title: "Tipos de baterías y químicas | XD Materials",
      description:
        "Guía visual de baterías EV, BESS, herramientas, electrónicos y químicas como NMC, LFP y NiMH para evaluación y reciclaje.",
    }),
  component: MaterialsPage,
});

const copy = {
  es: {
    title: "Baterías y materiales que gestionamos",
    subtitle: "Identifique el tipo, formato y química de su material antes de solicitar una evaluación.",
    categoriesTitle: "Categorías principales",
    categoriesSub: "De dónde provienen las baterías que gestionamos y cómo identificarlas.",
    categories: [
      ["Vehículos eléctricos", "Packs y módulos de vehículos eléctricos e híbridos."],
      ["Almacenamiento BESS", "Módulos, racks y sistemas estacionarios."],
      ["Herramientas eléctricas", "Packs de taladros, sierras y equipo inalámbrico."],
      ["Electrónicos", "Laptops, tablets, teléfonos, cámaras y powerbanks."],
      ["Electrodomésticos", "Aspiradoras, robots de limpieza y equipos recargables."],
      ["Aplicaciones industriales", "Celdas, módulos, respaldo y scrap de producción."],
    ],
    cta: "Solicitar evaluación del material",
  },
  en: {
    title: "Batteries and materials we manage",
    subtitle: "Identify your material’s type, format and chemistry before requesting an assessment.",
    categoriesTitle: "Main categories",
    categoriesSub: "Where the batteries we manage come from and how to identify them.",
    categories: [
      ["Electric vehicles", "Packs and modules from electric and hybrid vehicles."],
      ["BESS storage", "Modules, racks and stationary systems."],
      ["Power tools", "Packs from drills, saws and cordless equipment."],
      ["Electronics", "Laptops, tablets, phones, cameras and powerbanks."],
      ["Home appliances", "Vacuums, cleaning robots and rechargeable equipment."],
      ["Industrial applications", "Cells, modules, backup systems and production scrap."],
    ],
    cta: "Request a material assessment",
  },
} as const;

const icons = [Car, BatteryCharging, Wrench, Laptop, Zap, Factory];

function MaterialsPage() {
  const { lang, t } = useI18n();
  const c = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.brand.tagline} title={c.title} subtitle={c.subtitle} />
      <Section>
        <SectionTitle title={c.categoriesTitle} subtitle={c.categoriesSub} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.categories.map(([title, body], index) => {
            const Icon = icons[index] ?? BatteryCharging;
            return (
              <article key={title} className="rounded-lg border border-border bg-card p-5">
                <Icon className="size-6 text-accent-foreground" aria-hidden />
                <h2 className="mt-4 font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <ChemistryGuide />
      <Section muted>
        <div className="mx-auto max-w-3xl">
          <EmergencyNotice />
          <div className="mt-8 text-center">
            <Link
              to="/"
              hash="evaluacion"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {c.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}