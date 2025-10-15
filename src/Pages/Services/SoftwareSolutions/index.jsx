import React from "react";
import InnerBanner from "../../../Component/InnerBanner";
import {
    FaCode,
    FaCloud,
    FaShieldAlt,
    FaMobileAlt,
    FaDatabase,
    FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Heading from "../../../Component/Heading";

const services = [
    {
        icon: <FaCode className="w-10 h-10 text-blue-600" />,
        title: "Custom Software Development",
        description:
            "Tailor-made software solutions designed to meet your business goals with scalability and performance.",
        color: "bg-blue-50",
    },
    {
        icon: <FaCloud className="w-10 h-10 text-teal-600" />,
        title: "Cloud Solutions",
        description:
            "Seamlessly migrate and manage your applications on secure, reliable cloud platforms.",
        color: "bg-teal-50",
    },
    {
        icon: <FaShieldAlt className="w-10 h-10 text-purple-600" />,
        title: "Cybersecurity Services",
        description:
            "Protect your data and digital assets with robust security solutions and regular audits.",
        color: "bg-purple-50",
    },
    {
        icon: <FaMobileAlt className="w-10 h-10 text-pink-600" />,
        title: "Mobile App Development",
        description:
            "Build high-performance mobile applications for Android and iOS platforms with modern UI/UX.",
        color: "bg-pink-50",
    },
    {
        icon: <FaDatabase className="w-10 h-10 text-amber-600" />,
        title: "Data Analytics",
        description:
            "Unlock insights from your data with advanced analytics, dashboards, and visualization tools.",
        color: "bg-amber-50",
    },
    {
        icon: <FaGlobe className="w-10 h-10 text-green-600" />,
        title: "Web Application Development",
        description:
            "Craft responsive, fast, and user-friendly web applications tailored for your business.",
        color: "bg-green-50",
    },
];

const SoftwareSolutions = () => {
    const navigate = useNavigate();
    return (
        <>
            <InnerBanner title="Software Solutions" />

            {/* Intro Section */}
            <section className="relative px-6 md:px-20 lg:py-20 py-10 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white">
                {/* 🫧 BUBBLES BACKGROUND */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <span className="bubble top-10 left-10 bg-pink-600"></span>
                    <span className="bubble top-10 right-10 bg-purple-600"></span>
                    <span className="bubble top-1/3 right-20 bg-blue-500"></span>
                    <span className="bubble top-1/2 left-1/2 bg-yellow-400"></span>
                    <span className="bubble bottom-10 left-20 bg-green-700"></span>
                    <span className="bubble bottom-1/4 right-1/3 bg-purple-500"></span>
                    <span className="bubble top-1/5 left-1/3 bg-orange-500"></span>
                </div>
                <div className="max-w-6xl mx-auto px-4 ">
                    <div className="text-center">
                        <Heading title="Empowering Businesses" subtitle="With Innovative Software Solutions" />
                        <p className="text-gray-600 max-w-3xl mx-auto text-center">
                            From strategy to execution, we deliver cutting-edge technology solutions that
                            transform your ideas into reality and help your business thrive in the digital era.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`${service.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>



            {/* Call to Action */}
            <section className="relative bg-gradient-to-br from-[#1e1e2f] via-[#2b2b45] to-[#1e1e2f] text-white py-20 overflow-hidden">
                {/* Decorative blurred circles */}
                <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in">
                        Ready to Transform <br />
                        <span className="text-[var(--primary)]">Your Business?</span>
                    </h2>
                    <p className="mb-6 text-blue-100">
                        Let's collaborate to build powerful digital solutions that give your business a competitive edge.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-3  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300"
                    >
                        Get Started
                    </button>
                </div>
            </section>

        </>
    );
};

export default SoftwareSolutions;
