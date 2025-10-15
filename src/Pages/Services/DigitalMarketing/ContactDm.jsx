import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactDm = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="relative bg-gradient-to-br from-[#1e1e2f] via-[#2b2b45] to-[#1e1e2f] text-white py-20 overflow-hidden">
                {/* Decorative blurred circles */}
                <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in">
                        How About Boosting Your Business <br />
                        <span className="text-[var(--primary)]">Growth Now?</span>
                    </h2>

                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-3  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300"
                    >
                        Yes, Let’s Do It
                    </button>
                </div>
            </section>
        </>
    )
}

export default ContactDm
