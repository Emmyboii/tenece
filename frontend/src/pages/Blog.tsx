import { useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LOT from "../components/LOT"
import OurStoryGrid from "../components/OurStoryGrid"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine, RiFileSearchLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { motion, type Variants } from "framer-motion";
import blogHero from "../assets/blogHero.png";
import { fetchBlogPosts, normalizePosts, type BlogPost } from "../lib/blogApi";


// ─── Dummy data (kept for reference / local dev) ─────────────────────────────

/*
import blogImg  from "../assets/blogImg.svg";
import blogImg2 from "../assets/blogImg2.svg";
import blogImg3 from "../assets/blogImg3.png";
import blogImg4 from "../assets/blogImg4.png";
import blogImg5 from "../assets/blogImg5.svg";
import blogImg6 from "../assets/blogImg6.svg";
import blogImg7 from "../assets/blogImg7.svg";

const DUMMY_POSTS: BlogPost[] = [
  { id: 1,  imageUrl: blogImg,  title: "Luxury Real Estate vs. Traditional Investments: Where Should You Put Your Money?", slug: "luxury-real-estate-vs-traditional-investments", date: "25 Jan 2025" },
  { id: 2,  imageUrl: blogImg2, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise", date: "20 Jan 2025" },
  { id: 3,  imageUrl: blogImg3, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-2", date: "15 Jan 2025" },
  { id: 4,  imageUrl: blogImg4, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-3", date: "10 Jan 2025" },
  { id: 5,  imageUrl: blogImg5, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-4", date: "05 Jan 2025" },
  { id: 6,  imageUrl: blogImg6, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-5", date: "01 Jan 2025" },
  { id: 7,  imageUrl: blogImg7, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-6", date: "28 Dec 2024" },
  { id: 8,  imageUrl: blogImg5, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-7", date: "22 Dec 2024" },
  { id: 9,  imageUrl: blogImg3, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-8", date: "18 Dec 2024" },
  { id: 10, imageUrl: blogImg2, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-9", date: "12 Dec 2024" },
  { id: 11, imageUrl: blogImg4, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-10", date: "08 Dec 2024" },
  { id: 12, imageUrl: blogImg6, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-11", date: "01 Dec 2024" },
  { id: 13, imageUrl: blogImg2, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-12", date: "25 Nov 2024" },
  { id: 14, imageUrl: blogImg2, title: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "design-without-compromise-13", date: "20 Nov 2024" },
];
*/

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
    }),
};

const containerStagger: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE = 12;
const MAX_VISIBLE_PAGES = 4;

const Blog = () => {
    const blogRef = useRef<HTMLDivElement>(null);

    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                setLoading(true);
                setError(null);

                const json = await fetchBlogPosts(currentPage, ITEMS_PER_PAGE);

                if (!cancelled) {
                    setPosts(normalizePosts(json.data));
                    setTotalPages(json.meta.pagination.pageCount);
                }

            } catch (err) {
                console.error("BLOG ERROR:", err);

                if (!cancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to load articles. Please try again later."
                    );
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        load();
        return () => { cancelled = true; };
    }, [currentPage]); // 👈 IMPORTANT

    // ── Scroll to grid on page change ──
    useEffect(() => {
        if (currentPage > 1) {
            blogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [currentPage]);

    // ── Derived data ──
    const hasArticles = posts.length > 0;
    const latestPost = currentPage === 1 ? posts[0] : null;
    const currentItems = currentPage === 1 ? posts.slice(1) : posts;

    const getVisiblePages = () => {
        let start = Math.max(1, currentPage - 1);
        let end = start + MAX_VISIBLE_PAGES - 1;
        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const visiblePages = getVisiblePages();

    // ── Loading state ──
    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Hero
                    heroImage={blogHero}
                    heroText="Inside the World of Prestige, Design, and Smart Living"
                    subText="Discover trends, insights, and inspiration across architecture, smart homes, and luxury investments — curated for the modern elite."
                />
                <div className="bg-[#eeeeee] sm:py-20 py-10 flex justify-center items-center min-h-[40vh]">
                    <motion.div
                        className="flex flex-col items-center gap-4 text-[#1F262B]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="w-10 h-10 border-4 border-[#1F262B] border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm tracking-widest uppercase font-medium">Loading articles…</p>
                    </motion.div>
                </div>
                <Footer />
            </div>
        );
    }

    // ── Error state ──
    if (error) {
        return (
            <div className="overflow-x-hidden">
                <Hero
                    heroImage={blogHero}
                    heroText="Inside the World of Prestige, Design, and Smart Living"
                    subText="Discover trends, insights, and inspiration across architecture, smart homes, and luxury investments — curated for the modern elite."
                />
                <div className="bg-[#eeeeee] sm:py-20 py-10 px-5 flex justify-center">
                    <div className="bg-white rounded-xl shadow-sm p-12 max-w-lg text-center">
                        <p className="text-2xl font-semibold text-[#1F262B]">Something went wrong</p>
                        <p className="text-gray-600 mt-3">{error}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage={blogHero}
                heroText="Inside the World of Prestige, Design, and Smart Living"
                subText="Discover trends, insights, and inspiration across architecture, smart homes, and luxury investments — curated for the modern elite."
            />

            <div className="bg-[#eeeeee] text-[#1F262B]">
                {!hasArticles ? (
                    // ── Empty state (shown while Strapi has no data / endpoint not live) ──
                    <motion.div
                        className="sm:py-20 py-10 px-5 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="bg-white rounded-xl shadow-sm p-12 max-w-lg text-center">
                            <motion.div
                                className="flex justify-center mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1F262B]/10">
                                    <RiFileSearchLine className="text-3xl text-[#1F262B]" />
                                </div>
                            </motion.div>

                            <motion.h2
                                className="text-2xl font-semibold text-[#1F262B]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                            >
                                No articles yet
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mt-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                            >
                                We're currently curating insightful stories on architecture,
                                smart living, and luxury investments. Check back soon.
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    // ── Articles grid ──
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.04 }}
                        variants={fadeUp}
                        className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                    >
                        <motion.p
                            className="text-[40px] font-medium mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Latest Article
                        </motion.p>

                        {latestPost && (
                            <Link onClick={() => window.scrollTo(0, 0)} to={`/blog/${latestPost.slug}`}>
                                <OurStoryGrid
                                    image={latestPost.imageUrl}
                                    title={latestPost.title}
                                    text={latestPost.date}
                                    variant="blog"
                                />
                            </Link>
                        )}

                        {posts.length > 1 && (
                            <motion.div
                                ref={blogRef}
                                className="mt-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.05 }}
                                variants={containerStagger}
                            >
                                <motion.p
                                    className="mk:text-[40px] sm:text-start text-center text-[29px] font-medium mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                                >
                                    Featured Article Spotlight
                                </motion.p>

                                <div className="grid xl:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 md:gap-[41px] gap-4 mt-8">
                                    {currentItems.map((post, index) => (
                                        <motion.div key={post.id} custom={index} variants={fadeUp}>
                                            <Link
                                                onClick={() => window.scrollTo(0, 0)}
                                                to={`/blog/${post.slug}`}
                                                className="border-b sd:border-0 border-black pb-10"
                                            >
                                                <LOT
                                                    imageUrl={post.imageUrl}
                                                    subText={post.title}
                                                    subTextFont="norms"
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination — only shown when there are multiple pages */}
                                {totalPages > 1 && (
                                    <motion.div
                                        className="flex justify-center items-center gap-3 mt-16"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.7 }}
                                    >
                                        <button
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                            className="px-4 py-3 flex items-center gap-2.5 disabled:bg-[#969A9EFE] disabled:cursor-not-allowed text-white rounded bg-[#1F262B]"
                                        >
                                            <RiArrowLeftDoubleLine className="size-5" />
                                            Previous
                                        </button>

                                        {visiblePages.map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`py-3 w-[50px] px-4 flex items-center font-semibold justify-center
                                                ${page === currentPage
                                                        ? "bg-[#FFFFFF] text-[#3B3B3B] rounded"
                                                        : "bg-[#E4E4ED] text-[#7A7575]"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                            className="px-4 py-3 flex items-center gap-2.5 disabled:bg-[#969A9EFE] disabled:cursor-not-allowed text-white rounded bg-[#1F262B]"
                                        >
                                            Next
                                            <RiArrowRightDoubleLine className="size-5" />
                                        </button>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Blog;