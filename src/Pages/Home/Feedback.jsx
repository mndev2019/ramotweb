import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sahil from '../../assets/Images/sahil.png'
import reema from '../../assets/Images/reema.png'
import palak from '../../assets/Images/palak.png'

const testimonials = [
    {
        id: 1,
        name: "Sahil Sharma",
        role: "CEO and Founder",
        image: sahil,
        feedback:
            "Ramot IT Services helped us launch a sleek new website and integrate a CRM that streamlined our workflow. Their team is responsive, skilled, and genuinely cares about delivering results.",
    },
    {
        id: 2,
        name: "Reema Ahlawat",
        role: "Client of Company",
        image: reema,
        feedback:
            "The mobile app Ramot IT developed for us is fast, intuitive, and beautifully designed. It has completely changed the way our customers interact with our brand.",
    },
    {
        id: 3,
        name: "Palak Rathod",
        role: "Operations Head",
        image: palak,
        feedback:
            "Their GWS setup and CRM integration made our operations seamless. The team understood our needs perfectly and delivered on time.",
    },
];

const Feedback = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <section className="bg-[#fff7f2] py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SECTION */}
                <div>
                    <p className="text-[15px] font-[600] leading-[28px] text-[var(--primary)] uppercase tracking-widest mb-2">
                        Clients Feedback
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
                        What our <span className="text-purple-600">clients</span> say?
                    </h2>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
                                ✓
                            </span>
                            <p className="text-gray-600 text-lg">
                                Ramot IT transformed our outdated systems into powerful, user-friendly solutions.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
                                ✓
                            </span>
                            <p className="text-gray-600 text-lg">
                                Their digital marketing strategies brought measurable growth to our business.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SECTION (SLIDER) */}
                <div className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
                    <div className="absolute -right-16 -bottom-16 opacity-10">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="purple" strokeWidth="4" fill="none" />
                        </svg>
                    </div>
                    <Slider {...settings}>
                        {testimonials.map((t) => (
                            <div key={t.id}>
                                <div className="flex flex-col gap-5">
                                    <div className="flex text-purple-600 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">{t.feedback}</p>
                                    <div className="flex items-center gap-4 mt-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
                                            <p className="text-gray-500 text-sm">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
