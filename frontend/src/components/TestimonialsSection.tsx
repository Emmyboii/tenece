import { motion, type Variants } from "framer-motion";
import Testimonial from "./Testimonial";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Chinwe Okoro",
            role: "CEO, FutureTech Nigeria",
            quote:
                "Working with Tenece was a game-changer. Every detail in my Hexa Homes residence reflects unmatched precision and luxury.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg?nat=ng",
        },
        {
            name: "Ahmed Bello",
            role: "Entrepreneur, Lagos",
            quote:
                "The Mirasol project exceeded expectations. The design is thoughtful, seamless, and truly luxurious. I couldn’t be happier.",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg?nat=ng",
        },
        {
            name: "Funke Adeyemi",
            role: "Investor & Real Estate Enthusiast",
            quote:
                "Tenece's homes are artistic, functional, and their smart features elevate everyday living beautifully.",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg?nat=ng",
        },
        {
            name: "Emeka Nwosu",
            role: "Business Owner, Abuja",
            quote:
                "From consultation to final handover, Tenece delivered excellence. Their smart home design is beyond impressive.",
            avatar: "https://randomuser.me/api/portraits/men/35.jpg?nat=ng",
        },
        {
            name: "Aisha Musa",
            role: "Tech Investor, Lagos",
            quote:
                "Living in a Tenece property feels like stepping into the future. The investment value and design integrity are crystal clear.",
            avatar: "https://randomuser.me/api/portraits/women/54.jpg?nat=ng",
        },
        {
            name: "Tunde Fashola",
            role: "Architect & Client",
            quote:
                "Tenece truly combines innovation with elegance. The Hexa Homes project is a masterpiece in smart residential living.",
            avatar: "https://randomuser.me/api/portraits/men/58.jpg?nat=ng",
        },
    ];

    return (
        <div className="bg-[#36454F] py-20 overflow-x-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto flex flex-col gap-12"
            >
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                    className="sm:text-[40px] text-[30px] font-playfair font-medium text-white text-center mb-10"
                >
                    What Our Clients Say
                </motion.h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {testimonials.map((t, idx) => (
                        <Testimonial
                            key={idx}
                            name={t.name}
                            role={t.role}
                            quote={t.quote}
                            // avatar={t.avatar}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialsSection;