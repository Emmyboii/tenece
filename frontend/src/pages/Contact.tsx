import ContactLayout from "../components/ContactLayout"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-[#eeeeee]">
                <Header />
                <div className="py-28 pt-36 3xl:max-w-[1512px]  sh:mx-9 mx-4 3xl:mx-auto">
                    <ContactLayout />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact