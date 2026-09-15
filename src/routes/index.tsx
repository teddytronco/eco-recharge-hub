import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Laptop,
  MapPin,
  MessageCircle,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { QuickLeadForm } from "@/components/site/QuickLeadForm";
import { ContactActions, Section, SectionTitle } from "@/components/site/blocks";
import evBatteryPlatform from "@/assets/ev-battery-platform-hd.jpg.asset.json";
import { useI18n, whatsappUrl } from "@/lib/i18n";
import { pageHead, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/",
      title: "Reciclaje de baterías de litio en México | XD Materials",
      description:
        "Recolección, transporte, manejo, tratamiento y reciclaje de baterías de litio para empresas en México y Latinoamérica.",
      jsonLd: serviceLd({
        name: "Gestión integral de baterías de litio",
        description: "Soluciones B2B de recolección, transporte, manejo, tratamiento y reciclaje de baterías de litio.",
        path: "/",
        areaServed: ["México", "Centroamérica", "Sudamérica"],
      }),
    }),
  component: HomePage,
});

const copy = {
  es: {
    eyebrow: "México · Centroamérica · Sudamérica",
    title: "Soluciones integrales para baterías de litio fuera de uso",
    subtitle: "Coordinamos recolección, transporte, manejo, tratamiento y reciclaje con trazabilidad de principio a fin.",
    primary: "Solicitar evaluación",
    secondary: "Conocer servicios",
    response: "Respuesta en un máximo de 24 horas hábiles",
    heroAlt: "Plataforma de vehículo eléctrico con batería de alto voltaje integrada",
    values: [
      ["Gestión integral", "Un solo equipo coordina el servicio completo."],
      ["Cumplimiento y trazabilidad", "Documentación y seguimiento según cada proyecto."],
      ["Cobertura regional", "Atención a empresas en México y Latinoamérica."],
    ],
    materialsTitle: "Baterías que gestionamos",
    materialsSub: "Evaluamos química, formato, condición y volumen antes de definir la solución.",
    materials: ["Vehículos eléctricos", "Almacenamiento BESS", "Herramientas eléctricas", "Electrónicos", "Electrodomésticos", "Baterías industriales"],
    clientsTitle: "Empresas que atendemos",
    clients: ["Armadoras y OEM", "Proveedores automotrices Tier 1", "Aseguradoras de vehículos", "Centros de acopio de electrónicos", "Compañías de energía (BESS y respaldo)"],
    processTitle: "Cuatro pasos. Un responsable.",
    process: [
      ["Evaluación", "Identificamos material, volumen y condición."],
      ["Recolección", "Acordamos fecha, empaque y carga."],
      ["Manejo y transporte", "Coordinamos el movimiento especializado."],
      ["Tratamiento y reciclaje", "Cerramos el servicio con trazabilidad documental."],
    ],
    trustTitle: "Control en cada etapa",
    trustBody: "El alcance, los requisitos y la documentación se confirman para cada servicio antes de operar.",
    trust: ["Manejo especializado", "Cumplimiento regulatorio", "Trazabilidad completa"],
    disclosure: "Documentación y autorizaciones",
    disclosureBody: "La documentación aplicable se confirma y comparte de forma controlada según el material, origen, ruta y alcance del proyecto. No publicamos documentación sensible en este sitio.",
    formTitle: "Evalúe su material",
    formSub: "Comparta tres datos. Nuestro equipo confirmará los siguientes pasos.",
    location: "Ramos Arizpe, Coahuila, México",
  },
  en: {
    eyebrow: "Mexico · Central America · South America",
    title: "End-to-end solutions for end-of-life lithium batteries",
    subtitle: "We coordinate collection, transportation, handling, treatment and recycling with full traceability.",
    primary: "Request an assessment",
    secondary: "Explore services",
    response: "Response within a maximum of 24 business hours",
    heroAlt: "Electric vehicle platform with an integrated high-voltage battery",
    values: [
      ["End-to-end management", "One team coordinates the complete service."],
      ["Compliance and traceability", "Documentation and tracking for each project."],
      ["Regional coverage", "Support for companies across Mexico and Latin America."],
    ],
    materialsTitle: "Batteries we manage",
    materialsSub: "We assess chemistry, format, condition and volume before defining the solution.",
    materials: ["Electric vehicles", "BESS storage", "Power tools", "Electronics", "Home appliances", "Industrial batteries"],
    clientsTitle: "Companies we serve",
    clients: ["OEMs and vehicle assemblers", "Tier 1 automotive suppliers", "Vehicle insurers", "Electronics collection centers", "Energy companies (BESS and backup)"],
    processTitle: "Four steps. One accountable team.",
    process: [
      ["Assessment", "We identify material, volume and condition."],
      ["Collection", "We coordinate date, packaging and loading."],
      ["Handling and transport", "We manage the specialized movement."],
      ["Treatment and recycling", "We close the service with documented traceability."],
    ],
    trustTitle: "Control at every stage",
    trustBody: "Scope, requirements and documentation are confirmed for each service before operations begin.",
    trust: ["Specialized handling", "Regulatory compliance", "Complete traceability"],
    disclosure: "Documentation and authorizations",
    disclosureBody: "Applicable documentation is confirmed and shared securely according to the material, origin, route and project scope. Sensitive records are not published on this site.",
    formTitle: "Assess your material",
    formSub: "Share three details. Our team will confirm the next steps.",
    location: "Ramos Arizpe, Coahuila, Mexico",
  },
} as const;

const valueIcons = [Recycle, ShieldCheck, MapPin];
const materialIcons = [Car, BatteryCharging, Wrench, Laptop, Zap, Factory];
const clientIcons = [Car, Factory, ShieldCheck, Recycle, Zap];
const processIcons = [ClipboardCheck, PackageCheck, Truck, Recycle];

function HomePage() {
  const { lang, t } = useI18n();
  const c = copy[lang];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={evBatteryPlatform.url}
          alt={c.heroAlt}
          width={1376}
          height={768}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-center opacity-50 sm:object-right"
        />
        <div className="absolute inset-0 bg-primary/65" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{c.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{c.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/" hash="evaluacion" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground">
                {c.primary}<ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={whatsappUrl(lang)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/35 px-5 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10">
                <MessageCircle className="size-4" aria-hidden /> WhatsApp
              </a>
              <Link to="/servicios" className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-primary-foreground/85 hover:text-primary-foreground">{c.secondary}</Link>
            </div>
            <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-accent uppercase">{c.response}</p>
          </div>
          <QuickLeadForm />
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {c.values.map(([title, body], i) => {
            const Icon = valueIcons[i] ?? Recycle;
            return <article key={title} className="border-t-2 border-accent pt-6"><Icon className="size-6 text-accent-foreground" aria-hidden /><h2 className="mt-4 text-lg font-semibold">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{body}</p></article>;
          })}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-14 lg:grid-cols-2">
          <div><SectionTitle title={c.materialsTitle} subtitle={c.materialsSub} /><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">{c.materials.map((item, i) => { const Icon = materialIcons[i] ?? BatteryCharging; return <div key={item} className="rounded-md border border-border bg-card p-4"><Icon className="size-5 text-accent-foreground" aria-hidden /><h3 className="mt-3 text-sm font-semibold">{item}</h3></div>; })}</div></div>
          <div><SectionTitle title={c.clientsTitle} /><div className="mt-8 grid gap-3 sm:grid-cols-2">{c.clients.map((item, i) => { const Icon = clientIcons[i] ?? Building2; return <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card p-4"><Icon className="size-5 shrink-0 text-accent-foreground" aria-hidden /><h3 className="text-sm font-semibold">{item}</h3></div>; })}</div></div>
        </div>
      </Section>

      <Section>
        <SectionTitle title={c.processTitle} />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">{c.process.map(([title, body], i) => { const Icon = processIcons[i] ?? CheckCircle2; return <li key={title} className="bg-card p-6"><Icon className="size-5 text-accent-foreground" aria-hidden /><span className="mt-5 block text-xs text-muted-foreground">0{i + 1}</span><h3 className="mt-1 font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{body}</p></li>; })}</ol>
      </Section>

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><FileCheck2 className="size-7 text-accent-foreground" aria-hidden /><h2 className="mt-5 text-2xl font-semibold sm:text-3xl">{c.trustTitle}</h2><p className="mt-3 text-muted-foreground">{c.trustBody}</p></div>
          <div><ul className="grid gap-3 sm:grid-cols-3">{c.trust.map((item) => <li key={item} className="rounded-md border border-border bg-card p-4 text-sm font-semibold"><CheckCircle2 className="mb-3 size-5 text-accent-foreground" aria-hidden />{item}</li>)}</ul><details className="mt-4 rounded-md border border-border bg-card p-5"><summary className="cursor-pointer text-sm font-semibold">{c.disclosure}</summary><p className="mt-3 text-sm text-muted-foreground">{c.disclosureBody}</p></details></div>
        </div>
      </Section>

      <section id="evaluacion" className="scroll-mt-24 border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
          <div><h2 className="text-3xl font-semibold">{c.formTitle}</h2><p className="mt-3 max-w-md text-primary-foreground/70">{c.formSub}</p><div className="mt-8 rounded-md border border-primary-foreground/20 p-5"><div className="flex gap-3"><MapPin className="size-5 shrink-0 text-accent" aria-hidden /><div><p className="text-sm font-semibold">XD Materials</p><p className="mt-1 text-sm text-primary-foreground/70">{c.location}</p></div></div><ContactActions className="mt-5" /></div></div>
          <QuickLeadForm />
        </div>
      </section>
    </>
  );
}