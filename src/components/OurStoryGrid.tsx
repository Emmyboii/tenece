
interface OurStoryGridProps {
    image?: string;
    title?: string;
    text?: string
}

const OurStoryGrid = ({ image, title, text }: OurStoryGridProps) => {

    const location = window.location.pathname

    return (
        <div className="flex items-center justify-between gap-5 mt-20 text-[#1F262B]">
            <img src={image} alt="" className={`${location === '/blog' && 'w-[548px] rounded-[4px]'}`} />
            <div className={`space-y-7 max-w-[678px] ${location === '/blog' && 'max-w-[527px]'}`}>
                <p className={`${location === '/blog' ? 'text-[40px] font-medium' : 'font-playfair text-[64px] font-semibold'}`}>{title}</p>
                <p className={`${location === '/blog' ? 'text-xl font-normal' : 'text-2xl font-normal leading-relaxed'}`}>{text}</p>
            </div>
        </div>
    )
}

export default OurStoryGrid