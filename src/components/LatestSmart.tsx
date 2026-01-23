
interface LatestSmartProps {
    image?: string;
    text?: string;
    index: number
}

const LatestSmart = ({ image, text, index }: LatestSmartProps) => {

    const layoutMap: Record<number, string> = {
        0: "col-start-1 row-start-1",
        1: "col-start-2 row-start-1",
        2: "col-start-1 col-span-2 row-start-2",
    }

    const heightClass = index === 2 ? "h-[600px]" : "h-[500px]"

    const lastItem = index === 2


    return (
        <div
            className={`relative mt-20 ${heightClass} ${layoutMap[index]}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-[#244975]" />

            <p className={`absolute bottom-6 left-6 right-6 text-white font-medium ${lastItem ? "max-w-[500px]" : "max-w-[450px]"}`}>
                {text}
            </p>
        </div>
    )
}

export default LatestSmart