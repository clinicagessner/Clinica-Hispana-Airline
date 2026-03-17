import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/blog`,
      languages: {
        es: "/blog",
        en: "/en/blog",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
      url: `${SITE_CONFIG.baseUrl}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-light/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto md:min-h-[400px]">
                    <Image
                      src={featuredPost.image || "/images/blog/default.webp"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-primary">
                      {t("featured")}
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-10">
                    {featuredPost.category && (
                      <Badge variant="outline" className="w-fit mb-4">
                        {featuredPost.category}
                      </Badge>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-blue-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {featuredPost.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-primary font-medium group-hover:gap-3 transition-all">
                      {t("readMore")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image || "/images/blog/default.webp"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    {post.category && (
                      <Badge variant="outline" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} {t("minRead")}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("noPosts")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
