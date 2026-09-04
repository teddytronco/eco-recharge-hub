import * as React from "react";

export type Lang = "es" | "en";

export const CONTACT = {
  phoneDisplay: "+52 81 8083 5739",
  phoneHref: "+528180835739",
  whatsappNumber: "528180835739",
  email: "christianrecio91@gmail.com",
  whatsappMessage:
    "Hola, quiero cotizar el reciclaje de baterías de litio para mi empresa.",
};

type Dict = typeof es;

const es = {
  brand: {
    name: "Reciclaje de Baterías Latinoamérica",
    short: "RBL",
    tagline: "Gestión responsable de baterías de litio para la industria",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    process: "Proceso",
    materials: "Materiales",
    compliance: "Cumplimiento",
    logistics: "Logística",
    about: "Nosotros",
    contact: "Contacto",
    legal: "Legal",
    menu: "Menú",
    close: "Cerrar",
  },
  cta: {
    quote: "Solicitar cotización",
    call: "Llamar",
    email: "Correo",
    whatsapp: "WhatsApp",
    talk: "Hablar con un especialista",
    learn: "Conocer más",
    back: "Atrás",
    next: "Continuar",
    send: "Enviar solicitud",
  },
  common: {
    emergencyTitle: "¿Batería dañada, hinchada o con fuga?",
    emergencyBody:
      "No la manipule ni la transporte. Aísle el área, restrinja el acceso y contacte de inmediato a nuestro equipo para recibir indicaciones de contención antes de mover el material.",
    emergencyCta: "Línea de atención",
    editableNote:
      "Bloque editable: la información de permisos y certificaciones se publicará conforme se documente y verifique. No se muestran datos no confirmados.",
    pending: "Por documentar",
    reqTitle: "¿Listo para evaluar su material?",
    reqBody:
      "Comparta el tipo de batería, cantidad estimada y ubicación. Respondemos con los siguientes pasos y los requisitos de manejo aplicables.",
    quickContact: "Contacto directo",
  },
  home: {
    eyebrow: "Reciclaje industrial de baterías de litio",
    title: "Gestión responsable de baterías de litio al final de su vida útil",
    subtitle:
      "Acompañamos a fabricantes, integradores, flotas y centros de servicio en Latinoamérica con acopio, clasificación, empaque y trazabilidad documental del material.",
    heroAlt:
      "Imagen de referencia: módulos de batería embalados en pallets dentro de una instalación industrial",
    statsTitle: "Enfoque operativo",
    stats: [
      { k: "Alcance", v: "Latinoamérica", d: "Coordinación regional con operadores locales" },
      { k: "Materiales", v: "Li-ion y afines", d: "Celdas, módulos, packs y chatarra de proceso" },
      { k: "Documentación", v: "Trazable", d: "Registro por embarque y evidencia de destino" },
      { k: "Respuesta", v: "Caso por caso", d: "Evaluación técnica previa a cada movimiento" },
    ],
    valueTitle: "Por qué trabajar con nosotros",
    values: [
      {
        t: "Criterio técnico antes que volumen",
        d: "Evaluamos química, estado y riesgo del material antes de proponer cualquier logística. Si un material no puede manejarse con seguridad, lo decimos.",
      },
      {
        t: "Trazabilidad documental",
        d: "Cada movimiento se acompaña de registro de origen, descripción del material, empaque utilizado y evidencia de recepción en destino.",
      },
      {
        t: "Cumplimiento como punto de partida",
        d: "Trabajamos bajo los requisitos aplicables de manejo y transporte de residuos y mercancías peligrosas, con verificación previa por proyecto.",
      },
      {
        t: "Interlocución clara",
        d: "Un contacto responsable por cuenta, con tiempos de respuesta definidos y comunicación en español e inglés.",
      },
    ],
    servicesTitle: "Servicios",
    servicesSub: "Cobertura del ciclo completo, desde el diagnóstico hasta la evidencia de destino.",
    processTitle: "Cómo trabajamos",
    processSub: "Un proceso ordenado, verificable y documentado en cada etapa.",
    sectorsTitle: "Sectores que atendemos",
    sectors: [
      "Movilidad eléctrica y flotas",
      "Almacenamiento de energía",
      "Manufactura y líneas de producción",
      "Centros de servicio y postventa",
      "Telecomunicaciones y respaldo",
      "Retail y logística inversa",
    ],
    complianceTeaser:
      "Publicamos únicamente permisos y certificaciones verificables. Esta sección se actualiza conforme se completa cada trámite.",
  },
  services: {
    title: "Servicios",
    subtitle:
      "Soluciones de gestión para baterías de litio y materiales asociados, diseñadas para operaciones industriales.",
    items: [
      {
        t: "Diagnóstico y clasificación",
        d: "Identificación de química, formato y estado del material. Determinación del nivel de riesgo y de los requisitos de empaque aplicables.",
      },
      {
        t: "Acopio y empaque técnico",
        d: "Definición de contenedores, aislamiento de terminales, material absorbente e inertizante según el tipo y condición de las baterías.",
      },
      {
        t: "Coordinación de transporte",
        d: "Planeación de embarques con transportistas habilitados para mercancías peligrosas y documentación de acompañamiento.",
      },
      {
        t: "Programas de logística inversa",
        d: "Esquemas recurrentes para redes de servicio, distribuidores y plantas con puntos múltiples de generación.",
      },
      {
        t: "Retiro de material en sitio",
        d: "Atención programada en planta o almacén, con protocolo de carga, verificación de embalaje y control de acceso.",
      },
      {
        t: "Reporte y evidencia documental",
        d: "Entrega de expediente por embarque: inventario, fotografías, guía y constancia de recepción en destino.",
      },
    ],
    notIncludedTitle: "Alcance y límites",
    notIncluded:
      "El alcance específico, los tiempos y las condiciones comerciales se definen por proyecto tras la evaluación del material. No ofrecemos servicios que no puedan ejecutarse con la documentación y las autorizaciones correspondientes.",
  },
  process: {
    title: "Proceso",
    subtitle: "Cinco etapas con puntos de control y evidencia en cada transición.",
    steps: [
      {
        t: "Solicitud y datos del material",
        d: "Recibimos tipo de batería, química estimada, cantidad, estado físico y ubicación. Se solicita evidencia fotográfica cuando aplica.",
      },
      {
        t: "Evaluación técnica y de riesgo",
        d: "Clasificamos el material y determinamos si puede manejarse, bajo qué condiciones de empaque y con qué restricciones de transporte.",
      },
      {
        t: "Propuesta y requisitos",
        d: "Se entrega el alcance, el esquema logístico, los requisitos documentales del generador y las condiciones comerciales.",
      },
      {
        t: "Empaque, carga y embarque",
        d: "Preparación conforme al riesgo identificado, verificación previa a la carga y salida con documentación de acompañamiento.",
      },
      {
        t: "Recepción, destino y expediente",
        d: "Confirmación de recepción, registro de cantidades y entrega del expediente documental al generador.",
      },
    ],
    noteTitle: "Punto de control",
    note: "Ningún material se mueve sin evaluación previa ni sin el empaque adecuado a su condición.",
  },
  materials: {
    title: "Materiales aceptados",
    subtitle:
      "La aceptación siempre queda sujeta a evaluación previa del estado físico y de la documentación del generador.",
    acceptedTitle: "Habitualmente evaluamos",
    accepted: [
      "Celdas de ion litio (cilíndricas, prismáticas y bolsa)",
      "Módulos y packs de movilidad eléctrica",
      "Baterías de sistemas de almacenamiento de energía",
      "Baterías de herramienta, cómputo y electrónica industrial",
      "Chatarra y material de proceso de líneas de producción",
      "Material fuera de especificación y devoluciones",
    ],
    conditionsTitle: "Condiciones que requieren manejo especial",
    conditions: [
      "Baterías hinchadas, deformadas o con evidencia de golpe",
      "Unidades con fuga, corrosión o restos de electrolito",
      "Material con antecedente de evento térmico",
      "Baterías mojadas o con exposición prolongada a la intemperie",
    ],
    excludedTitle: "No se recibe sin acuerdo previo",
    excluded: [
      "Material sin identificación de química o procedencia",
      "Residuos mezclados con otras corrientes peligrosas",
      "Embarques sin documentación del generador",
      "Baterías en combustión o con riesgo térmico activo",
    ],
    alt: "Imagen de referencia: celdas y módulos de batería clasificados sobre mesa de trabajo",
    valorizationTitle: "¿Busca compra de baterías usadas?",
    valorizationBody:
      "Algunos lotes conservan valor recuperable según su química, estado y volumen; otros implican un costo de disposición. Evaluamos su caso con datos reales y le confirmamos por escrito la ruta viable.",
    valorizationCta: "Ver cómo funciona la valorización",
  },
  compliance: {
    title: "Cumplimiento",
    subtitle:
      "Sección editable. Aquí se publican permisos, autorizaciones y certificaciones únicamente cuando están vigentes y son verificables.",
    principlesTitle: "Nuestros principios",
    principles: [
      {
        t: "Solo información verificable",
        d: "No publicamos registros, números de autorización ni certificaciones que no puedan comprobarse documentalmente.",
      },
      {
        t: "Verificación por proyecto",
        d: "Antes de cada operación se confirman los requisitos aplicables al material, al origen y a la ruta de transporte.",
      },
      {
        t: "Documentación al generador",
        d: "El generador recibe el expediente que respalda el movimiento y el destino de su material.",
      },
    ],
    registryTitle: "Permisos y certificaciones",
    registryNote:
      "Los campos siguientes son plantillas editables. Se completarán con el número, la autoridad emisora y la vigencia una vez confirmados.",
    slots: [
      { t: "Autorización de manejo de residuos", d: "Alcance y vigencia por confirmar." },
      { t: "Registro como generador / prestador de servicio", d: "Alcance y vigencia por confirmar." },
      { t: "Habilitación de transporte de materiales peligrosos", d: "Vía transportista habilitado; datos por confirmar." },
      { t: "Sistema de gestión (calidad / ambiental / seguridad)", d: "Estatus por confirmar." },
    ],
    requestTitle: "¿Necesita documentación para su auditoría?",
    requestBody:
      "Podemos compartir la documentación disponible bajo solicitud formal y con el alcance correspondiente a su proyecto.",
  },
  logistics: {
    title: "Logística y transporte",
    subtitle:
      "El transporte de baterías de litio se planea como mercancía peligrosa, con empaque y documentación definidos antes de cada embarque.",
    alt: "Imagen de referencia: contenedores metálicos etiquetados para transporte en almacén logístico",
    blocks: [
      {
        t: "Empaque según condición",
        d: "El tipo de contenedor, el aislamiento de terminales y el material de relleno se determinan a partir del estado del material, no de un formato único.",
      },
      {
        t: "Segregación y estiba",
        d: "Separación por química y condición, control de altura de estiba y sujeción para evitar desplazamientos y cortocircuitos.",
      },
      {
        t: "Documentación de embarque",
        d: "Descripción del material, cantidades, datos del generador y del destino, y evidencia fotográfica previa a la carga.",
      },
      {
        t: "Coordinación regional",
        d: "Planeación de rutas en Latinoamérica con operadores habilitados y validación de requisitos según origen y destino.",
      },
    ],
    checklistTitle: "Antes de programar un retiro",
    checklist: [
      "Identificar la química y el formato del material",
      "Aislar terminales y separar unidades dañadas",
      "Estimar peso y número de unidades o pallets",
      "Confirmar accesos, horarios y equipo de maniobra en sitio",
      "Reunir la documentación del generador",
    ],
  },
  about: {
    title: "Nosotros",
    subtitle:
      "Un equipo enfocado en resolver un problema industrial concreto: qué hacer con las baterías de litio cuando terminan su vida útil.",
    body1:
      "Reciclaje de Baterías Latinoamérica nace para atender la creciente necesidad de gestión responsable de baterías de litio en la región. Trabajamos con empresas que requieren un manejo trazable, ordenado y compatible con sus políticas internas de seguridad y cumplimiento.",
    body2:
      "Nuestro enfoque es conservador: preferimos rechazar un movimiento antes que ejecutarlo sin las condiciones adecuadas. Cada proyecto inicia con una evaluación técnica y termina con evidencia documental entregada al generador.",
    valuesTitle: "Cómo trabajamos",
    values: [
      { t: "Prudencia técnica", d: "Decisiones basadas en la condición real del material." },
      { t: "Transparencia", d: "Comunicamos alcances, límites y lo que aún está por documentar." },
      { t: "Continuidad", d: "Relaciones de largo plazo con programas recurrentes y reportes." },
      { t: "Servicio bilingüe", d: "Atención en español e inglés para equipos regionales y corporativos." },
    ],
    contactTitle: "Contacto responsable",
    contactName: "Christian Recio",
  },
  contact: {
    title: "Contacto",
    subtitle:
      "Complete la solicitud para evaluar su material. Los campos marcados con * son obligatorios.",
    stepLabel: "Paso",
    of: "de",
    steps: ["Empresa", "Material", "Documentos"],
    fields: {
      company: "Empresa *",
      contactName: "Nombre de contacto *",
      role: "Puesto",
      email: "Correo corporativo *",
      phone: "Teléfono *",
      country: "País *",
      city: "Ciudad / Estado *",
      chemistry: "Química o tipo de batería *",
      format: "Formato *",
      quantity: "Cantidad estimada (kg o unidades) *",
      condition: "Estado del material *",
      frequency: "Frecuencia",
      pickup: "Dirección o condiciones de recolección",
      notes: "Detalles adicionales",
      files: "Documentos o fotografías (PDF, JPG, PNG · máx. 10 MB c/u · hasta 5 archivos)",
      consent: "Acepto el tratamiento de mis datos conforme al aviso de privacidad *",
      urgent: "Requiere atención prioritaria por material dañado",
    },
    options: {
      chemistry: ["Ion litio (Li-ion)", "LFP", "NMC / NCA", "Polímero de litio", "Litio primario", "Otra / por identificar"],
      format: ["Celdas", "Módulos", "Packs completos", "Chatarra de proceso", "Mixto"],
      condition: ["Aparentemente en buen estado", "Fin de vida útil, sin daño visible", "Con daño mecánico", "Hinchadas o con fuga", "Desconocido"],
      frequency: ["Única vez", "Mensual", "Trimestral", "Por evento / según generación"],
    },
    errors: {
      required: "Este campo es obligatorio",
      email: "Ingrese un correo válido",
      phone: "Ingrese un teléfono válido",
      consent: "Debe aceptar el aviso de privacidad",
      fileType: "Formato no permitido:",
      fileSize: "Archivo mayor a 10 MB:",
      fileCount: "Máximo 5 archivos",
    },
    review: "Revisión",
    reviewNote:
      "Verifique la información antes de enviar. Su solicitud se registra de forma segura; los archivos se solicitarán por un canal seguro en la respuesta.",
    successTitle: "Solicitud recibida",
    successBody:
      "Registramos su solicitud y nuestro equipo la revisará. Si desea acelerar el contacto, escríbanos por WhatsApp o llámenos directamente.",

    fileSecurity:
      "Los archivos se validan en su navegador y no se transmiten desde este formulario. Tras su solicitud, coordinamos un canal seguro para recibirlos.",
    selected: "Archivos seleccionados",
    remove: "Quitar",
  },
  legal: {
    title: "Aviso legal y privacidad",
    subtitle: "Términos de uso del sitio y tratamiento de datos personales.",
    sections: [
      {
        t: "Responsable",
        d: "Reciclaje de Baterías Latinoamérica es responsable del tratamiento de los datos personales que usted proporciona a través de este sitio. Contacto: christianrecio91@gmail.com.",
      },
      {
        t: "Datos que recabamos",
        d: "Datos de identificación y contacto profesional (nombre, empresa, puesto, correo, teléfono, ubicación) y la información técnica del material que usted decida compartir.",
      },
      {
        t: "Finalidades",
        d: "Atender solicitudes de cotización, evaluar técnicamente el material, coordinar la logística correspondiente y dar seguimiento comercial. No comercializamos sus datos.",
      },
      {
        t: "Transferencias",
        d: "Los datos podrán compartirse con transportistas y destinos autorizados únicamente cuando resulte necesario para ejecutar el servicio solicitado.",
      },
      {
        t: "Conservación y seguridad",
        d: "Conservamos la información el tiempo necesario para las finalidades descritas y aplicamos medidas razonables de seguridad administrativas y técnicas.",
      },
      {
        t: "Derechos del titular",
        d: "Usted puede solicitar el acceso, la rectificación, la cancelación o la oposición al tratamiento de sus datos escribiendo al correo de contacto.",
      },
      {
        t: "Alcance de la información del sitio",
        d: "El contenido de este sitio es informativo y no constituye asesoría regulatoria. Los alcances, permisos y condiciones aplicables se confirman por escrito en cada proyecto.",
      },
      {
        t: "Propiedad intelectual",
        d: "Las marcas, textos e imágenes de este sitio pertenecen a sus titulares. Las imágenes de instalación son de referencia y no representan necesariamente instalaciones propias.",
      },
    ],
  },
  footer: {
    about:
      "Gestión responsable de baterías de litio para clientes industriales en Latinoamérica. Evaluación técnica, empaque conforme al riesgo y trazabilidad documental.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    legalTitle: "Legal",
    legalLinks: ["Aviso de privacidad", "Términos de uso"],
    disclaimer:
      "Las imágenes son de referencia. La información de permisos y certificaciones se publica únicamente cuando es verificable.",
    rights: "Todos los derechos reservados.",
  },
};

const en: Dict = {
  brand: {
    name: "Reciclaje de Baterías Latinoamérica",
    short: "RBL",
    tagline: "Responsible lithium battery management for industry",
  },
  nav: {
    home: "Home",
    services: "Services",
    process: "Process",
    materials: "Materials",
    compliance: "Compliance",
    logistics: "Logistics",
    about: "About",
    contact: "Contact",
    legal: "Legal",
    menu: "Menu",
    close: "Close",
  },
  cta: {
    quote: "Request a quote",
    call: "Call",
    email: "Email",
    whatsapp: "WhatsApp",
    talk: "Talk to a specialist",
    learn: "Learn more",
    back: "Back",
    next: "Continue",
    send: "Send request",
  },
  common: {
    emergencyTitle: "Damaged, swollen or leaking battery?",
    emergencyBody:
      "Do not handle or transport it. Isolate the area, restrict access and contact our team immediately for containment guidance before moving the material.",
    emergencyCta: "Response line",
    editableNote:
      "Editable block: permit and certification details are published as they are documented and verified. No unconfirmed data is shown.",
    pending: "To be documented",
    reqTitle: "Ready to have your material assessed?",
    reqBody:
      "Share the battery type, estimated quantity and location. We reply with next steps and the applicable handling requirements.",
    quickContact: "Direct contact",
  },
  home: {
    eyebrow: "Industrial lithium battery recycling",
    title: "Responsible management of end-of-life lithium batteries",
    subtitle:
      "We support manufacturers, integrators, fleets and service centers across Latin America with collection, sorting, packaging and documented traceability of the material.",
    heroAlt:
      "Reference image: battery modules packed on pallets inside an industrial facility",
    statsTitle: "Operating focus",
    stats: [
      { k: "Coverage", v: "Latin America", d: "Regional coordination with local operators" },
      { k: "Materials", v: "Li-ion and related", d: "Cells, modules, packs and process scrap" },
      { k: "Documentation", v: "Traceable", d: "Record per shipment and destination evidence" },
      { k: "Response", v: "Case by case", d: "Technical assessment before every movement" },
    ],
    valueTitle: "Why work with us",
    values: [
      {
        t: "Technical judgment over volume",
        d: "We assess chemistry, condition and risk before proposing any logistics. If a material cannot be handled safely, we say so.",
      },
      {
        t: "Documented traceability",
        d: "Every movement carries an origin record, material description, packaging used and proof of receipt at destination.",
      },
      {
        t: "Compliance as the starting point",
        d: "We work under the applicable requirements for handling and transporting waste and dangerous goods, verified per project.",
      },
      {
        t: "Clear communication",
        d: "One accountable contact per account, defined response times and service in Spanish and English.",
      },
    ],
    servicesTitle: "Services",
    servicesSub: "Full-cycle coverage, from assessment to destination evidence.",
    processTitle: "How we work",
    processSub: "An orderly, verifiable process documented at every stage.",
    sectorsTitle: "Sectors we serve",
    sectors: [
      "Electric mobility and fleets",
      "Energy storage",
      "Manufacturing and production lines",
      "Service and aftersales centers",
      "Telecom and backup power",
      "Retail and reverse logistics",
    ],
    complianceTeaser:
      "We publish only verifiable permits and certifications. This section is updated as each filing is completed.",
  },
  services: {
    title: "Services",
    subtitle:
      "Management solutions for lithium batteries and related materials, designed for industrial operations.",
    items: [
      {
        t: "Assessment and sorting",
        d: "Identification of chemistry, format and condition. Determination of risk level and applicable packaging requirements.",
      },
      {
        t: "Collection and technical packaging",
        d: "Container selection, terminal insulation, absorbent and inerting material according to battery type and condition.",
      },
      {
        t: "Transport coordination",
        d: "Shipment planning with carriers authorized for dangerous goods, plus accompanying documentation.",
      },
      {
        t: "Reverse logistics programs",
        d: "Recurring schemes for service networks, distributors and plants with multiple generation points.",
      },
      {
        t: "On-site material removal",
        d: "Scheduled pickup at plant or warehouse, with loading protocol, packaging verification and access control.",
      },
      {
        t: "Reporting and documentary evidence",
        d: "Shipment file delivery: inventory, photographs, waybill and proof of receipt at destination.",
      },
    ],
    notIncludedTitle: "Scope and limits",
    notIncluded:
      "Specific scope, timelines and commercial terms are defined per project after material assessment. We do not offer services that cannot be executed with the corresponding documentation and authorizations.",
  },
  process: {
    title: "Process",
    subtitle: "Five stages with control points and evidence at every transition.",
    steps: [
      {
        t: "Request and material data",
        d: "We receive battery type, estimated chemistry, quantity, physical condition and location. Photographic evidence is requested where applicable.",
      },
      {
        t: "Technical and risk assessment",
        d: "We classify the material and determine whether it can be handled, under which packaging conditions and with which transport restrictions.",
      },
      {
        t: "Proposal and requirements",
        d: "We deliver the scope, logistics scheme, generator documentation requirements and commercial terms.",
      },
      {
        t: "Packaging, loading and shipment",
        d: "Preparation according to identified risk, pre-load verification and dispatch with accompanying documentation.",
      },
      {
        t: "Receipt, destination and file",
        d: "Receipt confirmation, quantity records and delivery of the documentary file to the generator.",
      },
    ],
    noteTitle: "Control point",
    note: "No material moves without prior assessment or without packaging suited to its condition.",
  },
  materials: {
    title: "Accepted materials",
    subtitle:
      "Acceptance is always subject to prior assessment of physical condition and generator documentation.",
    acceptedTitle: "Commonly assessed",
    accepted: [
      "Lithium-ion cells (cylindrical, prismatic and pouch)",
      "Electric mobility modules and packs",
      "Energy storage system batteries",
      "Power tool, computing and industrial electronics batteries",
      "Scrap and process material from production lines",
      "Out-of-spec material and returns",
    ],
    conditionsTitle: "Conditions requiring special handling",
    conditions: [
      "Swollen, deformed or impact-damaged batteries",
      "Units with leaks, corrosion or electrolyte residue",
      "Material with a history of a thermal event",
      "Wet batteries or prolonged outdoor exposure",
    ],
    excludedTitle: "Not received without prior agreement",
    excluded: [
      "Material without chemistry or origin identification",
      "Waste mixed with other hazardous streams",
      "Shipments without generator documentation",
      "Batteries in combustion or with active thermal risk",
    ],
    alt: "Reference image: sorted battery cells and modules on a workbench",
    valorizationTitle: "Looking for used battery purchase?",
    valorizationBody:
      "Some lots retain recoverable value depending on chemistry, condition and volume; others carry a disposal cost. We assess your case with real data and confirm the viable route in writing.",
    valorizationCta: "See how valuation works",
  },
  compliance: {
    title: "Compliance",
    subtitle:
      "Editable section. Permits, authorizations and certifications are published here only when current and verifiable.",
    principlesTitle: "Our principles",
    principles: [
      {
        t: "Verifiable information only",
        d: "We do not publish registrations, authorization numbers or certifications that cannot be evidenced with documents.",
      },
      {
        t: "Per-project verification",
        d: "Before every operation we confirm the requirements applicable to the material, its origin and the transport route.",
      },
      {
        t: "Documentation to the generator",
        d: "The generator receives the file supporting the movement and destination of their material.",
      },
    ],
    registryTitle: "Permits and certifications",
    registryNote:
      "The fields below are editable templates. They will be completed with number, issuing authority and validity once confirmed.",
    slots: [
      { t: "Waste handling authorization", d: "Scope and validity to be confirmed." },
      { t: "Generator / service provider registration", d: "Scope and validity to be confirmed." },
      { t: "Dangerous goods transport authorization", d: "Via authorized carrier; details to be confirmed." },
      { t: "Management system (quality / environment / safety)", d: "Status to be confirmed." },
    ],
    requestTitle: "Need documentation for your audit?",
    requestBody:
      "We can share available documentation upon formal request, scoped to your project.",
  },
  logistics: {
    title: "Logistics and transport",
    subtitle:
      "Lithium battery transport is planned as dangerous goods, with packaging and documentation defined before each shipment.",
    alt: "Reference image: labeled metal containers for transport in a logistics warehouse",
    blocks: [
      {
        t: "Packaging by condition",
        d: "Container type, terminal insulation and filler material are determined by the state of the material, not by a single format.",
      },
      {
        t: "Segregation and stacking",
        d: "Separation by chemistry and condition, stack height control and securing to prevent shifting and short circuits.",
      },
      {
        t: "Shipment documentation",
        d: "Material description, quantities, generator and destination data, and photographic evidence before loading.",
      },
      {
        t: "Regional coordination",
        d: "Route planning across Latin America with authorized operators and requirement validation by origin and destination.",
      },
    ],
    checklistTitle: "Before scheduling a pickup",
    checklist: [
      "Identify the chemistry and format of the material",
      "Insulate terminals and separate damaged units",
      "Estimate weight and number of units or pallets",
      "Confirm access, schedules and handling equipment on site",
      "Gather the generator documentation",
    ],
  },
  about: {
    title: "About us",
    subtitle:
      "A team focused on one concrete industrial problem: what to do with lithium batteries at the end of their useful life.",
    body1:
      "Reciclaje de Baterías Latinoamérica was created to address the growing need for responsible lithium battery management in the region. We work with companies that require traceable, orderly handling compatible with their internal safety and compliance policies.",
    body2:
      "Our approach is conservative: we would rather decline a movement than execute it without the right conditions. Every project starts with a technical assessment and ends with documentary evidence delivered to the generator.",
    valuesTitle: "How we work",
    values: [
      { t: "Technical prudence", d: "Decisions based on the actual condition of the material." },
      { t: "Transparency", d: "We state scope, limits and what is still to be documented." },
      { t: "Continuity", d: "Long-term relationships with recurring programs and reporting." },
      { t: "Bilingual service", d: "Support in Spanish and English for regional and corporate teams." },
    ],
    contactTitle: "Accountable contact",
    contactName: "Christian Recio",
  },
  contact: {
    title: "Contact",
    subtitle: "Complete the request so we can assess your material. Fields marked * are required.",
    stepLabel: "Step",
    of: "of",
    steps: ["Company", "Material", "Documents"],
    fields: {
      company: "Company *",
      contactName: "Contact name *",
      role: "Role",
      email: "Corporate email *",
      phone: "Phone *",
      country: "Country *",
      city: "City / State *",
      chemistry: "Battery chemistry or type *",
      format: "Format *",
      quantity: "Estimated quantity (kg or units) *",
      condition: "Material condition *",
      frequency: "Frequency",
      pickup: "Pickup address or conditions",
      notes: "Additional details",
      files: "Documents or photos (PDF, JPG, PNG · max 10 MB each · up to 5 files)",
      consent: "I accept the processing of my data under the privacy notice *",
      urgent: "Requires priority attention due to damaged material",
    },
    options: {
      chemistry: ["Lithium-ion (Li-ion)", "LFP", "NMC / NCA", "Lithium polymer", "Primary lithium", "Other / to be identified"],
      format: ["Cells", "Modules", "Complete packs", "Process scrap", "Mixed"],
      condition: ["Apparently in good condition", "End of life, no visible damage", "Mechanical damage", "Swollen or leaking", "Unknown"],
      frequency: ["One time", "Monthly", "Quarterly", "Per event / as generated"],
    },
    errors: {
      required: "This field is required",
      email: "Enter a valid email",
      phone: "Enter a valid phone number",
      consent: "You must accept the privacy notice",
      fileType: "Format not allowed:",
      fileSize: "File larger than 10 MB:",
      fileCount: "Maximum 5 files",
    },
    review: "Review",
    reviewNote:
      "Check the information before sending. Your request is stored securely; files will be requested through a secure channel in our reply.",
    successTitle: "Request received",
    successBody:
      "We recorded your request and our team will review it. To speed things up, message us on WhatsApp or call us directly.",

    fileSecurity:
      "Files are validated in your browser and are not transmitted from this form. After your request, we arrange a secure channel to receive them.",
    selected: "Selected files",
    remove: "Remove",
  },
  legal: {
    title: "Legal notice and privacy",
    subtitle: "Site terms of use and personal data processing.",
    sections: [
      {
        t: "Data controller",
        d: "Reciclaje de Baterías Latinoamérica is responsible for processing the personal data you provide through this site. Contact: christianrecio91@gmail.com.",
      },
      {
        t: "Data we collect",
        d: "Professional identification and contact data (name, company, role, email, phone, location) and the technical information about the material you choose to share.",
      },
      {
        t: "Purposes",
        d: "To handle quote requests, technically assess the material, coordinate the corresponding logistics and follow up commercially. We do not sell your data.",
      },
      {
        t: "Transfers",
        d: "Data may be shared with carriers and authorized destinations only when necessary to execute the requested service.",
      },
      {
        t: "Retention and security",
        d: "We retain information as long as needed for the stated purposes and apply reasonable administrative and technical security measures.",
      },
      {
        t: "Your rights",
        d: "You may request access, rectification, cancellation or objection to the processing of your data by writing to the contact email.",
      },
      {
        t: "Scope of site information",
        d: "The content of this site is informational and does not constitute regulatory advice. Scope, permits and applicable conditions are confirmed in writing for each project.",
      },
      {
        t: "Intellectual property",
        d: "Trademarks, texts and images on this site belong to their respective owners. Facility images are for reference and do not necessarily depict own facilities.",
      },
    ],
  },
  footer: {
    about:
      "Responsible lithium battery management for industrial clients in Latin America. Technical assessment, risk-based packaging and documented traceability.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    legalLinks: ["Privacy notice", "Terms of use"],
    disclaimer:
      "Images are for reference. Permit and certification information is published only when verifiable.",
    rights: "All rights reserved.",
  },
};

const dictionaries = { es, en } as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const I18nContext = React.createContext<Ctx>({ lang: "es", setLang: () => {}, t: es });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("es");

  React.useEffect(() => {
    const stored = window.localStorage.getItem("rbl-lang");
    if (stored === "es" || stored === "en") setLangState(stored);
    else if (typeof navigator !== "undefined" && navigator.language.startsWith("en"))
      setLangState("en");
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("rbl-lang", l);
  }, []);

  const value = React.useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return React.useContext(I18nContext);
}

export function whatsappUrl() {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
}
