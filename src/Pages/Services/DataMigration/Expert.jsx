import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Expert = () => {
    const services = [
        'IBM Lotus Notes',
        'GoDaddy Mail',
        'Yahoo Mail',
        'MS-Exchange - On Premises',
        'Rediffmail',
        'G Suite Legacy Free Edition to Google Workspace',
        'Zoho Mail',
        'IceWarp',
        'Microsoft 365',
        'Zimbra',
    ]
    const sliderSettings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // below lg
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className="py-20 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Section - Text */}
                    <div className="space-y-5">
                        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                            We Are <span className="text-[var(--primary)]">Migration</span>
                            <br /> Experts For
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We help businesses smoothly migrate their existing mail platforms to more secure and reliable solutions without any data loss.
                        </p>
                    </div>

                    <div>
                        <Slider {...sliderSettings}>
                            {services.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="flex items-center gap-3 bg-white rounded-lg shadow hover:shadow-md transition p-3 justify-center">
                                        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-purple-200 text-purple-800 rounded-full font-bold">
                                            ✓
                                        </span>
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert
