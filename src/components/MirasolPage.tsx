import BelowHeroHomeAndMirasol from "./BelowHeroHomeAndMirasol"
import Hero from "./Hero"
import Future from "../assets/Future.png";
import OurTeamImg from "./OurTeamImg";
import Footer from "./Footer";
import { motion, type Variants } from "framer-motion";
import mira1 from "../assets/mira1.png";
import mira2 from "../assets/mira2.png";
import mira3 from "../assets/mira3.png";
import mira4 from "../assets/mira4.png";
import mira5 from "../assets/mira5.svg";
import mira6 from "../assets/mira6.svg";
import mira7 from "../assets/mira7.svg";
import mira8 from "../assets/mira8.svg";
import mira9 from "../assets/mira9.svg";
import mira10 from "../assets/mira10.svg";
import mirasolMap from "../assets/mirasolMap.png";
import mirasolHero from "../assets/mirasolHero.png";

const MirasolPage = () => {

    const images = [
        { src: mira1, name: "Smart Living Systems" },
        { src: mira2, name: "Kohler Smart Kitchens & Fixtures" },
        { src: mira3, name: "Fully Automated Curtains & Glass", height: "3rd" },
        { src: mira4, name: "High-Security Smart Surveillance", height: "3rd" },
    ];

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    // Variants for the image container
    const imageContainerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Variants for each image
    const imageVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
        hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
    };

    // Variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
        hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
    };

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage={mirasolHero}
                heroText="The Mirasol"
                subText="Power. Privacy. Prestige — designed by the developers behind Lagos’ most iconic smart residences"
                cta="Download Brochure"
            />

            <div className="bg-[#C0C0C0]">
                <BelowHeroHomeAndMirasol
                    text="An Address of Authority."
                    text2="A Home of Legacy."
                    image={Future}
                    subText="The Mirasol is not just a residence — it’s a symbol. A statement for those who have arrived. With only a select number of units, Mirasol offers more than ownership — it offers the right to say you live above Lagos."
                    textColor="black"
                />
            </div>


            <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">
                {/* Heading */}
                <motion.h1
                    className="sm:text-[40px] text-[26px] font-playfair font-medium text-[#1F262B] sm:mb-16 mb-9 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Crafted for the Privileged Few
                </motion.h1>

                {/* Grid */}
                <motion.div
                    className="grid rk:grid-cols-3 md:grid-cols-2 gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="space-y-4" variants={containerVariants}>
                        {[images[0], images[1]].map((img, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <OurTeamImg
                                    image={img.src}
                                    name={img.name}
                                    rounded
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover="hover">
                        <OurTeamImg
                            image={images[2].src}
                            name={images[2].name}
                            height={images[2].height}
                            rounded
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover="hover">
                        <OurTeamImg
                            image={images[3].src}
                            name={images[3].name}
                            height={images[3].height}
                            rounded
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div className="bg-[#eeeeee]">
                <div className="sm:py-20 py-10 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
                    <div className="max-w-[710px] text-center 3xl:mx-auto mb-16">
                        <h1 className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Step Inside Your Legacy</h1>
                        <p>Crafted for connoisseurs of timeless living, generational significance, and those who understand that true luxury is never fleeting.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src={mira5} alt="" className="w-[990px h-[600px lg:block hidden" />
                        <img src={mira6} alt="" className="w-[990px h-[600px" />
                        <img src={mira7} alt="" className="w-[990px h-[600px lg:block hidden" />
                    </div>

                </div>
            </div>
            <div className="bg-[#C0C0C0]">
                <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto grid rx:grid-cols-2 gap-5 items-center">

                    {/* Text Content */}
                    <motion.div
                        className="space-y-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={textVariants}
                    >
                        <motion.h1
                            className="md:text-[40px] sm:text-[30px] text-[23px] font-playfair font-medium rx:max-w-[496px] rx:text-start text-center"
                        >
                            Made for High Performers, Built for Legacy
                        </motion.h1>
                        <motion.p
                            className="mc:text-2xl sm:text-xl font-normal rx:max-w-[523px] rx:text-start text-center"
                        >
                            The Mirasol is crafted for those who demand more than just a place to live. Designed with precision, sophistication,
                            and vision, it caters to executive buyers, global investors, and families who seek to build a lasting legacy. Every
                            detail reflects excellence — a statement of success today, and an inheritance for generations to come.
                        </motion.p>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        className="rx:flex grid md:grid-cols-3 grid-cols-1 items-center gap-4 mx-auto justify-center rx:justify-normal"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={imageContainerVariants}
                    >
                        <motion.img
                            src={mira8}
                            alt=""
                            className="w-screen sm:h-auto h-[400px] md:w-auto rounded-md"
                            variants={imageVariants}
                            whileHover="hover"
                        />

                        <motion.div
                            className="rx:space-y-4 md:space-y-0 space-y-4 md:flex gap-4 items-center rx:block"
                            variants={imageContainerVariants}
                        >
                            <motion.img
                                src={mira9}
                                alt=""
                                className="md:block hidden"
                                variants={imageVariants}
                                whileHover="hover"
                            />
                            <motion.img
                                src={mira10}
                                alt=""
                                className="w-screen sm:h-auto h-[400px] md:w-auto"
                                variants={imageVariants}
                                whileHover="hover"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            <div className="bg-[#ffffff]">
                <div className="pt-20 max-w-[1512px 3xl:mx-auto">
                    <h1 className="md:text-[40px] sm:text-[30px] text-[23px] px-2 font-playfair font-medium text-[#1F262B] text-center">The Most Desired Address in Nigeria</h1>
                    <p className="font-normal sm:text-base text-sm font-poppins mt-6 px-2 text-center">
                        It isn’t just a location — it’s a symbol of status, influence, and generational wealth. From its tree-lined avenues to its world-class <br className="sm:block hidden" /> institutions, it remains the address of choice for Nigeria’s most powerful, affluent, and forward-looking individuals.
                    </p>
                    <div className="relative mt-20">
                        <img src={mirasolMap} alt="" className="w-full" />
                        {/* <button type="submit" className={`bg-white w-[284px] absolute bottom-[116px] left-36 py-6 text-black p-2.5 sm:text-xl text-[17px] rounded-full mt-12 3xl:mx-auto flex justify-center hover:bg-white/95`}>
                            Download Brochure
                        </button> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MirasolPage