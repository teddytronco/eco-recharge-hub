import salesEs from "@/assets/careers-sales-es.pdf.asset.json";
import salesEn from "@/assets/careers-sales-en.pdf.asset.json";
import ehsEs from "@/assets/careers-ehs-es.pdf.asset.json";
import ehsEn from "@/assets/careers-ehs-en.pdf.asset.json";

export const careers = {
  es: {
    tab: "Carreras", eyebrow: "Trabaja en XD Materials", title: "Construye lo que sigue.",
    intro: "Forma parte de un equipo pequeño con un gran reto: dar un nuevo destino a las baterías de vehículos eléctricos en México.",
    principles: ["Impacto directo en la operación", "Responsabilidad desde el primer día", "Línea directa con la Dirección"],
    openings: "Vacantes abiertas", count: "2 oportunidades", start: "Inicio: noviembre 2026", reports: "Reporta al Director de Operaciones",
    responsibilities: "Tu misión", requirements: "Lo que buscamos", offer: "Lo que ofrecemos",
    apply: "Postularme por correo", pdf: "Ver vacante completa (PDF)",
    howTitle: "Tu siguiente paso empieza aquí.", how: "Envía tu CV a crecio@xd-global.com con el asunto de la vacante que te interesa.",
    emailNote: "Adjunta tu CV antes de enviar el correo.", subject: "Asunto",
    roles: [
      { id: "sales", title: "Ejecutivo(a) de Ventas", specialty: "Adquisición de Baterías EV", location: "Monterrey o Saltillo", mode: "Híbrido · Viajes en México", subject: "Ventas Baterías EV", pdf: salesEs.url,
        mission: "Convierte flotillas, aseguradoras, deshuesaderos y talleres en proveedores recurrentes. Tu resultado se mide en toneladas de baterías adquiridas.",
        responsibilities: ["Prospectar y abrir cuentas nuevas.", "Llevar el ciclo comercial hasta la primera recolección.", "Preparar propuestas y mantener el CRM al día."],
        requirements: ["2+ años en ventas B2B o compras, con nuevas cuentas demostrables.", "Experiencia en prospección en frío: llamadas, visitas y LinkedIn.", "Licencia vigente, disponibilidad para viajar e inglés intermedio."],
        offer: ["Sueldo base + comisiones sin tope por tonelada adquirida.", "Crecimiento hacia cuentas OEM y expansión regional.", "Prestaciones de ley."],
      },
      { id: "ehs", title: "Coordinador(a) de EHS", specialty: "Cumplimiento Ambiental", location: "Arteaga, Coahuila", mode: "100% presencial", subject: "EHS Arteaga", pdf: ehsEs.url,
        mission: "Lidera el cumplimiento ambiental y la seguridad de la operación. Desarrolla la función interna y prepara a XD para auditorías de armadoras.",
        responsibilities: ["Gestionar permisos ambientales estatales y federales.", "Liderar procedimientos de seguridad, capacitación y cumplimiento STPS.", "Controlar manifiestos y documentación logística."],
        requirements: ["Ingeniería ambiental, industrial, química o afín; 3+ años en EHS o cumplimiento ambiental.", "Experiencia con SEMARNAT o autoridad estatal, manifiestos y NOM de la STPS.", "Inglés intermedio y residencia en Saltillo o Arteaga."],
        offer: ["Responsabilidad total sobre la función.", "Experiencia especializada en baterías de vehículos eléctricos.", "Prestaciones de ley."],
      },
    ],
  },
  en: {
    tab: "Careers", eyebrow: "Work at XD Materials", title: "Build what comes next.",
    intro: "Join a small team with a meaningful challenge: giving end-of-life electric vehicle batteries a new destination in Mexico.",
    principles: ["Direct operational impact", "Ownership from day one", "A direct line to leadership"],
    openings: "Open positions", count: "2 opportunities", start: "Start: November 2026", reports: "Reports to the Director of Operations",
    responsibilities: "Your mission", requirements: "What you bring", offer: "What we offer",
    apply: "Apply by email", pdf: "View full job description (PDF)",
    howTitle: "Your next step starts here.", how: "Send your CV to crecio@xd-global.com with the subject line for your chosen role.",
    emailNote: "Attach your CV before sending your email.", subject: "Subject",
    roles: [
      { id: "sales", title: "Sales Executive", specialty: "EV Battery Acquisition", location: "Monterrey or Saltillo", mode: "Hybrid · Travel within Mexico", subject: "EV Battery Sales", pdf: salesEn.url,
        mission: "Turn fleets, insurers, salvage yards and repair shops into recurring suppliers. Your results are measured in tons of batteries acquired.",
        responsibilities: ["Prospect and open new accounts.", "Own the sales cycle through the first pickup.", "Prepare proposals and keep the CRM current."],
        requirements: ["2+ years in B2B sales or procurement, with demonstrable new accounts.", "Comfortable with cold prospecting: calls, visits and LinkedIn.", "Valid driver’s license, availability to travel, intermediate English and fluent Spanish."],
        offer: ["Base salary + uncapped commission per ton acquired.", "Growth into OEM accounts and regional expansion.", "Statutory benefits."],
      },
      { id: "ehs", title: "EHS Coordinator", specialty: "Environmental Compliance", location: "Arteaga, Coahuila", mode: "100% on site", subject: "EHS Arteaga", pdf: ehsEn.url,
        mission: "Own environmental compliance and operational safety. Build the in-house function and prepare XD for automaker audits.",
        responsibilities: ["Manage state and federal environmental permits.", "Lead safety procedures, training and STPS compliance.", "Control waste manifests and logistics documentation."],
        requirements: ["Environmental, industrial, chemical or related engineering degree; 3+ years in EHS or environmental compliance.", "Experience with SEMARNAT or a state authority, waste manifests and STPS standards.", "Intermediate English, fluent Spanish and residence in Saltillo or Arteaga."],
        offer: ["Full ownership of the function.", "Specialized experience in electric vehicle batteries.", "Statutory benefits."],
      },
    ],
  },
} as const;