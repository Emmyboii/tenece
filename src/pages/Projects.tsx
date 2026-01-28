import ContactLayout from '../components/ContactLayout'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HexaHomesLayout from '../components/HexaHomesLayout'
import MirasolLayout from '../components/MirasolLayout'
import { motion, type Variants } from "framer-motion";


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
    }
}

const Projects = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/projectHero.png"
                heroText="Transforming Ideas into Exceptional Spaces"
                subText="We blend creativity, functionality, and innovation to design spaces that inspire, engage, and elevate everyday living."
            />

            <div className="bg-[#C0C0C0]">
                <div className="sm:py-20 py-10 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
                    <h1 className="sm:text-[40px] text-[26px] font-playfair font-medium text-[#1F262B] sm:mb-16 mb-6 text-center">Our Signature Developments</h1>

                    <MirasolLayout />
                </div>
            </div>

            <div className="sm:py-20 py-10 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
                <HexaHomesLayout />
            </div>

            <div className="bg-[#eeeeee]">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto"
                >
                    <div className="max-w-[980px] text-center 3xl:mx-auto mb-16">
                        <motion.h1
                            variants={fadeUp} className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Let’s Build a Landmark Together</motion.h1>
                        <motion.p variants={fadeUp}>From luxury smart homes to signature estates, we bring deep expertise, innovation, and precision craftsmanship to every project. Whether you’re building your dream residence or a legacy investment, we’re here to exceed expectations.</motion.p>
                    </div>

                    <ContactLayout />
                </motion.div>
            </div>

            <Footer />

        </div>
    )
}

export default Projects