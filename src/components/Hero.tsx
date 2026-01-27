import { FiArrowDownCircle } from "react-icons/fi";
import homeHero from "../assets/HomeHero.png";
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
                className="pb-28"
            >
                <Header />
                <div className={`3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto ${(location.includes('/mirasol') || location.includes('/hexahomes')) ? 'mt-[255px] mb-[230px] space-y-5' : 'mt-[320px] space-y-8 '}`}>
                    <h1 className={`mf:text-[76px] md:text-[60px] text-[40px] font-semibold font-playfair text-white max-w-[1000px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto"}`}>{heroText}</h1>
                    <h1 className={`mf:text-[32px] md:text-[20px] text-base font-medium text-white max-w-[1000px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto"}`}>{heroText2}</h1>
                    <p className={`md:text-xl text-base font-medium text-white max-w-[730px] ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "text-center mx-auto max-w-[603px]"}`}>{subText}</p>

                    {location === "/about" || location.includes('/mirasol') || location.includes('/hexahomes') ? (
                        <button type="submit" className={`bg-white sm:w-[224px] w-[180px] text-black sm:p-4 p-2 sm:text-lg text-[16px] rounded-full mt-4 hover:bg-white/95 ${(location.includes('/mirasol') || location.includes('/hexahomes')) && "flex justify-center mx-auto w-[260px] p-3"}`}>
                            {cta}
                        </button>
                    ) : location === '/' ? (
                        <div className="flex cursor-pointer items-center gap-3 md:text-xl text-lg text-white font-normal">
                            SCROLL
                            <FiArrowDownCircle className="md:text-2xl sm:text-xl text-[17px]" />
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