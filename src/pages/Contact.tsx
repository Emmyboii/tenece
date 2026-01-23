import ContactLayout from "../components/ContactLayout"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-[#eeeeee]">
                <Header />
                <div className="px- py-28 pt-36 max-w-[1512px] mx-auto">
                    <ContactLayout />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact