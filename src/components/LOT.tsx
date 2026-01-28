import { motion, type Variants } from "framer-motion";

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

const lotVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};


const LOT = ({ imageUrl, text, subText, reverse, center, textFont, subTextFont, textColor }: LOTProps) => {
  return (
    <motion.div
      variants={lotVariants}
      className={`${reverse && textFont !== 'playfair' ? 'sd:flex-col-reverse flex-col' : 'flex-col'}
        ${reverse && textFont === 'playfair' ? 'md:flex-col-reverse flex-col' : 'flex-col'}
        flex sd:items-start items-center sm:gap-6 text-[#1F262B]
        ${center ? 'items-center' : ''}`
      }
    >
      {imageUrl && (
        <motion.img
          variants={imageVariants}
          src={imageUrl}
          alt="LOT"
          className={`w-[600px] sd:h-auto h-[600px] rounded-md
            ${subTextFont === 'norms' && 'w-[400px] h-[400px]'}
            ${(subTextFont === 'norm' || subTextFont === 'norms') && 'w-auto h-[450px]'}
            ${subTextFont === '' && 'h-auto'}`
          }
        />
      )}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.6 },
          },
        }}
        className="lg:space-y-5 sm:space-y-3 space-y-1 sd:text-start text-center"
      >
        {text && (
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
            }}
            className={`${textFont === "bricolage" ? "font-bricolage mk:text-[75px] sm:text-[60px] text-[43px] font-medium" : textFont === 'playfair' ? "font-playfair mk:text-[64px] sm:text-[45px] text-[32px] mt-3 font-semibold" : ''}`}
          >
            {text}
          </motion.h2>
        )}

        {subText && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
            }}
            className={`${textColor ? 'text-white' : 'text-[#1F262B]'} ${subTextFont === 'manrope' ? 'font-manrope font-medium sd:max-w-[290px]' : subTextFont === 'norm' ? 'sm:text-[24px] text-[18px] font-normal' : subTextFont === 'norms' ? 'sm:text-[16px] text-sm font-medium' : 'sm:text-[21px] mt-2 text-[18px] text-center font-medium'}`}
          >
            {subText}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

export default LOT