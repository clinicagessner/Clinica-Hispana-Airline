import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_CONFIG, CONTACT_INFO, SERVICES } from "@/lib/constants";
import { getBlogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDots, Clock, ArrowLeft, Phone } from "@phosphor-icons/react/dist/ssr";
import { JsonLdBlogPosting } from "@/components/seo/json-ld-blog";
import { MedicalReview } from "@/components/seo/medical-review";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { seoTitle, seoDescription, buildSocial } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["es", "en"];
  const posts = getBlogPosts("es");
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const localePath = locale === "en" ? "/en" : "";

  const url = `${SITE_CONFIG.baseUrl}${localePath}/blog/${slug}`;
  const title = seoTitle(post.metaTitle ?? post.title);
  const description = seoDescription(post.metaDescription ?? post.description);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `/blog/${slug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    ...buildSocial({
      title,
      description,
      url,
      image: post.image,
      imageAlt: post.title,
      type: "article",
      locale,
      publishedTime: post.date,
      authors: [post.author],
    }),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("blog");
  const tReview = await getTranslations("medicalReview");

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, locale, 2);

  // Enlaces del post a los servicios que trata. Junto con la rotación de
  // relacionados, es lo que saca a los servicios de la cola de cada categoría.
  const relatedServices = (post.relatedServices ?? [])
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  return (
    <>
      <JsonLdMedicalClinic />
      <JsonLdBlogPosting post={post} locale={locale} />

      <article>
        {/* Hero Header with Background Image */}
        <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          {/* Background Image */}
          {post.image && (
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={`${post.title} - Artículo de salud Clínica Hispana Airline Houston TX`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <div className="mb-8">
              <Link href={getLocalizedHref("/blog")}>
                <Button variant="ghost" className="gap-2 text-white/90 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4" />
                  {t("backToBlog")}
                </Button>
              </Link>
            </div>

            <div className="max-w-3xl">
              {post.category && (
                <Badge className="mb-4 bg-red-primary hover:bg-red-dark text-white border-0">
                  {post.category}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CalendarDots className="w-4 h-4" weight="fill" />
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4" weight="fill" />
                    {post.readTime} {t("minRead")}
                  </span>
                )}
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {t("by")} <strong className="text-white">{post.author}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="blog-content">
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content, locale) }} />
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 md:p-10 bg-linear-to-br from-red-primary via-red-dark to-slate-900 rounded-2xl text-white text-center shadow-xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {t("ctaTitle")}
              </h3>
              <p className="mb-8 text-white/90 max-w-md mx-auto">
                {t("ctaDescription")}
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-white text-red-primary font-bold px-8 py-4 rounded-full hover:bg-red-light hover:scale-105 transition-all shadow-lg"
                suppressHydrationWarning
              >
                <Phone className="w-5 h-5" weight="fill" />
                {t("callNow")} {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <MedicalReview
              published={post.date}
              reviewed={post.dateModified || post.date}
              locale={locale}
              labels={{
                heading: tReview("heading"),
                reviewedBy: tReview("reviewedBy"),
                published: tReview("published"),
                lastReviewed: tReview("lastReviewed"),
              }}
            />
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-heading font-bold text-slate-dark mb-6">
                {t("relatedServices")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={getLocalizedHref(`/services/${service.slug}`)}
                      className="block rounded-lg border border-slate-200 px-4 py-3 text-slate-dark hover:border-red-primary hover:text-red-primary transition-colors"
                    >
                      {locale === "en" ? service.titleEn ?? service.title : service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-heading font-bold text-slate-dark mb-8">
                {t("relatedPosts")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={getLocalizedHref(`/blog/${relatedPost.slug}`)}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 hover:border-red-200"
                    >
                      {relatedPost.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - Blog Clínica Hispana Airline Houston`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-slate-dark group-hover:text-red-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(relatedPost.date).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

// Simple markdown parser (for basic formatting)
/**
 * `locale` no es opcional a propósito: los enlaces internos del markdown se
 * escriben sin prefijo y en inglés tienen que salir con `/en`, o cada post en
 * inglés manda al lector y al rastreador a la versión en español.
 */
function parseMarkdown(markdown: string, locale: string): string {
  const localizeHref = (href: string) => {
    if (locale === "es" || !href.startsWith("/") || href.startsWith("/en")) return href;
    return `/${locale}${href}`;
  };

  let html = markdown
    // Tables (before line-break handling so rows stay grouped)
    .replace(/(?:^\|.*\|[ \t]*$\n?)+/gim, (block) => {
      const rows = block
        .trim()
        .split("\n")
        .map((row) => row.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()))
        .filter((cells) => !cells.every((cell) => /^:?-{3,}:?$/.test(cell)));
      if (rows.length < 2) return block;
      const [header, ...body] = rows;
      const thead = `<thead><tr>${header.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>`;
      const tbody = `<tbody>${body.map((cells) => `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
      return `<table>${thead}${tbody}</table>\n`;
    })
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, (_m, text, href) => `<a href="${localizeHref(href)}">${text}</a>`)
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p>')
    // Line breaks
    .replace(/\n/gim, '<br>');

  // Wrap content in paragraph tags
  html = `<p>${html}</p>`;

  // Fix list structure
  html = html
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>')
    .replace(/<\/li><br><li>/g, '</li><li>')
    .replace(/<br><ul>/g, '</p><ul>')
    .replace(/<\/ul><br>/g, '</ul><p>')
    .replace(/<p><table>/g, '<table>')
    .replace(/<\/table><\/p>/g, '</table>')
    .replace(/<br><table>/g, '</p><table>')
    .replace(/<\/table><br>/g, '</table><p>');

  return html;
}
