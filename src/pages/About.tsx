import Hero from "../components/Hero"
import story from "../assets/aboutStory.svg";
import mission from "../assets/aboutMisson.svg";
import vision from "../assets/aboutVision.svg";
import LOT from "../components/LOT";
import OurTeamImg from "../components/OurTeamImg";
import Footer from "../components/Footer";
import OurStoryGrid from "../components/OurStoryGrid";

const About = () => {

    const MissionVisionData = [
        { imageUrl: mission, text: "Our Mission", subText: "To develop iconic properties that set the standard for smart homes, architectural excellence, and personalized service in premium neighborhoods." },
        { imageUrl: vision, text: "Our Vision", subText: "To lead the future of luxury living across Africa — blending design, innovation, and intelligent comfort.", reverse: true },
    ]

    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/aboutHero.svg"
                heroText="Redefining Luxury. Elevating Smart Living."
                subText="From visionary designs to intelligent homes, we build more than properties. We create timeless experiences in the heart of Lagos."
                cta="Explore our story"
            />

            <div className="px- py-20 max-w-[1512px] mx-auto text-[#1F262B]">
                <p className="text-[32px] font-normal text-center">Our Essence</p>
                <h1 className="text-[40px] font-playfair font-medium text-center">Urban Luxury, Reimagined Through Smart Innovation</h1>

                <OurStoryGrid
                    image={story}
                    title="Our Story"
                    text="At Tenece Real Estate, we merge luxury with intelligent design to shape forward-thinking living spaces in choice locations. Each home reflects our commitment to seamless technology, timeless aesthetics, and elevated living.
                            Rooted in global inspiration and African excellence, we create more than residences—we craft environments that anticipate your needs and reflect your lifestyle.
                            Tenece is where innovation meets elegance, offering a smarter, more refined way to live in Nigeria’s most vibrant city."
                />

            </div>

            <div className="bg-[#EEEEEE]">
                <div className="py-20 max-w-[1512px] mx-auto">
                    <div className="grid grid-cols-2 gap-[76px]">
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
                    </div>
                </div>
            </div>

            <div className="bg-[#EEEEEE]">
                <div className="py-20 max-w-[1512px] mx-auto">
                    <div className="flex items-center justify-between gap-5">
                        <div className="space-y-5">
                            <p className="text-[32px] font-normal">Our Team</p>
                            <h1 className="text-[40px] font-playfair font-medium max-w-[426px]">Meet the Visionaries Behind Tenece</h1>
                            <p className="text-2xl font-normal max-w-[540px]">
                                At Tenece, we’re led by a collective of seasoned real estate experts, tech innovators, and design thinkers. Each
                                member brings deep industry insight, global exposure, and a shared passion for reshaping urban living through intelligent luxury..
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <OurTeamImg image="/src/assets/team1.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                            <OurTeamImg image="/src/assets/team2.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-16 gap-5">
                        <OurTeamImg image="/src/assets/team3.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                        <OurTeamImg image="/src/assets/team4.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                        <OurTeamImg image="/src/assets/team5.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About