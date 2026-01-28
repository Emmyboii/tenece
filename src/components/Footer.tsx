import { FaFacebookSquare, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

const Footer = () => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    };

    const iconVariants: Variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.2 },
    };

    const columnVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // animate children one after another
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
        },
    };

    return (
        <motion.div
            className="bg-[#1F262B] text-white sm:py-20 py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <motion.div
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto mf:flex grid md:grid-cols-2 md:justify-between justify-center md:items-start items-center mf:gap-4 gap-10 gap-y-14" variants={containerVariants}
            >
                {/* Column 1 */}
                <motion.div
                    className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.h1 className="mh:text-2xl text-xl font-medium md:text-start text-center" variants={itemVariants}>
                        TENECE REAL ESTATE
                    </motion.h1>
                    <motion.a href="/" className="mh:text-xl font-normal" variants={itemVariants}>Home</motion.a>
                    <motion.a href="/about" className="mh:text-xl font-normal" variants={itemVariants}>About Us</motion.a>
                    <motion.a href="/blog" className="mh:text-xl font-normal" variants={itemVariants}>Blog</motion.a>
                    <motion.a href="/contact" className="mh:text-xl font-normal" variants={itemVariants}>Contact Us</motion.a>
                </motion.div>

                {/* Column 2 */}
                <motion.div
                    className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.h1 variants={itemVariants} className="mh:text-2xl text-xl font-medium">PROJECTS</motion.h1>
                    <motion.a href="/projects/mirasol" className="mh:text-xl font-normal" variants={itemVariants}>The Mirasol</motion.a>
                    <motion.a href="/projects/hexahomes" className="mh:text-xl font-normal" variants={itemVariants}>Hexa Homes</motion.a>
                    <motion.a href="/" className="mh:text-xl font-normal invisible" variants={itemVariants}>Gallery</motion.a>

                    {/* Social Icons */}
                    <motion.div className="flex items-center gap-4" variants={sectionVariants}>
                        <motion.a
                            href="https://instagram.com"
                            title="instagram"
                            target="_blank"
                            rel="noopener"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaInstagram className="text-white size-8" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            title="linkedin"
                            target="_blank"
                            rel="noopener"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaLinkedin className="text-white size-8" />
                        </motion.a>
                        <motion.a
                            href="https://facebook.com"
                            title="facebook"
                            target="_blank"
                            rel="noopener"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaFacebookSquare className="text-white size-8" />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com"
                            title="twitter"
                            target="_blank"
                            rel="noopener"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <FaSquareXTwitter className="text-white size-8" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Column 3 */}
                <motion.div
                    className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center"
                    variants={columnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.h1 variants={itemVariants} className="mh:text-2xl text-xl font-medium">SUBSCRIBE</motion.h1>
                    <motion.p variants={itemVariants} className="mh:text-xl font-normal md:text-start text-center">
                        Join our newsletter to stay up to date on exclusive living
                    </motion.p>

                    <motion.input
                        type="text"
                        className="bg-white w-full rounded-xl py-5 px-4 mh:mt-4"
                        title="newsletter"
                        placeholder="Enter your Email Address"
                        variants={sectionVariants}
                    />

                    <motion.button
                        type="submit"
                        className="bg-white text-black px-5 py-4 rounded-full hover:bg-white/95 border border-white lg:w-[176px] w-[135px] mh:mt-6"
                        variants={sectionVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Subscribe
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Footer copyright */}
            <motion.div
                className="flex items-center text-center justify-center sm:text-xl text-[17px] gap-3 mt-10"
                variants={sectionVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.6 } }}
            >
                <FaRegCopyright />
                <p>{`2025 Tenece Real Estate. All rights reserved`}</p>
                {/* <p>{`${new Date().getFullYear()} Tenece Real Estate. All rights reserved`}</p> */}
            </motion.div>
        </motion.div>
    );
};

export default Footer;
