import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import { ContactActions, PageHero, Section } from "@/components/site/blocks";
import { CONTACT, useI18n } from "@/lib/i18n";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  staticData: { sitemap: true },
  head: () => pageHead({ path: "/nosotros", title: "Nosotros | XD Materials", description: "Conozca el enfoque de XD Materials para la gestión responsable y trazable de baterías de litio en México y Latinoamérica." }),
  component: AboutPage,
});

const copy = {
  es: {
    title: "Responsabilidad en cada movimiento",
    subtitle: "Una coordinación clara para materiales que exigen control.",
    body: [
      "XD Materials ayuda a empresas a gestionar baterías de litio fuera de uso mediante una coordinación integral, prudente y documentada. Atendemos requerimientos de recolección, transporte, manejo, tratamiento y reciclaje en México, Centroamérica y Sudamérica.",
      "Cada proyecto comienza con una evaluación del material, su condición, volumen y ubicación. Con esa información definimos el alcance, los requisitos de seguridad y la ruta documental antes de programar cualquier movimiento. Nuestro objetivo es reducir la carga operativa del generador sin perder control sobre el material ni su destino.",
      "Trabajamos con enfoque en seguridad, cumplimiento y rendición de cuentas. Cuando un servicio requiere documentación o autorizaciones específicas, estas se confirman conforme al proyecto y se comparten por canales controlados.",
    ],
    principles: ["Seguridad antes que velocidad", "Alcances y responsabilidades claros", "Evidencia documental del servicio"],
    location: "Ramos Arizpe, Coahuila, México",
    contact: "Contacto directo",
  },
  en: {
    title: "Accountability in every movement",
    subtitle: "Clear coordination for materials that demand control.",
    body: [
      "XD Materials helps companies manage end-of-life lithium batteries through prudent, documented, end-to-end coordination. We support collection, transportation, handling, treatment and recycling requirements across Mexico, Central America and South America.",
      "Each project begins with an assessment of the material, its condition, volume and location. That information defines the scope, safety requirements and documentation path before any movement is scheduled. Our goal is to reduce the generator’s operational burden without losing control of the material or its destination.",
      "We work with safety, compliance and accountability at the center. When a service requires specific documentation or authorizations, they are confirmed for the project and shared through controlled channels.",
    ],
    principles: ["Safety before speed", "Clear scope and accountability", "Documented service evidence"],
    location: "Ramos Arizpe, Coahuila, Mexico",
    contact: "Direct contact",
  },
} as const;

function AboutPage() {
  const { lang, t } = useI18n();
  const c = copy[lang];
  return <><PageHero eyebrow={t.brand.tagline} title={c.title} subtitle={c.subtitle} /><Section><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]"><div className="space-y-5 text-base leading-relaxed text-muted-foreground">{c.body.map((p) => <p key={p}>{p}</p>)}<ul className="grid gap-3 pt-3 sm:grid-cols-3">{c.principles.map((p) => <li key={p} className="flex gap-2 text-sm font-semibold text-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden />{p}</li>)}</ul></div><aside className="rounded-lg border border-border bg-secondary/50 p-7"><MapPin className="size-6 text-accent-foreground" aria-hidden /><h2 className="mt-5 text-lg font-semibold">XD Materials</h2><p className="mt-2 text-sm text-muted-foreground">{c.location}</p><p className="mt-8 text-xs font-semibold tracking-[0.16em] uppercase">{c.contact}</p><p className="mt-3 text-sm text-muted-foreground">{CONTACT.phoneDisplay}<br />{CONTACT.phoneDisplay2}<br />{CONTACT.email}</p><ContactActions className="mt-6" /></aside></div></Section></>;
}