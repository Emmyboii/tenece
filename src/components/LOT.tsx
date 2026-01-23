
interface LOTProps {
  imageUrl?: string;
  text?: string;
  subText?: string;
  reverse?: boolean;
  center?: boolean;
  textFont?: string;
  subTextFont?: string;
  textColor?: boolean;
}

const LOT = ({ imageUrl, text, subText, reverse, center, textFont, subTextFont, textColor }: LOTProps) => {
  return (
    <div className={`${reverse ? 'flex-col-reverse' : 'flex-col'} flex items-start gap-6 text-[#1F262B] ${center ? 'items-center' : ''}`}>
      {imageUrl && <img src={imageUrl} alt="LOT" className={`w-full h-auto rounded-md ${subTextFont === 'norms' && 'w-[400px]'}`} />}
      <div className="space-y-5">
        {text && <h2 className={`${textFont === "bricolage" ? "font-bricolage text-[75px] font-medium" : textFont === 'playfair' ? "font-playfair text-[64px] font-semibold" : ''}`}>{text}</h2>}
        {subText && <p className={`${textColor ? 'text-white' : 'text-[#1F262B]'} ${subTextFont === 'manrope' ? 'font-manrope font-medium max-w-[290px]' : subTextFont === 'norm' ? 'text-[24px] font-normal' : subTextFont === 'norms' ? 'text-[16px] font-medium' : 'text-[24px] font-medium'}`}>{subText}</p>}
      </div>
    </div>
  )
}

export default LOT