import type { L, LL } from "@/content/materials";

import nmcCells from "@/assets/chem-nmc-cells.jpg";
import pouch from "@/assets/chem-pouch.jpg";
import hardcase from "@/assets/chem-hardcase.jpg";
import lfp from "@/assets/chem-lfp.jpg";
import nimh from "@/assets/chem-nimh.jpg";
import primary from "@/assets/chem-primary.jpg";
import powertool from "@/assets/chem-powertool.jpg";
import ev from "@/assets/chem-ev.jpg";
import ess from "@/assets/chem-ess.jpg";
import damaged from "@/assets/chem-damaged.jpg";

export type Chemistry = {
  id: string;
  name: L;
  short: L;
  image: string;
  alt: L;
  identify: LL;
  includes: LL;
  handling: L;
};

export const chemistries: Chemistry[] = [
  {
    id: "nmc-nca-lco-celdas",
    name: { es: "NMC / NCA / LCO — celdas", en: "NMC / NCA / LCO — cells" },
    short: {
      es: "Celdas cilíndricas o prismáticas de ion-litio, sueltas o en charolas de fabricante.",
      en: "Cylindrical or prismatic lithium-ion cells, loose or in manufacturer trays.",
    },
    image: nmcCells,
    alt: {
      es: "Charolas de celdas cilíndricas de ion-litio sobre una mesa de trabajo",
      en: "Trays of cylindrical lithium-ion cells on a workbench",
    },
    identify: {
      es: [
        "Formatos cilíndricos típicos: 18650, 21700, 26650 y similares.",
        "Tensión nominal cercana a 3.6–3.7 V por celda.",
        "Etiquetado con NMC, NCA, LCO o códigos de fabricante de celda.",
      ],
      en: [
        "Typical cylindrical formats: 18650, 21700, 26650 and similar.",
        "Nominal voltage close to 3.6–3.7 V per cell.",
        "Labelled NMC, NCA, LCO or with cell-maker codes.",
      ],
    },
    includes: {
      es: [
        "Scrap de producción de un mismo modelo en empaque original.",
        "Celdas mezcladas de varios fabricantes en tambos, cajas o gaylords.",
      ],
      en: [
        "Production scrap of a single model in original packaging.",
        "Mixed cells from several makers in drums, boxes or gaylords.",
      ],
    },
    handling: {
      es: "Separe material homogéneo del mezclado: cuando el lote conserva su empaque de origen, la evaluación es más rápida y el resultado más preciso.",
      en: "Separate homogeneous from mixed material: when a lot keeps its original packaging, assessment is faster and the outcome more precise.",
    },
  },
  {
    id: "pouch",
    name: { es: "Ion-litio de bolsa (pouch)", en: "Soft-shell (pouch) lithium-ion" },
    short: {
      es: "Celdas planas de polímero de litio provenientes de laptops, teléfonos y equipos portátiles.",
      en: "Flat lithium-polymer cells from laptops, phones and handheld devices.",
    },
    image: pouch,
    alt: {
      es: "Celdas planas tipo pouch acumuladas en una caja de acopio",
      en: "Flat pouch cells collected in a cardboard box",
    },
    identify: {
      es: [
        "Cuerpo plano y flexible con película metalizada, sin carcasa rígida.",
        "Pestañas metálicas de contacto en un extremo.",
        "Variante con cables, conectores o placa electrónica aún adherida.",
      ],
      en: [
        "Flat, flexible body in metallised film, no rigid casing.",
        "Metal contact tabs at one end.",
        "Variant with wiring, connectors or a circuit board still attached.",
      ],
    },
    includes: {
      es: [
        "Baterías de laptop, tablet, teléfono y powerbank delgado.",
        "Baterías de dron y de cámara con cableado.",
      ],
      en: [
        "Laptop, tablet, phone and slim powerbank batteries.",
        "Drone and camera batteries with wiring.",
      ],
    },
    handling: {
      es: "Retire de inmediato del lote cualquier celda hinchada, perforada o con olor: se maneja y se transporta por separado.",
      en: "Pull any swollen, punctured or odorous cell out of the lot immediately: it is handled and shipped separately.",
    },
  },
  {
    id: "hard-case",
    name: { es: "Packs de carcasa rígida", en: "Hard-case packs" },
    short: {
      es: "Baterías completas con carcasa plástica que contienen celdas de ion-litio en su interior.",
      en: "Complete batteries in a plastic casing containing lithium-ion cells inside.",
    },
    image: hardcase,
    alt: {
      es: "Packs de batería con carcasa rígida en un contenedor de acopio",
      en: "Hard-case battery packs in a collection bin",
    },
    identify: {
      es: [
        "Carcasa plástica sellada con etiqueta de tensión y capacidad.",
        "Conector de equipo original y, con frecuencia, electrónica de gestión.",
      ],
      en: [
        "Sealed plastic casing with a voltage and capacity label.",
        "Original equipment connector and often a management board.",
      ],
    },
    includes: {
      es: [
        "Packs de laptop de generaciones anteriores.",
        "Baterías de aspiradoras, robots de limpieza y equipos médicos portátiles.",
      ],
      en: [
        "Older-generation laptop packs.",
        "Vacuum, cleaning-robot and portable medical device batteries.",
      ],
    },
    handling: {
      es: "No abra ni desarme los packs: la clasificación se realiza en destino con el equipo adecuado.",
      en: "Do not open or dismantle the packs: sorting is done at destination with the right equipment.",
    },
  },
  {
    id: "lfp",
    name: { es: "LFP (LiFePO₄)", en: "LFP (LiFePO₄)" },
    short: {
      es: "Litio-ferrofosfato en celdas, módulos o packs; química distinta con ruta de proceso propia.",
      en: "Lithium iron phosphate in cells, modules or packs; a distinct chemistry with its own processing route.",
    },
    image: lfp,
    alt: {
      es: "Celdas LFP prismáticas y cilíndricas en charola dentro de una nave industrial",
      en: "Prismatic and cylindrical LFP cells in a tray inside an industrial building",
    },
    identify: {
      es: [
        "Tensión nominal de 3.2 V por celda.",
        "Etiquetado con LFP, LiFePO4 o códigos de formato tipo IFR (por ejemplo IFR18650).",
        "Frecuente en formatos prismáticos azules o grises.",
      ],
      en: [
        "Nominal voltage of 3.2 V per cell.",
        "Labelled LFP, LiFePO4 or with format codes such as IFR (e.g. IFR18650).",
        "Common in blue or grey prismatic formats.",
      ],
    },
    includes: {
      es: [
        "Scrap de producción de celdas LFP en empaque de fabricante.",
        "Packs de montacargas, respaldos y sistemas estacionarios pequeños.",
      ],
      en: [
        "LFP cell production scrap in manufacturer packaging.",
        "Forklift packs, backup units and small stationary systems.",
      ],
    },
    handling: {
      es: "Indique la química desde la solicitud: mezclar LFP con NMC/NCA cambia la ruta de proceso y el resultado económico del lote.",
      en: "State the chemistry in your request: mixing LFP with NMC/NCA changes the processing route and the economics of the lot.",
    },
  },
  {
    id: "nimh",
    name: { es: "NiMH (níquel-metal hidruro)", en: "NiMH (nickel-metal hydride)" },
    short: {
      es: "Celdas y módulos de níquel-metal hidruro, comunes en híbridos y equipo portátil antiguo.",
      en: "Nickel-metal hydride cells and modules, common in hybrids and older portable equipment.",
    },
    image: nimh,
    alt: {
      es: "Celdas NiMH y un módulo de vehículo híbrido sobre una mesa metálica",
      en: "NiMH cells and a hybrid vehicle module on a metal table",
    },
    identify: {
      es: [
        "Tensión nominal de 1.2 V por celda.",
        "Etiquetado NiMH o Ni-MH; en módulos, ensambles de celdas prismáticas.",
      ],
      en: [
        "Nominal voltage of 1.2 V per cell.",
        "Labelled NiMH or Ni-MH; in modules, assemblies of prismatic cells.",
      ],
    },
    includes: {
      es: [
        "Módulos y packs de vehículos híbridos de generaciones anteriores.",
        "Celdas AA/AAA recargables y packs de herramienta antigua.",
      ],
      en: [
        "Modules and packs from earlier-generation hybrid vehicles.",
        "Rechargeable AA/AAA cells and older tool packs.",
      ],
    },
    handling: {
      es: "Sepárelo del ion-litio: es una corriente distinta y mezclarla retrasa la recepción del embarque.",
      en: "Keep it separate from lithium-ion: it is a different stream and mixing it delays receipt of the shipment.",
    },
  },
  {
    id: "litio-primario",
    name: { es: "Litio primario (no recargable)", en: "Lithium primary (non-rechargeable)" },
    short: {
      es: "Celdas de litio de un solo uso; requieren manejo y documentación de transporte específicos.",
      en: "Single-use lithium cells; they require specific handling and transport paperwork.",
    },
    image: primary,
    alt: {
      es: "Pilas de litio primario, de botón y cilíndricas, en un recipiente",
      en: "Lithium primary batteries, coin and cylindrical, in a container",
    },
    identify: {
      es: [
        "Etiquetado sin indicación de recarga; químicas de litio metálico, dióxido de manganeso, cloruro de tionilo o dióxido de azufre.",
        "Clasificación de transporte distinta a la del ion-litio.",
      ],
      en: [
        "Labelled with no recharge indication; lithium metal, manganese dioxide, thionyl chloride or sulphur dioxide chemistries.",
        "Transport classification differs from lithium-ion.",
      ],
    },
    includes: {
      es: [
        "Pilas de botón, AA de litio y celdas tipo CR123.",
        "Celdas de respaldo de medidores, sensores y equipo industrial.",
      ],
      en: [
        "Coin cells, lithium AA and CR123-type cells.",
        "Backup cells from meters, sensors and industrial equipment.",
      ],
    },
    handling: {
      es: "Aísle terminales y mantenga el lote seco y separado; nunca lo consolide con celdas de ion-litio sin avisarnos.",
      en: "Isolate terminals and keep the lot dry and separate; never consolidate it with lithium-ion cells without telling us.",
    },
  },
  {
    id: "power-tools",
    name: { es: "Packs de herramienta eléctrica", en: "Power tool packs" },
    short: {
      es: "Packs de taladros, sierras y equipo inalámbrico; la química no siempre es evidente.",
      en: "Packs from drills, saws and cordless equipment; the chemistry is not always evident.",
    },
    image: powertool,
    alt: {
      es: "Packs de batería de herramienta eléctrica acumulados en un contenedor",
      en: "Power tool battery packs collected in a container",
    },
    identify: {
      es: [
        "Carcasa con riel de acople al equipo y etiqueta de tensión (12 V, 18 V, 20 V, 40 V y similares).",
        "Puede contener ion-litio, NiMH o NiCd según la generación del equipo.",
      ],
      en: [
        "Casing with a tool-mount rail and a voltage label (12 V, 18 V, 20 V, 40 V and similar).",
        "May contain lithium-ion, NiMH or NiCd depending on the equipment generation.",
      ],
    },
    includes: {
      es: [
        "Lotes mezclados de talleres, distribuidores y centros de servicio.",
        "Scrap de producción de un mismo modelo en empaque estandarizado.",
      ],
      en: [
        "Mixed lots from workshops, distributors and service centres.",
        "Production scrap of a single model in standardised packaging.",
      ],
    },
    handling: {
      es: "No asuma que todo el lote es ion-litio: los packs mezclados requieren clasificación previa y así lo indicamos en la evaluación.",
      en: "Do not assume the whole lot is lithium-ion: mixed packs require prior sorting, and we state that in the assessment.",
    },
  },
  {
    id: "ev",
    name: { es: "Módulos y packs de vehículo eléctrico", en: "EV modules and packs" },
    short: {
      es: "Packs completos y módulos de tracción de vehículos eléctricos e híbridos.",
      en: "Complete packs and traction modules from electric and hybrid vehicles.",
    },
    image: ev,
    alt: {
      es: "Packs de batería de vehículo eléctrico asegurados sobre tarima",
      en: "Electric vehicle battery packs secured on a pallet",
    },
    identify: {
      es: [
        "Cableado y conectores de alta tensión, generalmente en color naranja.",
        "Carcasa metálica o estructural; peso que exige maniobra mecánica.",
        "Se clasifican por química (NMC/NCA, LFP, NiMH) y por capacidad.",
      ],
      en: [
        "High-voltage wiring and connectors, usually orange.",
        "Metal or structural casing; weight requires mechanical handling.",
        "Classified by chemistry (NMC/NCA, LFP, NiMH) and by capacity.",
      ],
    },
    includes: {
      es: [
        "Packs de tracción retirados por garantía, fin de vida o siniestro.",
        "Módulos individuales de armadoras, talleres y centros de servicio.",
      ],
      en: [
        "Traction packs pulled under warranty, at end of life or after a crash.",
        "Individual modules from assemblers, workshops and service centres.",
      ],
    },
    handling: {
      es: "Comparta estado de la unidad, química y capacidad antes del retiro: define empaque, vehículo y documentación aplicable.",
      en: "Share unit condition, chemistry and capacity before pickup: it determines packaging, vehicle and applicable paperwork.",
    },
  },
  {
    id: "ess",
    name: { es: "Módulos y packs de almacenamiento (BESS)", en: "Storage (BESS) modules and packs" },
    short: {
      es: "Sistemas estacionarios de almacenamiento retirados de operación o en desmantelamiento.",
      en: "Stationary storage systems taken out of service or being decommissioned.",
    },
    image: ess,
    alt: {
      es: "Gabinetes y racks de un sistema de almacenamiento de energía en desmantelamiento",
      en: "Cabinets and racks of an energy storage system being decommissioned",
    },
    identify: {
      es: [
        "Gabinetes, racks o módulos apilables con sistema de gestión integrado.",
        "Química habitual NMC/NCA o LFP, con capacidad declarada en kWh.",
      ],
      en: [
        "Cabinets, racks or stackable modules with an integrated management system.",
        "Typically NMC/NCA or LFP chemistry, with capacity declared in kWh.",
      ],
    },
    includes: {
      es: [
        "Respaldo de centros de datos y telecomunicaciones.",
        "Sistemas comerciales, industriales y residenciales fuera de servicio.",
      ],
      en: [
        "Data centre and telecom backup units.",
        "Commercial, industrial and residential systems out of service.",
      ],
    },
    handling: {
      es: "El desmantelamiento se coordina con el responsable del sitio: desenergización, retiro por módulo y maniobra se definen antes de la fecha.",
      en: "Decommissioning is coordinated with the site owner: de-energising, module-by-module removal and rigging are defined before the date.",
    },
  },
  {
    id: "danado",
    name: { es: "Material dañado, quemado o inerte", en: "Damaged, burned or inert material" },
    short: {
      es: "Unidades con daño térmico, mecánico o por inmersión, de cualquier química.",
      en: "Units with thermal, mechanical or immersion damage, of any chemistry.",
    },
    image: damaged,
    alt: {
      es: "Módulos de batería con daño térmico sobre tarima metálica en patio industrial",
      en: "Thermally damaged battery modules on a metal pallet in an industrial yard",
    },
    identify: {
      es: [
        "Carcasa deformada, perforada, hinchada o con residuo de combustión.",
        "Historial de incendio, impacto, inundación o inmersión.",
        "Calor, olor dulce, humo o electrolito visible: atención inmediata.",
      ],
      en: [
        "Deformed, punctured, swollen casing or combustion residue.",
        "History of fire, impact, flooding or immersion.",
        "Heat, sweet odour, smoke or visible electrolyte: immediate attention.",
      ],
    },
    includes: {
      es: [
        "Unidades recuperadas de siniestros viales y de eventos de pérdida total.",
        "Módulos de EV o de almacenamiento expuestos a fuego o daño térmico.",
      ],
      en: [
        "Units recovered from road incidents and total-loss events.",
        "EV or storage modules exposed to fire or thermal damage.",
      ],
    },
    handling: {
      es: "Aísle la unidad, restrinja el acceso y contáctenos antes de moverla: el empaque y el transporte son distintos a los de material íntegro.",
      en: "Isolate the unit, restrict access and contact us before moving it: packaging and transport differ from intact material.",
    },
  },
];
