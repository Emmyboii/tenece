
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
    <div className={`${reverse && textFont !== 'playfair' ? 'sd:flex-col-reverse flex-col' : 'flex-col'} ${reverse && textFont === 'playfair' ? 'md:flex-col-reverse flex-col' : 'flex-col'} flex sd:items-start items-center sm:gap-6 text-[#1F262B] ${center ? 'items-center' : ''}`}>
      {imageUrl && <img src={imageUrl} alt="LOT" className={`w-[600px] sd:h-auto h-[600px] rounded-md ${subTextFont === 'norms' && 'w-[400px]'} ${(subTextFont === 'norm' || subTextFont === 'norms') && 'w-auto h-[450px]'} ${subTextFont === '' && 'h-auto'}`} />}
      <div className="lg:space-y-5 sm:space-y-3 space-y-1 sd:text-start text-center">
        {text && <h2 className={`${textFont === "bricolage" ? "font-bricolage mk:text-[75px] sm:text-[60px] text-[43px] font-medium" : textFont === 'playfair' ? "font-playfair mk:text-[64px] sm:text-[45px] text-[32px] font-semibold" : ''}`}>{text}</h2>}
        {subText && <p className={`${textColor ? 'text-white' : 'text-[#1F262B]'} ${subTextFont === 'manrope' ? 'font-manrope font-medium sd:max-w-[290px]' : subTextFont === 'norm' ? 'sm:text-[24px] text-[18px] font-normal' : subTextFont === 'norms' ? 'sm:text-[16px] text-sm font-medium' : 'sm:text-[21px] mt-2 text-[18px] text-center font-medium'}`}>{subText}</p>}
      </div>
    </div>
  )
}

export default LOT