import React from 'react';
import InnerBanner from '../../../Component/InnerBanner';
import { useNavigate } from 'react-router-dom';
import EndtoEndProcess from './EndtoEndProcess';

const WebDevelopment = () => {
    const navigate = useNavigate();
    return (
        <>
            <InnerBanner title="Web Development" />

            {/* Intro Section */}
            <section className="relative bg-gradient-to-br from-white via-[var(--primary)]/10 to-white py-16 px-6 md:px-20 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 -right-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>
                <div className="text-center mb-12">

                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                        Build Modern Websites{" "}
                        <span className="bg-gradient-to-r from-[var(--primary)] to-yellow-500 bg-clip-text text-transparent">
                            with Ramot
                        </span>
                        <span className="block mx-auto mt-2 w-24 h-[4px] bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At Ramot, we specialize in creating responsive, high-performance websites tailored to your business needs.
                        From sleek front-end designs to robust back-end solutions, we've got you covered.
                    </p>
                </div>


            </section>
            <EndtoEndProcess />

            {/* Services Section */}
            <section className="py-16 px-4 bg-gray-50">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Our Expertise
                </h3>

                <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
                    {/* Frontend */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center">
                        <div className="text-5xl mb-4">💻</div>
                        <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                        <p className="text-white/90">
                            React.js, Tailwind CSS, Bootstrap, Responsive UI/UX.
                        </p>
                    </div>

                    {/* Backend */}
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center">
                        <div className="text-5xl mb-4">⚙️</div>
                        <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                        <p className="text-white/90">
                            Node.js, Express.js, MongoDB, MySQL, REST APIs.
                        </p>
                    </div>

                    {/* Full-Stack */}
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center">
                        <div className="text-5xl mb-4">🌐</div>
                        <h4 className="text-xl font-semibold mb-2">Full-Stack Solutions</h4>
                        <p className="text-white/90">
                            End-to-end development for web applications, eCommerce, and SaaS platforms.
                        </p>
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
                        Ready to Start <br />
                        <span className="text-[var(--primary)]">Your Project?</span>
                    </h2>
                    <p className="mb-6">Contact us today and let's build something amazing together!</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-3  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </section>

        </>
    );
};

export default WebDevelopment;

