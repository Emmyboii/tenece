import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface LatestSmartProps {
    image?: string;
    text?: string;
    index: number
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
        },
    },
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } },
};

const LatestSmart = ({ image, text, index }: LatestSmartProps) => {

    const [smallScreen, setSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        // guard: only run in browser
        if (typeof window === "undefined") {
            return;
        }

        const handleResize = () => {
            const isSmall = window.innerWidth < 900;
            setSmallScreen(isSmall);
        };

        // run once to initialize
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const layoutMap: Record<number, string> = {
        0: "col-start-1 row-start-1",
        1: "col-start-2 row-start-1",
        2: "col-start-1 col-span-2 row-start-2",
    }

    const heightClass = index === 2 ? "h-[600px]" : "h-[500px]"

    const lastItem = index === 2


    if (smallScreen) {
        return (
            <motion.div
                className={`relative mc:mt-20 mt-5 h-[400px] object-cover`}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-[#244975]" />

                <motion.p
                    className={`absolute bottom-6 left-6 right-6 text-white font-medium ${lastItem ? "max-w-[500px]" : "max-w-[450px]"}`}
                    variants={textVariants}
                >
                    {text}
                </motion.p>
            </motion.div>
        )
    }

    return (
        <motion.div
            className={`relative mt-20 ${heightClass} ${layoutMap[index]}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-[#244975]" />

            <motion.p
                className={`absolute bottom-6 left-6 right-6 text-white font-medium ${lastItem ? "max-w-[500px]" : "max-w-[450px]"}`}
                variants={textVariants}
            >
                {text}
            </motion.p>
        </motion.div>
    )
}

export default LatestSmart