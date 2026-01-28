import Hero from "../components/Hero"
import story from "../assets/aboutStory.png";
import mission from "../assets/aboutMisson.png";
import vision from "../assets/aboutVision.png";
import LOT from "../components/LOT";
import OurTeamImg from "../components/OurTeamImg";
import Footer from "../components/Footer";
import OurStoryGrid from "../components/OurStoryGrid";
import { motion, type Variants } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const fadeUp2: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const teamCard: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

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
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const About = () => {

    const MissionVisionData = [
        { imageUrl: mission, text: "Our Mission", subText: "To develop iconic properties that set the standard for smart homes, architectural excellence, and personalized service in premium neighborhoods." },
        { imageUrl: vision, text: "Our Vision", subText: "To lead the future of luxury living across Africa — blending design, innovation, and intelligent comfort.", reverse: true },
    ]

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/aboutHero.png"
                heroText="Redefining Luxury. Elevating Smart Living."
                subText="From visionary designs to intelligent homes, we build more than properties. We create timeless experiences in the heart of Lagos."
                cta="Explore our story"
            />

            <motion.div
                id="ourstory"
                className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto text-[#1F262B]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.p
                    className="sm:text-[32px] sd:text-2xl text-[17px] font-normal text-center"
                    variants={fadeUp}
                >
                    Our Essence
                </motion.p>

                <motion.h1
                    className="sm:text-[40px] sd:text-[30px] text-xl font-playfair sm:mt-4 font-medium text-center"
                    variants={fadeUp}
                >
                    Urban Luxury, Reimagined Through Smart Innovation
                </motion.h1>

                <OurStoryGrid
                    image={story}
                    title="Our Story"
                    text="At Tenece Real Estate, we merge luxury with intelligent design to shape forward-thinking living spaces in choice locations. Each home reflects our commitment to seamless technology, timeless aesthetics, and elevated living.
                            Rooted in global inspiration and African excellence, we create more than residences—we craft environments that anticipate your needs and reflect your lifestyle.
                            Tenece is where innovation meets elegance, offering a smarter, more refined way to live in Nigeria’s most vibrant city."
                />
            </motion.div>

            <div className="bg-[#EEEEEE]">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                >
                    <motion.div
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                        className="grid md:grid-cols-2 lg:gap-[60px] gap-[30px]">
                        {MissionVisionData.map((lot, index) => (
                            <LOT
                                key={index}
                                imageUrl={lot.imageUrl}
                                text={lot.text}
                                subText={lot.subText}
                                reverse={lot.reverse}
                                textFont="playfair"
                                subTextFont="norm"
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="bg-[#EEEEEE]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="py-20 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">

                    <motion.div
                        className="flex lg:flex-row flex-col items-center justify-between gap-5"
                        variants={container}
                    >
                        <motion.div
                            className="lg:space-y-5 space-y-3 lg:text-start text-center"
                            variants={container}
                        >
                            <motion.p className="text-[32px] font-normal" variants={fadeUp2}>
                                Our Team
                            </motion.p>

                            <motion.h1
                                className="sm:text-[40px] text-[30px] font-playfair font-medium lg:max-w-[426px]"
                                variants={fadeUp2}
                            >
                                Meet the Visionaries Behind Tenece
                            </motion.h1>

                            <motion.p
                                className="md:text-2xl font-normal lg:max-w-[540px]"
                                variants={fadeUp2}
                            >
                                At Tenece, we’re led by a collective of seasoned real estate experts,
                                tech innovators, and design thinkers. Each member brings deep industry
                                insight, global exposure, and a shared passion for reshaping urban living
                                through intelligent luxury.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="flex sh:flex-row flex-col mt-3 lg:mt-0 items-center gap-5"
                            variants={container}
                        >
                            <motion.div variants={teamCard}>
                                <OurTeamImg image="/src/assets/team1.png" name="KINGSLEY EZE" position="CEO Tenece Group" />
                            </motion.div>

                            <motion.div variants={teamCard}>
                                <OurTeamImg image="/src/assets/team2.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mc:flex grid sh:grid-cols-2 items-center sh:justify-end mc:mt-16 mt-5 gap-5"
                        variants={container}
                    >
                        {[
                            "/src/assets/team3.svg",
                            "/src/assets/team4.svg",
                            "/src/assets/team5.svg",
                        ].map((img, i) => (
                            <motion.div key={i} variants={teamCard}>
                                <OurTeamImg image={img} name="KINGSLEY EZE" position="CEO Tenece Group" />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </motion.div>

            <Footer />

        </div>
    )
}

export default About