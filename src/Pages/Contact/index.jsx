import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Contact = () => {
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "6b07c88f-3f19-4a9a-acd2-0a39448dce9b"); // ✅ Add your Web3Forms access key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully ✅");
            event.target.reset(); // ✅ Reset form
            window.location.href = "/thank-you"; // ✅ Redirect after submit
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className='py-12 bg-gray-50'>
            <div className="container mx-auto lg:px-20 md:px-10 px-5">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-[#7f2ef8] via-[#6a00ff] to-[#9b5fff] bg-clip-text text-transparent inline-block">
                        Get In Touch
                    </h2>
                    <p className="mt-3 text-gray-600">We'd love to hear from you. Reach out for any queries or collaboration!</p>
                </div>

                {/* Contact Cards */}
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mb-12">

                    {/* Email Card */}
                    <a href="mailto:info@ramot.cloud" className="lg:col-span-2 col-span-1">
                        <div className="w-full h-full shadow-lg p-6 rounded-xl relative overflow-hidden group transition-transform duration-300 hover:scale-105 bg-white">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] rounded-t-xl animate-gradient-x"></div>

                            <div className="icon h-[60px] w-[60px] mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-[#7f2ef8] to-[#9b5fff] text-white text-[30px] shadow-lg transition-all duration-300 group-hover:scale-110">
                                <MdOutlineMarkEmailRead />
                            </div>

                            <h3 className="text-[20px] font-bold text-center mt-4 text-[#12062c] group-hover:text-[#7f2ef8] transition-all">
                                Email
                            </h3>
                            <a
                                href="mailto:info@ramot.cloud"
                                className="block text-[14px] text-center text-gray-600 mt-1 hover:text-[#7f2ef8] transition-colors"
                            >
                                info@ramot.cloud
                            </a>
                            <a
                                href="tel:+919211047996"
                                className="block text-[14px] text-center text-gray-600 mt-1 hover:text-[#7f2ef8] transition-colors"
                            >
                                +(91) 9211047996
                            </a>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                    </a>

                    {/* Office Card */}
                    <a
                        href="https://www.google.com/maps/place/Ramot+IT+Services/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1"
                    >
                        <div className="w-full h-full shadow-lg p-6 rounded-xl relative overflow-hidden group transition-transform duration-300 hover:scale-105 bg-white">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] rounded-t-xl animate-gradient-x"></div>

                            <div className="icon h-[60px] w-[60px] mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-[#7f2ef8] to-[#9b5fff] text-white text-[30px] shadow-lg transition-all duration-300 group-hover:scale-110">
                                <IoLocationOutline />
                            </div>

                            <h3 className="text-[20px] font-bold text-center mt-4 text-[#12062c] group-hover:text-[#7f2ef8] transition-all">
                                Office
                            </h3>
                            <p className="text-[14px] text-center text-gray-600 mt-1">
                                A100, A Block, Sector 58, Noida, Uttar Pradesh 201309
                            </p>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                    </a>

                    {/* Whatsapp Card */}
                    <a href="https://wa.me/919211047996" target="_blank" className="col-span-1">
                        <div className="w-full h-full shadow-lg p-6 rounded-xl relative overflow-hidden group transition-transform duration-300 hover:scale-105 bg-white">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] rounded-t-xl animate-gradient-x"></div>

                            <div className="icon h-[60px] w-[60px] mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-[#7f2ef8] to-[#9b5fff] text-white text-[30px] shadow-lg transition-all duration-300 group-hover:scale-110">
                                <FaWhatsapp className="h-[25px]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-center mt-4 text-[#12062c] group-hover:text-[#7f2ef8] transition-all">
                                WhatsApp
                            </h3>
                            <p className="text-[14px] text-center text-gray-600 mt-1">+(91) 9211047996</p>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-[#7f2ef8] via-[#9b5fff] to-[#b084f9] group-hover:w-24 transition-all duration-500"></div>
                        </div>
                    </a>

                </div>

                {/* Map + Form */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

                    {/* Map */}
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8255505953125!2d77.3620303!3d28.6050098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56e7accc4f9%3A0x2aab79bbe7ea6f9d!2sA-100%2C%20A%20Block%2C%20Sector%2058%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1759750704639!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* ✅ Web3Forms Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-black mb-6 text-center">
                            Get In Touch
                        </h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f2ef8] transition"
                            required
                        />

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile No"
                            className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f2ef8] transition"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f2ef8] transition"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="6"
                            className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7f2ef8] transition resize-none"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 text-white font-medium rounded-full bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] hover:from-[#9b5fff] hover:to-[#7f2ef8] transition-all duration-500"
                        >
                            Contact Us
                        </button>

                        <p className="text-center text-sm text-gray-700 pt-2">{result}</p>
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;
