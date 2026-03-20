import React from "react";
import { useEffect} from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/Images/logo.jpg'
import google from '../assets/Images/googlepartner.png'


const Navbar = () => {
    const navigate = useNavigate();
   
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

  

    return (
        <>
            <section className="px-6 lg:px-10 shadow py-1">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-1">
                        {/* Logo */}
                        <NavLink to="/">
                            <div className="flex">
                                <img src={logo} alt='image' className='lg:h-[45px] h-[30px]' />
                                <img src={google} alt='image' className='lg:h-[45px] h-[30px]' />
                            </div>

                        </NavLink>

                       
                        <div className="flex items-center gap-2 text-right">

                            <button className="flex items-center gap-2 lg:px-5 px-3 lg:py-2 py-1 rounded bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-semibold shadow-md hover:scale-105 transition" onClick={()=> navigate('/contact')}>
                                <span className='text-sm lg:text-lg'>Get A Quote</span>
                            </button>


                        </div>

                      
                    </div>
                </div>

            
            </section>

        </>

    );
};

export default Navbar;
