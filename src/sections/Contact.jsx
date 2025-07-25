import { useRef, useState } from "react"
import ContactExperience from "../components/Models/Contact/ContactExperience"
import TitleHeader from "../components/TitleHeader"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            );

            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.log('EmailJS Error:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get in Touch - Let's Connect" sub="💬 Have Questions or Ideas? Let's Talk! 🚀" />

                <div className="mt-16 grid-12-cols">
                    {/* LEFT: Contact Form */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" autoComplete="off" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" inputMode="email" autoComplete="off" value={formData.email} onChange={handleChange} placeholder="Your Email Address" required />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea rows="5" id="message" name="message" autoComplete="off" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-right.svg" alt="Arrow pointing right" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT: 3D Model */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact