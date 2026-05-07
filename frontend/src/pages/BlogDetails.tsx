import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import LOT from "../components/LOT";
import { RiFileSearchLine } from "react-icons/ri";
import DOMPurify from "dompurify";

// ─── Strapi Types ────────────────────────────────────────────────────────────

interface StrapiImageFormat {
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

// ─── Strapi Rich Text Block Types ────────────────────────────────────────────

interface StrapiTextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface StrapiLinkNode {
  type: "link";
  url: string;
  children: StrapiTextNode[];
}

type StrapiInlineNode = StrapiTextNode | StrapiLinkNode;

interface StrapiListItemNode {
  type: "list-item";
  children: StrapiInlineNode[];
}

interface StrapiBlock {
  type: "paragraph" | "heading" | "list" | "list-item" | "quote" | "code";
  level?: number;             // for headings: 1–6
  format?: "ordered" | "unordered"; // for lists
  children: Array<StrapiInlineNode | StrapiListItemNode | StrapiBlock>;
}

// ─── Rich Text → HTML Converter ──────────────────────────────────────────────

function renderInlineNode(node: StrapiInlineNode): string {
  if (node.type === "link") {
    const inner = node.children.map(renderInlineNode).join("");
    return `<a href="${node.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }

  // text node
  let text = node.text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (node.bold) text = `<strong>${text}</strong>`;
  if (node.italic) text = `<em>${text}</em>`;
  if (node.underline) text = `<u>${text}</u>`;
  if (node.strikethrough) text = `<s>${text}</s>`;
  if (node.code) text = `<code>${text}</code>`;

  return text;
}

function renderListItem(node: StrapiListItemNode): string {
  const inner = node.children.map((c) => renderInlineNode(c as StrapiInlineNode)).join("");
  return `<li>${inner}</li>`;
}

function strapiBlocksToHtml(blocks: StrapiBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph": {
          const inner = (block.children as StrapiInlineNode[])
            .map(renderInlineNode)
            .join("");
          return `<p>${inner}</p>`;
        }

        case "heading": {
          const level = block.level ?? 2;
          const inner = (block.children as StrapiInlineNode[])
            .map(renderInlineNode)
            .join("");
          return `<h${level}>${inner}</h${level}>`;
        }

        case "list": {
          const tag = block.format === "ordered" ? "ol" : "ul";
          const items = (block.children as StrapiListItemNode[])
            .map(renderListItem)
            .join("");
          return `<${tag}>${items}</${tag}>`;
        }

        case "quote": {
          const inner = (block.children as StrapiInlineNode[])
            .map(renderInlineNode)
            .join("");
          return `<blockquote>${inner}</blockquote>`;
        }

        case "code": {
          const inner = (block.children as StrapiInlineNode[])
            .map(renderInlineNode)
            .join("");
          return `<pre><code>${inner}</code></pre>`;
        }

        default:
          return "";
      }
    })
    .join("\n");
}

// ─── Other Types ─────────────────────────────────────────────────────────────

interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
}

interface BlogPostFull {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  coverImage: string;
  content: string; // rendered HTML
  relatedPosts: RelatedPost[];
}

interface StrapiDetailResponse {
  data: {
    id: number;
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: StrapiImage;
    content: StrapiBlock[] | string; // Strapi v5 = blocks array; v4 = string
    related_posts?: Array<{
      id: number;
      title: string;
      slug: string;
      coverImage: StrapiImage;
    }>;
  } | null;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

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

  return `${STRAPI_BASE_URL}${url}`;
}

function normalizeDetail(raw: StrapiDetailResponse["data"]): BlogPostFull | null {
  if (!raw) return null;

  // Convert content: if it's an array of blocks, render to HTML; if already a string, use as-is
  const contentHtml = Array.isArray(raw.content)
    ? strapiBlocksToHtml(raw.content as StrapiBlock[])
    : (raw.content ?? "");

  return {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    publishedAt: new Date(raw.publishedAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    coverImage: getStrapiImageUrl(raw.coverImage),
    content: contentHtml,
    relatedPosts:
      raw.related_posts?.map((r) => ({
        id: r.id,
        title: r.title,
        slug: r.slug,
        imageUrl: getStrapiImageUrl(r.coverImage),
      })) ?? [],
  };
}

// ─── Fetch ───────────────────────────────────────────────────────────────────

async function fetchBlogPost(slug: string): Promise<StrapiDetailResponse> {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[coverImage]=true&populate[related_posts][populate]=coverImage`
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const json = await res.json();

  return {
    data: json.data?.[0] ?? null,
  };
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const json = await fetchBlogPost(slug);
        if (!cancelled) setPost(normalizeDetail(json.data));
      } catch {
        if (!cancelled) setError("Failed to load the article. Please try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // ── Loading state ──
  if (loading) {
    return (
      <div className="overflow-x-hidden">
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex justify-center items-center">
            <motion.div
              className="flex flex-col items-center gap-4 text-[#1F262B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-10 h-10 border-4 border-[#1F262B] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm tracking-widest uppercase font-medium">Loading article…</p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <div className="overflow-x-hidden">
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex justify-center items-center px-4">
            <div className="bg-white rounded-xl shadow-sm p-12 max-w-lg text-center">
              <p className="text-2xl font-semibold text-[#1F262B]">Something went wrong</p>
              <p className="text-gray-600 mt-3">{error}</p>
              <Link
                to="/blog"
                className="inline-block mt-6 px-6 py-3 rounded bg-[#1F262B] text-white font-medium hover:opacity-90 transition"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Not found state ──
  if (!post) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-[#eeeeee] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="max-w-md text-center bg-white rounded-xl shadow-sm p-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1F262B]/10">
              <RiFileSearchLine className="text-3xl text-[#1F262B]" />
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl font-semibold text-[#1F262B]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Article not found
          </motion.h1>

          <motion.p
            className="text-gray-600 mt-3"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The article you're looking for doesn't exist or may have been moved.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-block mt-6 px-6 py-3 rounded bg-[#1F262B] text-white font-medium hover:opacity-90 transition"
            >
              Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // ── Article view ──
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#eeeeee]">
        <Header />

        <motion.div
          className="py-28 pt-36 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerStagger}
        >
          {/* Title */}
          <motion.h1
            className="mk:text-[64px] sm:text-[45px] text-[24px] leading-tight font-playfair text-center max-w-[1170px] 3xl:mx-auto font-medium mb-10"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h1>

          {/* Cover Image */}
          {post.coverImage && (
            <motion.img
              src={post.coverImage}
              alt={post.title}
              className="w-[1292px] sm:h-[611px] object-cover rounded-2xl 3xl:mx-auto"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          )}

          {/* Rich Text Content */}
          <motion.div
            className="prose prose-lg max-w-[1292px] mx-auto space-y-6 sm:text-lg leading-relaxed mt-10"
            variants={containerStagger}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content, {
                  USE_PROFILES: { html: true },
                  ALLOWED_TAGS: [
                    "p", "h1", "h2", "h3", "h4", "h5", "h6",
                    "ul", "ol", "li",
                    "strong", "em", "u", "s", "code", "pre",
                    "a", "blockquote",
                  ],
                  ALLOWED_ATTR: ["href", "target", "rel"],
                }),
              }}
            />
          </motion.div>

          {/* Related / More Articles */}
          {post.relatedPosts.length > 0 && (
            <motion.div className="mt-16" variants={fadeUp}>
              <motion.p
                className="sm:text-[40px] text-2xl font-medium mb-6"
                variants={fadeUp}
              >
                More Articles
              </motion.p>

              <motion.div
                className="grid xl:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 md:gap-[41px] gap-4 mt-8"
                variants={containerStagger}
              >
                {post.relatedPosts.map((related, index) => (
                  <motion.div
                    key={related.id}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${related.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <LOT
                        imageUrl={related.imageUrl}
                        subText={related.title}
                        subTextFont="norms"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;