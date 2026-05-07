import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const steps = [
    {
        step: "1",
        title: "Initial Enquiry",
        description:
            "Reach out via website, email, or phone. We respond promptly and schedule an initial consultation.",
        icon: "📞",
    },
    {
        step: "2",
        title: "Consultation & Needs Assessment",
        description:
            "We understand your vision, preferences, and investment goals to tailor the perfect property solution.",
        icon: "📝",
    },
    {
        step: "3",
        title: "Property Presentation",
        description:
            "Explore curated properties, including Hexa Homes and Mirasol residences, through detailed presentations and site visits.",
        icon: "🏠",
    },
    {
        step: "4",
        title: "Customization & Agreement",
        description:
            "Choose finishes, layouts, and smart home options. We finalize agreements transparently and efficiently.",
        icon: "✍️",
    },
    {
        step: "5",
        title: "Handover & Aftercare",
        description:
            "Receive your property with precision and excellence. We provide aftercare support for your peace of mind.",
        icon: "🔑",
    },
];

const ProcessSection = () => {
    return (
        <div className="bg-[#eeeeee] py-24 overflow-x-hidden relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto flex flex-col lg:gap-16"
            >
                <motion.h2
                    variants={fadeUp}
                    className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] text-center mb-14"
                >
                    How We Work
                </motion.h2>

                <div className="relative lg:flex hidden flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.step}
                            variants={fadeUp}
                            className="flex flex-col items-center text-center lg:w-1/5 relative"
                        >
                            {/* Step Circle */}
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1F262B] text-white font-bold text-2xl mb-4">
                                {step.icon}
                            </div>

                            {/* Step Info */}
                            <h4 className="text-[#1F262B] font-semibold sm:text-lg text-base mb-2">
                                {step.title}
                            </h4>
                            <p className="text-[#36454F] sm:text-sm text-xs">{step.description}</p>

                            {/* Arrow Connector */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 right-[-50%] w-[100%] h-1">
                                    <div className="w-full h-1 bg-[#1F262B] rounded-full" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Step Arrows */}
                <div className="lg:hidden mt-10 flex flex-col items-center gap-8">
                    {steps.map((step, idx) => (
                        <div key={step.step} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1F262B] text-white font-bold text-xl mb-4">
                                {step.icon}
                            </div>
                            <h4 className="text-[#1F262B] font-semibold sm:text-lg text-base mb-2">
                                {step.title}
                            </h4>
                            <p className="text-[#36454F] sm:text-sm text-xs">{step.description}</p>
                            {idx < steps.length - 1 && (
                                <div className="w-1 h-6 bg-[#1F262B] my-2 rounded-full" />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ProcessSection;