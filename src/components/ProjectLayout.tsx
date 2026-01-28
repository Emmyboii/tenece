import { useNavigate } from "react-router-dom";
import { motion, easeOut, type Variants } from "framer-motion";

interface ProjectLayoutProps {
    text?: string;
    subText?: string;
    cta?: string;
    ctaLink?: string;
    smallImg?: string;
    largeImg?: string;
    reverse?: boolean;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const fadeSlide = (reverse?: boolean) => ({
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: easeOut }
    },
});

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};


const ProjectLayout = ({ text, subText, cta, ctaLink, smallImg, largeImg, reverse }: ProjectLayoutProps) => {

    const navigate = useNavigate()

    return (
        <div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={"flex lg:flex-row flex-col gap-4 justify-between lg:items-start items-center" + (reverse ? " flex-row-reverse" : "")}
            >
                <motion.div variants={fadeSlide(reverse)} className="lg:text-start text-center mb-2 lg:mb-0 lg:w-[1000px]">
                    <h2 className="mk:text-[64px] sm:text-[45px] text-[32px] font-playfair font-medium text-[#1F262B]">
                        {text}
                    </h2>
                    <p className="sm:text-base text-sm font-medium text-[#1F262B] mt-4">
                        {subText}
                    </p>
                    <motion.button
                        onClick={() => {
                            if (ctaLink) {
                                navigate(ctaLink)
                            }
                            window.scrollTo(0, 0)
                        }}
                        type="submit"
                        variants={fadeIn}
                        className="bg-black sm:text-base text-sm text-white py-4 px-5 rounded-full mt-4 hover:bg-black/95"
                    >
                        {cta || "EXPLORE OUR PROJECTS"}
                    </motion.button>
                </motion.div>

                <motion.div variants={scaleIn}>
                    <img src={smallImg} className="w-scree" alt={text} />
                </motion.div>
            </motion.div>
            <motion.div variants={fadeIn} className="mt-8">
                <img src={largeImg} alt={text} className="w-full" />
            </motion.div>
        </div>
    )
}

export default ProjectLayout