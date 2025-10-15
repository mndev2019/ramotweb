import React from 'react'
import arrow from '../assets/Images/arrow.svg'
import star from '../assets/Images/star.svg'

const InnerBanner = ({title}) => {
    return (
        <>
            <section className='banner flex items-center justify-center py-40  text-[#001D08] lg:text-[45px] md:text-[35px] text-[28px] font-[700] relative overflow-hidden'>
                <img src={arrow} className='absolute bottom-[-53px] right-[19px] arrow-zoom md:h-auto h-[200px] ' />
                <img src={star} className='absolute left-[20%] top-[38px] upDown-top ' />
                <h2>{title}</h2>
            </section>
        </>
    )
}

export default InnerBanner
