
interface OurTeamImgProps {
    image?: string;
    name?: string;
    position?: string;
    height?: string;
    rounded?: boolean;
}

const OurTeamImg = ({ image, name, position, height, rounded }: OurTeamImgProps) => {
    return (
        <div className="relative">
            <img src={image} alt="" className={`sh:w-full w-screen rounded-md ${height === '3rd' && '2xl:h-[722px] rx:h-[640px] rk:h-[500px] md:h-fit sm:h-[440px] h-[360px]'}`} />
            <div className={`absolute text-white bg-[#031E424D] backdrop-blur-sm bottom-0 w-full p-4 px-8 ${rounded && 'rounded-md'}`}>
                <p className="font-medium rk:text-2xl sm:text-xl font-poppins">{name}</p>
                <p className="font-normal font-poppins">{position}</p>
            </div>
        </div>
    )
}

export default OurTeamImg