export type L = { es: string; en: string };
export type LL = { es: string[]; en: string[] };

export type Material = {
  slug: string;
  name: L;
  title: L;
  description: L;
  intro: L;
  risks: LL;
  packaging: LL;
  documentation: LL;
  who: LL;
  brands: LL;
};

export const materials: Material[] = [
  {
    slug: "baterias-ev",
    name: { es: "Baterías de vehículos eléctricos", en: "Electric vehicle batteries" },
    title: {
      es: "Desecho y reciclaje de baterías de vehículos eléctricos e híbridos",
      en: "Disposal and recycling of electric and hybrid vehicle batteries",
    },
    description: {
      es: "Gestión de packs y módulos de tracción de autos eléctricos e híbridos: diagnóstico, empaque para unidades dañadas, transporte coordinado y expediente documental.",
      en: "Management of traction packs and modules from electric and hybrid vehicles: diagnosis, packaging for damaged units, coordinated transport and documentation file.",
    },
    intro: {
      es: "Los packs de tracción concentran la mayor cantidad de energía almacenada de todos los materiales que manejamos. Un pack de EV al final de su vida útil, retirado por garantía o recuperado de un siniestro, requiere un tratamiento distinto al de cualquier otro residuo del taller: evaluación de estado antes de moverlo, desconexión y aislamiento de terminales por personal capacitado, y una decisión explícita sobre si el material puede transportarse en condiciones normales o como unidad dañada o defectuosa.",
      en: "Traction packs concentrate more stored energy than any other material we handle. An EV pack at end of life, pulled under warranty or recovered from a crash, needs different treatment from any other workshop waste: condition assessment before moving it, disconnection and terminal isolation by trained personnel, and an explicit decision on whether the material can travel under normal conditions or as a damaged or defective unit.",
    },
    risks: {
      es: [
        "Tensión residual peligrosa incluso en packs reportados como agotados o inoperantes.",
        "Deformación de la carcasa, impacto previo o inmersión: indicadores de posible daño interno de celda.",
        "Señales de fuga térmica en curso: calor, olor dulce, hinchazón, humo o electrolito visible.",
        "Packs con historial de siniestro que aparentan integridad externa pero no han sido diagnosticados.",
      ],
      en: [
        "Dangerous residual voltage even in packs reported as depleted or inoperative.",
        "Housing deformation, prior impact or immersion: indicators of possible internal cell damage.",
        "Signs of thermal runaway in progress: heat, sweet odour, swelling, smoke or visible electrolyte.",
        "Packs with a crash history that look externally intact but have not been diagnosed.",
      ],
    },
    packaging: {
      es: [
        "Estado de carga reducido al nivel indicado antes del embarque, cuando el pack lo permite.",
        "Aislamiento individual de terminales y conectores de alta tensión.",
        "Embalaje sobre estructura rígida o rack metálico, con sujeción que impida desplazamiento.",
        "Para unidad dañada o defectuosa: contenedor reforzado, material absorbente e inertizante y separación física respecto a otras cargas.",
      ],
      en: [
        "State of charge reduced to the indicated level before shipment, where the pack allows it.",
        "Individual isolation of high-voltage terminals and connectors.",
        "Packing on a rigid structure or steel rack, secured against movement.",
        "For damaged or defective units: reinforced container, absorbent and inerting material and physical separation from other loads.",
      ],
    },
    documentation: {
      es: [
        "Registro de origen del pack: VIN o número de serie, modelo, química y motivo de baja.",
        "Reporte del estado observado y del criterio de clasificación aplicado.",
        "Descripción del embalaje utilizado y del vehículo de transporte asignado.",
        "Evidencia de recepción en destino, por embarque.",
      ],
      en: [
        "Pack origin record: VIN or serial number, model, chemistry and reason for retirement.",
        "Report of the observed condition and the classification criterion applied.",
        "Description of the packaging used and of the assigned transport vehicle.",
        "Proof of receipt at destination, per shipment.",
      ],
    },
    who: {
      es: [
        "Distribuidores y talleres autorizados de marcas eléctricas e híbridas",
        "Flotas de reparto, transporte de pasajeros y última milla",
        "Aseguradoras y corralones con unidades siniestradas",
        "Armadoras y proveedores tier 1 con chatarra de proceso",
      ],
      en: [
        "Authorised dealers and workshops for electric and hybrid brands",
        "Delivery, passenger transport and last-mile fleets",
        "Insurers and impound yards with crashed units",
        "OEMs and tier 1 suppliers with process scrap",
      ],
    },
  },
  {
    slug: "almacenamiento-energia",
    name: { es: "Almacenamiento de energía y peak-shaving", en: "Energy storage and peak shaving" },
    title: {
      es: "Retiro y reciclaje de sistemas de almacenamiento de energía (BESS) y peak-shaving",
      en: "Removal and recycling of battery energy storage systems (BESS) and peak shaving",
    },
    description: {
      es: "Gestión del final de vida de bancos de baterías para almacenamiento, respaldo y peak-shaving: desinstalación coordinada, clasificación por rack y trazabilidad por número de serie.",
      en: "End-of-life management of battery banks for storage, backup and peak shaving: coordinated de-installation, rack-level classification and serial-number traceability.",
    },
    intro: {
      es: "Un sistema de almacenamiento sale de servicio por degradación de capacidad, por falla de un rack, por cambio de tecnología o porque el proyecto de peak-shaving llegó a su término contractual. En todos los casos el material se retira instalado y energizado, no en un contenedor listo para embarcar. El trabajo empieza en sitio: secuencia de desenergización, desconexión del sistema de gestión, desmontaje por módulo y clasificación de lo que sale en condición estable frente a lo que muestra evidencia de falla.",
      en: "A storage system leaves service due to capacity degradation, a rack failure, a technology change, or because the peak-shaving project reached the end of its contract. In every case the material is removed installed and energised, not in a shipment-ready container. The work starts on site: de-energisation sequence, disconnection of the management system, module-by-module dismantling, and classification of what comes out stable versus what shows evidence of failure.",
    },
    risks: {
      es: [
        "Bancos energizados con tensión de string muy superior a la de un módulo individual.",
        "Racks con un módulo fallado entre módulos sanos: el conjunto no puede tratarse como homogéneo.",
        "Sistemas instalados en interiores, sótanos o cuartos técnicos con acceso restringido y ventilación limitada.",
        "Documentación de origen incompleta cuando el integrador original ya no opera.",
      ],
      en: [
        "Energised banks with string voltage far above that of an individual module.",
        "Racks with one failed module among healthy ones: the set cannot be treated as homogeneous.",
        "Systems installed indoors, in basements or technical rooms with restricted access and limited ventilation.",
        "Incomplete origin documentation when the original integrator no longer operates.",
      ],
    },
    packaging: {
      es: [
        "Plan de desmontaje por escrito antes de la intervención, con secuencia de desenergización.",
        "Clasificación por rack y por módulo: material estable y material con evidencia de falla se embalan por separado.",
        "Pallets con sujeción metálica y separadores no conductores entre módulos.",
        "Etiquetado por lote con número de serie del módulo y posición original en el sistema.",
      ],
      en: [
        "Written dismantling plan before the intervention, with de-energisation sequence.",
        "Rack- and module-level classification: stable material and material showing failure are packed separately.",
        "Pallets with steel strapping and non-conductive separators between modules.",
        "Batch labelling with module serial number and original position in the system.",
      ],
    },
    documentation: {
      es: [
        "Inventario por número de serie del material retirado.",
        "Acta de desinstalación firmada en sitio.",
        "Registro fotográfico del sistema antes y después del retiro.",
        "Expediente de embarque y evidencia de destino final del material.",
      ],
      en: [
        "Serial-number inventory of the removed material.",
        "De-installation record signed on site.",
        "Photographic record of the system before and after removal.",
        "Shipment file and proof of the material's final destination.",
      ],
    },
    who: {
      es: [
        "Integradores de almacenamiento y desarrolladores de proyectos renovables",
        "Plantas industriales con esquemas de peak-shaving o gestión de demanda",
        "Centros de datos y sitios de telecomunicaciones con bancos de respaldo",
        "Operadores de microrredes y sistemas aislados",
      ],
      en: [
        "Storage integrators and renewable project developers",
        "Industrial plants with peak-shaving or demand-management schemes",
        "Data centres and telecom sites with backup banks",
        "Microgrid and off-grid system operators",
      ],
    },
  },
  {
    slug: "herramientas-electricas",
    name: { es: "Herramientas eléctricas (power tools)", en: "Power tools" },
    title: {
      es: "Reciclaje de baterías de herramientas eléctricas y equipo inalámbrico",
      en: "Recycling of power tool and cordless equipment batteries",
    },
    description: {
      es: "Acopio y gestión de packs de herramientas inalámbricas retirados de talleres, obras, centros de servicio y programas de garantía, con separación de unidades hinchadas o dañadas.",
      en: "Collection and management of cordless tool packs retired from workshops, job sites, service centres and warranty programmes, separating swollen or damaged units.",
    },
    intro: {
      es: "Los packs de herramienta son de baja capacidad individual pero se acumulan rápido: una empresa constructora, un centro de servicio o una cadena de refacciones concentra cientos de unidades al año. El riesgo no está en el pack aislado sino en el volumen almacenado sin criterio, mezclando unidades sanas con packs hinchados o con historial de sobrecalentamiento en la misma caja o estante.",
      en: "Tool packs have low individual capacity but accumulate fast: a construction company, a service centre or a parts chain gathers hundreds of units a year. The risk is not the isolated pack but the volume stored without criteria, mixing healthy units with swollen packs or packs with an overheating history in the same box or shelf.",
    },
    risks: {
      es: [
        "Acumulación prolongada en almacén sin separación entre unidades sanas y dañadas.",
        "Packs hinchados o deformados que continúan en el estante de retornos.",
        "Contacto entre terminales por almacenamiento a granel en cajas metálicas.",
        "Mezcla con residuos comunes o con chatarra metálica del taller.",
      ],
      en: [
        "Prolonged warehouse accumulation without separating healthy and damaged units.",
        "Swollen or deformed packs still sitting on the returns shelf.",
        "Terminal-to-terminal contact from bulk storage in metal boxes.",
        "Mixing with general waste or with workshop metal scrap.",
      ],
    },
    packaging: {
      es: [
        "Contenedor de acopio dedicado, cerrado, señalizado y alejado de material combustible.",
        "Aislamiento de terminales con cinta no conductora en cada pack.",
        "Separación inmediata de unidades hinchadas, con fuga o con carcasa rota.",
        "Consolidación por química y por marca cuando el volumen lo justifica.",
      ],
      en: [
        "Dedicated collection container, closed, signposted and away from combustible material.",
        "Terminal isolation with non-conductive tape on every pack.",
        "Immediate separation of swollen, leaking or cracked-housing units.",
        "Consolidation by chemistry and brand when volume justifies it.",
      ],
    },
    documentation: {
      es: [
        "Conteo y peso por lote de acopio.",
        "Registro del punto de generación: sucursal, obra o centro de servicio.",
        "Comprobante de retiro por recolección.",
        "Evidencia de destino del lote consolidado.",
      ],
      en: [
        "Count and weight per collection batch.",
        "Record of the generation point: branch, job site or service centre.",
        "Pickup receipt per collection.",
        "Proof of destination for the consolidated batch.",
      ],
    },
    who: {
      es: [
        "Constructoras y contratistas con parque grande de herramienta inalámbrica",
        "Centros de servicio y talleres autorizados de marcas de herramienta",
        "Cadenas de ferretería y refaccionarias con programa de retornos",
        "Plantas con mantenimiento interno y herramienta de batería",
      ],
      en: [
        "Construction firms and contractors with large cordless tool fleets",
        "Authorised service centres and workshops for tool brands",
        "Hardware and parts chains with a returns programme",
        "Plants with in-house maintenance and battery-powered tools",
      ],
    },
  },
  {
    slug: "electrodomesticos",
    name: { es: "Electrodomésticos y línea blanca", en: "Appliances and white goods" },
    title: {
      es: "Gestión de baterías de electrodomésticos y aparatos del hogar",
      en: "Battery management for household appliances and small domestic devices",
    },
    description: {
      es: "Retiro de baterías integradas en aspiradoras, robots de limpieza, pequeños electrodomésticos y línea blanca conectada, para fabricantes, retail y centros de servicio.",
      en: "Removal of batteries built into vacuums, cleaning robots, small appliances and connected white goods, for manufacturers, retail and service centres.",
    },
    intro: {
      es: "En electrodomésticos la batería casi nunca llega suelta: viene dentro del aparato, muchas veces pegada o soldada, en equipos que retail y centros de servicio reciben como devolución o como producto fuera de garantía. Antes de que el aparato entre a un flujo de reciclaje de metales o plásticos, la celda tiene que salir, y ese paso es el que suele faltar en los programas de logística inversa existentes.",
      en: "In appliances the battery almost never arrives loose: it comes inside the device, often glued or soldered, in equipment that retail and service centres receive as a return or as out-of-warranty product. Before the appliance enters a metals or plastics recycling flow, the cell has to come out, and that step is usually the one missing from existing reverse-logistics programmes.",
    },
    risks: {
      es: [
        "Celdas ocultas dentro del aparato que llegan a trituración sin haber sido retiradas.",
        "Baterías pegadas o soldadas que se perforan durante un desmontaje improvisado.",
        "Devoluciones de consumidor con daño por caída o inmersión no declarado.",
        "Almacenamiento de producto devuelto en tarima, a la intemperie o en zona de paso.",
      ],
      en: [
        "Cells hidden inside the device reaching shredding without having been removed.",
        "Glued or soldered batteries punctured during improvised dismantling.",
        "Consumer returns with undeclared drop or immersion damage.",
        "Returned product stored on pallets, outdoors or in a walkway.",
      ],
    },
    packaging: {
      es: [
        "Retiro de la celda antes de enviar el aparato a cualquier flujo de reciclaje de materiales.",
        "Herramienta y procedimiento definidos por familia de producto, sin perforar la celda.",
        "Contenedor separado para celdas extraídas y para aparatos aún no desensamblados.",
        "Aislamiento de terminales y clasificación de celdas hinchadas en contenedor aparte.",
      ],
      en: [
        "Cell removal before sending the appliance to any materials recycling flow.",
        "Tooling and procedure defined per product family, without puncturing the cell.",
        "Separate containers for extracted cells and for units not yet disassembled.",
        "Terminal isolation and separate containment for swollen cells.",
      ],
    },
    documentation: {
      es: [
        "Inventario por modelo y por lote de producto procesado.",
        "Registro de celdas extraídas y de su destino.",
        "Comprobante de retiro por punto de acopio o centro de distribución.",
        "Evidencia de destino final para el reporte de programa de manejo.",
      ],
      en: [
        "Inventory by model and by batch of processed product.",
        "Record of extracted cells and their destination.",
        "Pickup receipt per collection point or distribution centre.",
        "Proof of final destination for waste-management programme reporting.",
      ],
    },
    who: {
      es: [
        "Fabricantes e importadores de línea blanca y pequeño electrodoméstico",
        "Retail con programa de devoluciones y garantías",
        "Centros de servicio autorizados y talleres de reparación",
        "Operadores de logística inversa y centros de distribución",
      ],
      en: [
        "Manufacturers and importers of white goods and small appliances",
        "Retailers with a returns and warranty programme",
        "Authorised service centres and repair workshops",
        "Reverse-logistics operators and distribution centres",
      ],
    },
  },
  {
    slug: "electronicos",
    name: { es: "Electrónicos y equipo de cómputo", en: "Electronics and IT equipment" },
    title: {
      es: "Reciclaje de baterías de laptops, celulares, UPS y equipo electrónico",
      en: "Recycling of laptop, phone, UPS and electronic equipment batteries",
    },
    description: {
      es: "Gestión de baterías de equipo de cómputo, telefonía, UPS y electrónica de oficina en procesos de renovación tecnológica y baja de activos.",
      en: "Management of batteries from IT equipment, phones, UPS units and office electronics during technology refresh and asset retirement.",
    },
    intro: {
      es: "Las bajas de equipo de cómputo se manejan casi siempre como un tema de activos y de borrado de datos, y la batería queda como un pendiente al final del proceso. Cuando una empresa renueva doscientas laptops o retira los UPS de un sitio, el volumen de celdas es relevante y suele quedar semanas en un almacén sin criterio de manejo. Este material se puede consolidar junto con el proceso de baja de activos en lugar de tratarse aparte.",
      en: "IT retirements are almost always handled as an asset and data-wiping matter, leaving the battery as a loose end. When a company refreshes two hundred laptops or removes the UPS units from a site, the cell volume is significant and often sits for weeks in a warehouse with no handling criteria. This material can be consolidated alongside the asset-retirement process instead of being treated separately.",
    },
    risks: {
      es: [
        "Baterías hinchadas en laptops de varios años que deforman carcasa y touchpad.",
        "Cajas de acopio con celdas sueltas y terminales expuestas en almacén de TI.",
        "Bancos de UPS con baterías de plomo y de litio mezcladas en el mismo lote.",
        "Retiros sin inventario, que impiden reportar el destino del material.",
      ],
      en: [
        "Swollen batteries in multi-year-old laptops that deform the housing and touchpad.",
        "Collection boxes with loose cells and exposed terminals in the IT store room.",
        "UPS banks with lead and lithium batteries mixed in the same batch.",
        "Retirements without inventory, which prevent reporting the material's destination.",
      ],
    },
    packaging: {
      es: [
        "Extracción de la batería en el mismo evento de baja del activo, cuando es posible.",
        "Separación estricta entre química de plomo y química de litio.",
        "Aislamiento de terminales y empaque en contenedor cerrado, sin celdas sueltas a granel.",
        "Contenedor específico para unidades hinchadas, retiradas del flujo normal.",
      ],
      en: [
        "Battery extraction during the same asset-retirement event, where possible.",
        "Strict separation between lead and lithium chemistries.",
        "Terminal isolation and packing in a closed container, no loose bulk cells.",
        "Dedicated container for swollen units, removed from the normal flow.",
      ],
    },
    documentation: {
      es: [
        "Inventario por tipo de equipo y cantidad de celdas retiradas.",
        "Vinculación con el número de activo cuando el cliente lo requiere.",
        "Comprobante de retiro por sitio.",
        "Evidencia de destino para el expediente ambiental de la empresa.",
      ],
      en: [
        "Inventory by equipment type and number of cells removed.",
        "Link to the asset number when the client requires it.",
        "Pickup receipt per site.",
        "Proof of destination for the company's environmental file.",
      ],
    },
    who: {
      es: [
        "Áreas de TI con programas de renovación tecnológica",
        "Operadores de telecomunicaciones y sitios con UPS",
        "Corporativos y centros de datos con baja de activos",
        "Distribuidores y centros de servicio de electrónica de consumo",
      ],
      en: [
        "IT departments with technology refresh programmes",
        "Telecom operators and sites with UPS units",
        "Corporates and data centres retiring assets",
        "Consumer electronics distributors and service centres",
      ],
    },
  },
  {
    slug: "industriales-plomo-niquel",
    name: { es: "Industriales: plomo, níquel y otras químicas", en: "Industrial: lead, nickel and other chemistries" },
    title: {
      es: "Baterías industriales de plomo-ácido, níquel y otras químicas al final de su vida",
      en: "End-of-life industrial lead-acid, nickel and other chemistry batteries",
    },
    description: {
      es: "Retiro de baterías de montacargas, bancos estacionarios, arrancadores y equipos industriales, con separación por química y manejo diferenciado del litio.",
      en: "Removal of forklift, stationary bank, starter and industrial equipment batteries, with chemistry separation and differentiated handling for lithium.",
    },
    intro: {
      es: "Muchas plantas no tienen un solo tipo de batería: conviven montacargas de plomo, bancos estacionarios, arrancadores y, cada vez más, equipos migrados a litio. Cuando todo se acumula en el mismo patio de residuos, el manejo se vuelve incorrecto para las dos químicas: el plomo exige control de derrames y el litio exige control de energía. La separación por química es el primer entregable de este servicio.",
      en: "Many plants do not have a single battery type: lead forklifts, stationary banks, starters and, increasingly, lithium-migrated equipment coexist. When everything piles up in the same waste yard, handling becomes wrong for both chemistries: lead requires spill control and lithium requires energy control. Chemistry separation is this service's first deliverable.",
    },
    risks: {
      es: [
        "Derrame de electrolito ácido por carcasas fisuradas o volteo durante la maniobra.",
        "Mezcla de plomo y litio en el mismo lote, con requisitos de manejo incompatibles.",
        "Bancos estacionarios con peso por unidad que exige maniobra mecánica.",
        "Equipos convertidos a litio sin actualizar el procedimiento de retiro de la planta.",
      ],
      en: [
        "Acid electrolyte spills from cracked housings or tipping during handling.",
        "Lead and lithium mixed in the same batch, with incompatible handling requirements.",
        "Stationary banks whose unit weight requires mechanical handling.",
        "Equipment converted to lithium without updating the plant's removal procedure.",
      ],
    },
    packaging: {
      es: [
        "Clasificación por química antes de cualquier movimiento fuera de la planta.",
        "Tarimas con contención secundaria para unidades de plomo-ácido.",
        "Posición vertical, tapones colocados y sujeción que impida volteo.",
        "Ruta de manejo independiente para el material de litio identificado en el lote.",
      ],
      en: [
        "Chemistry classification before any movement off the plant.",
        "Pallets with secondary containment for lead-acid units.",
        "Upright position, caps in place and strapping that prevents tipping.",
        "Separate handling route for lithium material identified in the batch.",
      ],
    },
    documentation: {
      es: [
        "Inventario por química, cantidad y peso.",
        "Registro del área generadora dentro de la planta.",
        "Documentación de embarque por lote y por química.",
        "Evidencia de destino diferenciada para cada flujo de material.",
      ],
      en: [
        "Inventory by chemistry, quantity and weight.",
        "Record of the generating area within the plant.",
        "Shipment documentation per batch and per chemistry.",
        "Separate proof of destination for each material flow.",
      ],
    },
    who: {
      es: [
        "Plantas de manufactura con flota de montacargas",
        "Centros de distribución y almacenes automatizados",
        "Sitios con bancos estacionarios de respaldo",
        "Talleres y flotas con baterías de arranque",
      ],
      en: [
        "Manufacturing plants with forklift fleets",
        "Distribution centres and automated warehouses",
        "Sites with stationary backup banks",
        "Workshops and fleets with starter batteries",
      ],
    },
  },
];

export function findMaterial(slug: string) {
  return materials.find((m) => m.slug === slug);
}
