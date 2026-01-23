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
            <div className={"flex gap-4 justify-between items-start" + (reverse ? " flex-row-reverse" : "")}>
                <div className="">
                    <h2 className="text-[64px] font-playfair font-medium text-[#1F262B]">{text}</h2>
                    <p className="text-base font-medium text-[#1F262B] mt-4">{subText}</p>
                    <button onClick={() => ctaLink && navigate(ctaLink)} type="submit" className="bg-black text-white py-4 px-5 text-xl rounded-full mt-4 hover:bg-black/95">
                        {cta || "EXPLORE OUR PROJECTS"}
                    </button>
                </div>
                <div className="">
                    <img src={smallImg} alt={text} />
                </div>
            </div>
            <div className="mt-8">
                <img src={largeImg} alt={text} className="w-full" />
            </div>
        </div>
    )
}

export default ProjectLayout