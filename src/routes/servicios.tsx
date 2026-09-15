import { createFileRoute } from "@tanstack/react-router";
import { Archive, FileCheck2, Recycle, Truck } from "lucide-react";
import { BulletList, PageHero, Section, SectionTitle } from "@/components/site/blocks";
import { QuoteForm } from "@/components/site/QuoteForm";
import { useI18n } from "@/lib/i18n";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  staticData: { sitemap: true },
  head: () => pageHead({ path: "/servicios", title: "Servicios de gestión de baterías | XD Materials", description: "Recolección, manejo, transporte, tratamiento, reciclaje y trazabilidad documental para baterías de litio industriales." }),
  component: ServicesPage,
});

const copy = {
  es: {
    title: "Gestión de baterías, de principio a fin",
    subtitle: "Definimos la solución según la química, condición, volumen, origen y destino del material.",
    items: [
      { t: "Recolección y logística", d: "Coordinación del retiro y movimiento del material.", b: ["Evaluación del sitio y volumen", "Empaque y carga coordinados", "Transporte con operadores aplicables"] },
      { t: "Manejo y almacenamiento especializado", d: "Control del material antes y durante su traslado.", b: ["Segregación por química y formato", "Aislamiento y contención", "Unidades al final de su vida útil o no funcionales"] },
      { t: "Tratamiento y reciclaje", d: "Definición de una ruta viable para el material recibido.", b: ["Revisión técnica inicial", "Coordinación del tratamiento", "Confirmación del destino aplicable"] },
      { t: "Documentación y trazabilidad", d: "Expediente proporcional al alcance del servicio.", b: ["Registro de cantidades y condición", "Evidencia de movimiento", "Documentación de cierre"] },
    ],
    scopeTitle: "Materiales y cobertura",
    scopeBody: "Atendemos baterías de vehículos eléctricos, BESS, herramientas, electrónicos y electrodomésticos en toda la República Mexicana, Centroamérica y Sudamérica.",
    disclosure: "Alcance regulatorio y documental",
    disclosureBody: "Los requisitos, autorizaciones y documentos se validan para cada operación. La documentación sensible se comparte únicamente por canales controlados y cuando corresponde al proyecto.",
    formTitle: "Solicite una evaluación",
    formSub: "Comparta los datos del material para definir los siguientes pasos.",
  },
  en: {
    title: "Battery management, end to end",
    subtitle: "We define the solution around the material’s chemistry, condition, volume, origin and destination.",
    items: [
      { t: "Collection and logistics", d: "Coordination of pickup and material movement.", b: ["Site and volume assessment", "Coordinated packaging and loading", "Transport with applicable operators"] },
      { t: "Specialized handling and storage", d: "Control of material before and during transport.", b: ["Separation by chemistry and format", "Insulation and containment", "End-of-life and non-functional units"] },
      { t: "Treatment and recycling", d: "A viable route is defined for the material received.", b: ["Initial technical review", "Treatment coordination", "Confirmation of applicable destination"] },
      { t: "Documentation and traceability", d: "A record proportional to the service scope.", b: ["Quantity and condition records", "Movement evidence", "Closing documentation"] },
    ],
    scopeTitle: "Materials and coverage",
    scopeBody: "We support EV, BESS, power-tool, electronics and appliance batteries across all of Mexico, Central America and South America.",
    disclosure: "Regulatory and documentation scope",
    disclosureBody: "Requirements, authorizations and records are validated for each operation. Sensitive documentation is shared only through controlled channels when relevant to the project.",
    formTitle: "Request an assessment",
    formSub: "Share the material details so we can define the next steps.",
  },
} as const;

const icons = [Truck, Archive, Recycle, FileCheck2];

function ServicesPage() {
  const { lang, t } = useI18n();
  const c = copy[lang];
  return <>
    <PageHero eyebrow={t.brand.tagline} title={c.title} subtitle={c.subtitle} />
    <Section><div className="grid gap-5 md:grid-cols-2">{c.items.map((item, i) => { const Icon = icons[i] ?? Recycle; return <article key={item.t} className="rounded-lg border border-border bg-card p-6 sm:p-7"><Icon className="size-6 text-accent-foreground" aria-hidden /><h2 className="mt-5 text-xl font-semibold">{item.t}</h2><p className="mt-2 text-sm text-muted-foreground">{item.d}</p><div className="mt-5"><BulletList items={item.b} /></div></article>; })}</div></Section>
    <Section muted><div className="grid gap-8 lg:grid-cols-2"><div><SectionTitle title={c.scopeTitle} subtitle={c.scopeBody} /></div><details className="rounded-lg border border-border bg-card p-6"><summary className="cursor-pointer font-semibold">{c.disclosure}</summary><p className="mt-4 text-sm text-muted-foreground">{c.disclosureBody}</p></details></div></Section>
    <Section className="scroll-mt-24" ><div id="evaluacion" className="scroll-mt-24"><SectionTitle title={c.formTitle} subtitle={c.formSub} /><div className="mt-8"><QuoteForm /></div></div></Section>
  </>;
}