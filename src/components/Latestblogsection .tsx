// ─── components/LatestBlogSection.tsx ────────────────────────────────────────
// Fetches the 3 latest blog posts from Strapi and renders them on the homepage.
// If fewer than 3 posts are available, the section renders nothing at all.

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import LatestSmart from "./LatestSmart";
import { fetchLatestBlogPosts, type BlogPost } from "../lib/blogApi";

// ─── Dummy data (kept for reference / local dev) ─────────────────────────────
/*
import latest1 from "../assets/latest1.svg";
import latest2 from "../assets/latest2.svg";
import latest3 from "../assets/latest3.png";

const DUMMY_POSTS: BlogPost[] = [
  { id: 1, slug: "smart-homes-lagos",   imageUrl: latest1, title: "Smart Homes in Lagos: How Innovation is Elevating Luxury Living Across Africa's Metropolis",         date: "25 Jan 2025" },
  { id: 2, slug: "hexa-mirasol",        imageUrl: latest2, title: "Hexa Homes & The Mirasol: Blending Architecture, Technology, and Timeless Elegance",                date: "20 Jan 2025" },
  { id: 3, slug: "sustainable-luxury",  imageUrl: latest3, title: "Sustainable Luxury: How Tenece Real Estate Redefines Smart, Energy-Efficient Residences",           date: "15 Jan 2025" },
];
*/

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

const MINIMUM_POSTS = 3;

const LatestBlogSection = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [ready, setReady] = useState(false); // only show once fetch settles

    useEffect(() => {
        let cancelled = false;

        fetchLatestBlogPosts(MINIMUM_POSTS)
            .then((data) => {
                if (!cancelled) setPosts(data);
            })
            .catch(() => {
                // Silently fail — section simply stays hidden
            })
            .finally(() => {
                if (!cancelled) setReady(true);
            });

        return () => { cancelled = true; };
    }, []);

    // Hide entirely while loading or when there aren't enough posts
    if (!ready || posts.length < MINIMUM_POSTS) return null;

    return (
        <div className="bg-[#ffffff]">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
            >
                {/* Heading */}
                <div className="max-w-[630px] text-center mx-auto">
                    <motion.h1
                        variants={fadeUp}
                        className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-4 text-center"
                    >
                        Latest in Smart Luxury Living
                    </motion.h1>
                    <motion.p variants={fadeUp} className="sm:text-base text-sm">
                        Discover industry insights, architecture inspiration, and smart living
                        breakthroughs — curated for future-focused homeowners and investors.
                    </motion.p>
                </div>

                {/* Posts grid — links to individual blog detail pages */}
                <div className="grid mc:grid-cols-2 grid-cols-1 gap-x-4">
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <LatestSmart
                                image={post.imageUrl}
                                text={post.title}
                                index={index}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    to="/blog"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-[#1F262B] sm:w-[240px] w-fit text-white py-4 px-6 sm:text-xl text-[17px] rounded-full mt-10 hover:bg-black/95 flex items-center justify-center mx-auto"
                >
                    Discover More
                </Link>
            </motion.div>
        </div>
    );
};

export default LatestBlogSection;