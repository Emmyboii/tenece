
interface BelowHeroHomeAndMirasolProps {
    text?: string;
    text2?: string;
    image?: string;
    subText?: string
    textColor?: string
}

const BelowHeroHomeAndMirasol = ({ text, text2, image, subText, textColor }: BelowHeroHomeAndMirasolProps) => {
    return (
        <div className={`sm:py-20 py-10 gri flex lg:flex-row flex-col justify-between lg:items-start items-center grid-cols-3 gap-8 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto ${textColor === 'black' ? 'text-black':'text-white'}`}>
            <div>
                <h1 className="xl:text-[40px] sm:text-[31px] text-[26px] font-playfair font-medium lg:max-w-[290px] lg:text-start text-center xl:mt-[117px] lg:mt-[87px]">{text}</h1>
                <h1 className="xl:text-[40px] sm:text-[31px] text-[26px] font-playfair font-medium lg:max-w-[380px] lg:text-start text-center lg:mt-[6px]">{text2}</h1>
            </div>
            <img
                src={image}
                alt="future"
                className="xl:w-[471px] w-[310px]"
            />
            <h1 className="sm:text-base text-sm font-medium lg:max-w-[370px] lg:text-start text-center xl:mt-[261px] lg:mt-[200px]">
                {subText}
            </h1>
        </div>
    )
}

export default BelowHeroHomeAndMirasol