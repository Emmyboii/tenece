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
  url: string;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
  };
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
  title: string;
  slug: string;
  publishedAt: string;
  coverImage: StrapiImage;
  excerpt?: string;
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

function getStrapiImageUrl(image?: StrapiImage | null): string {
  if (!image) return "";

  const url =
    image.formats?.large?.url ??
    image.formats?.medium?.url ??
    image.formats?.small?.url ??
    image.url;

  if (!url) return "";

  if (url.startsWith("http")) return url;

  return `${import.meta.env.VITE_STRAPI_URL}${url}`;
}

export function normalizePosts(raw: StrapiPost[]): BlogPost[] {
  return raw.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: new Date(item.publishedAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    imageUrl: getStrapiImageUrl(item.coverImage),
  }));
}

// ─── Fetch: all posts (paginated) ────────────────────────────────────────────

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

export async function fetchBlogPosts(
  page = 1,
  pageSize = 12
): Promise<StrapiBlogResponse> {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blog-posts?populate=coverImage&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );

  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status}`);
  }

  return res.json();
}
// ─── Fetch: latest N posts (for homepage preview) ────────────────────────────

export async function fetchLatestBlogPosts(limit = 3): Promise<BlogPost[]> {
  const res = await fetchBlogPosts(1, limit);
  return normalizePosts(res.data);
}

export async function subscribeToNewsletter(email: string) {
  const res = await fetch(`${STRAPI_BASE_URL}/api/newsletters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: { email },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to subscribe");
  }

  return res.json();
}