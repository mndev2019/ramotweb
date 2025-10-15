import React from 'react'
// import banner from '../../assets/Images/banner.png'
import banner from '../../assets/Images/banner2.png'
import star from '../../assets/Images/star.svg'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className='banner lg:px-30 px-10 max-h-screen lg:py-10 py-16 '>
                
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="col-span-1 relative">
                        <img src={star} className='absolute right-[-34px] lg:top-[-72px] top-[-40px] upDown-top lg:h-[65px] h-[50px]'/>
                        <div className="w-full">
                            <p className='sofia lg:text-[24px] md:text-[21px] text-[18px] font-[400] leading-[28px] text-[var(--primary)]'>
                               Your Trusted partner
                            </p>
                            <h2 className='text-[#001D08] lg:text-[50px] md:text-[35px] text-[28px] font-[700]'>
                                Trusted Digital Solutions for Your Growth.
                            </h2>
                            <p className='lg:text-[18px] text-[15px] text-[#646464] font-[400] mb-8 lg:mt-0 mt-4'>
                                We craft high-impact websites, mobile apps, and digital campaigns. From Google Workspace setup to CRM integration, we power your business with smart, scalable technology.
                            </p>
                            <button className='bg-[#7f2ef8] px-4 py-2 rounded text-white font-bold' onClick={()=> navigate('/contact')}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 lg:block hidden">
                        <img src={banner} className='w-full upDown-top'/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banner
