import React, { useEffect} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import logo from '../assets/Images/logo.jpg'
import google from '../assets/Images/googlepartner.png'


const Navbar = () => {
    const navigate = useNavigate();
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    // const navlist = (
    //     <ul
    //         className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center lg:text-xl text-md text-black"
    //     >
    //         <li>
    //             <NavLink to="/" end>
    //                 HOME
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/">FAQ</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/">SERVICE</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/contact">CONTACT</NavLink>
    //         </li>
    //     </ul>
    // );

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

                        {/* Nav Links */}
                        {/* <div className="hidden lg:flex items-center gap-8">
                            {navlist}
                        </div> */}

                        {/* Brochure button */}
                        <div className="flex items-center gap-2 text-right">

                            <button className="flex items-center gap-2 lg:px-5 px-3 lg:py-2 py-1 rounded bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-semibold shadow-md hover:scale-105 transition" onClick={()=> navigate('/contact')}>
                                <span className='text-sm lg:text-lg'>Get A Quote</span>
                            </button>


                        </div>

                        {/* Mobile menu button */}
                        {/* <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <CiMenuFries className="!text-yellow-500 text-3xl" />

                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Mobile Sidebar */}
                {/* <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`} style={{ width: "70%" }}>
                    <div className="p-6">
                       
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <IoClose className="text-2xl" />
                            </button>
                        </div>
                        {navlist}



                        <button className="w-full text-center px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition">
                            <span>Get Free Quote</span>
                        </button>



                    </div>
                </div> */}
            </section>

        </>

    );
};

export default Navbar;
