import { FaAngleRight, FaArrowUp, FaGift, FaPhoneAlt } from "react-icons/fa";
// import Logo from "../assets/Image/newlogo.jpeg";
import logo from '../assets/Images/logoremovebg.png'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#f4f4f4] text-gray-200 py-10 px-6 lg:px-20 relative">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="items-center justify-center flex w-[40px] h-[40px] 
                     rounded-full text-white  bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff]
                     fixed right-[13px] bottom-[35px] z-50 shadow-lg cursor-pointer 
                     transition-opacity duration-300"
        >
          <FaArrowUp />
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          {/* <img src={Logo} alt="Truzon Solar" className="w-40 mb-4" /> */}
          {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-[43px] font-[700]">
            HOLSOL
          </span> */}
          <img src={logo} alt='image' className='h-[45px]' />
          <p className="text-[#767676] text-sm mt-4">
            Get Special Offers. We Never Spam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-3 text-[#767676]">
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li
              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>


          </ul>

        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Support</h3>

          <ul className="space-y-3 text-[#767676]">
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Company Privacy
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-[var(--primary)] cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Support
              </Link>
            </li>



          </ul>

        </div>


        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-[#767676]">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[var(--primary)]" />
              <a
                href="tel:+919211047996"
                className="cursor-pointer hover:text-[var(--primary)] transition"
              >
                +91 9211047996
              </a>

            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-[var(--primary)]" />
              <a
                href="mailto:info@ramot.cloud"
                className="cursor-pointer hover:text-[var(--primary)] transition"
              >
                info@ramot.cloud
              </a>

            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[var(--primary)]" />
              <span className="cursor-pointer hover:text-[var(--primary)] transition">
                A100, A Block, Sector 58, Noida,<br />
                Uttar Pradesh 201309 - 201309
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-7 border-t border-gray-300 pt-6 text-center text-gray-400 text-sm">
        Full Copyright & Design By @ RAMOT – 2025
      </div>

    </footer>
  );
};

export default Footer;
