import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { BLOG_POSTS, SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft, Phone } from "lucide-react";
import { JsonLdBlogPosting } from "@/components/seo/json-ld-blog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/blog/${slug}`,
      languages: {
        es: `/blog/${slug}`,
        en: `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_CONFIG.baseUrl}/${locale}/blog/${slug}`,
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLdBlogPosting post={post} locale={locale} />

      <article className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("backToBlog")}
              </Button>
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-8">
            {post.category && (
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} {t("minRead")}
                </span>
              )}
              <span>
                {t("by")} <strong>{post.author}</strong>
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-primary prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-slate-dark prose-p:leading-relaxed
                prose-a:text-red-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-primary
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:text-slate-dark
                prose-blockquote:border-l-4 prose-blockquote:border-red-primary prose-blockquote:bg-red-light/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
              "
            >
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary to-red-primary rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {t("ctaTitle")}
              </h3>
              <p className="mb-6 opacity-90">
                {t("ctaDescription")}
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-red-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                {t("callNow")} {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">
              {t("relatedPosts")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {BLOG_POSTS.filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    {relatedPost.image && (
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-red-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(relatedPost.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

// Simple markdown parser (for basic formatting)
function parseMarkdown(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
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
    .replace(/<\/ul><br>/g, '</ul><p>');

  return html;
}
