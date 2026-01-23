import { FaFacebookSquare, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="bg-[#1F262B] text-white py-20">
            <div className="px- py-20 max-w-[1512px] mx-auto flex justify-between gap-4">
                <div className="flex flex-col gap-6 col-span-2 w-1/2">
                    <h1 className="text-2xl font-medium">TENECE REAL ESTATE</h1>
                    <a href="/" className="text-xl font-medium">Home</a>
                    <a href="/about" className="text-xl font-medium">About Us</a>
                    <a href="/gallery" className="text-xl font-medium">Gallery</a>
                    <a href="/contact" className="text-xl font-medium">Contact Us</a>
                </div>

                <div className="flex flex-col gap-6 col-span-2 w-1/2">
                    <h1 className="text-2xl font-medium">PROJECTS</h1>
                    <a href="/projects/mirasol" className="text-xl font-medium">The Mirasol</a>
                    <a href="/projects/hexahomes" className="text-xl font-medium">Hexa Homes</a>
                    <a href="/" className="text-xl font-medium invisible">Gallery</a>
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

                <div className="flex flex-col gap-6 col-span-3 w-[50%]">
                    <h1 className="text-2xl font-medium">SUBSCRIBE</h1>
                    <p className="text-xl font-medium">Join our newsletter to stay up to date on exclusive living</p>

                    <input
                        type="text"
                        className="bg-white rounded-xl py-5 px-4 mt-4"
                        name=""
                        id=""
                        title="newsletter"
                        placeholder="Enter your Email Address"
                    />

                    <button type="submit" className="bg-white text-black px-5 py-4 rounded-full hover:bg-white/95 border border-white w-[176px] mt-6">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center text-xl gap-3">
                <FaRegCopyright />
                <p>2025 Tenece Real Estate. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer