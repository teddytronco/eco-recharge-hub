import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import worldTopo from "@/assets/world-countries.json";
import { useI18n } from "@/lib/i18n";

// ISO 3166-1 numeric ids (world-atlas) of areas where we coordinate service
const COVERED = new Set([
  "484", // México
  "320", // Guatemala
  "084", // Belice
  "222", // El Salvador
  "340", // Honduras
  "558", // Nicaragua
  "188", // Costa Rica
  "591", // Panamá
  "214", // República Dominicana
  "076", // Brasil
  "152", // Chile
  "170", // Colombia
  "604", // Perú
  "032", // Argentina
  "218", // Ecuador
  "858", // Uruguay
  "600", // Paraguay
]);

const HUBS: { name: { es: string; en: string }; coordinates: [number, number] }[] = [
  { name: { es: "Monterrey", en: "Monterrey" }, coordinates: [-100.31, 25.67] },
  { name: { es: "Ciudad de México", en: "Mexico City" }, coordinates: [-99.13, 19.43] },
  { name: { es: "Ciudad de Guatemala", en: "Guatemala City" }, coordinates: [-90.51, 14.63] },
  { name: { es: "Ciudad de Panamá", en: "Panama City" }, coordinates: [-79.52, 8.98] },
  { name: { es: "Bogotá", en: "Bogotá" }, coordinates: [-74.07, 4.71] },
  { name: { es: "Lima", en: "Lima" }, coordinates: [-77.04, -12.05] },
  { name: { es: "Santiago", en: "Santiago" }, coordinates: [-70.67, -33.45] },
  { name: { es: "São Paulo", en: "São Paulo" }, coordinates: [-46.63, -23.55] },
  { name: { es: "Buenos Aires", en: "Buenos Aires" }, coordinates: [-58.38, -34.6] },
];

const COVERED_FILL = "oklch(0.62 0.09 190)"; // teal, brand
const DEFAULT_FILL = "oklch(0.93 0.006 200)";
const STROKE = "oklch(0.99 0.002 200)";
const MARKER_FILL = "oklch(0.45 0.1 195)";
const MARKER_PULSE = "oklch(0.74 0.176 145)";

export function CoverageMap() {
  const { lang } = useI18n();
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ rotate: [75, 12, 0], scale: 470 }}
        width={1000}
        height={700}
        className="h-auto w-full"
        role="img"
        aria-label={
          lang === "es"
            ? "Mapa simbólico de cobertura en México, Centroamérica y Sudamérica"
            : "Symbolic coverage map of Mexico, Central America and South America"
        }
      >
        <Geographies geography={worldTopo as never}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const covered = COVERED.has(String(geo.id).padStart(3, "0"));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={covered ? COVERED_FILL : DEFAULT_FILL}
                  stroke={STROKE}
                  strokeWidth={0.6}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: covered ? "oklch(0.55 0.1 190)" : DEFAULT_FILL },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
        {HUBS.map((hub) => (
          <Marker key={hub.name.en} coordinates={hub.coordinates}>
            <circle r={7} fill={MARKER_PULSE} opacity={0.35} />
            <circle r={3.4} fill={MARKER_FILL} stroke="#fff" strokeWidth={1} />
            <title>{hub.name[lang]}</title>
          </Marker>
        ))}
      </ComposableMap>
      <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block size-3 rounded-sm"
            style={{ background: COVERED_FILL }}
            aria-hidden
          />
          {lang === "es" ? "Zona con cobertura coordinada" : "Coordinated coverage area"}
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block size-3 rounded-full"
            style={{ background: MARKER_FILL }}
            aria-hidden
          />
          {lang === "es" ? "Puntos de coordinación logística" : "Logistics coordination points"}
        </span>
        <span className="ml-auto">
          {lang === "es" ? "Mapa simbólico, no a escala exacta" : "Symbolic map, not to exact scale"}
        </span>
      </figcaption>
    </figure>
  );
}
