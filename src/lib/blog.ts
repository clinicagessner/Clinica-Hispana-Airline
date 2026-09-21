import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readBlogFile(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug || slug,
    title: data.title || "",
    description: data.description || "",
    // Opcionales: cuando el titular del post no cabe en 60 caracteres o la
    // entradilla pasa de 155, el frontmatter manda sobre el título visible.
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    relatedServices: data.relatedServices ?? [],
    date: data.date || "",
    dateModified: data.dateModified,
    author: data.author || "Clínica Hispana Airline",
    image: data.image,
    featured: data.featured || false,
    category: data.category,
    readTime: data.readTime,
    keywords: data.keywords || [],
    content: content.trim(),
  };
}

function getAllSlugs(): string[] {
  const esDir = path.join(BLOG_DIR, "es");
  if (!fs.existsSync(esDir)) return [];

  return fs
    .readdirSync(esDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getBlogPosts(locale: string = "es"): BlogPost[] {
  const slugs = getAllSlugs();

  return slugs
    .map((slug) => readBlogFile(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, locale: string = "es"): BlogPost | null {
  return readBlogFile(slug, locale);
}

export function getFeaturedPost(locale: string = "es"): BlogPost | null {
  // The most recent post is always featured (posts are sorted by date desc)
  const posts = getBlogPosts(locale);
  return posts[0] || null;
}

export function getRelatedPosts(slug: string, locale: string = "es", limit: number = 3): BlogPost[] {
  const posts = getBlogPosts(locale);
  const at = posts.findIndex((p) => p.slug === slug);
  if (at === -1) return posts.slice(0, limit);

  // Circular, no `.slice(0, limit)`: los posts vienen ordenados por fecha, así
  // que enlazaba siempre a los más recientes y el resto se quedaba con un
  // único enlace entrante, el del índice del blog.
  return Array.from(
    { length: Math.min(limit, posts.length - 1) },
    (_, k) => posts[(at + k + 1) % posts.length]
  );
}
