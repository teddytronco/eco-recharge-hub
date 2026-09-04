export type L = { es: string; en: string };
export type LL = { es: string[]; en: string[] };

export type Place = {
  slug: string;
  name: L;
  region: "mx" | "ca" | "sa";
  regionLabel: L;
  intro: L;
  sectors: LL;
  corridors: L;
  regulatory: L;
};

const MX: L = { es: "México", en: "Mexico" };
const CA: L = { es: "Centroamérica y Caribe", en: "Central America and the Caribbean" };
const SA: L = { es: "Sudamérica", en: "South America" };

export const places: Place[] = [
  // ---------- México ----------
  {
    slug: "nuevo-leon",
    name: { es: "Nuevo León", en: "Nuevo León" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Nuevo León concentra armadoras, proveeduría automotriz y manufactura pesada en el área metropolitana de Monterrey y en los corredores de Apodaca, Santa Catarina y Pesquería. Es también nuestra base de operación y contacto directo.",
      en: "Nuevo León concentrates OEMs, automotive suppliers and heavy manufacturing across metropolitan Monterrey and the Apodaca, Santa Catarina and Pesquería corridors. It is also our base of operations and direct point of contact.",
    },
    sectors: {
      es: [
        "Armadoras y proveeduría automotriz tier 1 y tier 2",
        "Manufactura metalmecánica y electrodomésticos",
        "Centros de distribución con flota de montacargas",
        "Integradores de almacenamiento y respaldo industrial",
      ],
      en: [
        "OEMs and tier 1 / tier 2 automotive suppliers",
        "Metalworking and appliance manufacturing",
        "Distribution centres with forklift fleets",
        "Storage and industrial backup integrators",
      ],
    },
    corridors: {
      es: "Recolección directa en el área metropolitana y conexión por carretera con Saltillo, Laredo y el Bajío para consolidar embarques.",
      en: "Direct pickup across the metro area and highway connection to Saltillo, Laredo and the Bajío region to consolidate shipments.",
    },
    regulatory: {
      es: "Operación bajo el marco federal mexicano de residuos peligrosos y de transporte de materiales peligrosos, con la verificación estatal aplicable a cada movimiento.",
      en: "Operation under Mexico's federal hazardous-waste and hazardous-materials transport framework, with the state-level verification applicable to each movement.",
    },
  },
  {
    slug: "coahuila",
    name: { es: "Coahuila", en: "Coahuila" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Coahuila reúne plantas de ensamble y estampado en Saltillo, Ramos Arizpe y Derramadero, con presencia creciente de líneas de vehículo eléctrico y de chatarra de proceso de celda y módulo.",
      en: "Coahuila brings together assembly and stamping plants in Saltillo, Ramos Arizpe and Derramadero, with a growing presence of electric vehicle lines and cell and module process scrap.",
    },
    sectors: {
      es: [
        "Plantas de ensamble automotriz y de tren motriz eléctrico",
        "Estampado, arneses y componentes",
        "Minería y equipo pesado en la región centro y carbonífera",
        "Logística y almacenes de proveeduría",
      ],
      en: [
        "Automotive assembly and electric powertrain plants",
        "Stamping, harnesses and components",
        "Mining and heavy equipment in the central and coal regions",
        "Logistics and supplier warehouses",
      ],
    },
    corridors: {
      es: "Consolidación con Nuevo León por el corredor Saltillo–Monterrey y salida hacia Piedras Negras para embarques que requieren cruce.",
      en: "Consolidation with Nuevo León along the Saltillo–Monterrey corridor and routing to Piedras Negras for shipments requiring a border crossing.",
    },
    regulatory: {
      es: "Aplican los requisitos federales de manejo y transporte, más los criterios estatales de registro de generadores dentro del estado.",
      en: "Federal handling and transport requirements apply, plus the state's generator registration criteria.",
    },
  },
  {
    slug: "guanajuato",
    name: { es: "Guanajuato", en: "Guanajuato" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "El corredor industrial del Bajío, entre Silao, Irapuato, Celaya y León, agrupa armadoras, proveeduría japonesa y alemana y parques industriales con alta rotación de equipo de manejo de materiales.",
      en: "The Bajío industrial corridor, between Silao, Irapuato, Celaya and León, groups OEMs, Japanese and German suppliers and industrial parks with high turnover of material-handling equipment.",
    },
    sectors: {
      es: [
        "Armadoras y proveeduría automotriz del Bajío",
        "Cuero, calzado y manufactura ligera en León",
        "Agroindustria con flota y equipo de respaldo",
        "Parques industriales con montacargas eléctricos",
      ],
      en: [
        "Bajío automotive OEMs and suppliers",
        "Leather, footwear and light manufacturing in León",
        "Agribusiness with fleets and backup equipment",
        "Industrial parks with electric forklifts",
      ],
    },
    corridors: {
      es: "Punto natural de consolidación entre el occidente y el centro del país, con enlace por autopista hacia Querétaro y hacia el norte.",
      en: "A natural consolidation point between western and central Mexico, linked by motorway to Querétaro and northward.",
    },
    regulatory: {
      es: "Marco federal de residuos peligrosos con verificación de rutas y de destino autorizado para cada embarque estatal.",
      en: "Federal hazardous-waste framework with route and authorised-destination verification for each intrastate shipment.",
    },
  },
  {
    slug: "estado-de-mexico",
    name: { es: "Estado de México", en: "State of Mexico" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Toluca, Lerma, Tepotzotlán y Cuautitlán concentran manufactura, centros de distribución y flotas de reparto urbano que están migrando a vehículo eléctrico ligero.",
      en: "Toluca, Lerma, Tepotzotlán and Cuautitlán concentrate manufacturing, distribution centres and urban delivery fleets migrating to light electric vehicles.",
    },
    sectors: {
      es: [
        "Manufactura automotriz y de autopartes",
        "Centros de distribución de comercio electrónico",
        "Flotas de reparto de última milla",
        "Química, farmacéutica y alimentos con equipo de respaldo",
      ],
      en: [
        "Automotive and auto parts manufacturing",
        "E-commerce distribution centres",
        "Last-mile delivery fleets",
        "Chemical, pharma and food plants with backup equipment",
      ],
    },
    corridors: {
      es: "Recolección coordinada con la zona metropolitana del Valle de México, evitando ventanas de restricción de circulación de carga.",
      en: "Pickup coordinated with the Valley of Mexico metro area, avoiding freight circulation restriction windows.",
    },
    regulatory: {
      es: "Requisitos federales más las disposiciones metropolitanas de circulación y horarios para transporte de materiales peligrosos.",
      en: "Federal requirements plus metropolitan rules on circulation and time windows for hazardous materials transport.",
    },
  },
  {
    slug: "ciudad-de-mexico",
    name: { es: "Ciudad de México", en: "Mexico City" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "La capital genera menos residuo de manufactura y más de operación corporativa: bajas de equipo de cómputo, UPS de oficinas y sitios, y flotas de reparto y movilidad compartida.",
      en: "The capital generates less manufacturing waste and more corporate operating waste: IT retirements, office and site UPS units, and delivery and shared-mobility fleets.",
    },
    sectors: {
      es: [
        "Corporativos y centros de datos con renovación de equipo",
        "Telecomunicaciones y sitios con bancos de respaldo",
        "Movilidad compartida, motos y bicicletas eléctricas",
        "Retail y centros de servicio de electrónica",
      ],
      en: [
        "Corporates and data centres refreshing equipment",
        "Telecom and sites with backup banks",
        "Shared mobility, e-motorcycles and e-bikes",
        "Retail and electronics service centres",
      ],
    },
    corridors: {
      es: "Retiros programados con acceso restringido a edificios y estacionamientos, y consolidación en la zona conurbada antes del embarque.",
      en: "Scheduled pickups with restricted building and parking access, consolidating in the metro fringe before shipment.",
    },
    regulatory: {
      es: "Marco federal con las reglas locales de la Ciudad de México sobre transporte de residuos y horarios de carga.",
      en: "Federal framework plus Mexico City's local rules on waste transport and loading hours.",
    },
  },
  {
    slug: "jalisco",
    name: { es: "Jalisco", en: "Jalisco" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Guadalajara y El Salto concentran electrónica de contrato, manufactura de dispositivos y una base amplia de centros de servicio, con volumen constante de celdas de consumo y equipo de cómputo.",
      en: "Guadalajara and El Salto concentrate contract electronics, device manufacturing and a broad base of service centres, with steady volume of consumer cells and IT equipment.",
    },
    sectors: {
      es: [
        "Electrónica de contrato y manufactura de dispositivos",
        "Centros de servicio y postventa de consumo",
        "Agroindustria del occidente con flota y respaldo",
        "Software y corporativos con bajas de equipo de cómputo",
      ],
      en: [
        "Contract electronics and device manufacturing",
        "Consumer service and after-sales centres",
        "Western agribusiness with fleets and backup",
        "Software firms and corporates retiring IT equipment",
      ],
    },
    corridors: {
      es: "Consolidación en la zona metropolitana con enlace al Bajío y salida por Manzanillo cuando el destino lo requiere.",
      en: "Consolidation in the metro area with a link to the Bajío and routing through Manzanillo when the destination requires it.",
    },
    regulatory: {
      es: "Marco federal de residuos peligrosos, con criterios estatales de registro y reporte para generadores en Jalisco.",
      en: "Federal hazardous-waste framework, with Jalisco's state registration and reporting criteria for generators.",
    },
  },
  {
    slug: "queretaro",
    name: { es: "Querétaro", en: "Querétaro" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Querétaro combina aeroespacial, automotriz y centros de datos, un perfil que genera tanto chatarra de proceso como bancos de respaldo al final de su vida.",
      en: "Querétaro combines aerospace, automotive and data centres, a profile that generates both process scrap and end-of-life backup banks.",
    },
    sectors: {
      es: [
        "Aeroespacial y manufactura de precisión",
        "Automotriz y electrónica de potencia",
        "Centros de datos y sitios con UPS",
        "Logística y almacenes del centro del país",
      ],
      en: [
        "Aerospace and precision manufacturing",
        "Automotive and power electronics",
        "Data centres and sites with UPS",
        "Central-Mexico logistics and warehousing",
      ],
    },
    corridors: {
      es: "Ubicación intermedia que permite consolidar material del Bajío y del Valle de México en un mismo embarque.",
      en: "An intermediate location that allows Bajío and Valley of Mexico material to be consolidated into a single shipment.",
    },
    regulatory: {
      es: "Requisitos federales de manejo y transporte, con verificación de destino autorizado antes de programar la ruta.",
      en: "Federal handling and transport requirements, verifying the authorised destination before scheduling the route.",
    },
  },
  {
    slug: "puebla",
    name: { es: "Puebla", en: "Puebla" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Puebla mantiene un ecosistema automotriz maduro alrededor del clúster de armado y su proveeduría, con talleres y distribuidores que empiezan a recibir packs híbridos y eléctricos fuera de garantía.",
      en: "Puebla sustains a mature automotive ecosystem around its assembly cluster and suppliers, with workshops and dealers beginning to receive out-of-warranty hybrid and electric packs.",
    },
    sectors: {
      es: [
        "Armado automotriz y proveeduría directa",
        "Distribuidores y talleres autorizados",
        "Textil y manufactura ligera",
        "Universidades y centros de investigación con laboratorios",
      ],
      en: [
        "Automotive assembly and direct suppliers",
        "Authorised dealers and workshops",
        "Textiles and light manufacturing",
        "Universities and research centres with laboratories",
      ],
    },
    corridors: {
      es: "Enlace por autopista con el Valle de México y con Veracruz para embarques que salen por puerto.",
      en: "Motorway link to the Valley of Mexico and to Veracruz for shipments leaving by port.",
    },
    regulatory: {
      es: "Marco federal aplicable, con coordinación estatal para el registro del generador y la ruta autorizada.",
      en: "Applicable federal framework, with state coordination for generator registration and the authorised route.",
    },
  },
  {
    slug: "san-luis-potosi",
    name: { es: "San Luis Potosí", en: "San Luis Potosí" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "San Luis Potosí funciona como nodo logístico del centro-norte, con parques industriales automotrices y almacenes que operan flotas grandes de montacargas eléctricos.",
      en: "San Luis Potosí works as a north-central logistics hub, with automotive industrial parks and warehouses running large electric forklift fleets.",
    },
    sectors: {
      es: [
        "Automotriz y proveeduría en parques industriales",
        "Centros logísticos y almacenes de consolidación",
        "Metalurgia y transformación",
        "Manufactura de electrodomésticos y componentes",
      ],
      en: [
        "Automotive and suppliers in industrial parks",
        "Logistics hubs and consolidation warehouses",
        "Metallurgy and processing",
        "Appliance and component manufacturing",
      ],
    },
    corridors: {
      es: "Punto de paso entre el Bajío y el noreste, útil para agrupar cargas parciales de varios generadores.",
      en: "A crossing point between the Bajío and the northeast, useful for grouping partial loads from several generators.",
    },
    regulatory: {
      es: "Marco federal de residuos peligrosos con revisión de la documentación de transporte antes de cada salida.",
      en: "Federal hazardous-waste framework with transport documentation reviewed before each departure.",
    },
  },
  {
    slug: "chihuahua",
    name: { es: "Chihuahua", en: "Chihuahua" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Ciudad Juárez y la capital concentran maquila electrónica y de arneses, con generación constante de celdas de prueba, prototipos y chatarra de proceso.",
      en: "Ciudad Juárez and the state capital concentrate electronics and harness maquila operations, with steady generation of test cells, prototypes and process scrap.",
    },
    sectors: {
      es: [
        "Maquila electrónica y de arneses automotrices",
        "Dispositivos médicos y equipo de precisión",
        "Centros de distribución fronterizos",
        "Minería y equipo pesado en el occidente del estado",
      ],
      en: [
        "Electronics and automotive harness maquila",
        "Medical devices and precision equipment",
        "Border distribution centres",
        "Mining and heavy equipment in the west of the state",
      ],
    },
    corridors: {
      es: "Operación fronteriza: los embarques con destino de exportación se planean con la documentación de cruce desde el origen.",
      en: "Border operation: export-bound shipments are planned with crossing documentation from the point of origin.",
    },
    regulatory: {
      es: "Además del marco federal, los movimientos transfronterizos requieren autorización previa y notificación conforme a los convenios aplicables.",
      en: "Beyond the federal framework, cross-border movements require prior authorisation and notification under the applicable conventions.",
    },
  },
  {
    slug: "baja-california",
    name: { es: "Baja California", en: "Baja California" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Tijuana, Mexicali y Ensenada agrupan manufactura de electrónica de consumo, dispositivos médicos y ensamble de baterías para producto terminado.",
      en: "Tijuana, Mexicali and Ensenada group consumer electronics manufacturing, medical devices and battery assembly for finished products.",
    },
    sectors: {
      es: [
        "Electrónica de consumo y ensamble de packs",
        "Dispositivos médicos",
        "Aeroespacial y manufactura avanzada",
        "Vinícola, agroindustria y flotas de reparto",
      ],
      en: [
        "Consumer electronics and pack assembly",
        "Medical devices",
        "Aerospace and advanced manufacturing",
        "Wine, agribusiness and delivery fleets",
      ],
    },
    corridors: {
      es: "Consolidación local previa al cruce, con calendario ajustado a los tiempos de garita.",
      en: "Local consolidation before the crossing, scheduled around border wait times.",
    },
    regulatory: {
      es: "Marco federal más los requisitos de notificación previa para movimientos transfronterizos de residuos.",
      en: "Federal framework plus prior-notification requirements for cross-border waste movements.",
    },
  },
  {
    slug: "sonora",
    name: { es: "Sonora", en: "Sonora" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Sonora combina minería a gran escala, manufactura en Hermosillo y proyectos de generación solar con almacenamiento asociado.",
      en: "Sonora combines large-scale mining, manufacturing in Hermosillo and solar generation projects with associated storage.",
    },
    sectors: {
      es: [
        "Minería y equipo móvil de gran capacidad",
        "Manufactura automotriz y de arneses",
        "Proyectos solares con almacenamiento",
        "Agroindustria y pesca con equipo de respaldo",
      ],
      en: [
        "Mining and large-capacity mobile equipment",
        "Automotive and harness manufacturing",
        "Solar projects with storage",
        "Agribusiness and fishing with backup equipment",
      ],
    },
    corridors: {
      es: "Distancias largas entre sitios: los retiros se programan por ruta y no por visita individual.",
      en: "Long distances between sites: pickups are scheduled by route rather than as individual visits.",
    },
    regulatory: {
      es: "Marco federal aplicable, con atención particular al transporte por tramos carreteros extensos.",
      en: "Applicable federal framework, with particular attention to transport over long highway stretches.",
    },
  },
  {
    slug: "tamaulipas",
    name: { es: "Tamaulipas", en: "Tamaulipas" },
    region: "mx",
    regionLabel: MX,
    intro: {
      es: "Reynosa, Matamoros y Altamira concentran maquila, petroquímica y actividad portuaria, con generación mixta de baterías industriales y de electrónica.",
      en: "Reynosa, Matamoros and Altamira concentrate maquila, petrochemicals and port activity, generating a mix of industrial and electronics batteries.",
    },
    sectors: {
      es: [
        "Maquila electrónica y de componentes",
        "Petroquímica y energía con bancos de respaldo",
        "Actividad portuaria y logística en Altamira",
        "Centros de distribución fronterizos",
      ],
      en: [
        "Electronics and component maquila",
        "Petrochemicals and energy with backup banks",
        "Port and logistics activity in Altamira",
        "Border distribution centres",
      ],
    },
    corridors: {
      es: "Salida por frontera o por puerto según el destino final del material.",
      en: "Routing by border or by port depending on the material's final destination.",
    },
    regulatory: {
      es: "Marco federal con requisitos adicionales de notificación cuando el embarque sale del país.",
      en: "Federal framework with additional notification requirements when the shipment leaves the country.",
    },
  },
  // ---------- Centroamérica y Caribe ----------
  {
    slug: "guatemala",
    name: { es: "Guatemala", en: "Guatemala" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "Guatemala concentra manufactura ligera, call centers, telecomunicaciones y una base creciente de proyectos solares con almacenamiento en el corredor de la capital y Escuintla.",
      en: "Guatemala concentrates light manufacturing, call centres, telecom and a growing base of solar projects with storage along the capital and Escuintla corridor.",
    },
    sectors: {
      es: [
        "Telecomunicaciones y sitios con respaldo",
        "Manufactura ligera y textil",
        "Agroindustria y generación distribuida",
        "Retail y centros de servicio de electrónica",
      ],
      en: [
        "Telecom and sites with backup power",
        "Light manufacturing and textiles",
        "Agribusiness and distributed generation",
        "Retail and electronics service centres",
      ],
    },
    corridors: {
      es: "Consolidación terrestre regional y salida por Puerto Quetzal o Santo Tomás según el destino autorizado.",
      en: "Regional overland consolidation and export via Puerto Quetzal or Santo Tomás depending on the authorised destination.",
    },
    regulatory: {
      es: "La exportación de este tipo de residuo requiere autorización previa del país de origen y del país de destino conforme a los convenios internacionales aplicables. El alcance se confirma por proyecto.",
      en: "Exporting this waste type requires prior authorisation from both origin and destination countries under the applicable international conventions. Scope is confirmed per project.",
    },
  },
  {
    slug: "costa-rica",
    name: { es: "Costa Rica", en: "Costa Rica" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "Costa Rica tiene la mayor penetración de vehículo eléctrico de la región y una base sólida de manufactura de dispositivos médicos y electrónica en zonas francas.",
      en: "Costa Rica has the region's highest electric vehicle penetration and a solid base of medical device and electronics manufacturing in free trade zones.",
    },
    sectors: {
      es: [
        "Distribuidores y talleres de vehículo eléctrico",
        "Dispositivos médicos y electrónica en zona franca",
        "Telecomunicaciones y centros de datos",
        "Flotas corporativas y movilidad eléctrica",
      ],
      en: [
        "Electric vehicle dealers and workshops",
        "Medical devices and electronics in free trade zones",
        "Telecom and data centres",
        "Corporate fleets and electric mobility",
      ],
    },
    corridors: {
      es: "Consolidación en el Valle Central y salida por Limón o Caldera según el destino.",
      en: "Consolidation in the Central Valley and export via Limón or Caldera depending on the destination.",
    },
    regulatory: {
      es: "Movimiento transfronterizo sujeto a autorización previa y notificación conforme a los convenios internacionales aplicables; se documenta caso por caso.",
      en: "Cross-border movement subject to prior authorisation and notification under the applicable international conventions; documented case by case.",
    },
  },
  {
    slug: "panama",
    name: { es: "Panamá", en: "Panama" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "Panamá funciona como centro logístico regional: la Zona Libre de Colón y el hub portuario permiten consolidar material de varios países antes de un embarque único.",
      en: "Panama works as a regional logistics hub: the Colón Free Zone and the port hub make it possible to consolidate material from several countries before a single shipment.",
    },
    sectors: {
      es: [
        "Logística, distribución regional y zona libre",
        "Banca, corporativos y centros de datos",
        "Telecomunicaciones y sitios de respaldo",
        "Flotas de transporte y movilidad urbana",
      ],
      en: [
        "Logistics, regional distribution and free zone",
        "Banking, corporates and data centres",
        "Telecom and backup sites",
        "Transport fleets and urban mobility",
      ],
    },
    corridors: {
      es: "Punto de consolidación natural para embarques que agrupan material de Centroamérica y del Caribe.",
      en: "A natural consolidation point for shipments grouping material from Central America and the Caribbean.",
    },
    regulatory: {
      es: "Tránsito y exportación sujetos a las autorizaciones previas del país de origen y de destino; el esquema se define antes de mover cualquier material.",
      en: "Transit and export subject to prior authorisations from origin and destination countries; the scheme is defined before any material moves.",
    },
  },
  {
    slug: "honduras",
    name: { es: "Honduras", en: "Honduras" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "La actividad industrial se concentra en San Pedro Sula y el valle de Sula, con maquila textil, agroindustria y sitios de telecomunicaciones distribuidos en todo el país.",
      en: "Industrial activity concentrates in San Pedro Sula and the Sula valley, with textile maquila, agribusiness and telecom sites spread across the country.",
    },
    sectors: {
      es: [
        "Maquila textil y manufactura ligera",
        "Agroindustria y empaque",
        "Telecomunicaciones y energía distribuida",
        "Retail y distribución nacional",
      ],
      en: [
        "Textile maquila and light manufacturing",
        "Agribusiness and packing",
        "Telecom and distributed energy",
        "Retail and national distribution",
      ],
    },
    corridors: {
      es: "Consolidación en el valle de Sula y salida por Puerto Cortés.",
      en: "Consolidation in the Sula valley and export via Puerto Cortés.",
    },
    regulatory: {
      es: "Exportación sujeta a autorización previa del país de origen y del país receptor, conforme a los convenios internacionales aplicables.",
      en: "Export subject to prior authorisation from the origin and receiving countries under the applicable international conventions.",
    },
  },
  {
    slug: "el-salvador",
    name: { es: "El Salvador", en: "El Salvador" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "El Salvador combina manufactura textil, servicios y una red densa de sitios de telecomunicaciones en un territorio compacto, lo que facilita rutas de recolección cortas.",
      en: "El Salvador combines textile manufacturing, services and a dense network of telecom sites in a compact territory, which makes short collection routes practical.",
    },
    sectors: {
      es: [
        "Textil y manufactura de exportación",
        "Telecomunicaciones y respaldo de sitios",
        "Servicios financieros y centros de contacto",
        "Distribución y retail",
      ],
      en: [
        "Textiles and export manufacturing",
        "Telecom and site backup",
        "Financial services and contact centres",
        "Distribution and retail",
      ],
    },
    corridors: {
      es: "Rutas cortas entre San Salvador y los principales parques, con salida por Acajutla.",
      en: "Short routes between San Salvador and the main parks, with export via Acajutla.",
    },
    regulatory: {
      es: "Movimiento transfronterizo con autorización previa y notificación; el alcance se confirma antes de comprometer fechas.",
      en: "Cross-border movement with prior authorisation and notification; scope is confirmed before committing to dates.",
    },
  },
  {
    slug: "nicaragua",
    name: { es: "Nicaragua", en: "Nicaragua" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "La generación se concentra en Managua y en las zonas francas, con volúmenes menores que suelen requerir consolidación regional antes de justificar un embarque.",
      en: "Generation concentrates in Managua and the free zones, with smaller volumes that usually require regional consolidation before a shipment is justified.",
    },
    sectors: {
      es: [
        "Zonas francas y manufactura ligera",
        "Telecomunicaciones y energía",
        "Agroindustria",
        "Distribución y retail",
      ],
      en: [
        "Free zones and light manufacturing",
        "Telecom and energy",
        "Agribusiness",
        "Distribution and retail",
      ],
    },
    corridors: {
      es: "Consolidación terrestre con Honduras o Costa Rica cuando el volumen individual es bajo.",
      en: "Overland consolidation with Honduras or Costa Rica when individual volume is low.",
    },
    regulatory: {
      es: "Exportación sujeta a autorización previa del país de origen y del destino autorizado.",
      en: "Export subject to prior authorisation from the origin country and the authorised destination.",
    },
  },
  {
    slug: "republica-dominicana",
    name: { es: "República Dominicana", en: "Dominican Republic" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "República Dominicana suma parques industriales de zona franca, un sector turístico con respaldo energético intensivo y una flota creciente de motocicletas eléctricas.",
      en: "The Dominican Republic combines free-zone industrial parks, a tourism sector with intensive backup power and a growing electric motorcycle fleet.",
    },
    sectors: {
      es: [
        "Zonas francas industriales y dispositivos médicos",
        "Hotelería con bancos de respaldo y solar",
        "Movilidad eléctrica ligera y reparto",
        "Telecomunicaciones y centros de datos",
      ],
      en: [
        "Industrial free zones and medical devices",
        "Hospitality with backup banks and solar",
        "Light electric mobility and delivery",
        "Telecom and data centres",
      ],
    },
    corridors: {
      es: "Embarque marítimo desde Caucedo o Haina, con consolidación previa en la zona de Santo Domingo.",
      en: "Sea shipment from Caucedo or Haina, with prior consolidation in the Santo Domingo area.",
    },
    regulatory: {
      es: "Movimiento transfronterizo con autorización previa y notificación conforme a los convenios aplicables.",
      en: "Cross-border movement with prior authorisation and notification under the applicable conventions.",
    },
  },
  {
    slug: "belice",
    name: { es: "Belice", en: "Belize" },
    region: "ca",
    regionLabel: CA,
    intro: {
      es: "Belice genera volúmenes pequeños y dispersos, principalmente de telecomunicaciones, turismo y sistemas solares aislados, por lo que el manejo se plantea en esquema de consolidación regional.",
      en: "Belize generates small, dispersed volumes, mainly from telecom, tourism and off-grid solar systems, so handling is planned as regional consolidation.",
    },
    sectors: {
      es: [
        "Telecomunicaciones y sitios remotos",
        "Turismo y hotelería con respaldo",
        "Sistemas solares aislados",
        "Distribución y comercio",
      ],
      en: [
        "Telecom and remote sites",
        "Tourism and hospitality with backup",
        "Off-grid solar systems",
        "Distribution and retail",
      ],
    },
    corridors: {
      es: "Consolidación terrestre con Guatemala o con la península de Yucatán según el destino final.",
      en: "Overland consolidation with Guatemala or the Yucatán peninsula depending on the final destination.",
    },
    regulatory: {
      es: "Exportación sujeta a autorización previa; se evalúa la viabilidad antes de comprometer el retiro.",
      en: "Export subject to prior authorisation; feasibility is assessed before committing to pickup.",
    },
  },
  // ---------- Sudamérica ----------
  {
    slug: "brasil",
    name: { es: "Brasil", en: "Brazil" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Brasil es el mercado industrial más grande de la región: manufactura automotriz en São Paulo y Minas Gerais, electrónica en Manaos y una expansión acelerada de almacenamiento y movilidad eléctrica.",
      en: "Brazil is the region's largest industrial market: automotive manufacturing in São Paulo and Minas Gerais, electronics in Manaus, and fast expansion of storage and electric mobility.",
    },
    sectors: {
      es: [
        "Automotriz y proveeduría en el sudeste",
        "Electrónica y polo industrial de Manaos",
        "Almacenamiento y generación distribuida",
        "Flotas de reparto y movilidad urbana",
      ],
      en: [
        "Automotive and suppliers in the southeast",
        "Electronics and the Manaus industrial hub",
        "Storage and distributed generation",
        "Delivery fleets and urban mobility",
      ],
    },
    corridors: {
      es: "Distancias internas largas: la consolidación se define por estado antes de plantear cualquier movimiento internacional.",
      en: "Long internal distances: consolidation is defined state by state before any international movement is proposed.",
    },
    regulatory: {
      es: "Marco nacional de residuos sólidos con responsabilidad del fabricante, más autorización previa para cualquier movimiento transfronterizo.",
      en: "National solid waste framework with producer responsibility, plus prior authorisation for any cross-border movement.",
    },
  },
  {
    slug: "chile",
    name: { es: "Chile", en: "Chile" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Chile combina minería con equipo eléctrico de gran capacidad, proyectos solares con almacenamiento en el norte y una de las flotas de buses eléctricos más grandes de la región.",
      en: "Chile combines mining with large-capacity electric equipment, solar-plus-storage projects in the north and one of the region's largest electric bus fleets.",
    },
    sectors: {
      es: [
        "Minería y equipo móvil eléctrico",
        "Proyectos solares con almacenamiento",
        "Transporte público y flotas eléctricas",
        "Retail, logística y centros de datos",
      ],
      en: [
        "Mining and electric mobile equipment",
        "Solar projects with storage",
        "Public transport and electric fleets",
        "Retail, logistics and data centres",
      ],
    },
    corridors: {
      es: "Territorio largo y angosto: los retiros se agrupan por macrozona norte, centro y sur.",
      en: "A long, narrow territory: pickups are grouped by northern, central and southern macrozones.",
    },
    regulatory: {
      es: "Ley de responsabilidad extendida del productor aplicable a baterías, con autorización previa para movimientos transfronterizos.",
      en: "Extended producer responsibility law applicable to batteries, with prior authorisation for cross-border movements.",
    },
  },
  {
    slug: "colombia",
    name: { es: "Colombia", en: "Colombia" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Bogotá, Medellín y el corredor de Cali agrupan manufactura, servicios y una flota de transporte público eléctrico en crecimiento, junto con programas posconsumo ya establecidos.",
      en: "Bogotá, Medellín and the Cali corridor group manufacturing, services and a growing electric public transport fleet, alongside established post-consumer programmes.",
    },
    sectors: {
      es: [
        "Transporte público y flotas eléctricas",
        "Manufactura y electrodomésticos",
        "Telecomunicaciones y centros de datos",
        "Retail con programas posconsumo",
      ],
      en: [
        "Public transport and electric fleets",
        "Manufacturing and appliances",
        "Telecom and data centres",
        "Retail with post-consumer programmes",
      ],
    },
    corridors: {
      es: "Consolidación por ciudad principal y salida por Cartagena o Buenaventura según el destino.",
      en: "Consolidation by major city and export via Cartagena or Buenaventura depending on the destination.",
    },
    regulatory: {
      es: "Programas posconsumo obligatorios para ciertos productos, más autorización previa para exportar residuos peligrosos.",
      en: "Mandatory post-consumer programmes for certain products, plus prior authorisation to export hazardous waste.",
    },
  },
  {
    slug: "peru",
    name: { es: "Perú", en: "Peru" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "La minería y las operaciones remotas dominan la generación en Perú, con equipos de respaldo y sistemas híbridos en sitios de altura y difícil acceso, además del polo industrial de Lima.",
      en: "Mining and remote operations dominate generation in Peru, with backup equipment and hybrid systems at high-altitude, hard-to-reach sites, plus the Lima industrial hub.",
    },
    sectors: {
      es: [
        "Minería y campamentos con energía híbrida",
        "Telecomunicaciones en sitios remotos",
        "Industria y logística en Lima y Callao",
        "Pesca y agroindustria de exportación",
      ],
      en: [
        "Mining and camps with hybrid power",
        "Telecom at remote sites",
        "Industry and logistics in Lima and Callao",
        "Fishing and export agribusiness",
      ],
    },
    corridors: {
      es: "Bajada de material desde sitios de altura hacia Lima o Callao antes de cualquier embarque.",
      en: "Material brought down from high-altitude sites to Lima or Callao before any shipment.",
    },
    regulatory: {
      es: "Gestión de residuos peligrosos mediante operadores autorizados y autorización previa para movimiento transfronterizo.",
      en: "Hazardous waste managed through authorised operators, with prior authorisation for cross-border movement.",
    },
  },
  {
    slug: "argentina",
    name: { es: "Argentina", en: "Argentina" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Argentina suma manufactura automotriz en Córdoba y Buenos Aires, actividad en la cadena del litio en el noroeste y proyectos de almacenamiento asociados a generación renovable.",
      en: "Argentina combines automotive manufacturing in Córdoba and Buenos Aires, lithium supply-chain activity in the northwest and storage projects tied to renewable generation.",
    },
    sectors: {
      es: [
        "Automotriz y autopartes",
        "Energía, almacenamiento y renovables",
        "Telecomunicaciones y centros de datos",
        "Agroindustria y maquinaria",
      ],
      en: [
        "Automotive and auto parts",
        "Energy, storage and renewables",
        "Telecom and data centres",
        "Agribusiness and machinery",
      ],
    },
    corridors: {
      es: "Consolidación en el área metropolitana de Buenos Aires y en Córdoba, con salida por puerto.",
      en: "Consolidation in metropolitan Buenos Aires and Córdoba, with export by port.",
    },
    regulatory: {
      es: "Régimen nacional y provincial de residuos peligrosos; la exportación requiere autorización previa y notificación.",
      en: "National and provincial hazardous waste regimes; export requires prior authorisation and notification.",
    },
  },
  {
    slug: "ecuador",
    name: { es: "Ecuador", en: "Ecuador" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Quito y Guayaquil concentran industria, telecomunicaciones y flotas comerciales, con volúmenes que suelen consolidarse a nivel nacional antes de plantear un embarque.",
      en: "Quito and Guayaquil concentrate industry, telecom and commercial fleets, with volumes usually consolidated nationally before a shipment is proposed.",
    },
    sectors: {
      es: [
        "Industria y alimentos",
        "Telecomunicaciones y respaldo",
        "Flotas comerciales y transporte",
        "Retail y distribución",
      ],
      en: [
        "Industry and food processing",
        "Telecom and backup power",
        "Commercial fleets and transport",
        "Retail and distribution",
      ],
    },
    corridors: {
      es: "Consolidación en Guayaquil por su acceso portuario.",
      en: "Consolidation in Guayaquil for its port access.",
    },
    regulatory: {
      es: "Gestión mediante gestores autorizados y autorización previa para exportación de residuos peligrosos.",
      en: "Handling through authorised managers and prior authorisation to export hazardous waste.",
    },
  },
  {
    slug: "uruguay",
    name: { es: "Uruguay", en: "Uruguay" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Uruguay tiene alta penetración de generación renovable y una flota de transporte eléctrico en crecimiento, con volúmenes moderados y buena trazabilidad documental.",
      en: "Uruguay has high renewable generation penetration and a growing electric transport fleet, with moderate volumes and solid documentary traceability.",
    },
    sectors: {
      es: [
        "Transporte eléctrico y flotas públicas",
        "Energía renovable y almacenamiento",
        "Logística en zona franca",
        "Telecomunicaciones y servicios",
      ],
      en: [
        "Electric transport and public fleets",
        "Renewable energy and storage",
        "Free-zone logistics",
        "Telecom and services",
      ],
    },
    corridors: {
      es: "Consolidación en Montevideo, con opción de tránsito en zona franca según el esquema autorizado.",
      en: "Consolidation in Montevideo, with the option of free-zone transit under the authorised scheme.",
    },
    regulatory: {
      es: "Régimen nacional de residuos especiales, con autorización previa para el movimiento transfronterizo.",
      en: "National special waste regime, with prior authorisation for cross-border movement.",
    },
  },
  {
    slug: "paraguay",
    name: { es: "Paraguay", en: "Paraguay" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "Paraguay concentra maquila industrial y logística mediterránea, lo que obliga a planear cualquier salida de material por vía terrestre o fluvial hacia puerto.",
      en: "Paraguay concentrates industrial maquila and landlocked logistics, so any material movement must be planned overland or by river towards a port.",
    },
    sectors: {
      es: [
        "Maquila industrial y ensamble",
        "Agroindustria y maquinaria",
        "Telecomunicaciones y respaldo",
        "Logística y distribución regional",
      ],
      en: [
        "Industrial maquila and assembly",
        "Agribusiness and machinery",
        "Telecom and backup power",
        "Regional logistics and distribution",
      ],
    },
    corridors: {
      es: "Salida terrestre o fluvial hacia puertos de Argentina o Uruguay, definida antes del retiro.",
      en: "Overland or river routing to Argentine or Uruguayan ports, defined before pickup.",
    },
    regulatory: {
      es: "Movimiento transfronterizo con autorización previa de origen, tránsito y destino.",
      en: "Cross-border movement with prior authorisation from origin, transit and destination countries.",
    },
  },
  {
    slug: "bolivia",
    name: { es: "Bolivia", en: "Bolivia" },
    region: "sa",
    regionLabel: SA,
    intro: {
      es: "La generación se asocia principalmente a minería, telecomunicaciones y sistemas solares en zonas aisladas, con logística condicionada por altitud y accesos.",
      en: "Generation is mainly linked to mining, telecom and solar systems in isolated areas, with logistics conditioned by altitude and access.",
    },
    sectors: {
      es: [
        "Minería y operaciones de altura",
        "Telecomunicaciones y sitios aislados",
        "Sistemas solares rurales",
        "Industria y distribución en el eje central",
      ],
      en: [
        "Mining and high-altitude operations",
        "Telecom and isolated sites",
        "Rural solar systems",
        "Industry and distribution along the central axis",
      ],
    },
    corridors: {
      es: "Consolidación en el eje La Paz–Cochabamba–Santa Cruz y salida terrestre hacia puerto.",
      en: "Consolidation along the La Paz–Cochabamba–Santa Cruz axis and overland routing to a port.",
    },
    regulatory: {
      es: "Exportación de residuos peligrosos sujeta a autorización previa; la viabilidad se confirma antes de comprometer el retiro.",
      en: "Hazardous waste export subject to prior authorisation; feasibility is confirmed before committing to pickup.",
    },
  },
];

export function findPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}

export const regionOrder: { key: Place["region"]; label: L }[] = [
  { key: "mx", label: MX },
  { key: "ca", label: CA },
  { key: "sa", label: SA },
];
