import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Logo2 from "../assets/Logo2.svg";

const navOpt = [
    { name: "HOME", link: "/" },
    { name: "PROJECTS", link: "/projects" },
    { name: "ABOUT US", link: "/about" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT US", link: "/contact" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const location = window.location.pathname;
    const contactURL =
        location === "/contact" || location.startsWith("/blog/");

    const projectURL = location === '/projects'

    return (
        <header
            className={`relative border-b ${contactURL ? "border-[#1F262B]" : "border-white"
                }`}
        >
            {/* TOP BAR */}
            <div className="flex items-center justify-between py-10 pb-6 mx-9 3xl:max-w-[1512px]  3xl:mx-auto">
                {/* LOGO */}
                <a href="/">
                    <img src={contactURL ? Logo2 : Logo} alt="Logo" />
                </a>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex gap-12">
                    {navOpt.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => window.scrollTo(0, 0)}
                            className={`${contactURL ? "text-black" : "text-white"
                                } hover:text-blue-500`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* DESKTOP CTA */}
                <a
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hidden lg:block px-5 py-4 rounded-full hover:bg-white/95 ${contactURL
                        ? "bg-black text-white"
                        : "bg-white text-black"
                        }`}
                >
                    BOOK A VISIT
                </a>

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
                <div
                    className={`lg:hidden absolute top-full left-0 w-full z-50 ${contactURL ? "bg-white" : "bg-[#36454FB2]"
                        }`}
                >
                    <div className="flex flex-col items-center gap-8 py-10">
                        {navOpt.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    setOpen(false)
                                }}
                                className={`text-lg ${contactURL ? "text-black" : "text-white"
                                    } hover:text-blue-500`}
                            >
                                {item.name}
                            </a>
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
                </div>
            )}
        </header>
    );
};

export default Header;
