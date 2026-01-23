import ContactLayout from '../components/ContactLayout'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HexaHomesLayout from '../components/HexaHomesLayout'
import MirasolLayout from '../components/MirasolLayout'

const Projects = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero
                heroImage="/src/assets/projectHero.svg"
                heroText="Transforming Ideas into Exceptional Spaces"
                subText="We blend creativity, functionality, and innovation to design spaces that inspire, engage, and elevate everyday living."
            />

            <div className="bg-[#C0C0C0]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-16 text-center">Our Signature Developments</h1>

                    <MirasolLayout />
                </div>
            </div>

            <div className="px- py-20 max-w-[1512px] mx-auto">
                <HexaHomesLayout />
            </div>

            <div className="bg-[#eeeeee]">
                <div className="px- py-20 max-w-[1512px] mx-auto">
                    <div className="max-w-[980px] text-center mx-auto mb-16">
                        <h1 className="text-[40px] font-playfair font-medium text-[#1F262B] mb-4 text-center">Let’s Build a Landmark Together</h1>
                        <p>From luxury smart homes to signature estates, we bring deep expertise, innovation, and precision craftsmanship to every project. Whether you’re building your dream residence or a legacy investment, we’re here to exceed expectations.</p>
                    </div>

                    <ContactLayout />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Projects