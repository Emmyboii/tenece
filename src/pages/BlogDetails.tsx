import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import LOT from "../components/LOT";
import { RiFileSearchLine } from "react-icons/ri";

// ─── Strapi Types ────────────────────────────────────────────────────────────

interface StrapiImageFormat {
  url: string;
}

interface StrapiImage {
  data: {
    attributes: {
      url: string;
      formats?: {
        large?: StrapiImageFormat;
        medium?: StrapiImageFormat;
      };
    };
  } | null;
}

type ContentBlockType = "heading" | "paragraph" | "list";

interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  items?: string[];
  ordered?: boolean;
}

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
  content: ContentBlock[];
  relatedPosts: RelatedPost[];
}

interface StrapiDetailResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      slug: string;
      publishedAt: string;
      coverImage: StrapiImage;
      content: ContentBlock[];           // rich-text stored as structured blocks
      related_posts?: {
        data: Array<{
          id: number;
          attributes: {
            title: string;
            slug: string;
            coverImage: StrapiImage;
          };
        }>;
      };
    };
  } | null;
}

// ─── Config ──────────────────────────────────────────────────────────────────

// TODO: move to .env  →  VITE_STRAPI_URL=http://localhost:1337
// const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getStrapiImageUrl(image: StrapiImage): string {
  if (!image?.data) return "";
  const attrs = image.data.attributes;
  return attrs.formats?.large?.url ?? attrs.formats?.medium?.url ?? attrs.url ?? "";
}

function normalizeDetail(raw: StrapiDetailResponse["data"]): BlogPostFull | null {
  if (!raw) return null;
  const a = raw.attributes;
  return {
    id: raw.id,
    title: a.title,
    slug: a.slug,
    publishedAt: a.publishedAt,
    coverImage: getStrapiImageUrl(a.coverImage),
    content: a.content ?? [],
    relatedPosts:
      a.related_posts?.data.map((r) => ({
        id: r.id,
        title: r.attributes.title,
        slug: r.attributes.slug,
        imageUrl: getStrapiImageUrl(r.attributes.coverImage),
      })) ?? [],
  };
}

// ─── Simulated fetch (replace with real call once Strapi is live) ─────────────

async function fetchBlogPost(slug: string): Promise<StrapiDetailResponse> {
  void slug; // used by the real Strapi call below — remove this line when you uncomment it
  /**
   * REAL Strapi call (uncomment when your Strapi instance is running):
   *
   * const res = await fetch(
   *   `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}&populate[coverImage]=true&populate[related_posts][populate]=coverImage`
   * );
   * if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
   * const json = await res.json();
   * // Strapi returns an array for filter queries; grab first match
   * return { data: json.data?.[0] ?? null };
   */

  // ── Simulated endpoint (returns null → triggers "not found" UI) ──
  await new Promise((r) => setTimeout(r, 800));
  return { data: null };
}

// ─── Dummy data (kept for reference / local dev) ─────────────────────────────

/*
import blogImg  from "../assets/blogImg.svg";
import blogImg2 from "../assets/blogImg2.svg";
import blogImg3 from "../assets/blogImg3.png";
import blogImg4 from "../assets/blogImg4.png";
import blogImg5 from "../assets/blogImg5.svg";

// Previously imported from ../components/dummyBlogData:
const DUMMY_POST: BlogPostFull = {
  id: 1,
  title: "Luxury Real Estate vs. Traditional Investments: Where Should You Put Your Money?",
  slug: "luxury-real-estate-vs-traditional-investments",
  publishedAt: "2025-01-25T00:00:00.000Z",
  coverImage: blogImg,
  content: [
    { type: "paragraph", text: "When it comes to building long-term wealth…" },
    { type: "heading",   text: "Why Luxury Real Estate?" },
    { type: "paragraph", text: "Unlike stocks or bonds, real estate is a tangible asset…" },
    {
      type: "list",
      ordered: false,
      items: ["Consistent appreciation", "Rental yield potential", "Hedge against inflation"],
    },
  ],
  relatedPosts: [
    { id: 2, title: "Design Without Compromise…", slug: "design-without-compromise",   imageUrl: blogImg2 },
    { id: 3, title: "Design Without Compromise…", slug: "design-without-compromise-2", imageUrl: blogImg3 },
    { id: 4, title: "Design Without Compromise…", slug: "design-without-compromise-3", imageUrl: blogImg4 },
    { id: 5, title: "Design Without Compromise…", slug: "design-without-compromise-4", imageUrl: blogImg5 },
  ],
};
*/

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
    if (!slug) return;

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
    return () => { cancelled = true; };
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
              <Link to="/blog" className="inline-block mt-6 px-6 py-3 rounded bg-[#1F262B] text-white font-medium hover:opacity-90 transition">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Not found state (post is null after successful fetch) ──
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

          {/* Content Blocks */}
          <motion.div
            className="space-y-6 sm:text-lg leading-relaxed mt-10"
            variants={containerStagger}
          >
            {post.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <motion.h2
                      key={index}
                      className="sm:text-2xl text-xl font-semibold mt-10"
                      variants={fadeUp}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {block.text}
                    </motion.h2>
                  );
                case "paragraph":
                  return (
                    <motion.p
                      key={index}
                      className="sm:text-lg leading-relaxed text-gray-700"
                      variants={fadeUp}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {block.text}
                    </motion.p>
                  );
                case "list":
                  return block.ordered ? (
                    <motion.ol
                      key={index}
                      className="list-decimal pl-6 space-y-2 sm:text-lg text-gray-700"
                      variants={fadeUp}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {block.items?.map((item, i) => <li key={i}>{item}</li>)}
                    </motion.ol>
                  ) : (
                    <motion.ul
                      key={index}
                      className="list-disc pl-6 space-y-2 sm:text-lg text-gray-700"
                      variants={fadeUp}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {block.items?.map((item, i) => <li key={i}>{item}</li>)}
                    </motion.ul>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>

          {/* Related / More Articles */}
          {post.relatedPosts.length > 0 && (
            <motion.div className="mt-16" variants={fadeUp}>
              <motion.p className="sm:text-[40px] text-2xl font-medium mb-6" variants={fadeUp}>
                More Articles
              </motion.p>

              <motion.div
                className="grid xl:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 md:gap-[41px] gap-4 mt-8"
                variants={containerStagger}
              >
                {post.relatedPosts.map((related, index) => (
                  <motion.div key={related.id} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <Link to={`/blog/${related.slug}`} onClick={() => window.scrollTo(0, 0)}>
                      <LOT imageUrl={related.imageUrl} subText={related.title} subTextFont="norms" />
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