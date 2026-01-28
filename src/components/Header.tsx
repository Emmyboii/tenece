import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Logo2 from "../assets/Logo2.svg";
import { motion, type Variants } from "framer-motion";

const navOpt = [
    { name: "HOME", link: "/" },
    { name: "PROJECTS", link: "/projects" },
    { name: "ABOUT US", link: "/about" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT US", link: "/contact" },
];

const headerVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


const Header = () => {
    const [open, setOpen] = useState(false);

    const location = window.location.pathname;
    const contactURL =
        location === "/contact" || location.startsWith("/blog/");

    const projectURL = location === '/projects'

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className={`relative border-b ${contactURL ? "border-[#1F262B]" : "border-white"
                }`}
        >
            {/* TOP BAR */}
            <div className="flex items-center justify-between py-10 pb-6 mx-9 3xl:max-w-[1512px]  3xl:mx-auto">
                {/* LOGO */}
                <motion.a variants={itemVariants} href="/">
                    <img src={contactURL ? Logo2 : Logo} alt="Logo" />
                </motion.a>

                {/* DESKTOP NAV */}
                <motion.nav
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    className="hidden lg:flex gap-12"
                >
                    {navOpt.map((item) => (
                        <motion.a
                            variants={itemVariants}
                            key={item.name}
                            href={item.link}
                            onClick={() => window.scrollTo(0, 0)}
                            className={`relative ${contactURL ? "text-black" : "text-white"}
                                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                                after:w-0 after:bg-current after:transition-all after:duration-300
                                hover:after:w-full`
                            }
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </motion.nav>

                {/* DESKTOP CTA */}
                <motion.a
                    variants={itemVariants}
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hidden lg:block px-5 py-4 rounded-full hover:bg-white/95 ${contactURL ? "bg-black text-white" : "bg-white text-black"
                        }`}
                >
                    BOOK A VISIT
                </motion.a>


                {/* HAMBURGER */}
                <button
                    className={`lg:hidden text-3xl ${projectURL ? "text-white" : 'text-black'}`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`lg:hidden absolute top-full left-0 w-full z-50 ${contactURL ? "bg-white" : "bg-[#36454FB2]"
                        }`}
                >
                    <div className="flex flex-col items-center gap-8 py-10">
                        {navOpt.map((item, index) => (
                            <motion.a
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.08 }}
                                key={item.name}
                                href={item.link}
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    setOpen(false)
                                }}
                                className={`relative text-lg ${contactURL ? "text-black" : "text-white"}
                                        after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                                        after:w-0 after:bg-current after:transition-all after:duration-300
                                        hover:after:w-full`
                                }
                            >
                                {item.name}
                            </motion.a>
                        ))}

                        <a
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className={`px-6 py-4 rounded-full ${contactURL
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            BOOK A VISIT
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
