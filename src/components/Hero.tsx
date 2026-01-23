import { FiArrowDownCircle } from "react-icons/fi";
import homeHero from "../assets/HomeHero.svg";
import Header from "./Header";

interface HeroProps {
    heroImage?: string;
    heroText?: string;
    heroText2?: string;
    subText?: string;
    cta?: string;
}

const Hero = ({ heroImage, heroText, heroText2, subText, cta }: HeroProps) => {

    const location = window.location.pathname;

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${heroImage || homeHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="px- pb-28"
            >
                <Header />
                <div className={`max-w-[1512px] mx-auto ${(location.includes('/mirasol') || location.includes('/hexahomes')) ? 'mt-[255px] mb-[230px] space-y-5' : 'mt-[320px] space-y-8 '}`}>
                    <h1 className={`text-[76px] font-semibold font-playfair text-white max-w-[1000px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto"}`}>{heroText}</h1>
                    <h1 className={`text-[32px] font-medium text-white max-w-[1000px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto"}`}>{heroText2}</h1>
                    <p className={`text-xl font-medium text-white max-w-[730px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto max-w-[603px]"}`}>{subText}</p>

                    {location === "/about" || location.includes('/mirasol') || location.includes('/hexahomes') ? (
                        <button type="submit" className={`bg-white w-[224px] text-black p-2.5 text-xl rounded-full mt-4 hover:bg-white/95 ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "flex justify-center mx-auto w-[261px] p-3"}`}>
                            {cta}
                        </button>
                    ) : location === '/' ? (
                        <div className="flex cursor-pointer items-center gap-3 text-xl text-white font-normal">
                            SCROLL
                            <FiArrowDownCircle className="text-2xl" />
                        </div>
                    ) : (
                        null
                    )}
                </div>

            </div>
        </>
    )
}

export default Hero