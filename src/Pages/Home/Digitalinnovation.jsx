import React, { useEffect, useRef, useState } from "react";
import digitalinnovation from '../../assets/Images/digitalinnovation.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { title: "Web Development", percent: 95 },
    { title: "App Development", percent: 96 },
    { title: "CRM Services", percent: 88 },
    { title: "Digital Marketing", percent: 85 },
];

const Digitalinnovation = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // Run only once
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#f9f9ff] py-20 px-6 md:px-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <p className="text-[20px] font-[600] leading-[28px] text-[var(--primary)]">
                        Ramot IT Management
                    </p>
                    <h2 className="text-[#001D08] text-[35px] font-[700] mb-6">
                        Your partner for <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[var(--primary)]">Digital Innovation</span>

                        </span>
                    </h2>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Ramot IT Services is the trusted choice for businesses aiming to grow in the digital era. We empower brands with custom web, app, CRM, and digital marketing solutions to boost their value and reach.
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm font-semibold mb-1">
                                    <span>{skill.title}</span>
                                    <span>{skill.percent}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-[1500ms] ease-out"
                                        style={{
                                            width: visible ? `${skill.percent}%` : "0%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="flex justify-center" data-aos="flip-right">
                    <img
                        src={digitalinnovation}
                        alt="Illustration"
                        className="w-full max-w-md md:max-w-lg animate-fadeInUp"
                    />
                </div>
            </div>
        </section>
    );
};

export default Digitalinnovation;
