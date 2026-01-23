
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
            <img src={image} alt="" className={`w-full rounded-md ${height === '3rd' && 'h-[722px]'}`} />
            <div className={`absolute text-white bg-[#031E424D] backdrop-blur-sm bottom-0 w-full p-4 px-8 ${rounded && 'rounded-md'}`}>
                <p className="font-medium text-2xl font-poppins">{name}</p>
                <p className="font-normal font-poppins">{position}</p>
            </div>
        </div>
    )
}

export default OurTeamImg