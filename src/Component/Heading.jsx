import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ title, subtitle }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div data-aos="flip-left">
                <p className=' text-[20px] font-[600] leading-[28px] text-[var(--primary)]'>
                    {title}
                </p>
                <h2 className='text-[#001D08] lg:text-[35px] text-[25px] font-[700]'>
                    {subtitle}
                </h2>
            </div>

        </>
    )
}

export default Heading
