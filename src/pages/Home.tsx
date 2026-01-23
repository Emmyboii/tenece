import Hero from "../components/Hero"
import Future from "../assets/Future.svg";
import Legacy1 from "../assets/Legacy1.svg";
import Legacy2 from "../assets/Legacy2.svg";
import Legacy3 from "../assets/Legacy3.svg";
import Legacy4 from "../assets/Legacy4.svg";
import capa1 from "../assets/capa1.svg";
import capa2 from "../assets/capa2.svg";
import capa3 from "../assets/capa3.svg";
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
        { icon: "/src/assets/cac.svg", title: "Centralized App Control", description: "Manage lighting, climate, access, and security from one intuitive mobile dashboard." },
        { icon: "/src/assets/gca.svg", title: "Gate & Curtain Automation", description: "Effortless open/close of gates and drapes at scheduled times or voice command." },
        { icon: "/src/assets/rta.svg", title: "Real-Time Alerts", description: "Get instant updates on movement, entry, and environmental changes." },
        { icon: "/src/assets/ta.svg", title: "Touchless Access", description: "Unlock doors via biometric or phone proximity — no keys needed." },
        { icon: "/src/assets/eec.svg", title: "Energy-Efficient Comfort Zones", description: "Personalized temperature and lighting settings that save energy and enhance comfort." },
        { icon: "/src/assets/sgm.svg", title: "Smart Glass + Motion Sensors", description: "Glass that tints for privacy, paired with motion-activated lighting and systems." },
        { icon: "/src/assets/val.svg", title: "Voice Activated Living", description: "Control your environment hands-free with integrated voice assistants." },
    ]

    const LatestSmartData = [
        { image: "/src/assets/latest1.svg", text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
        { image: "/src/assets/latest2.svg", text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
        { image: "/src/assets/latest3.svg", text: "Smart Homes, Smarter Living: How Technology is Redefining Luxury in Lagos" },
    ]

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/HomeHero.svg"
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

            <div className="px- py-20 max-w-[1512px] mx-auto">
                <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-16 text-center">A Legacy of Trust. The Future of Innovation.</h1>

                <div className="grid grid-cols-4 gap-[76px]">
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
                </div>
            </div>

            <div className="bg-[#C0C0C0]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-16 text-center">Our Signature Developments</h1>

                    <MirasolLayout />
                </div>
            </div>

            <div className="px- py-20 max-w-[1512px] mx-auto">
                <HexaHomesLayout />
            </div>

            <div className="px- py-20 max-w-[1512px] mx-auto">
                <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-16 text-center">Capabilities That Set Us Apart</h1>

                <div className="grid grid-cols-3 gap-[76px]">
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
                </div>
            </div>

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
                <div className="relative z-10 py-20 px- max-w-[1512px] mx-auto">
                    <h1 className="text-[40px] font-playfair font-medium text-white mb-16 text-center">
                        You and your Home in Sync
                    </h1>

                    <div className="grid grid-cols-16 gap-x-5 gap-y-10 relative z-10">
                        {HISData.map((hisItem, index) => (
                            <HIS
                                key={index}
                                icon={hisItem.icon}
                                title={hisItem.title}
                                description={hisItem.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#36454F]">
                <div className="px- py-20 max-w-[1512px] mx-auto flex items-center justify-between gap-8">
                    <div className="relative">
                        <img src={luxury1} alt="" />
                        <img src={luxury2} alt="" className="absolute top-1/2 -translate-y-1/2 left-[400px]" />
                    </div>
                    <div className="space-y-4 max-w-[450px]">
                        <h1 className="text-[40px] font-playfair font-medium text-white ">
                            Luxury That Performs Like an Asset
                        </h1>
                        <p className="text-white font-normal">
                            Our homes are not just designed for living — they’re built to outperform. Backed by top-tier
                            real estate data, TRE offers long-term appreciation, passive income, and security of value.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <div className="max-w-[630px] text-center mx-auto">
                        <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Latest in Smart Luxury Living</h1>
                        <p>Discover industry insights, architecture inspiration, and smart living breakthroughs — curated for future-focused homeowners and investors.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4">
                        {LatestSmartData.map((item, index) => (
                            <LatestSmart
                                key={index}
                                image={item.image}
                                text={item.text}
                                index={index}
                            />
                        ))}
                    </div>

                    <button className="bg-[#1F262B] w-[240px] text-white py-4 px-6 text-xl rounded-full mt-10 hover:bg-black/95 flex items-center justify-center mx-auto">
                        Discover More
                    </button>
                </div>
            </div>

            <div className="bg-[#eeeeee]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <div className="max-w-[860px] text-center mx-auto mb-16">
                        <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Start the Conversation That Builds Your Legacy</h1>
                        <p>Our homes are not just designed for living — they’re built to outperform. Backed by top-tier real estate data, TRE offers long-term appreciation, passive income, and security of value.</p>
                    </div>

                    <ContactLayout />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home