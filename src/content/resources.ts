export type L = { es: string; en: string };

export type Article = {
  slug: string;
  title: L;
  description: L;
  intro: L;
  sections: { h: L; p: L }[];
};

export const articles: Article[] = [
  {
    slug: "clasificar-y-empacar-baterias-danadas",
    title: {
      es: "Cómo clasificar y empacar baterías de litio dañadas para transporte",
      en: "How to classify and pack damaged lithium batteries for transport",
    },
    description: {
      es: "Criterios prácticos para decidir si una batería de litio puede transportarse en condiciones normales o debe manejarse como unidad dañada o defectuosa, y qué empaque aplica en cada caso.",
      en: "Practical criteria for deciding whether a lithium battery can travel under normal conditions or must be handled as a damaged or defective unit, and which packaging applies in each case.",
    },
    intro: {
      es: "La pregunta que define todo el manejo posterior no es cuántas baterías hay, sino en qué estado están. Una unidad dañada o defectuosa no comparte empaque, vehículo ni documentación con material estable, y clasificarla mal es el error más común y más costoso en la disposición de baterías de litio.",
      en: "The question that defines all subsequent handling is not how many batteries there are, but what condition they are in. A damaged or defective unit shares neither packaging, vehicle nor documentation with stable material, and misclassifying it is the most common and most expensive mistake in lithium battery disposal.",
    },
    sections: [
      {
        h: { es: "Señales que descartan el manejo normal", en: "Signs that rule out normal handling" },
        p: {
          es: "Hinchazón, deformación de carcasa, fuga de electrolito, olor dulce o punzante, calor al tacto, corrosión en terminales, historial de impacto o de inmersión, y cualquier unidad con antecedente de sobrecalentamiento. Basta una de estas condiciones para tratar el material como unidad dañada o defectuosa.",
          en: "Swelling, housing deformation, electrolyte leakage, a sweet or pungent smell, warmth to the touch, terminal corrosion, a history of impact or immersion, and any unit with an overheating record. A single one of these conditions is enough to treat the material as a damaged or defective unit.",
        },
      },
      {
        h: { es: "Qué hacer antes de mover el material", en: "What to do before moving the material" },
        p: {
          es: "Aísle el área, retire material combustible del entorno, no apile, no cargue ni descargue la batería y documente el estado con fotografías antes de cualquier maniobra. Si hay humo, chispas o aumento de temperatura, no intente contener el evento: evacúe y contacte a servicios de emergencia.",
          en: "Isolate the area, remove combustible material from the surroundings, do not stack, do not charge or discharge the battery, and document its condition with photographs before any handling. If there is smoke, sparks or rising temperature, do not attempt containment: evacuate and contact emergency services.",
        },
      },
      {
        h: { es: "Empaque según la clasificación", en: "Packaging according to classification" },
        p: {
          es: "Material estable: terminales aisladas, separadores no conductores, embalaje que impida movimiento y sujeción a tarima. Unidad dañada o defectuosa: contenedor reforzado, material absorbente e inertizante, una unidad por bulto cuando el tamaño lo exige y separación física respecto a cualquier otra carga.",
          en: "Stable material: isolated terminals, non-conductive separators, packaging that prevents movement and pallet strapping. Damaged or defective unit: reinforced container, absorbent and inerting material, one unit per package where size demands it, and physical separation from any other load.",
        },
      },
      {
        h: { es: "Documentación mínima del embarque", en: "Minimum shipment documentation" },
        p: {
          es: "Descripción del material y su química, estado declarado, cantidad y peso, tipo de embalaje utilizado, datos del generador y del destino, y el registro fotográfico del material embalado. Este expediente es lo que permite demostrar el destino del residuo meses después.",
          en: "Material description and chemistry, declared condition, quantity and weight, packaging type used, generator and destination details, and the photographic record of the packed material. This file is what makes it possible to prove the waste's destination months later.",
        },
      },
    ],
  },
  {
    slug: "documentacion-generador-residuos-peligrosos-mexico",
    title: {
      es: "Documentación que se le exige al generador de residuos peligrosos en México",
      en: "Documentation required from hazardous waste generators in Mexico",
    },
    description: {
      es: "Qué expediente debe conservar una empresa mexicana que genera baterías de litio como residuo: registro, bitácora, manifiestos y evidencia de destino final.",
      en: "The file a Mexican company generating lithium batteries as waste must keep: registration, logbook, manifests and proof of final destination.",
    },
    intro: {
      es: "Cuando una planta entrega baterías a un tercero, la responsabilidad documental no termina en la puerta. El generador debe poder demostrar qué salió, cuándo, con quién y a dónde llegó. Esta es la estructura mínima del expediente en la gestión de disposición de baterías en México.",
      en: "When a plant hands batteries to a third party, documentary responsibility does not end at the gate. The generator must be able to prove what left, when, with whom and where it arrived. This is the minimum file structure for battery disposal management in Mexico.",
    },
    sections: [
      {
        h: { es: "Registro como generador", en: "Generator registration" },
        p: {
          es: "La empresa se registra según el volumen de residuos peligrosos que genera al año. La categoría determina la frecuencia de reporte y el nivel de detalle exigido en la bitácora.",
          en: "The company registers according to the volume of hazardous waste it generates per year. The category determines reporting frequency and the level of detail required in the logbook.",
        },
      },
      {
        h: { es: "Bitácora de generación", en: "Generation logbook" },
        p: {
          es: "Registro continuo por tipo de residuo, con fecha de generación, área que lo generó, cantidad, forma de almacenamiento y fecha de salida. Es el documento que la autoridad revisa primero en una visita.",
          en: "A continuous record by waste type, with generation date, generating area, quantity, storage method and departure date. It is the first document an inspector reviews during a visit.",
        },
      },
      {
        h: { es: "Manifiesto de entrega, transporte y recepción", en: "Delivery, transport and receipt manifest" },
        p: {
          es: "Acompaña cada embarque e identifica al generador, al transportista y al destino. El generador debe conservar el ejemplar con el acuse de recepción del destino, no solo el de salida.",
          en: "It accompanies each shipment and identifies the generator, the carrier and the destination. The generator must keep the copy with the destination's acknowledgement of receipt, not just the departure copy.",
        },
      },
      {
        h: { es: "Verificación del prestador de servicio", en: "Service provider verification" },
        p: {
          es: "Antes de contratar, solicite y archive las autorizaciones vigentes del transportista y del destino final. Si el destino no puede acreditar su autorización para el residuo específico, el riesgo regresa al generador.",
          en: "Before contracting, request and file the carrier's and final destination's current authorisations. If the destination cannot evidence authorisation for the specific waste, the risk returns to the generator.",
        },
      },
      {
        h: { es: "Conservación del expediente", en: "Keeping the file" },
        p: {
          es: "Conserve manifiestos, bitácoras, reportes y evidencia de destino durante el plazo que exige la normativa aplicable. Esta información también sustenta los reportes de sostenibilidad y las auditorías de cliente.",
          en: "Keep manifests, logbooks, reports and proof of destination for the period required by the applicable regulation. This information also supports sustainability reporting and customer audits.",
        },
      },
    ],
  },
  {
    slug: "exportar-baterias-fin-de-vida-latinoamerica",
    title: {
      es: "Exportar baterías al final de su vida útil: qué cambia entre países de Latinoamérica",
      en: "Exporting end-of-life batteries: what changes between Latin American countries",
    },
    description: {
      es: "Panorama práctico de los requisitos de autorización previa, notificación y destino autorizado para mover baterías de litio entre países de la región.",
      en: "A practical overview of prior authorisation, notification and authorised-destination requirements for moving lithium batteries between countries in the region.",
    },
    intro: {
      es: "Ningún movimiento internacional de este material se resuelve con una guía de transporte. La regla general en la región es autorización previa del país de origen, aceptación del país de destino y, cuando aplica, del país de tránsito. El tiempo de gestión suele superar al tiempo de transporte.",
      en: "No international movement of this material is solved with a waybill. The general rule in the region is prior authorisation from the origin country, acceptance from the destination country and, where applicable, from the transit country. Processing time usually exceeds transport time.",
    },
    sections: [
      {
        h: { es: "El punto en común: autorización antes de mover", en: "The common thread: authorisation before moving" },
        p: {
          es: "Los países de la región participan en los convenios internacionales sobre movimientos transfronterizos de residuos peligrosos. En la práctica esto significa expediente técnico del material, identificación del destino autorizado y respuesta formal antes de embarcar.",
          en: "Countries in the region participate in the international conventions on transboundary movements of hazardous waste. In practice this means a technical file for the material, identification of the authorised destination and a formal response before shipping.",
        },
      },
      {
        h: { es: "Dónde suelen aparecer las diferencias", en: "Where the differences usually appear" },
        p: {
          es: "En la autoridad competente, en los plazos de respuesta, en la clasificación del residuo dentro de las listas nacionales y en la exigencia o no de un gestor local autorizado como intermediario. Dos países vecinos pueden pedir expedientes muy distintos para el mismo pallet.",
          en: "In the competent authority, response times, how the waste is classified within national lists, and whether an authorised local manager is required as intermediary. Two neighbouring countries can require very different files for the same pallet.",
        },
      },
      {
        h: { es: "Consolidación regional", en: "Regional consolidation" },
        p: {
          es: "Cuando el volumen de un país no justifica un embarque, la alternativa es consolidar en un punto regional. Eso agrega una etapa de tránsito que también debe estar autorizada, y conviene planearla desde el inicio y no cuando el material ya está en el almacén.",
          en: "When a country's volume does not justify a shipment, the alternative is consolidating at a regional point. That adds a transit stage that must also be authorised, and it is best planned from the start rather than once the material is already in the warehouse.",
        },
      },
      {
        h: { es: "Qué pedir antes de comprometer fechas", en: "What to ask before committing to dates" },
        p: {
          es: "Confirmación escrita del destino autorizado para la química específica, estimación realista de los plazos de autorización y el listado de documentos que el generador debe emitir. Sin esos tres puntos, cualquier fecha de retiro es tentativa.",
          en: "Written confirmation of the authorised destination for the specific chemistry, a realistic estimate of authorisation timelines, and the list of documents the generator must issue. Without those three points, any pickup date is tentative.",
        },
      },
    ],
  },
  {
    slug: "pack-ev-siniestrado-que-hacer",
    title: {
      es: "Qué hacer con un pack de vehículo eléctrico siniestrado",
      en: "What to do with a crashed electric vehicle pack",
    },
    description: {
      es: "Protocolo de contención, resguardo y evaluación para packs de tracción provenientes de siniestros, incendios o inmersión, antes de cualquier movimiento.",
      en: "Containment, storage and assessment protocol for traction packs from crashes, fires or immersion, before any movement.",
    },
    intro: {
      es: "Un pack siniestrado es el escenario de mayor riesgo en este material: puede presentar daño interno sin señales externas y reactivarse días después del evento. El objetivo inmediato no es retirarlo, es contenerlo correctamente mientras se evalúa.",
      en: "A crashed pack is the highest-risk scenario for this material: it can carry internal damage with no external signs and reignite days after the event. The immediate goal is not removing it, it is containing it correctly while it is assessed.",
    },
    sections: [
      {
        h: { es: "Primeras horas", en: "The first hours" },
        p: {
          es: "Mantenga el vehículo o el pack en una zona abierta, con distancia respecto a estructuras, otros vehículos y material combustible. No lo cubra, no lo encierre en contenedor cerrado y no lo conecte a ninguna fuente. Restrinja el acceso y señalice.",
          en: "Keep the vehicle or pack in an open area, at a distance from structures, other vehicles and combustible material. Do not cover it, do not seal it in a closed container and do not connect it to any source. Restrict access and signpost the area.",
        },
      },
      {
        h: { es: "Periodo de observación", en: "Observation period" },
        p: {
          es: "El material se mantiene bajo vigilancia durante un periodo definido caso por caso, con revisión de temperatura y de señales visibles. Una reactivación tardía es un escenario documentado y por eso el resguardo no se levanta el mismo día.",
          en: "The material stays under watch for a period defined case by case, checking temperature and visible signs. Late reignition is a documented scenario, which is why the containment is not lifted the same day.",
        },
      },
      {
        h: { es: "Evaluación antes del retiro", en: "Assessment before removal" },
        p: {
          es: "Se documenta el evento, el estado del pack y las condiciones del sitio. Con esa información se define el empaque, el vehículo y la ruta. En algunos casos el pack se estabiliza en sitio antes de poder embarcarse.",
          en: "The event, the pack's condition and the site conditions are documented. That information defines the packaging, the vehicle and the route. In some cases the pack is stabilised on site before it can be shipped.",
        },
      },
      {
        h: { es: "Qué evitar", en: "What to avoid" },
        p: {
          es: "Moverlo con equipo no adecuado, almacenarlo dentro de nave con otros vehículos, apilarlo, desarmarlo sin protocolo o entregarlo a un transportista que no tenga procedimiento para unidad dañada o defectuosa.",
          en: "Moving it with unsuitable equipment, storing it inside a warehouse with other vehicles, stacking it, dismantling it without a protocol, or handing it to a carrier with no procedure for damaged or defective units.",
        },
      },
    ],
  },
  {
    slug: "fin-de-vida-sistema-almacenamiento",
    title: {
      es: "Cuándo un sistema de almacenamiento de energía llega al final de su vida útil",
      en: "When a battery energy storage system reaches end of life",
    },
    description: {
      es: "Indicadores técnicos y contractuales que anticipan el retiro de un BESS o de un banco de peak-shaving, y cómo planear la desinstalación con meses de anticipación.",
      en: "Technical and contractual indicators that anticipate retiring a BESS or peak-shaving bank, and how to plan de-installation months in advance.",
    },
    intro: {
      es: "El retiro de un sistema de almacenamiento casi nunca es una emergencia: se puede anticipar con los datos que el propio sistema ya está reportando. Planearlo con tiempo cambia por completo el costo y el riesgo de la operación.",
      en: "Retiring a storage system is almost never an emergency: it can be anticipated from the data the system is already reporting. Planning ahead completely changes the cost and risk of the operation.",
    },
    sections: [
      {
        h: { es: "Indicadores técnicos", en: "Technical indicators" },
        p: {
          es: "Capacidad retenida por debajo del umbral contratado, dispersión creciente entre módulos del mismo rack, aumento de resistencia interna, ciclos acumulados cerca del límite de diseño y alarmas recurrentes del sistema de gestión.",
          en: "Retained capacity below the contracted threshold, growing dispersion between modules in the same rack, rising internal resistance, accumulated cycles near the design limit and recurring management-system alarms.",
        },
      },
      {
        h: { es: "Indicadores operativos y contractuales", en: "Operational and contractual indicators" },
        p: {
          es: "Fin del contrato de peak-shaving, cambio de esquema tarifario que vuelve marginal el ahorro, falta de refacciones para la plataforma instalada o salida del mercado del integrador original.",
          en: "End of the peak-shaving contract, a tariff change that makes savings marginal, lack of spare parts for the installed platform, or the original integrator leaving the market.",
        },
      },
      {
        h: { es: "Planear la desinstalación", en: "Planning de-installation" },
        p: {
          es: "Levantamiento del sitio, inventario por número de serie, definición de la secuencia de desenergización, ventana de paro acordada con operaciones y espacio de resguardo temporal para el material retirado.",
          en: "Site survey, serial-number inventory, definition of the de-energisation sequence, an outage window agreed with operations, and temporary storage space for the removed material.",
        },
      },
      {
        h: { es: "Decisión por módulo, no por sistema", en: "Module-level decisions, not system-level" },
        p: {
          es: "Un sistema retirado no es homogéneo: hay módulos estables y módulos con evidencia de falla. Separarlos desde el desmontaje evita que todo el lote se maneje bajo el criterio más restrictivo.",
          en: "A retired system is not homogeneous: there are stable modules and modules showing failure. Separating them at dismantling keeps the whole batch from being handled under the most restrictive criterion.",
        },
      },
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
