
interface UniqueFeaturesProps {
    text?: string;
    subText?: string;
    width?: boolean;
}

const UniqueFeatures = ({ text, subText, width }: UniqueFeaturesProps) => {
    return (
        <div className={`bg-white rounded-md p-4 text-[#1F262B] space-y-3 py-10 ${width && 'w-[380px] h-[215px]'}`}>
            <p className="text-xl font-medium">{text}</p>
            <p className="text-base font-normal">{subText}</p>
        </div>
    )
}

export default UniqueFeatures