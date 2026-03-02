import { motion, type Variants } from "framer-motion";

interface TestimonialProps {
    name: string;
    role: string;
    quote: string;
    avatar?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Testimonial = ({ name, role, quote, avatar }: TestimonialProps) => {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-b from-white/90 to-white/95 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-3xl transition-all duration-300"
        >
            {/* Avatar */}
            {avatar && (
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1F262B] shadow-md">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Quote */}
            <p className="text-[#1F262B] sm:text-base text-sm font-medium italic relative px-4">
                <span className="text-3xl text-[#36454F] absolute -left-2 -top-2">“</span>
                {quote}
                <span className="text-3xl text-[#36454F] absolute -right-2 -bottom-2">”</span>
            </p>

            {/* Name & Role */}
            <div className="mt-4">
                <h4 className="text-[#1F262B] font-semibold sm:text-lg text-base">{name}</h4>
                <p className="text-[#36454F] sm:text-sm text-xs">{role}</p>
            </div>
        </motion.div>
    );
};

export default Testimonial;