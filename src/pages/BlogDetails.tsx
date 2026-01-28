import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../components/dummyBlogData";
import LOT from "../components/LOT";
import { RiFileSearchLine } from "react-icons/ri";
import blogImg2 from "../assets/blogImg2.svg";
import blogImg3 from "../assets/blogImg3.png";
import blogImg4 from "../assets/blogImg4.png";
import blogImg5 from "../assets/blogImg5.svg";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const blogPosts = [
    { imageUrl: blogImg2, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
    { imageUrl: blogImg3, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
    { imageUrl: blogImg4, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
    { imageUrl: blogImg5, subText: "Design Without Compromise: The Architectural Philosophy Behind Tenece Residences", slug: "luxury-real-estate-vs-traditional-investments" },
  ];

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  if (!post) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-[#eeeeee] px-4"
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
            The article you’re looking for doesn’t exist or may have been moved.
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
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="w-[1292px] sm:h-[611px] object-cover rounded-2xl 3xl:mx-auto"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

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
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ol>
                  ) : (
                    <motion.ul
                      key={index}
                      className="list-disc pl-6 space-y-2 sm:text-lg text-gray-700"
                      variants={fadeUp}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>

          {/* More Articles */}
          <motion.div className="mt-16" variants={fadeUp}>
            <motion.p className="sm:text-[40px] text-2xl font-medium mb-6" variants={fadeUp}>
              More Articles
            </motion.p>

            <motion.div
              className="grid xl:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 md:gap-[41px] gap-4 mt-8"
              variants={containerStagger}
            >
              {blogPosts.map((lot, index) => (
                <motion.div key={index} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Link to={`/blog/${lot.slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <LOT imageUrl={lot.imageUrl} subText={lot.subText} subTextFont="norms" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
