import { useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LOT from "../components/LOT"
import OurStoryGrid from "../components/OurStoryGrid"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine, RiFileSearchLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { motion, type Variants } from "framer-motion";
import blogImg from "../assets/blogImg.svg";
import blogImg2 from "../assets/blogImg2.svg";
import blogImg3 from "../assets/blogImg3.png";
import blogImg4 from "../assets/blogImg4.png";
import blogImg5 from "../assets/blogImg5.svg";
import blogImg6 from "../assets/blogImg6.svg";
import blogImg7 from "../assets/blogImg7.svg";
import blogHero from "../assets/blogHero.png";

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
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const Blog = () => {

    const blogRef = useRef<HTMLDivElement>(null);

    const blogPosts = [
        { image: blogImg, title: "Luxury Real Estate vs. Traditional Investments: Where Should You Put Your Money?", date: "25 Jan 2025", slug: "luxury-real-estate-vs-traditional-investments" },
        { imageUrl: blogImg2, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg3, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg4, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg5, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg6, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg7, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg5, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg3, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg2, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg4, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg6, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg2, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
        { imageUrl: blogImg2, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments", variant: "standard" },
    ];

    const hasArticles = blogPosts.length > 0;
    const latestPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);



    const ITEMS_PER_PAGE = 12;
    const MAX_VISIBLE_PAGES = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = otherPosts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Slice data for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = otherPosts.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    useEffect(() => {
        if (currentPage > 1) {
            blogRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [currentPage]);


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


    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage={blogHero}
                heroText="Inside the World of Prestige, Design, and Smart Living"
                subText="Discover trends, insights, and inspiration across architecture, smart homes, and luxury investments — curated for the modern elite."
            />

            <div className="bg-[#eeeeee] text-[#1F262B]">
                {!hasArticles ? (
                    <motion.div
                        className="sm:py-20 py-10 flex justify-center"
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
                                We’re currently curating insightful stories on architecture,
                                smart living, and luxury investments. Check back soon.
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
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

                            <Link onClick={() => window.scrollTo(0, 0)} to={`/blog/${latestPost.slug}`}>
                                <OurStoryGrid
                                    image={latestPost.image}
                                    title={latestPost.title}
                                    text="25 Jan 2025"
                                />
                            </Link>

                            <motion.div
                                ref={blogRef}
                                className="mt-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={containerStagger}
                            >
                                <motion.p
                                    className="mk:text-[40px] text-[29px] font-medium mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                                >
                                    Featured Article Spotlight
                                </motion.p>

                                <div className="grid xl:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 md:gap-[41px] gap-4 mt-8">
                                    {currentItems.map((post, index) => (
                                        <motion.div key={index} custom={index} variants={fadeUp}>
                                            <Link onClick={() => window.scrollTo(0, 0)} to={`/blog/${post.slug}`} className="border-b sd:border-0 border-black pb-10">
                                                <LOT
                                                    imageUrl={post.imageUrl}
                                                    subText={post.subText}
                                                    subTextFont="norms"
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <motion.div
                                    className="flex justify-center items-center gap-3 mt-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                >
                                    {/* Prev */}
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
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

                                    {/* Next */}
                                    <button
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                        className="px-4 py-3 flex items-center gap-2.5 disabled:bg-[#969A9EFE] disabled:cursor-not-allowed text-white rounded bg-[#1F262B]"
                                    >
                                        Next
                                        <RiArrowRightDoubleLine className="size-5" />
                                    </button>
                                </motion.div>

                            </motion.div>

                        </motion.div>
                    </>
                )}
            </div>

            <Footer />
        </div >
    )
}

export default Blog