import React from "react";
import InnerBanner from "../../../Component/InnerBanner";
import { FaLightbulb, FaLaptopCode, FaUserFriends, FaPalette } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Heading from "../../../Component/Heading";

const UiUxDesigning = () => {
    const features = [
        {
            icon: <FaLightbulb size={30} className="text-teal-600" />,
            title: "Creative Concepts",
            desc: "We ideate innovative designs that perfectly align with your brand identity.",
            color: "bg-teal-50"
        },
        {
            icon: <FaLaptopCode size={30} className="text-pink-600" />,
            title: "Responsive Interfaces",
            desc: "Our layouts are crafted to deliver flawless experiences across all devices.",
            color: "bg-pink-50"
        },
        {
            icon: <FaUserFriends size={30} className="text-amber-600" />,
            title: "User-Centered Design",
            desc: "Every element is designed keeping real users and their journey in mind.",
            color: "bg-amber-50"
        },
        {
            icon: <FaPalette size={30} className="text-green-600" />,
            title: "Modern Aesthetics",
            desc: "We blend clean UI with trendy aesthetics to keep your product ahead.",
            color: "bg-green-50",
        },
    ];
    const navigate = useNavigate();
    return (
        <>
            {/* Top Banner */}
            <InnerBanner title="UI/UX Designing" />
            <section className="relative bg-gradient-to-br from-white via-[var(--primary)]/10 to-white py-16 px-6 md:px-20 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 -right-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>
                <div className="text-center mb-12">

                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                        Crafting Beautiful &{" "}
                        <span className="bg-gradient-to-r from-[var(--primary)] to-yellow-500 bg-clip-text text-transparent">
                            Intuitive Experiences
                        </span>
                        <span className="block mx-auto mt-2 w-24 h-[4px] bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At <span className="font-semibold text-[var(--primary)]">Ramot Cloud</span>, our UI/UX
                        design services blend creativity and strategy to deliver seamless digital
                        experiences that leave lasting impressions.
                    </p>
                </div>
            </section>
            <section className="relative px-6 md:px-20 lg:py-20 py-10 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white">
                <div className="absolute inset-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]"></div>

                    {/* Floating Circles */}
                    <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-10 animate-pulse"></div>
                </div>
                <div className="max-w-6xl mx-auto px-4 relative">
                    <div className="text-center">
                        <Heading
                            title="Design That Inspires"
                            subtitle="Crafting User Experiences with Precision & Creativity"
                        />
                        <p className="text-gray-600 max-w-3xl mx-auto text-center mt-4">
                            Our UI/UX design services focus on creating visually appealing, user-friendly, and conversion-driven digital experiences. We blend creativity with strategy to ensure every interaction feels intuitive and impactful.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`${feature.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>




            {/* Process Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <Heading
                        title="Our Design Process"
                        subtitle="From Research to Execution — We Craft Every Step Thoughtfully"
                    />
                    <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                        Our UI/UX process blends strategy, creativity, and user research to build
                        meaningful digital experiences. Every stage ensures clarity, functionality, and impact.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
                    {[
                        { step: "01", title: "Research", desc: "Understanding users, market & goals." },
                        { step: "02", title: "Wireframing", desc: "Defining structure & flow of the interface." },
                        { step: "03", title: "Design", desc: "Crafting clean, beautiful & interactive UI." },
                        { step: "04", title: "Testing", desc: "Validating experience & refining details." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center transition transform hover:-translate-y-1"
                        >
                            {/* Circle number */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold shadow-lg">
                                {item.step}
                            </div>
                            <h4 className="mt-6 text-lg font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                            {/* Connecting line */}
                            {i !== 3 && (
                                <div className="hidden md:block absolute top-6 right-[-50%] h-[2px] w-full bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff]"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-[#1e1e2f] via-[#2b2b45] to-[#1e1e2f] text-white py-20 overflow-hidden">
                {/* Decorative blurred circles */}
                <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in">
                        Ready to Elevate Your <br />
                        <span className="text-[var(--primary)]">Product Experience?</span>
                    </h2>
                    <p className="mb-6 text-blue-100">
                        Let our expert designers transform your ideas into visually stunning and
                        user-friendly interfaces.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-3  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>

        </>
    );
};

export default UiUxDesigning;
