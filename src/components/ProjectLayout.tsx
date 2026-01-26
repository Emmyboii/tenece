import { useNavigate } from "react-router-dom";

interface ProjectLayoutProps {
    text?: string;
    subText?: string;
    cta?: string;
    ctaLink?: string;
    smallImg?: string;
    largeImg?: string;
    reverse?: boolean;
}

const ProjectLayout = ({ text, subText, cta, ctaLink, smallImg, largeImg, reverse }: ProjectLayoutProps) => {

    const navigate = useNavigate()

    return (
        <div>
            <div className={"flex lg:flex-row flex-col gap-4 justify-between lg:items-start items-center" + (reverse ? " flex-row-reverse" : "")}>
                <div className="lg:text-start text-center mb-2 lg:mb-0">
                    <h2 className="mk:mk:text-[64px] sm:text-[45px] text-[32px] font-playfair font-medium text-[#1F262B]">{text}</h2>
                    <p className="sm:text-base text-sm font-medium text-[#1F262B] mt-4">{subText}</p>
                    <button onClick={() => ctaLink && navigate(ctaLink)} type="submit" className="bg-black sm:text-base text-sm text-white py-4 px-5 rounded-full mt-4 hover:bg-black/95">
                        {cta || "EXPLORE OUR PROJECTS"}
                    </button>
                </div>
                <div className="">
                    <img src={smallImg} className="w-screen lg:w-auto" alt={text} />
                </div>
            </div>
            <div className="mt-8">
                <img src={largeImg} alt={text} className="w-full" />
            </div>
        </div>
    )
}

export default ProjectLayout