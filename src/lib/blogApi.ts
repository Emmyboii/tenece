// ─── lib/blogApi.ts ───────────────────────────────────────────────────────────
// Shared Strapi blog API types, helpers, and fetch functions.
// Import from this file in Home.tsx, Blog.tsx, and any other consumer.

// ─── Config ──────────────────────────────────────────────────────────────────

// Add to your .env:  VITE_STRAPI_URL=http://localhost:1337
// export const STRAPI_BASE_URL =
//   import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

// ─── Strapi Response Types ────────────────────────────────────────────────────

export interface StrapiImageFormat {
  url: string;
}

export interface StrapiImage {
  data: {
    attributes: {
      url: string;
      formats?: {
        large?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        small?: StrapiImageFormat;
      };
    };
  } | null;
}

export interface BlogPostAttributes {
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: StrapiImage;
    excerpt?: string;
}

export interface StrapiPost {
    id: number;
    attributes: BlogPostAttributes;
}

export interface StrapiBlogResponse {
  data: StrapiPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// ─── Normalized UI Shape ──────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
//   excerpt?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getStrapiImageUrl(image: StrapiImage): string {
  if (!image?.data) return "";
  const attrs = image.data.attributes;
  return (
    attrs.formats?.large?.url ??
    attrs.formats?.medium?.url ??
    attrs.formats?.small?.url ??
    attrs.url ??
    ""
  );
}

export function normalizePosts(raw: StrapiPost[]): BlogPost[] {
  return raw.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    // excerpt: item.attributes.excerpt,
    date: new Date(item.attributes.publishedAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    imageUrl: getStrapiImageUrl(item.attributes.coverImage),
  }));
}

// ─── Fetch: all posts (paginated) ────────────────────────────────────────────

export async function fetchBlogPosts(
  page = 1,
  pageSize = 12
): Promise<StrapiBlogResponse> {
  /**
   * REAL Strapi call — uncomment when your instance is running:
   *
   * const res = await fetch(
   *   `http://localhost:1337/api/blog-posts?populate=coverImage&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
   * );
   * if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
   * return res.json() as Promise<StrapiBlogResponse>;
   */

  // ── Simulated endpoint — returns empty while Strapi is not yet live ──
  await new Promise((r) => setTimeout(r, 800));
  return {
    data: [],
    meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } },
  };
}

// ─── Fetch: latest N posts (for homepage preview) ────────────────────────────

export async function fetchLatestBlogPosts(limit = 3): Promise<BlogPost[]> {
  const res = await fetchBlogPosts(1, limit);
  return normalizePosts(res.data);
}