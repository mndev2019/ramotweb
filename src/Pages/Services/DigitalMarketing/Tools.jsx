import React from 'react'
import { SiCanva, SiGoogle, SiGoogleanalytics, SiHubspot, SiMailchimp, SiSemrush } from 'react-icons/si';
import Heading from '../../../Component/Heading';

const Tools = () => {
    const tools = [
        {
            name: "Semrush",
            icon: <SiSemrush className="w-10 h-10 text-white" />,
            description: "An all-in-one digital marketing tool to perform a comprehensivectechnical SEO audit and improve SEO strategy for better business outcomes and growth."
        },
        {
            name: "Ahrefs",
            icon: <SiHubspot className="w-10 h-10 text-white" />,
            description: "Exclusively designed for digital marketers, this software contains tools for site audits, competitor analysis, keyword research, link building, and rank tracking."
        },
        {
            name: "Google Analytics",
            icon: <SiGoogleanalytics className="w-10 h-10 text-white" />,
            description: "The premier choice of digital marketing experts as it provides a ton of actionable insights into how your audience is engaging with your website and applications."
        },
        {
            name: "Screaming Frog SEO",
            icon: <SiMailchimp className="w-10 h-10 text-white" />,
            description: "A user-friendly SEO crawling tool that provides useful SEO-related information about your site that you can use to tweak your SEO strategy"
        },
        {
            name: "Google Trends",
            icon: <SiGoogle className="w-10 h-10 text-white" />,
            description: "A tool that helps us provide the best digital marketing service to identify trends and popular search queries in Google Search across various locations and languages."
        },
        {
            name: "Canva",
            icon: <SiCanva className="w-10 h-10 text-white" />,
            description: "A great tool for designing professional-looking graphics. It offers a vast collection of templates that can be used to create social posts, infographics, CTA buttons, etc."
        }
    ];
    return (
        <>

            <section className="relative py-20 px-4 lg:px-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
                {/* Floating Background Shapes */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute w-96 h-96 bg-pink-200 rounded-full top-[-100px] left-[-100px] opacity-20 blur-3xl"></div>
                    <div className="absolute w-96 h-96 bg-blue-200 rounded-full bottom-[-100px] right-[-100px] opacity-20 blur-3xl"></div>
                    <div className="absolute w-72 h-72 bg-purple-300 rounded-full top-[50%] left-[50%] opacity-20 blur-2xl"></div>
                </div>
                <div className="text-center mb-14 relative z-10">
                    <Heading

                        subtitle="Popular Tools that Power Our Digital Marketing Services"
                    />
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
                        Our digital marketing agency makes best use of latest tools & technologies to get your business goals. We incorporate trending technologies that help your platform perform better, increasing traffic on your website.
                    </p>
                </div>


                {/* Tools Grid - Glassmorphism + Floating Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-3xl backdrop-blur-md bg-white/20 border border-white/30 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                        >
                            {/* Floating Icon */}
                            <div className="absolute -top-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg">
                                {tool.icon}
                            </div>

                            {/* Content */}
                            <div className="mt-12">
                                <h3 className="text-gray-900 text-xl font-semibold mb-2 drop-shadow-md">{tool.name}</h3>
                                <p className="text-gray-800 drop-shadow-sm">{tool.description}</p>
                            </div>

                            {/* Decorative Gradient Ring */}
                            <div className="absolute -bottom-4 w-24 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-70"></div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    )
}

export default Tools
