import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface HISProps {
    icon?: string;
    title?: string;
    description?: string;
    index: number;
    normal?: boolean;
}

const HIS = ({ icon, title, description, index, normal }: HISProps) => {
    const [smallScreen, setSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setSmallScreen(window.innerWidth < 1024);

        handleResize(); // initialize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const layoutMap: Record<number, string> = {
        0: "col-start-1 col-span-4 row-start-1",
        1: "col-start-5 col-span-4 row-start-1",
        2: "col-start-9 col-span-4 row-start-1",
        3: "col-start-13 col-span-4 row-start-1 row-span-2",
        4: "col-start-1 col-span-4 row-start-2",
        5: "col-start-5 col-span-4 row-start-2",
        6: "col-start-9 col-span-4 row-start-2",
    };

    // Common motion variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // smooth cubic-bezier
        },
    };

    const baseClasses = "flex flex-col items-center text-center justify-center rounded-md gap-4 bg-white/40 backdrop-blur-md";

    // normal layout
    if (normal) {
        return (
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } }}
                className={`${baseClasses} p-4 2xl:w-[360px] h-[280px]`}
            >
                <img src={icon} alt={title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-medium text-black">{title}</h3>
                <p className="text-base text-black font-normal">{description}</p>
            </motion.div>
        );
    }
    // small screen layout
    else if (!normal && smallScreen) {
        return (
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } }}
                className={`${baseClasses} p-4 h-[260px]`}
            >
                <img src={icon} alt={title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-medium text-black">{title}</h3>
                <p className="text-base text-black font-normal">{description}</p>
            </motion.div>
        );
    }
    // desktop grid layout
    else {
        return (
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } }}
                className={`${baseClasses} rx:px-20 px-11 rx:sm:py-20 py-10 ${layoutMap[index]}`}
            >
                <img src={icon} alt={title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-medium text-black">{title}</h3>
                <p className="text-base text-black font-normal">{description}</p>
            </motion.div>
        );
    }
};

export default HIS;
