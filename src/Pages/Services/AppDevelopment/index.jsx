import React from 'react';
import InnerBanner from '../../../Component/InnerBanner';
import { FaMobileAlt, FaRocket, FaCogs, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../Component/Heading';

const AppDevelopment = () => {
    const navigate = useNavigate();
    const features = [
        {
            icon: <FaMobileAlt size={30} className="text-teal-600" />,
            title: "Cross-Platform Apps",
            desc: "We build apps that work seamlessly on both iOS and Android devices.",
            color: "bg-teal-50"
        },
        {
            icon: <FaRocket size={30} className="text-pink-600" />,
            title: "Fast & Reliable",
            desc: "Our apps are optimized for performance, ensuring smooth user experience.",
            color: "bg-pink-50"
        },
        {
            icon: <FaCogs size={30} className="text-amber-600" />,
            title: "Custom Solutions",
            desc: "Tailored solutions to meet your business needs and scale effortlessly.",
            color: "bg-amber-50"
        },
        {
            icon: <FaUsers size={30} className="text-green-600" />,
            title: "User-Centric Design",
            desc: "We prioritize intuitive interfaces for maximum engagement.",
            color: "bg-green-50",
        },
    ];

    return (
        <div className="bg-gray-50">
            {/* Inner Banner */}
            <InnerBanner title="App Development" />

            {/* Intro Section */}
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
                        <Heading title="Apps That Make an Impact" subtitle="Transform Your Ideas into Powerful Apps" />
                        <p className="text-gray-600 max-w-3xl mx-auto text-center">
                            We specialize in creating feature-rich, scalable, and high-performance mobile applications tailored to your business needs.
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


            {/* How We Work Section */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our App Development Process</h2>
                    <p className="text-gray-600 mb-12">
                        From concept to deployment, we ensure a smooth development process with transparency and efficiency.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. Ideation</h3>
                            <p className="text-gray-600">We brainstorm ideas and define app requirements.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. Design</h3>
                            <p className="text-gray-600">UI/UX design focused on usability and aesthetics.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. Development</h3>
                            <p className="text-gray-600">Robust coding for high performance and scalability.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. Launch</h3>
                            <p className="text-gray-600">Deployment to app stores and continuous support.</p>
                        </div>
                    </div>
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
                        Ready to Build Your App? <br />
                        {/* <span className="text-[var(--primary)]">Your Business?</span> */}
                    </h2>
                    <p className="mb-6 text-blue-100">
                        Let's bring your ideas to life with a custom mobile application.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-3  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300"
                    >
                        Contact Us Today
                    </button>
                </div>
            </section>

        </div>
    );
};

export default AppDevelopment;
