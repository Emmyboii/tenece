
interface BelowHeroHomeAndMirasolProps {
    text?: string;
    text2?: string;
    image?: string;
    subText?: string
    textColor?: string
}

const BelowHeroHomeAndMirasol = ({ text, text2, image, subText, textColor }: BelowHeroHomeAndMirasolProps) => {
    return (
        <div className={`px- py-20 gri flex justify-between grid-cols-3 gap-8 max-w-[1512px] mx-auto ${textColor === 'black' ? 'text-black':'text-white'}`}>
            <div>
                <h1 className="text-[40px] font-playfair font-medium max-w-[290px] mt-[117px]">{text}</h1>
                <h1 className="text-[40px] font-playfair font-medium max-w-[380px] mt-[6px]">{text2}</h1>
            </div>
            <img
                src={image}
                alt="future"
                className="w-[471px]"
            />
            <h1 className="text-base font-medium max-w-[370px] mt-[261px]">
                {subText}
            </h1>
        </div>
    )
}

export default BelowHeroHomeAndMirasol