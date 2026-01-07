import React from 'react'
import Navbar from './Navbar'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Header = () => {
    return (
        <>
            <section className="bg-[#12062c] py-2 px-4 text-sm text-gray-300">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
                    {/* Left: Address & Email */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-white" />
                            <span>A100, A Block, Sector 58, Noida, Uttra Pradesh - 201309</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineMail className="text-white" />
                            <a href="mailto:info@ramot.cloud" className="hover:text-white transition">
                                info@ramot.cloud
                            </a>
                        </div>
                    </div>

                    {/* Right: Links & Social Icons */}
                    <div className="flex items-center gap-4">
                        {/* <div className="hidden sm:flex gap-2 text-gray-400">
                            <a href="#" className="hover:text-white transition">Faq</a>
                            <span>/</span>
                            <a href="#" className="hover:text-white transition">Service</a>
                            <span>/</span>
                            <a href="#" className="hover:text-white transition">Contact</a>
                        </div> */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                            <a href="#" className="hover:text-white transition"><FaPinterestP /></a>
                        </div>
                    </div>
                </div>
            </section>
            <Navbar />
        </>
    )
}

export default Header
