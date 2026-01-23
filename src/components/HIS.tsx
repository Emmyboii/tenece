interface HISProps {
    icon?: string
    title?: string
    description?: string
    index: number;
    normal?: boolean;
}

const HIS = ({ icon, title, description, index, normal }: HISProps) => {

    const layoutMap: Record<number, string> = {
        0: "col-start-1 col-span-4 row-start-1",
        1: "col-start-5 col-span-4 row-start-1",
        2: "col-start-9 col-span-4 row-start-1",

        // Touchless Access (tall right card)
        3: "col-start-13 col-span-4 row-start-1 row-span-2",

        4: "col-start-1 col-span-4 row-start-2",
        5: "col-start-5 col-span-4 row-start-2",
        6: "col-start-9 col-span-4 row-start-2",
    }

    if (normal) {
        return (
            <div
                className={`flex flex-col items-center text-center justify-center rounded-md p-4 w-[360px] h-[280px] gap-4 bg-white/40 backdrop-blur-md`}
            >
                <img src={icon} alt={title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-medium text-black">{title}</h3>
                <p className="text-base text-black font-normal">
                    {description}
                </p>
            </div>
        )
    } else {
        return (
            <div
                className={`flex flex-col items-center text-center justify-center rounded-md px-20 py-20 gap-4 bg-white/40 backdrop-blur-md ${layoutMap[index]}`}
            >
                <img src={icon} alt={title} className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-medium text-black">{title}</h3>
                <p className="text-base text-black font-normal">
                    {description}
                </p>
            </div>
        )
    }

}

export default HIS
