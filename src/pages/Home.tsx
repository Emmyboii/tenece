import Hero from "../components/Hero"
import Future from "../assets/Future.png";
import HomeHero from "../assets/HomeHero.png";
import Legacy1 from "../assets/Legacy1.png";
import Legacy2 from "../assets/Legacy2.png";
import Legacy3 from "../assets/Legacy3.png";
import Legacy4 from "../assets/Legacy4.png";
import capa1 from "../assets/capa1.svg";
import capa2 from "../assets/capa2.svg";
import capa3 from "../assets/capa3.png";
import kitchen from "../assets/kitchen.svg";
import luxury1 from "../assets/luxury1.svg";
import luxury2 from "../assets/luxury2.svg";
import LOT from "../components/LOT";
import MirasolLayout from "../components/MirasolLayout";
import HexaHomesLayout from "../components/HexaHomesLayout";
import HIS from "../components/HIS";
import LatestSmart from "../components/LatestSmart";
import ContactLayout from "../components/ContactLayout";
import Footer from "../components/Footer";
import BelowHeroHomeAndMirasol from "../components/BelowHeroHomeAndMirasol";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import cac from "../assets/cac.svg";
import gca from "../assets/gca.svg";
import rta from "../assets/rta.svg";
import ta from "../assets/ta.svg";
import eec from "../assets/eec.svg";
import sgm from "../assets/sgm.svg";
import val from "../assets/val.svg";
import latest1 from "../assets/latest1.svg";
import latest2 from "../assets/latest2.svg";
import latest3 from "../assets/latest3.png";


const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const containerVariants2: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // stagger text and images
            delayChildren: 0.2,
        },
    },
};

const fadeUp2: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
};

const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] } },
};

// const slideInLeft: Variants = {
//     hidden: { opacity: 0, x: -80 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
// };


const Home = () => {

    const LOTData = [
        { imageUrl: Legacy1, text: "15+", subText: "Years of proven excellence in Africa's tech and real estate markets" },
        { imageUrl: Legacy2, text: "2", subText: "Flagship luxury projects - Hexa Homes & The Mirasol.", reverse: true },
        { imageUrl: Legacy3, text: "3X", subText: "Faster appreciation compared to traditional properties" },
        { imageUrl: Legacy4, text: "100%", subText: "Client satisfaction rate on private commissions", reverse: true },
    ]

    const Capabilities = [
        { imageUrl: capa1, subText: "Smart Home Engineering", center: true },
        { imageUrl: capa2, subText: "Architectural Development", reverse: true, center: true },
        { imageUrl: capa3, subText: "Investor Relations", center: true },
    ]

    const HISData = [
        { icon: cac, title: "Centralized App Control", description: "Manage lighting, climate, access, and security from one intuitive mobile dashboard." },
        { icon: gca, title: "Gate & Curtain Automation", description: "Effortless open/close of gates and drapes at scheduled times or voice command." },
        { icon: rta, title: "Real-Time Alerts", description: "Get instant updates on movement, entry, and environmental changes." },
        { icon: ta, title: "Touchless Access", description: "Unlock doors via biometric or phone proximity — no keys needed." },
        { icon: eec, title: "Energy-Efficient Comfort Zones", description: "Personalized temperature and lighting settings that save energy and enhance comfort." },
        { icon: sgm, title: "Smart Glass + Motion Sensors", description: "Glass that tints for privacy, paired with motion-activated lighting and systems." },
        { icon: val, title: "Voice Activated Living", description: "Control your environment hands-free with integrated voice assistants." },
    ];

    const LatestSmartData = [
        { image: latest1, text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
        { image: latest2, text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
        { image: latest3, text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
    ];

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage={HomeHero}
                heroText="Shaping Africa’s Most Exclusive Luxury Residences"
                subText="From client-led residences to iconic addresses like HexaHomes and The Mirasol, Tenece crafts real estate legacies powered by innovation, precision, and prestige"
            />

            <div className="bg-[#36454F]">
                <BelowHeroHomeAndMirasol
                    text="The Future of Real Estate, Built Today."
                    image={Future}
                    subText="Tenece Real Estate is redefining smart luxury living in Africa. With deep roots in technology and over a decade of trusted innovation,
                        we develop iconic residences where timeless elegance meets cutting-edge design. From bespoke homes to flagship developments, our work
                        reflects a commitment to excellence, sustainability, and enduring value."
                />
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
            >
                <motion.h1
                    variants={fadeUp}
                    className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-16 text-center"
                >
                    A Legacy of Trust. The Future of Innovation.
                </motion.h1>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="grid mf:grid-cols-4 sd:grid-cols-2 gap-[76px]"
                >
                    {LOTData.map((lot, index) => (
                        <LOT
                            key={index}
                            imageUrl={lot.imageUrl}
                            text={lot.text}
                            subText={lot.subText}
                            reverse={lot.reverse}
                            textFont="bricolage"
                            subTextFont="manrope"
                        />
                    ))}
                </motion.div>
            </motion.div>

            <div className="bg-[#C0C0C0]">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="sm:text-[40px] text-[26px] font-playfair font-medium text-[#1F262B] sm:mb-16 mb-6 text-center">
                        Our Signature Developments
                    </motion.h1>

                    <MirasolLayout />
                </motion.div>
            </div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
            >
                <HexaHomesLayout />
            </motion.div>

            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
            >
                <motion.h1
                    variants={fadeUp}
                    className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-16 text-center">
                    Capabilities That Set Us Apart
                </motion.h1>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="grid lg:grid-cols-3 sh:grid-cols-2 gap-[40px]">
                    {Capabilities.map((capability, index) => (
                        <LOT
                            key={index}
                            imageUrl={capability.imageUrl}
                            subText={capability.subText}
                            reverse={capability.reverse}
                            center={capability.center}
                            subTextFont=""
                        />
                    ))}
                </motion.div>
            </motion.div>

            <div
                className="relative mt-24 pb-20"
                style={{
                    backgroundImage: `url(${kitchen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4d4e4e] via-white/20 to-[#1F262B]" />

                {/* Content */}
                <div className="relative z-10 sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">
                    <motion.h1
                        variants={fadeUp} className="sm:text-[40px] text-[30px] font-playfair font-medium text-white mb-16 text-center">
                        You and your Home in Sync
                    </motion.h1>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid lg:grid-cols-16 md:grid-cols-2 gap-x-5 lg:gap-y-10 gap-y-5 relative z-10"
                    >
                        {HISData.map((hisItem, index) => (
                            <HIS
                                key={index}
                                icon={hisItem.icon}
                                title={hisItem.title}
                                description={hisItem.description}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="bg-[#36454F]"
                variants={containerVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="sm:py-20 py-10 3xl:max-w-[1512px] 3xl:mx-auto sh:mx-9 mx-4 flex xl:flex-row flex-col-reverse items-center justify-between gap-8">
                    {/* Image Block */}
                    <motion.div className="relative" variants={fadeInScale} whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}>
                        <motion.img src={luxury1} alt="" className="rounded-md shadow-lg" />
                        <motion.img
                            src={luxury2}
                            alt=""
                            className="absolute top-1/2 mk:block hidden -translate-y-1/2 left-[400px] rounded-md shadow-xl"
                        // variants={slideInLeft}
                        />
                    </motion.div>

                    {/* Text Block */}
                    <motion.div className="space-y-4 xl:text-start text-center xl:max-w-[450px]" variants={fadeUp2}>
                        <motion.h1 className="sm:text-[40px] text-[30px] font-playfair font-medium text-white" variants={fadeUp2}>
                            Luxury That Performs Like an Asset
                        </motion.h1>
                        <motion.p className="text-white font-normal" variants={fadeUp2}>
                            Our homes are not just designed for living — they’re built to outperform. Backed by top-tier
                            real estate data, TRE offers long-term appreciation, passive income, and security of value.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="bg-[#ffffff]">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                >
                    <div className="max-w-[630px] text-center mx-auto">
                        <motion.h1
                            variants={fadeUp}
                            className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Latest in Smart Luxury Living</motion.h1>
                        <motion.p variants={fadeUp}>Discover industry insights, architecture inspiration, and smart living breakthroughs — curated for future-focused homeowners and investors.</motion.p>
                    </div>

                    <div className="grid mc:grid-cols-2 grid-cols-1 gap-x-4">
                        {LatestSmartData.map((item, index) => (
                            <LatestSmart
                                key={index}
                                image={item.image}
                                text={item.text}
                                index={index}
                            />
                        ))}
                    </div>

                    <Link to={'/projects'} onClick={() => window.scrollTo(0, 0)} className="bg-[#1F262B] sm:w-[240px] w-fit text-white py-4 px-6 sm:text-xl text-[17px] rounded-full mt-10 hover:bg-black/95 flex items-center justify-center mx-auto">
                        Discover More
                    </Link>
                </motion.div>
            </div>

            <div className="bg-[#eeeeee]">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                >
                    <div className="max-w-[860px] text-center mx-auto mb-16">
                        <motion.h1
                            variants={fadeUp}
                            className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Start the Conversation That Builds Your Legacy</motion.h1>
                        <motion.p variants={fadeUp}>Our homes are not just designed for living — they’re built to outperform. Backed by top-tier real estate data, TRE offers long-term appreciation, passive income, and security of value.</motion.p>
                    </div>

                    <ContactLayout />
                </motion.div>
            </div>

            <Footer />
        </div >
    )
}

export default Home