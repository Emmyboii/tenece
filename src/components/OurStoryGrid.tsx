
interface OurStoryGridProps {
    image?: string;
    title?: string;
    text?: string
}

const OurStoryGrid = ({ image, title, text }: OurStoryGridProps) => {

    const location = window.location.pathname

    return (
        <div className="flex rx:flex-row flex-col rx:text-start text-center items-center justify-between gap-5 mt-20 text-[#1F262B]">
            <img src={image} alt="" className={`${location === '/blog' && '3xl:w-[548px] w-full rounded-[4px]'}`} />
            <div className={`space-y-7 rx:max-w-[678px] ${location === '/blog' && '3xl:max-w-[527px]'}`}>
                <p className={`${location === '/blog' ? 'mk:text-[40px] text-[29px] font-medium' : 'font-playfair mk:text-[64px] sm:text-[45px] text-[32px] font-semibold'}`}>{title}</p>
                <p className={`${location === '/blog' ? 'text-xl font-medium' : 'mh:text-2xl font-normal leading-relaxed'}`}>{text}</p>
            </div>
        </div>
    )
}

export default OurStoryGrid