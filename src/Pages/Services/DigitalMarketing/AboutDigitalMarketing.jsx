import React from "react";
import { FaBriefcase, FaAward, FaThumbsUp, FaSmile } from "react-icons/fa";
import Heading from "../../../Component/Heading";

const stats = [
    {
        icon: <FaBriefcase className="w-8 h-8 text-white" />,
        number: "5+",
        text: "Years of Experience",
    },
    {
        icon: <FaAward className="w-8 h-8 text-white" />,
        number: "50+",
        text: "Global Top Brands & Enterprises Served",
    },
    {
        icon: <FaThumbsUp className="w-8 h-8 text-white" />,
        number: "300+",
        text: "Industry-best tech professionals",
    },
    {
        icon: <FaSmile className="w-8 h-8 text-white" />,
        number: "100+",
        text: "Happy Clients",
    },
];

const AboutDigitalMarketing = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#f9f9ff] to-[#eef5ff] py-20 px-4 lg:px-16">
            {/* Heading */}
            <div className="text-center mb-14 relative z-10">
                <Heading
                    title="DIGITAL MARKETING"
                    subtitle="Empower Your Business Growth"
                />
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
                    Drive engagement, boost sales, and build your brand presence with our expert digital marketing solutions designed to deliver measurable results.
                </p>
            </div>


            {/* Content Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div>
                    <h3 className="text-2xl font-bold text-[#001D08] mb-4">
                        Get Significant Boost to Your Business with Digital Marketing Company
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Ramot is the right strategic digital marketing agency to provide you with a
                        solution that brings the desired digital presence to your business. We empower your
                        digital marketing website to get desired engagement, sales, and overall revenue across
                        different platforms.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From lead generation and brand awareness to customer acquisition and retention, our
                        digital marketing company does it all for you.
                    </p>
                </div>

                {/* Right Stat Cards */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="bg-[var(--primary)] w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-[var(--primary)]">{item.number}</h4>
                            <p className="text-gray-700 mt-1">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutDigitalMarketing;
