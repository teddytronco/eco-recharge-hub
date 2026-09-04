import type { Lang } from "@/lib/i18n";

export const ui = {
  nav: { es: { coverage: "Cobertura", resources: "Recursos" }, en: { coverage: "Coverage", resources: "Resources" } },
  materials: {
    hubTitle: {
      es: "Reciclaje y disposición de baterías de litio por tipo de material",
      en: "Lithium battery recycling and disposal by material type",
    },
    hubIntro: {
      es: "Cada tipo de batería exige un criterio distinto de diagnóstico, empaque y documentación. Elija el material que genera su operación para ver los requisitos aplicables.",
      en: "Each battery type demands a different diagnosis, packaging and documentation criterion. Choose the material your operation generates to see the applicable requirements.",
    },
    risks: { es: "Riesgos y condiciones a vigilar", en: "Risks and conditions to watch" },
    packaging: { es: "Requisitos de empaque y manejo", en: "Packaging and handling requirements" },
    documentation: { es: "Documentación que entregamos", en: "Documentation we deliver" },
    who: { es: "Quién genera este material", en: "Who generates this material" },
    brands: { es: "Marcas y equipos con los que trabajamos", en: "Brands and equipment we work with" },
    brandsNote: {
      es: "Ejemplos de marcas habituales en los materiales que recibimos. La lista no es exhaustiva: cualquier marca puede evaluarse — indíquenos el modelo en su solicitud.",
      en: "Examples of brands commonly seen in the materials we receive. The list is not exhaustive: any brand can be evaluated — state the model in your request.",
    },
    categoriesTitle: { es: "¿Qué necesita retirar?", en: "What do you need removed?" },
    categoriesSubtitle: {
      es: "Elija su tipo de material: cada uno tiene requisitos propios de manejo, empaque y documentación.",
      en: "Choose your material type: each has its own handling, packaging and documentation requirements.",
    },
    seeAll: { es: "Ver todos los materiales", en: "See all materials" },
  },
  coverage: {
    title: {
      es: "Cobertura: reciclaje de baterías en México y Latinoamérica",
      en: "Coverage: battery recycling in Mexico and Latin America",
    },
    intro: {
      es: "Coordinamos la gestión de disposición de baterías en México, Centroamérica y Sudamérica con operadores locales. Seleccione su estado o país para conocer el enfoque de la zona.",
      en: "We coordinate battery disposal management across Mexico, Central America and South America with local operators. Select your state or country to see the local approach.",
    },
    sectors: { es: "Sectores que atendemos en la zona", en: "Sectors we serve in this area" },
    corridors: { es: "Logística y consolidación", en: "Logistics and consolidation" },
    regulatory: { es: "Marco aplicable", en: "Applicable framework" },
    backToHub: { es: "Ver toda la cobertura", en: "See full coverage" },
    inRegion: { es: "Otras zonas de la región", en: "Other areas in the region" },
    note: {
      es: "La cobertura se confirma por proyecto: alcance, operadores y autorizaciones se verifican antes de comprometer cualquier retiro.",
      en: "Coverage is confirmed per project: scope, operators and authorisations are verified before committing to any pickup.",
    },
  },
  resources: {
    title: { es: "Recursos técnicos y regulatorios", en: "Technical and regulatory resources" },
    intro: {
      es: "Guías prácticas sobre clasificación, empaque, documentación y movimiento de baterías al final de su vida útil. Contenido informativo, no asesoría regulatoria.",
      en: "Practical guides on classification, packaging, documentation and movement of end-of-life batteries. Informational content, not regulatory advice.",
    },
    read: { es: "Leer", en: "Read" },
    all: { es: "Ver todos los recursos", en: "See all resources" },
    disclaimer: {
      es: "Este contenido es informativo y no sustituye la revisión normativa aplicable a cada operación. El alcance se confirma por escrito en cada proyecto.",
      en: "This content is informational and does not replace the regulatory review applicable to each operation. Scope is confirmed in writing for each project.",
    },
  },
} as const;

export function pick<T extends { es: unknown; en: unknown }>(value: T, lang: Lang) {
  return value[lang] as T["es"];
}
