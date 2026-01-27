import Hero from "../components/Hero"
import story from "../assets/aboutStory.png";
import mission from "../assets/aboutMisson.png";
import vision from "../assets/aboutVision.png";
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
                heroImage="/src/assets/aboutHero.png"
                heroText="Redefining Luxury. Elevating Smart Living."
                subText="From visionary designs to intelligent homes, we build more than properties. We create timeless experiences in the heart of Lagos."
                cta="Explore our story"
            />

            <div id="#ourstory" className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto text-[#1F262B]">
                <p className="sm:text-[32px] sd:text-2xl text-[17px] font-normal text-center">Our Essence</p>
                <h1 className="sm:text-[40px] sd:text-[30px] text-xl font-playfair sm:mt-4 font-medium text-center">Urban Luxury, Reimagined Through Smart Innovation</h1>

                <OurStoryGrid
                    image={story}
                    title="Our Story"
                    text="At Tenece Real Estate, we merge luxury with intelligent design to shape forward-thinking living spaces in choice locations. Each home reflects our commitment to seamless technology, timeless aesthetics, and elevated living.
                            Rooted in global inspiration and African excellence, we create more than residences—we craft environments that anticipate your needs and reflect your lifestyle.
                            Tenece is where innovation meets elegance, offering a smarter, more refined way to live in Nigeria’s most vibrant city."
                />

            </div>

            <div className="bg-[#EEEEEE]">
                <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">
                    <div className="grid md:grid-cols-2 gap-[30px]">
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
                <div className="py-20 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto">
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
                        <div className="lg:space-y-5 space-y-3 lg:text-start text-center">
                            <p className="text-[32px] font-normal">Our Team</p>
                            <h1 className="sm:text-[40px] text-[30px] font-playfair font-medium lg:max-w-[426px]">Meet the Visionaries Behind Tenece</h1>
                            <p className="md:text-2xl font-normal lg:max-w-[540px]">
                                At Tenece, we’re led by a collective of seasoned real estate experts, tech innovators, and design thinkers. Each
                                member brings deep industry insight, global exposure, and a shared passion for reshaping urban living through intelligent luxury..
                            </p>
                        </div>
                        <div className="flex sh:flex-row flex-col mt-3 lg:mt-0 items-center gap-5">
                            <OurTeamImg image="/src/assets/team1.png" name="KINGSLEY EZE" position="CEO Tenece Group" />
                            <OurTeamImg image="/src/assets/team2.svg" name="KINGSLEY EZE" position="CEO Tenece Group" />
                        </div>
                    </div>

                    <div className="mc:flex grid sh:grid-cols-2 items-center sh:justify-end mc:mt-16 mt-5 gap-5">
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