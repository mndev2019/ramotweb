import React from 'react'
import { FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdStorage } from 'react-icons/md';
import Heading from '../../../Component/Heading';
import googleservice from '../../../assets/Images/googleserviceicon.svg'

const Support = () => {
    const services = [
        {
            icon: <MdStorage className="w-10 h-10 text-blue-600" />,
            // title: "Custom Software Development",
            description:
                "A cloud-first, browser-based approach that is constantly updated – no need for local devices, native apps or email attachments",
            color: "bg-blue-50",
        },
        {
            icon: <IoIosSettings className="w-10 h-10 text-teal-600" />,
            // title: "Cloud Solutions",
            description:
                "Built-in controls, encryption and verification with a zero-trust approach that enables employees to work from anywhere and eliminates the need for VPNs",
            color: "bg-teal-50",
        },
        {
            icon: <FaGlobe className="w-10 h-10 text-purple-600" />,
            // title: "Cybersecurity Services",
            description:
                "Operating on a global scale to protect your organisation's information from phishing, malware, ransomware and supply chain attacks – no add-ons required",
            color: "bg-purple-50",
        },
        {
            icon: <FaShieldAlt className="w-10 h-10 text-pink-600" />,
            // title: "Mobile App Development",
            description:
                "Making everyone safer with secure endpoints (company-provided or BYOD) that don't require patching and strong account takeover protections",
            color: "bg-pink-50",
        },

    ];
    return (
        <>
            <section className="relative px-6 md:px-20  lg:py-10 py-5 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white">
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
                        <img src={googleservice} className='mx-auto lg:h-auto h-[80px]'/>
                        {/* <Heading subtitle="Google Workspace is designed to support stringent privacy and security standards based on industry best practices." /> */}
                        <p className="text-gray-600 max-w-3xl font-semibold mx-auto text-center">
                            Google Workspace is designed to support stringent privacy and security standards based on industry best practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`${service.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                <div className="mb-4">{service.icon}</div>
                                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3> */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Support
