# Plan de SEO para captación de leads B2B (México, Centroamérica y Sudamérica)

Objetivo: que empresas y responsables de EHS/mantenimiento que buscan cómo desechar baterías (EV, almacenamiento, peak-shaving, electrodomésticos, electrónicos, herramientas eléctricas) encuentren el sitio y soliciten cotización.

## Diagnóstico de demanda (datos de Semrush, base MX)

| Término | Volumen | Dificultad |
|---|---|---|
| manejo de residuos peligrosos | 880/mes | 17/100 (fácil) |
| residuos peligrosos | 8,100/mes | baja competencia |
| compra de baterías usadas | 1,000/mes | baja |
| reciclaje de baterías | 320/mes | 16/100 |
| reciclaje de baterías de litio | 30/mes | 16/100 |

Lectura: la demanda directa por "reciclaje de baterías de litio" es pequeña pero muy calificada y fácil de ganar. El volumen grande está en el lenguaje regulatorio (residuos peligrosos, normativa) y en intención comercial ("compra/venta de baterías usadas"). La estrategia combina ambas: páginas de servicio por material + páginas geográficas + contenido regulatorio.

## Arquitectura de páginas a crear

Todo bilingüe (ES/EN) con el selector ya existente.

**1. Páginas por tipo de material (6 rutas nuevas bajo /materiales/)**
- `/materiales/baterias-ev` — baterías de vehículos eléctricos e híbridos
- `/materiales/almacenamiento-energia` — BESS, respaldo, peak-shaving
- `/materiales/herramientas-electricas` — packs de power tools
- `/materiales/electrodomesticos` — línea blanca y pequeños aparatos
- `/materiales/electronicos` — laptops, celulares, UPS, tablets
- `/materiales/industriales-plomo-niquel` — otros químicos comunes

Cada una: definición del material, riesgos y clasificación, requisitos de empaque y transporte, qué documentación entregamos, formulario/CTA de cotización, enlaces al proceso y cumplimiento.

**2. Páginas geográficas (patrón hub + estado/país)**
- Hub `/cobertura` con el mapa de operación.
- México: estados prioritarios por concentración industrial y de EV — Nuevo León, Coahuila, Guanajuato, Estado de México, Jalisco, Querétaro, Puebla, San Luis Potosí, Chihuahua, Baja California, Sonora, Tamaulipas, CDMX. Resto de estados en segunda ola.
- Centroamérica: Guatemala, Costa Rica, Panamá, Honduras, El Salvador, Nicaragua, Belice, República Dominicana.
- Sudamérica: Brasil, Chile, Colombia, Perú, Argentina, Ecuador, Uruguay, Paraguay, Bolivia.

Regla anti-spam: cada página lleva contenido propio (sectores locales, corredores logísticos, marco regulatorio del país, tiempos de recolección). Nada de plantillas duplicadas con el nombre cambiado. Se publican por olas, no las 40 de golpe.

**3. Contenido regulatorio y de decisión (`/recursos/`)**
- Cómo clasificar y empacar baterías de litio dañadas para transporte
- Documentación exigida al generador de residuos peligrosos en México
- Diferencias regulatorias por país para exportar baterías al final de su vida
- Qué hacer con un pack de EV siniestrado
- Cuándo una batería de almacenamiento llega al final de su vida útil

Estos artículos capturan las búsquedas de alto volumen regulatorio y alimentan el formulario de cotización.

## Trabajo técnico

- Publicar el sitio y conectar un dominio propio. Hoy no está publicado: sin URL pública Google no indexa nada y no hay datos de Search Console.
- Sitemap dinámico (`/sitemap.xml`) que incluya todas las rutas nuevas, y `Sitemap:` en robots.txt.
- Canonical y `og:url` absolutos con el dominio final (hoy son relativos).
- `hreflang` es/en por página, más `x-default`.
- Imagen social 1200x630 real, hoy no hay `og:image`.
- JSON-LD: `Organization` + `Service` en el root, `Service` con `areaServed` en cada página de material y geográfica, `BreadcrumbList` en rutas profundas, `Article` en `/recursos/*`.
- Enlazado interno: material ↔ cobertura ↔ recurso ↔ contacto.
- Alta en Google Search Console y Bing, envío del sitemap.

## Conversión de leads

- CTA de cotización en cada página nueva, con el material precargado en el formulario.
- Registro de la página de origen en el mensaje enviado, para saber qué contenido genera cada lead.
- WhatsApp y teléfono visibles en móvil (ya implementado).

## Orden de ejecución sugerido

1. Base técnica: publicar, dominio, sitemap, robots, canonicals absolutos, hreflang, JSON-LD, Search Console.
2. Las 6 páginas de material (mayor intención comercial).
3. Hub `/cobertura` + 8 estados prioritarios de México.
4. 5 artículos de `/recursos/`.
5. Segunda ola geográfica: Centroamérica y Sudamérica, luego el resto de estados.

## Nota sobre contenido

Ninguna página afirmará permisos, certificaciones, capacidades ni cifras que no estén verificadas; los bloques editables seguirán marcados como "Por documentar" hasta que se entregue la documentación real.
