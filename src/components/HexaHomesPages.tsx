import Hero from "./Hero"
import luxury1 from "../assets/luxury1.svg";
import luxury2 from "../assets/luxury2.svg";
import UniqueFeatures from "./UniqueFeatures";
import HIS from "./HIS";
import kitchen from "../assets/kitchen.svg";
import LOT from "./LOT";
import ContactLayout from "./ContactLayout";
import Footer from "./Footer";

const HexaHomesPages = () => {

  const HISData = [
    { icon: "/src/assets/hexaIcon1.svg", title: "Four Bedroom En-suite", description: "Spacious, private retreats with individual bathrooms designed for personal comfort and elegance." },
    { icon: "/src/assets/hexaIcon2.svg", title: "Two Living Areas", description: "An expansive ground-floor living room and a private lounge designed for hosting and unwinding." },
    { icon: "/src/assets/hexaIcon3.svg", title: "Two Walk-in Closets", description: "Luxurious, custom-fitted dressing spaces for an organized, indulgent lifestyle." },
    { icon: "/src/assets/hexaIcon4.svg", title: "An Elevator Shaft", description: "Future-ready vertical mobility with space to install a personal lift connecting all floors." },
    { icon: "/src/assets/hexaIcon5.svg", title: "An Office / Study", description: "A private, sound-conscious workspace ideal for productivity, reading, or meetings." },
    { icon: "/src/assets/hexaIcon6.svg", title: "Dry & Wet Kitchen Area", description: "Dual-kitchen layout for style and practicality — one for show, one for real cooking." },
    { icon: "/src/assets/hexaIcon7.svg", title: "A Multipurpose Room", description: "Customizable space perfect for a home gym, theater, or guest suite." },
    { icon: "/src/assets/hexaIcon8.svg", title: "Laundry Area", description: "Dedicated utility space for seamless, discreet clothing care." },
    { icon: "/src/assets/hexaIcon9.svg", title: "Green Area", description: "A private pocket of nature to relax, recharge, or host outdoors." },
    { icon: "/src/assets/hexaIcon10.svg", title: "Three Car Garages", description: "Secure, spacious garage for up to 3 vehicles with smooth access." },
    { icon: "/src/assets/hexaIcon11.svg", title: "Laminated Glass Staircase", description: "Statement staircase combining elegance, safety, and light." },
    { icon: "/src/assets/hexaIcon12.svg", title: "A Box Room", description: "A compact storage room for seasonal items, luggage, or valuables.." },
    { icon: "/src/assets/hexaIcon13.svg", title: "Uninterrupted Power Supply", description: "A private pocket of nature to relax, recharge, or host outdoors." },
    { icon: "/src/assets/hexaIcon14.svg", title: "Uninterrupted Water Supply", description: "Secure, spacious garage for up to 3 vehicles with smooth access." },
    { icon: "/src/assets/hexaIcon15.svg", title: "Security Surveillance System", description: "Statement staircase combining elegance, safety, and light." },
    { icon: "/src/assets/hexaIcon16.svg", title: "Fibre-to-the-home", description: " A compact storage room for seasonal items, luggage, or valuables." },
  ]

  const LOTData = [
    { imageUrl: "/src/assets/hexa9.svg", subText: "Doors" },
    { imageUrl: "/src/assets/hexa10.svg", subText: "Curtains", reverse: true },
    { imageUrl: "/src/assets/hexa11.svg", subText: "Appliances" },
    { imageUrl: "/src/assets/hexa12.svg", subText: "Gates", reverse: true },
  ]

  return (
    <div className="overflow-x-hidden">
      <Hero
        heroImage="/src/assets/hexaHero.svg"
        heroText="HexaHomes"
        heroText2="Where innovation meets Elegance"
        subText="A deluxe home with upscale infrastructure in an exclusive location."
        cta="Schedule Private Tour"
      />

      <div className="bg-[#EEEEEE]">
        <div className="px- py-20 max-w-[1512px] mx-auto flex items-center justify-between gap-8">
          <div className="relative">
            <img src={luxury1} alt="" />
            <img src={luxury2} alt="" className="absolute top-1/2 -translate-y-1/2 left-[400px]" />
          </div>

          <div className="max-w-[700px]">
            <h1 className="text-[40px] font-playfair font-medium text-[#1F262B]">Our Unique Features</h1>
            <p className="font-normal font-poppins mt-6">
              Our projects made with the finest quality materials, world-class infrastructure, and some of the most sophisticated,
              state-of-the-art security protocols and advanced home automation
            </p>

            <div className="flex items-center gap-4 mt-10 mb-4">
              <UniqueFeatures
                text="Spacious and Elegant"
                subText="Designed for utmost comfort. Enjoy the best family experiences without restriction."
                width
              />
              <UniqueFeatures
                text="Stunning & Sophisticatedt"
                subText="Built to contemporary taste with aesthetic features, designed to the high standards of comfort, style and sustainability."
                width
              />
            </div>
            <div className="mb-4">
              <UniqueFeatures
                text="Tech Enabled"
                subText="Be in control of your home. Our tech-enabled homes make your life easier, filled with comfort and ensures peace of mind. Monitor and control everything, including doors, curtains, electrical appliances, and gates using a smartphone or tablet."
              />
            </div>
            <UniqueFeatures
              text="Exquisite Architecture"
              subText="Upscale luxury with aesthetic features such as concealed roofs, glass railings, high ceilings, sky lighting and a green area."
            />
          </div>
        </div>
      </div>

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


        <div className="relative z-10 py-20 px- max-w-[1512px] mx-auto">
          <h1 className="text-[40px] font-playfair font-medium text-white mb-16 text-center">
            Triplex Home Excellence
          </h1>

          <div className="grid grid-cols-4 gap-x-5 gap-y-10 relative z-10">
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

          <button type="submit" className={`bg-white w-[244px] py-3 text-black p-2.5 text-xl rounded-full mt-12 mx-auto flex justify-center hover:bg-white/95`}>
            Download Brochure
          </button>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="px- py-20 max-w-[1512px] mx-auto">
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-[753px]">
              <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] max-w-[703px]">Designed for the Few Who Live Ahead of the Curve</h1>
              <p className="text-[24px] font-normal text-[#1F262B] mt-5 leading-loose">
                HexaHomes isn’t a mass-produced home. We craft lasting assets — with limited availability — for individuals who understand
                the value of timing, location, and legacy. <br /> Every HexaHome is a statement of refined intelligence:
              </p>

              <div className="mt-5 flex items-center gap-4">
                <img src="/src/assets/hexaIcon17.svg" alt="" />
                <p className="text-xl font-normal">Built with the highest-grade materials</p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <img src="/src/assets/hexaIcon18.svg" alt="" />
                <p className="text-xl font-normal">Powered by smart automation</p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <img src="/src/assets/hexaIcon19.svg" alt="" />
                <p className="text-xl font-normal">Framed to hold generational value</p>
              </div>
            </div>

            <img src="/src/assets/hexa1.svg" alt="" />
          </div>

          <div className="relative">
            <img src="/src/assets/hexa2.svg" alt="" className="w-full mt-10" />
            <div className="absolute text-white bg-[#031E424D] backdrop-blur-sm bottom-0 right-0 w-[702px] p-4 px-12">
              <p className="font-normal">
                “This isn’t a home you upgrade — it’s one you pass down. Reserved for a select few, HexaHomes offers
                the kind of exclusivity money alone can’t buy — a timeless statement of status, built to remain rare.”
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#EEEEEE]">
        <div className="px- py-20 max-w-[1512px] mx-auto">
          <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] text-center">Just 6 Private Units. No More, No Later.</h1>
          <p className="font-normal font-poppins mt-6 text-center">
            In a world of noise and excess, true luxury is defined by what’s rare. <br /> HexaHomes is a limited collection of 6 bespoke triplexes — and every one is uniquely crafted.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-16">
            <img src="/src/assets/hexa3.svg" alt="" className="w-full" />
            <img src="/src/assets/hexa4.svg" alt="" className="w-full" />
            <img src="/src/assets/hexa5.svg" alt="" className="w-full" />
            <img src="/src/assets/hexa6.svg" alt="" className="w-full" />
            <img src="/src/assets/hexa7.svg" alt="" className="w-full" />
            <img src="/src/assets/hexa8.svg" alt="" className="w-full" />
          </div>

          <button type="submit" className={`bg-black w-[264px] text-white p-2.5 py-3 text-xl rounded-full mt-12 mx-auto flex justify-center hover:bg-black/95`}>
            Join the Property List
          </button>
        </div>
      </div>

      <div className="bg-[#1F262B] text-white">
        <div className="px- py-20 max-w-[1512px] mx-auto">
          <h1 className="text-[40px] font-playfair font-medium text-[#ffffff] text-center">Live in Sync With Your Home</h1>
          <p className="font-normal font-poppins mt-6 text-center">
            Designed with intelligent automation at its core, every system responds to your preferences in real time. <br /> With a single app, you control your entire home environment — effortlessly.
          </p>

          <div className="grid grid-cols-4 gap-[76px] mt-20">
            {LOTData.map((lot, index) => (
              <LOT
                key={index}
                imageUrl={lot.imageUrl}
                subText={lot.subText}
                reverse={lot.reverse}
                textColor
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="px- pt-20 max-w-[1512px mx-auto">
          <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] text-center">The Right Place; The Right Time</h1>
          <p className="font-normal font-poppins mt-6 text-center">
            Centrally located in Lekki Phase 1 — minutes from fine dining, world-class schools, and Lagos’ tech and business district — <br /> HexaHomes is positioned for those who thrive at the center of culture and capital.
          </p>
          <img src="/src/assets/hexaMap.svg" alt="" className="w-full" />
        </div>
      </div>

      <div className="bg-[#eeeeee]">
        <div className="px- py-20 max-w-[1512px] mx-auto">
          <div className="text-center mx-auto mb-16">
            <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-4 text-center">A Limited Opportunity for Those Who Think Long-Term.</h1>
            <p>There are homes. There are investments. And then there’s HexaHomes. <br /> 12 residences. Lifetime value. Tailored for those who appreciate modern luxury and smart living</p>
          </div>

          <ContactLayout />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default HexaHomesPages