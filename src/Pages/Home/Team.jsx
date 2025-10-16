import React, { useEffect } from "react";
import drips from "../../assets/Images/drips.jpg";
import carta from "../../assets/Images/carta.jpg";
import barter from "../../assets/Images/barter.jpg";
import ipnx from "../../assets/Images/ipnx.jpg";
import bet9ja from "../../assets/Images/bet.jpg";
import uba from "../../assets/Images/uba.jpg";
import verifi from "../../assets/Images/erifi.jpg";
import thrive from "../../assets/Images/thrive.jpg";
import alphacx from "../../assets/Images/aplha.jpg";
import rsgroup from '../../assets/Images/rsgroup.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const logos = [drips, carta, barter, ipnx, bet9ja, uba, verifi, thrive, alphacx, rsgroup];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="relative bg-gradient-to-br from-white via-[var(--primary)]/10 to-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Top Text */}
      <p className="text-center text-[14px] font-semibold text-[var(--primary)] tracking-widest uppercase mb-3">
        More than 100+ teams are using Ramot
      </p>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10" data-aos="flip-left">
        Trusted by{" "}
        <span className="bg-gradient-to-r from-[var(--primary)] to-yellow-500 bg-clip-text text-transparent">
          worldwide business
        </span>
        <span className="block mx-auto mt-2 w-24 h-[4px] bg-gradient-to-r from-[var(--primary)] to-yellow-400 rounded-full"></span>
      </h2>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center bg-white rounded-full p-4 group hover:scale-110 transition-transform duration-300"

            style={{ animation: `fadeUp 0.6s ease ${index * 0.1}s both` }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-yellow-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>

            <img
              src={logo}
              alt="Company Logo"
              className="relative z-10 max-h-15 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Decorative floating gradients */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full"></div>

      <style>{`
        @keyframes fadeUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
