
import { motion, type Variants } from "framer-motion";

interface OurStoryGridProps {
    image?: string;
    title?: string;
    text?: string;
}

const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

const textVariant: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const OurStoryGrid = ({ image, title, text }: OurStoryGridProps) => {

    const location = window.location.pathname

    return (
        <motion.div
            className="flex rx:flex-row flex-col rx:text-start text-center items-center justify-between gap-5 mt-20 text-[#1F262B]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Image */}
            <motion.img
                src={image}
                alt=""
                variants={imageVariant}
                className={`${location === "/blog" && "3xl:w-[548px]"
                    } rx:w-[548px] w-full rounded-[4px]`}
            />

            {/* Text */}
            <motion.div
                variants={textVariant}
                className={`sm:space-y-7 space-y-4 rx:max-w-[678px] ${location === "/blog" && "3xl:max-w-[527px]"
                    }`}
            >
                <p
                    className={`${location === "/blog"
                            ? "mk:text-[40px] text-[24px] font-medium"
                            : "font-playfair mk:text-[64px] sm:text-[45px] text-[32px] font-semibold"
                        }`}
                >
                    {title}
                </p>

                <p
                    className={`${location === "/blog"
                            ? "text-xl font-medium"
                            : "mh:text-2xl font-normal leading-relaxed"
                        }`}
                >
                    {text}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default OurStoryGrid;