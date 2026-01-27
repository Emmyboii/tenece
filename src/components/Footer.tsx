import { FaFacebookSquare, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="bg-[#1F262B] text-white sm:py-20 py-10">
            <div className="sm:py-20 py-10 3xl:max-w-[1512px] sh:mx-9 mx-4 3xl:mx-auto mf:flex grid md:grid-cols-2 md:justify-between justify-center md:items-start items-center mf:gap-4 gap-10 gap-y-14">
                <div className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center">
                    <h1 className="mh:text-2xl text-xl font-medium md:text-start text-center">TENECE REAL ESTATE</h1>
                    <a href="/" className="mh:text-xl font-normal">Home</a>
                    <a href="/about" className="mh:text-xl font-normal">About Us</a>
                    <a href="/gallery" className="mh:text-xl font-normal">Gallery</a>
                    <a href="/contact" className="mh:text-xl font-normal">Contact Us</a>
                </div>

                <div className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center">
                    <h1 className="mh:text-2xl text-xl font-medium">PROJECTS</h1>
                    <a href="/projects/mirasol" className="mh:text-xl font-normal">The Mirasol</a>
                    <a href="/projects/hexahomes" className="mh:text-xl font-normal">Hexa Homes</a>
                    <a href="/" className="mh:text-xl font-normal invisible">Gallery</a>
                    <div className="flex items-center gap-4">
                        <a href="https://instagram.com" title="instagram" target="_blank" rel="noopener">
                            <FaInstagram className="text-white size-8" />
                        </a>
                        <a href="https://linkedin.com" title="linkedin" target="_blank" rel="noopener">
                            <FaLinkedin className="text-white size-8" />
                        </a>
                        <a href="https://facebook.com" title="facebook" target="_blank" rel="noopener">
                            <FaFacebookSquare className="text-white size-8" />
                        </a>
                        <a href="https://twitter.com" title="twitter" target="_blank" rel="noopener">
                            <FaSquareXTwitter className="text-white size-8" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mf:w-1/2 md:items-start items-center">
                    <h1 className="mh:text-2xl text-xl font-medium">SUBSCRIBE</h1>
                    <p className="mh:text-xl font-normal md:text-start text-center">Join our newsletter to stay up to date on exclusive living</p>

                    <input
                        type="text"
                        className="bg-white w-full rounded-xl py-5 px-4 mh:mt-4"
                        name=""
                        id=""
                        title="newsletter"
                        placeholder="Enter your Email Address"
                    />

                    <button type="submit" className="bg-white text-black px-5 py-4 rounded-full hover:bg-white/95 border border-white lg:w-[176px] w-[135px] mh:mt-6">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="flex items-center text-center justify-center sm:text-xl text-[17px] gap-3">
                <FaRegCopyright />
                <p>{`2025 Tenece Real Estate. All rights reserved`}</p>
                {/* <p>{`${new Date().getFullYear()} Tenece Real Estate. All rights reserved`}</p> */}
            </div>
        </div>
    )
}

export default Footer