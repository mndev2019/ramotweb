import React from 'react'
import Heading from '../../../Component/Heading'
import work from '../../../assets/Images/googlepartner.png'

const Work = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-[var(--primary)]/10 to-white py-16 px-6 md:px-20 overflow-hidden">
            {/* Decorative floating gradients */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 -right-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>


            <div className="container mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-12">

                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                        Between you & future{" "}
                        <span className="bg-gradient-to-r from-[var(--primary)] to-yellow-500 bg-clip-text text-transparent">
                            of work lies Ramot
                        </span>
                        <span className="block mx-auto mt-2 w-24 h-[4px] bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-full"></span>
                    </h2>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <img
                            src={work}
                            alt="Work Transformation"
                            className="w-full max-w-sm lg:max-w-full rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            The purpose of{' '}
                            <span className="font-semibold text-purple-800">Ramot</span> is to bring positive change in the lives of people we connect with, by offering solutions and services that bring both profit and happiness.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-300 text-purple-800 flex items-center justify-center rounded-full text-xl font-bold shadow">
                                    ✓
                                </span>
                                <p className="text-gray-800 text-lg leading-relaxed">
                                    <span className="font-semibold text-purple-800">Ramot</span>, a Google Cloud Partner, assists you in modernizing IT infrastructure by deploying cloud solutions that enhance your digital transformation journey, meet business goals, and drive growth.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-300 text-purple-800 flex items-center justify-center rounded-full text-xl font-bold shadow">
                                    ✓
                                </span>
                                <p className="text-gray-800 text-lg leading-relaxed">
                                    Ramot holds a <span className="font-semibold text-purple-800">Google Cloud Specialization in Security</span>, showcasing its proven expertise in implementing advanced security solutions, safeguarding data, and ensuring compliance across cloud environments.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
