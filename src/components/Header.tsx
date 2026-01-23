import Logo from "../assets/Logo.svg";
import Logo2 from "../assets/Logo2.svg";

const navOpt = [
    { name: "HOME", link: "/" },
    { name: "PROJECTS", link: "/projects" },
    { name: "ABOUT US", link: "/about" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT US", link: "/contact" },
]

const Header = () => {

    const location = window.location.pathname

    const contactURL = location === '/contact' || location.startsWith("/blog/")

    return (
        <div className={`flex items-center gap-2 justify-between py-10 pb-6 border-b max-w-[1512px] mx-auto ${contactURL ? 'border-[#1F262B]' : 'border-white'}`}>
            <a href="/">
                {contactURL ? (
                    <img src={Logo2} alt="Logo2" />
                ) : (
                    <img src={Logo} alt="Logo" />
                )}
            </a>
            <div className="flex gap-12">
                {navOpt.map((item) => (
                    <a key={item.name} href={item.link} className={` ${contactURL ? 'text-black hover:text-blue-500' : 'text-white hover:text-blue-500'}`}>
                        {item.name}
                    </a>
                ))}
            </div>
            <a href="/contact" className={`px-5 py-4 rounded-full hover:bg-white/95 ${contactURL ? 'bg-black text-white' : 'bg-white text-black'}`}>
                BOOK A VISIT
            </a>
        </div>
    )
}

export default Header