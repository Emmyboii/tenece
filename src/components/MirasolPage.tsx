import BelowHeroHomeAndMirasol from "./BelowHeroHomeAndMirasol"
import Hero from "./Hero"
import Future from "../assets/Future.svg";
import OurTeamImg from "./OurTeamImg";
import Footer from "./Footer";

const MirasolPage = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/mirasolHero.svg"
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


            <div className="px- py-20 max-w-[1512px] mx-auto">
                <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-16 text-center">Crafted for the Privileged Few</h1>

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <OurTeamImg
                            image="/src/assets/mira1.svg"
                            name="Smart Living Systems"
                            rounded
                        />
                        <OurTeamImg
                            image="/src/assets/mira2.svg"
                            name="Kohler Smart Kitchens & Fixtures"
                            rounded
                        />
                    </div>
                    <OurTeamImg
                        image="/src/assets/mira3.svg"
                        name="Fully Automated Curtains & Glass"
                        height='3rd'
                        rounded
                    />
                    <OurTeamImg
                        image="/src/assets/mira4.svg"
                        name="High-Security Smart Surveillance"
                        rounded
                    />
                </div>
            </div>

            <div className="bg-[#eeeeee]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <div className="max-w-[710px] text-center mx-auto mb-16">
                        <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Step Inside Your Legacy</h1>
                        <p>Crafted for connoisseurs of timeless living, generational significance, and those who understand that true luxury is never fleeting.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src="/src/assets/mira5.svg" alt="" className="w-[990px h-[600px" />
                        <img src="/src/assets/mira6.svg" alt="" className="w-[990px h-[600px" />
                        <img src="/src/assets/mira7.svg" alt="" className="w-[990px h-[600px" />
                    </div>

                </div>
            </div>
            <div className="bg-[#C0C0C0]">
                <div className="px- py-20 max-w-[1512px] mx-auto grid grid-cols-2 gap-5 items-center">
                    <div className="space-y-5">
                        <h1 className="text-[40px] font-playfair font-medium max-w-[496px]">Made for High Performers, Built for Legacy</h1>
                        <p className="text-2xl font-normal max-w-[523px]">
                            The Mirasol is crafted for those who demand more than just a place to live. Designed with precision, sophistication,
                            and vision, it caters to executive buyers, global investors, and families who seek to build a lasting legacy. Every
                            detail reflects excellence — a statement of success today, and an inheritance for generations to come.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="/src/assets/mira8.svg" alt="" />
                        <div className="space-y-4">
                            <img src="/src/assets/mira9.svg" alt="" />
                            <img src="/src/assets/mira10.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff]">
                <div className="px- pt-20 max-w-[1512px mx-auto">
                    <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] text-center">The Most Desired Address in Nigeria</h1>
                    <p className="font-normal font-poppins mt-6 text-center">
                        It isn’t just a location — it’s a symbol of status, influence, and generational wealth. From its tree-lined avenues to its world-class <br /> institutions, it remains the address of choice for Nigeria’s most powerful, affluent, and forward-looking individuals.
                    </p>
                    <div className="relative mt-20">
                        <img src="/src/assets/mirasolMap.svg" alt="" className="w-full" />
                        {/* <button type="submit" className={`bg-white w-[284px] absolute bottom-[116px] left-36 py-6 text-black p-2.5 text-xl rounded-full mt-12 mx-auto flex justify-center hover:bg-white/95`}>
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