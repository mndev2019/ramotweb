import React from 'react'
import Heading from '../../../Component/Heading'
import { FaBullhorn, FaChartLine, FaHandshake, FaProjectDiagram, FaSearch, FaUsers } from 'react-icons/fa';

const CompanyDm = () => {
     const services = [
        {
            title: "Strategic Planning",
            para: "Developing customized strategies to ensure your business achieves optimal growth and success.",
            icon: <FaChartLine className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-blue-400 to-purple-500",
        },
        {
            title: "Project Management",
            para: "Overseeing projects from initiation to completion, ensuring timely delivery and successful outcomes.",
            icon: <FaProjectDiagram className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-green-400 to-teal-500",
        },
        {
            title: "Marketing & Sales",
            para: "Creating and executing targeted campaigns to drive growth, increase conversions, and boost sales.",
            icon: <FaBullhorn className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-pink-400 to-red-500",
        },
        {
            title: "SEO Optimization",
            para: "Improving your website's visibility and ranking on search engines to attract more organic traffic.",
            icon: <FaSearch className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
        },
        {
            title: "Financial Consulting",
            para: "Providing expert advice and strategies to optimize your financial performance and maximize returns.",
            icon: <FaHandshake className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-indigo-400 to-purple-600",
        },
        {
            title: "Social Media Management",
            para: "Developing engaging content and strategic management for a robust online presence.",
            icon: <FaUsers className="text-white w-6 h-6" />,
            bg: "bg-gradient-to-r from-teal-400 to-blue-600",
        },
    ];
    return (
        <>
            <section className="w-full relative py-20 px-4 lg:px-16 bg-gradient-to-br from-white via-[var(--primary)]/10 to-white overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 -right-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>

                <div className="text-center mb-14 relative z-10">
                    <Heading
                        title="DIGITAL MARKETING"
                        subtitle="Solutions for Every Business"
                    />
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
                        As your trusted digital marketing agency in India, we offer
                        comprehensive strategies to boost engagement, drive sales, and grow
                        your brand online.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition transform duration-300 flex flex-col items-center text-center"
                        >
                            <div
                                className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${service.bg}`}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.para}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CompanyDm
