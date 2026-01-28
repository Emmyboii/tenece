import Hero from "./Hero"
import luxury1 from "../assets/luxury1.svg";
import luxury2 from "../assets/luxury2.svg";
import UniqueFeatures from "./UniqueFeatures";
import HIS from "./HIS";
import kitchen from "../assets/kitchen.svg";
import LOT from "./LOT";
import ContactLayout from "./ContactLayout";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import hexaIcon1 from "../assets/hexaIcon1.svg";
import hexaIcon2 from "../assets/hexaIcon2.svg";
import hexaIcon3 from "../assets/hexaIcon3.svg";
import hexaIcon4 from "../assets/hexaIcon4.svg";
import hexaIcon5 from "../assets/hexaIcon5.svg";
import hexaIcon6 from "../assets/hexaIcon6.svg";
import hexaIcon7 from "../assets/hexaIcon7.svg";
import hexaIcon8 from "../assets/hexaIcon8.svg";
import hexaIcon9 from "../assets/hexaIcon9.svg";
import hexaIcon10 from "../assets/hexaIcon10.svg";
import hexaIcon11 from "../assets/hexaIcon11.svg";
import hexaIcon12 from "../assets/hexaIcon12.svg";
import hexaIcon13 from "../assets/hexaIcon13.svg";
import hexaIcon14 from "../assets/hexaIcon14.svg";
import hexaIcon15 from "../assets/hexaIcon15.svg";
import hexaIcon16 from "../assets/hexaIcon16.svg";
import hexaIcon17 from "../assets/hexaIcon17.svg";
import hexaIcon18 from "../assets/hexaIcon18.svg";
import hexaIcon19 from "../assets/hexaIcon19.svg";
import hexa9 from "../assets/hexa9.svg";
import hexa10 from "../assets/hexa10.svg";
import hexa11 from "../assets/hexa11.svg";
import hexa1 from "../assets/hexa1.svg";
import hexa2 from "../assets/hexa2.svg";
import hexa3 from "../assets/hexa3.svg";
import hexa4 from "../assets/hexa4.svg";
import hexa5 from "../assets/hexa5.svg";
import hexa7 from "../assets/hexa7.svg";
import hexa8 from "../assets/hexa8.svg";
import hexa6 from "../assets/hexa6.svg";
import hexaMap from "../assets/hexaMap.svg";
import hexa12 from "../assets/hexa12.svg";
import hexaHero from "../assets/hexaHero.png";

// Fade in + slide up animation for items
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// Container to stagger children
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  },
};

// Main text variants
const textUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// Features slide from right
const featureSlide: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// Image scale + fade
const imagePop2: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const imagePop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

// Overlay fade
const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
};

const buttonPop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  },
};

const lotContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

// Each LOT card
const lotCard: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const HexaHomesPages = () => {

  const HISData = [
    { icon: hexaIcon1, title: "Four Bedroom En-suite", description: "Spacious, private retreats with individual bathrooms designed for personal comfort and elegance." },
    { icon: hexaIcon2, title: "Two Living Areas", description: "An expansive ground-floor living room and a private lounge designed for hosting and unwinding." },
    { icon: hexaIcon3, title: "Two Walk-in Closets", description: "Luxurious, custom-fitted dressing spaces for an organized, indulgent lifestyle." },
    { icon: hexaIcon4, title: "An Elevator Shaft", description: "Future-ready vertical mobility with space to install a personal lift connecting all floors." },
    { icon: hexaIcon5, title: "An Office / Study", description: "A private, sound-conscious workspace ideal for productivity, reading, or meetings." },
    { icon: hexaIcon6, title: "Dry & Wet Kitchen Area", description: "Dual-kitchen layout for style and practicality — one for show, one for real cooking." },
    { icon: hexaIcon7, title: "A Multipurpose Room", description: "Customizable space perfect for a home gym, theater, or guest suite." },
    { icon: hexaIcon8, title: "Laundry Area", description: "Dedicated utility space for seamless, discreet clothing care." },
    { icon: hexaIcon9, title: "Green Area", description: "A private pocket of nature to relax, recharge, or host outdoors." },
    { icon: hexaIcon10, title: "Three Car Garages", description: "Secure, spacious garage for up to 3 vehicles with smooth access." },
    { icon: hexaIcon11, title: "Laminated Glass Staircase", description: "Statement staircase combining elegance, safety, and light." },
    { icon: hexaIcon12, title: "A Box Room", description: "A compact storage room for seasonal items, luggage, or valuables." },
    { icon: hexaIcon13, title: "Uninterrupted Power Supply", description: "Reliable backup power ensures uninterrupted comfort and security." },
    { icon: hexaIcon14, title: "Uninterrupted Water Supply", description: "Continuous water availability for seamless daily living." },
    { icon: hexaIcon15, title: "Security Surveillance System", description: "Advanced monitoring for safety, privacy, and peace of mind." },
    { icon: hexaIcon16, title: "Fibre-to-the-home", description: "High-speed internet directly to your residence for smart living." },
  ];

  const featureIcons = [hexaIcon17, hexaIcon18, hexaIcon19];

  const LOTData = [
    { imageUrl: hexa9, subText: "Doors" },
    { imageUrl: hexa10, subText: "Curtains", reverse: true },
    { imageUrl: hexa11, subText: "Appliances" },
    { imageUrl: hexa12, subText: "Gates", reverse: true },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero
        heroImage={hexaHero}
        heroText="HexaHomes"
        heroText2="Where innovation meets Elegance"
        subText="A deluxe home with upscale infrastructure in an exclusive location."
        cta="Schedule Private Tour"
      />

      <motion.div
        className="bg-[#EEEEEE]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto flex rx:flex-row flex-col items-center justify-between gap-8">

          {/* Images */}
          <motion.div className="relative" variants={fadeInUp} custom={0}>
            <motion.img
              src={luxury1}
              alt=""
              className="w-[440px] 2xl:w-auto"
              variants={fadeInUp}
              custom={0.1}
            />

            <motion.img
              src={luxury2}
              alt=""
              className="absolute top-1/2 mk:block hidden -translate-y-1/2 2xl:left-[400px] left-[300px] 2xl:w-auto w-[250px]"
              // variants={fadeInUp}
              custom={0.2}
            />
          </motion.div>

          {/* Text & Features */}
          <motion.div className="max-w-[700px]" variants={fadeInUp} custom={0.3}>
            <motion.h1 variants={fadeInUp} custom={0.4} className="sm:text-[40px] text-[30px] text-center rx:text-start font-playfair font-medium text-[#1F262B]">
              Our Unique Features
            </motion.h1>

            <motion.p variants={fadeInUp} custom={0.5} className="font-normal font-poppins text-center rx:text-start mt-6">
              Our projects made with the finest quality materials, world-class infrastructure, and some of the most sophisticated,
              state-of-the-art security protocols and advanced home automation
            </motion.p>

            <motion.div className="flex mh:flex-row flex-col items-center gap-4 mt-10 mb-4" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp} custom={0.6}>
                <UniqueFeatures
                  text="Spacious and Elegant"
                  subText="Designed for utmost comfort. Enjoy the best family experiences without restriction."
                  width
                />
              </motion.div>
              <motion.div variants={fadeInUp} custom={0.7}>
                <UniqueFeatures
                  text="Stunning & Sophisticated"
                  subText="Built to contemporary taste with aesthetic features, designed to the high standards of comfort, style and sustainability."
                  width
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.8} className="mb-4 w-full">
              <UniqueFeatures
                text="Tech Enabled"
                subText="Be in control of your home. Our tech-enabled homes make your life easier, filled with comfort and ensures peace of mind. Monitor and control everything, including doors, curtains, electrical appliances, and gates using a smartphone or tablet."
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.9} className="w-full">
              <UniqueFeatures
                text="Exquisite Architecture"
                subText="Upscale luxury with aesthetic features such as concealed roofs, glass railings, high ceilings, sky lighting and a green area."
              />
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      <div
        className="relative"
        style={{
          backgroundImage: `url(${kitchen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#273030] via-black/50 to-[#1f282e]" />


        <div className="relative z-10 sm:py-20 py-10 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="sm:text-[40px] text-[30px] font-playfair font-medium text-white mb-16 text-center"
            >
              Triplex Home Excellence
            </motion.h1>
          </motion.div>

          <div className="grid 2xl:grid-cols-4 mf:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10 relative z-10">
            {HISData.map((hisItem, index) => (
              <HIS
                key={index}
                icon={hisItem.icon}
                title={hisItem.title}
                description={hisItem.description}
                index={index}
                normal
              />
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.button
              variants={popIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white w-[244px] py-3 text-black p-2.5 sm:text-xl text-[17px] rounded-full mt-12 mx-auto flex justify-center hover:bg-white/95"
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-[#ffffff]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-8">

            {/* Left Text */}
            <div className="lg:max-w-[753px]">
              <motion.h1
                variants={textUp}
                custom={0}
                className="sm:text-[40px] text-[30px] font-playfair lg:text-start text-center font-medium text-[#1F262B] lg:max-w-[703px]"
              >
                Designed for the Few Who Live Ahead of the Curve
              </motion.h1>

              <motion.p
                variants={textUp}
                custom={1}
                className="sm:text-[24px] text-[17px] font-normal text-[#1F262B] mt-5 leading-loose"
              >
                HexaHomes isn’t a mass-produced home. We craft lasting assets — with limited availability — for individuals who understand
                the value of timing, location, and legacy. <br className="md:block hidden" /> Every HexaHome is a statement of refined intelligence:
              </motion.p>

              {/* Feature Items */}
              {["Built with the highest-grade materials", "Powered by smart automation", "Framed to hold generational value"].map((text, i) => (
                <motion.div
                  key={i}
                  variants={featureSlide}
                  custom={i + 2}
                  className="mt-5 flex items-center gap-4"
                >
                  <img src={featureIcons[i]} alt="" />
                  <p className="md:text-xl sm:text-lg font-medium">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Image */}
            <motion.img
              src={hexa1}
              alt=""
              className="lg:w-auto w-max"
              variants={imagePop}
              custom={0}
            />

          </div>

          {/* Bottom Overlay Image */}
          <motion.div className="relative mt-10">
            <motion.img
              src={hexa2}
              alt=""
              className="w-screen"
              variants={imagePop}
              custom={0.5}
            />

            {/* Overlay Text */}
            <motion.div
              className="absolute text-white bg-[#031E424D] backdrop-blur-sm bottom-0 right-0 max-w-[702px] p-4 md:px-12 px-4"
              variants={overlayFade}
              custom={1}
            >
              <p className="font-normal mh:text-base text-sm">
                “This isn’t a home you upgrade — it’s one you pass down. Reserved for a select few, HexaHomes offers
                the kind of exclusivity money alone can’t buy — a timeless statement of status, built to remain rare.”
              </p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      <motion.div
        className="bg-[#EEEEEE]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            custom={0}
            className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] text-center"
          >
            Just 6 Private Units. No More, No Later.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="font-normal sm:text-base text-sm font-poppins mt-6 text-center"
          >
            In a world of noise and excess, true luxury is defined by what’s rare. <br className="md:block hidden" /> HexaHomes is a limited collection of 6 bespoke triplexes — and every one is uniquely crafted.
          </motion.p>

          {/* Image Grid */}
          <div className="grid mk:grid-cols-3 sh:grid-cols-2 gap-4 mt-16">
            {[hexa3, hexa4, hexa5, hexa6, hexa7, hexa8].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt=""
                className="w-full sm:h-auto h-[340px]"
                variants={imagePop2}
                custom={i}
              />
            ))}
          </div>

          {/* Button */}
          <motion.div
            className="mt-12 flex justify-center"
            variants={buttonPop}
            custom={0}
          >
            <Link
              to={'/contact'}
              onClick={() => window.scrollTo(0, 0)}
              className="bg-black w-[264px] text-white p-2.5 py-3 sm:text-xl text-[17px] rounded-full flex justify-center hover:bg-black/95 hover:scale-105 transition-transform"
            >
              Join the Property List
            </Link>
          </motion.div>

        </div>
      </motion.div>


      <motion.div
        className="bg-[#1F262B] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            custom={0}
            className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#ffffff] text-center"
          >
            Live in Sync With Your Home
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="font-normal font-poppins mt-6 text-center"
          >
            Designed with intelligent automation at its core, every system responds to your preferences in real time. <br className="mp:block hidden" /> With a single app, you control your entire home environment — effortlessly.
          </motion.p>

          {/* LOT cards grid */}
          <motion.div
            className="grid lg:grid-cols-4 mk:grid-cols-3 sh:grid-cols-2 gap-[36px] mt-20"
            variants={lotContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {LOTData.map((lot, index) => (
              <motion.div
                key={index}
                variants={lotCard}
                whileHover={{ scale: 1.05 }} // subtle hover pop
                whileTap={{ scale: 0.95 }}
              >
                <LOT
                  imageUrl={lot.imageUrl}
                  subText={lot.subText}
                  reverse={lot.reverse}
                  textColor
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>


      <div className="bg-[#ffffff]">
        <div className="pt-20 max-w-[1512px 3xl:mx-auto">
          <h1 className="sm:text-[40px] text-[30px] font-playfair font-medium text-[#1F262B] text-center">The Right Place; The Right Time</h1>
          <p className="font-normal font-poppins mt-6 text-center px-2">
            Centrally located in Lekki Phase 1 — minutes from fine dining, world-class schools, and Lagos’ tech and business district — <br className="md:block hidden" /> HexaHomes is positioned for those who thrive at the center of culture and capital.
          </p>
          <img src={hexaMap} alt="" className="w-full" />
        </div>
      </div>

      <div className="bg-[#eeeeee]">
        <div className="sm:py-20 py-10 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
          <div className="text-center mx-auto mb-16">
            <h1 className="md:text-[40px] sm:text-[30px] text-[24px] font-playfair font-medium text-[#1F262B] mb-4 text-center">A Limited Opportunity for Those Who Think Long-Term.</h1>
            <p className="sm:text-base text-sm">There are homes. There are investments. And then there’s HexaHomes. <br className="md:block hidden" /> 12 residences. Lifetime value. Tailored for those who appreciate modern luxury and smart living</p>
          </div>

          <ContactLayout />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default HexaHomesPages