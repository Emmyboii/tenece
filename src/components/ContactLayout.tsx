import contact from "../assets/homeContact.png";
import contact2 from "../assets/hexa13.png";
import { useState, useEffect, useRef } from "react";
import CountryCode from './CountryCode';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import { debounce } from "lodash";
import { motion, type Variants } from "framer-motion";

interface Country {
    name: string;
    code: string;
    iso: string;
}

interface FormState {
    name: string;
    email: string;
    phone: string;
    phone_country_code: string;
    projectType: string;
    message: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
    hover: { scale: 1.02 },
};

const ContactLayout = () => {

    const location = window.location.pathname

    const ignoreFields = location === '/contact'
    const hexa = location.includes('/hexahomes')

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        phone_country_code: "",
        projectType: "",
        message: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<Country | undefined>(
        CountryCode.find(c => c.iso === "ng")
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(CountryCode); const [errors, setErrors] = useState<Record<string, string>>({});
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    // Auto-detect country by browser locale
    useEffect(() => {
        const browserLocale = navigator.language.split("-")[1]?.toLowerCase();
        const detected = CountryCode.find(c => c.iso === browserLocale);
        if (detected) {
            // Wrap in microtask to avoid "cascading renders"
            setTimeout(() => {
                setSelectedCode(detected);
                setForm(prev => ({ ...prev, phone_country_code: detected.code }));
            }, 0);
        }
    }, []);

    // Debounced search
    const handleSearch = debounce((term: string) => {
        const filtered = CountryCode.filter(c =>
            c.name.toLowerCase().includes(term.toLowerCase()) ||
            c.code.includes(term)
        );
        setFilteredCountries(filtered);
        setHighlightedIndex(0);
    }, 200);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prev) => (prev + 1) % filteredCountries.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
        } else if (e.key === "Enter") {
            e.preventDefault();
            const country = filteredCountries[highlightedIndex];
            selectCountry(country);
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    const selectCountry = (country: Country) => {
        setSelectedCode(country);
        setIsOpen(false);
        setSearchTerm("");
        setFilteredCountries(CountryCode);
        setForm(prev => ({ ...prev, phone_country_code: country.code }));
    };

    // Restrict phone input to numbers only
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, "");
        setForm(prev => ({ ...prev, phone: val }));
    };

    const isPhoneValid = (): boolean => {
        const len = form.phone.length;
        return len >= 6 && len <= 12;
    };


    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.name.trim()) newErrors.name = "Full name is required";
        if (!form.email.match(/^\S+@\S+\.\S+$/))
            newErrors.email = "Enter a valid email";
        if (!form.phone) newErrors.phone = "Phone number is required";
        if (!form.projectType) newErrors.projectType = "Select a project type";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Form submitted:", form);
    };

    return (
        <motion.div
            className="flex lg:flex-row flex-col items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            <motion.div
                variants={itemVariants}
                className={`${hexa ? 'w-[705px]' : 'lg:w-auto w-full'}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {hexa ? (
                    <img src={contact2} alt="" className="md:w-[705px] sd:w-[400px] w-[300px] mx-auto" />
                ) : (
                    <img src={contact} alt="" className={`${ignoreFields && 'w-[705px]'} lg:w-auto w-full`} />
                )}
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-[8px] sm:p-12 p-5 w-full lg:max-w-[545px] sm:space-y-8 space-y-3"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {hexa && (
                    <motion.p
                        className="text-center text-2xl font-manrope font-medium text-[#000000] mt-[-10px]"
                        variants={itemVariants}
                    >
                        Join the Priority list
                    </motion.p>
                )}
                {/* Full Name */}
                <div>
                    <label className="font-normal">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="input"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="font-normal">Email</label>
                    <input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="input"
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                {!ignoreFields && (
                    <>

                        {/* Phone Number with Flag */}
                        <div className="relative">
                            <label className="font-normal">Phone Number</label>
                            <div className="flex w-full gap-2">
                                {/* Country code */}
                                <div
                                    className="flex items-center gap-2 sm:h-[64px] h-[55px] rounded-xl px-3 cursor-pointer bg-gray-100"
                                    onClick={() => setIsOpen(!isOpen)}
                                    onKeyDown={handleKeyDown}
                                    tabIndex={0}
                                    ref={dropdownRef}
                                >
                                    <ReactCountryFlag
                                        countryCode={(selectedCode?.iso || "US").toUpperCase()}
                                        svg
                                        style={{ width: "15px", height: "15px", borderRadius: "100%" }}
                                    />
                                    <span>{selectedCode?.code}</span>
                                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                                {/* Phone input */}
                                <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                    className="flex-1 sm:h-[64px] h-[55px] bg-gray-100 rounded-xl rounded-r-md p-2 outline-none"
                                    maxLength={15}
                                    inputMode="numeric"
                                />
                            </div>

                            {errors.phone && <p className="error">{errors.phone}</p>}
                            {!isPhoneValid() && form.phone && <p className="error">Invalid phone length for selected country</p>}

                            {/* Dropdown */}
                            {isOpen && (
                                <div ref={dropdownRef} className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={onSearchChange}
                                        placeholder="Search country..."
                                        className="w-full px-3 py-2 border-b outline-none"
                                    />
                                    {filteredCountries.map((country, index) => (
                                        <div
                                            key={country.code + index}
                                            className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 ${highlightedIndex === index ? "bg-gray-200" : ""
                                                }`}
                                            onClick={() => selectCountry(country)}
                                        >
                                            <ReactCountryFlag countryCode={country.iso.toUpperCase()} svg style={{ width: "24px", height: "18px" }} />
                                            <span>{country.name} ({country.code})</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Project Type */}
                        <div className="z-0">
                            <label className="font-normal">Project Type</label>

                            <div className="relative">
                                <select
                                    className="input appearance-none pr-10"
                                    title="projectType"
                                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                                >
                                    <option value=""></option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="interior">Interior Design</option>
                                </select>

                                {/* Custom arrow */}
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/3 text-gray-500">
                                    ▼
                                </span>
                            </div>

                            {errors.projectType && <p className="error">{errors.projectType}</p>}
                        </div>
                    </>
                )}

                {/* Message */}
                <div>
                    <label className="font-normal">Message</label>
                    <textarea
                        title="message"
                        className="h-[154px] w-full bg-gray-100 rounded-xl mt-3 px-4 outline-none text-base resize-none"
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-[#1F262B] text-white sm:py-4 py-3 rounded-full text-lg hover:bg-black transition"
                >
                    {ignoreFields ? 'Submit' : ' Request Consultation'}
                </button>
            </motion.form>
        </motion.div>
    )
}

export default ContactLayout