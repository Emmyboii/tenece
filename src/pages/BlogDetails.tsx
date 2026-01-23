import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../components/dummyBlogData";
import LOT from "../components/LOT";
import { RiFileSearchLine } from "react-icons/ri";

const BlogDetails = () => {

    const { slug } = useParams();

    const post = BLOG_POSTS.find((p) => p.slug === slug);

    const blogPosts = [
        { imageUrl: "/src/assets/blogImg2.svg", subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
        { imageUrl: "/src/assets/blogImg3.svg", subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
        { imageUrl: "/src/assets/blogImg4.svg", subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
        { imageUrl: "/src/assets/blogImg5.svg", subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
    ]

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#eeeeee] px-4">
                <div className="max-w-md text-center bg-white rounded-xl shadow-sm p-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1F262B]/10">
                            <RiFileSearchLine className="text-3xl text-[#1F262B]" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold text-[#1F262B]">
                        Article not found
                    </h1>

                    <p className="text-gray-600 mt-3">
                        The article you’re looking for doesn’t exist or may have been moved.
                    </p>

                    <Link
                        to="/blog"
                        className="inline-block mt-6 px-6 py-3 rounded bg-[#1F262B] text-white font-medium hover:opacity-90 transition"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="overflow-x-hidden">
            <div className="bg-[#eeeeee]">
                <Header />

                <div className="px- py-28 pt-36 max-w-[1512px] mx-auto">
                    <h1 className="text-[64px] leading-tight font-playfair text-center max-w-[1170px] mx-auto font-medium mb-10">
                        {post.title}
                    </h1>
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-[1292px] h-[611px] object-cover rounded-2xl mx-auto"
                    />

                    <div className="space-y-6 text-lg leading-relaxed mt-10">
                        {post.content.map((block, index) => {
                            switch (block.type) {
                                case "heading":
                                    return (
                                        <h2
                                            key={index}
                                            className="text-2xl font-semibold mt-10"
                                        >
                                            {block.text}
                                        </h2>
                                    );

                                case "paragraph":
                                    return (
                                        <p
                                            key={index}
                                            className="text-lg leading-relaxed text-gray-700"
                                        >
                                            {block.text}
                                        </p>
                                    );

                                case "list":
                                    return block.ordered ? (
                                        <ol
                                            key={index}
                                            className="list-decimal pl-6 space-y-2 text-lg text-gray-700"
                                        >
                                            {block.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <ul
                                            key={index}
                                            className="list-disc pl-6 space-y-2 text-lg text-gray-700"
                                        >
                                            {block.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </div>

                    <div className="mt-16">
                        <p className="text-[40px] font-medium">More Articles</p>

                        <div className="grid grid-cols-4 gap-[41px] mt-8">
                            {blogPosts.map((lot, index) => (
                                <Link to={`/blog/${lot.slug}`} key={index}>
                                    <LOT
                                        imageUrl={lot.imageUrl}
                                        subText={lot.subText}
                                        subTextFont="norms"
                                    />
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BlogDetails