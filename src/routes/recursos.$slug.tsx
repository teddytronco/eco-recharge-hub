import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CtaBand, EmergencyNotice, PageHero, Section } from "@/components/site/blocks";
import { articles, findArticle } from "@/content/resources";
import { ui } from "@/content/ui";
import { absoluteUrl, breadcrumbLd, OG_IMAGE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/recursos/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) throw notFound();
    return { slug: article.slug };
  },
  head: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) {
      return { meta: [{ title: "Recurso no encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/recursos/${article.slug}`;
    return pageHead({
      path,
      title: `${article.title.es} | Reciclaje de Baterías Latinoamérica`,
      description: article.description.es,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title.es,
          description: article.description.es,
          image: OG_IMAGE,
          mainEntityOfPage: absoluteUrl(path),
          author: {
            "@type": "Organization",
            name: "Reciclaje de Baterías Latinoamérica",
          },
          publisher: {
            "@type": "Organization",
            name: "Reciclaje de Baterías Latinoamérica",
          },
        },
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Recursos", path: "/recursos" },
          { name: article.title.es, path },
        ]),
      ],
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { lang, t } = useI18n();
  const { slug } = Route.useParams();
  const article = findArticle(slug)!;
  const others = articles.filter((a) => a.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={t.brand.tagline}
        title={article.title[lang]}
        subtitle={article.description[lang]}
      />
      <Section>
        <article className="max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">{article.intro[lang]}</p>
          {article.sections.map((s) => (
            <section key={s.h.es} className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">{s.h[lang]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.p[lang]}</p>
            </section>
          ))}
          <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            {ui.resources.disclaimer[lang]}
          </p>
        </article>

        <div className="mt-10">
          <EmergencyNotice />
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{ui.resources.all[lang]}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/recursos/$slug"
                  params={{ slug: a.slug }}
                  className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-accent"
                >
                  <span className="leading-snug">{a.title[lang]}</span>
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
