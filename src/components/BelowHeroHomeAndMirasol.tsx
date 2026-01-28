import { motion, type Variants } from "framer-motion";

interface BelowHeroHomeAndMirasolProps {
    text?: string;
    text2?: string;
    image?: string;
    subText?: string
    textColor?: string
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};


const BelowHeroHomeAndMirasol = ({ text, text2, image, subText, textColor }: BelowHeroHomeAndMirasolProps) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`sm:py-20 py-10 flex lg:flex-row flex-col justify-between 
                lg:items-start items-center gap-8 
                3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto 
                ${textColor === "black" ? "text-black" : "text-white"}`
            }
        >
            <motion.div variants={fadeUp}>
                <h1 className="xl:text-[40px] sm:text-[31px] text-[26px] font-playfair font-medium lg:max-w-[290px] lg:text-start text-center xl:mt-[117px] lg:mt-[87px]">
                    {text}
                </h1>

                <h1 className="xl:text-[40px] sm:text-[31px] text-[26px] font-playfair font-medium lg:max-w-[380px] lg:text-start text-center lg:mt-[6px]">
                    {text2}
                </h1>
            </motion.div>
            <motion.img
                variants={imageVariant}
                src={image}
                alt="future"
                className="xl:w-[471px] w-[310px]"
            />
            <motion.h1
                variants={fadeUp}
                className="sm:text-base text-sm font-medium lg:max-w-[370px] lg:text-start text-center xl:mt-[261px] lg:mt-[200px]"
            >
                {subText}
            </motion.h1>
        </motion.div>
    )
}

export default BelowHeroHomeAndMirasol