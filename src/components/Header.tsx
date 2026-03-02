import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Logo2 from "../assets/Logo2.svg";
import Logo3 from "../assets/Logo3.png";
import { motion, type Variants, AnimatePresence } from "framer-motion";

const navOpt = [
    { name: "HOME", link: "/" },
    {
        name: "PROJECTS",
        link: "/projects",
        dropdown: [
            { name: "Mirasol", link: "/projects/mirasol" },
            { name: "Hexa Homes", link: "/projects/hexahomes" },
        ],
    },
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
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

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
            <div className="flex items-center justify-between sm:py-10 py-4 sm:pb-6 mx-9 3xl:max-w-[1512px]  3xl:mx-auto">
                {/* LOGO */}
                <motion.a variants={itemVariants} href="/">
                    <img src={contactURL ? Logo2 : projectURL ? Logo3 : Logo} alt="Logo" />
                </motion.a>

                {/* DESKTOP NAV */}
                <motion.nav
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    className="hidden lg:flex gap-12"
                >
                    {navOpt.map((item) => (
                        <motion.div
                            key={item.name}
                            variants={itemVariants}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {/* Main Link */}
                            <a
                                href={item.link}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`relative ${contactURL ? "text-black" : "text-white"}
                                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                                    after:w-0 after:bg-current after:transition-all after:duration-300
                                    hover:after:w-full`}
                            >
                                {item.name}
                            </a>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.25 }}
                                        className="absolute left-0 top-0.5 mt-6
                                            w-56 rounded-2xl shadow-2xl
                                            bg-white border border-gray-200 z-50"
                                    >
                                        <div className="flex flex-col py-4">
                                            {item.dropdown.map((sub) => (
                                                <a
                                                    key={sub.name}
                                                    href={sub.link}
                                                    onClick={() => window.scrollTo(0, 0)}
                                                    className="px-6 py-3 text-sm text-gray-800
                                               hover:bg-black hover:text-white
                                               transition-all duration-300"
                                                >
                                                    {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
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
                            <div key={item.name} className="flex flex-col items-center">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setMobileDropdown(
                                                    mobileDropdown === item.name ? null : item.name
                                                )
                                            }
                                            className={`text-lg ${contactURL ? "text-black" : "text-white"}`}
                                        >
                                            {item.name}
                                        </button>

                                        <AnimatePresence>
                                            {mobileDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden flex flex-col items-center mt-3 gap-4"
                                                >
                                                    {item.dropdown.map((sub) => (
                                                        <a
                                                            key={sub.name}
                                                            href={sub.link}
                                                            onClick={() => {
                                                                window.scrollTo(0, 0);
                                                                setOpen(false);
                                                                setMobileDropdown(null);
                                                            }}
                                                            className={`text-base ${contactURL ? "text-black" : "text-white"}`}
                                                        >
                                                            {sub.name}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <motion.a
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.08 }}
                                        href={item.link}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            setOpen(false);
                                        }}
                                        className={`relative text-lg ${contactURL ? "text-black" : "text-white"}`}
                                    >
                                        {item.name}
                                    </motion.a>
                                )}
                            </div>
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
