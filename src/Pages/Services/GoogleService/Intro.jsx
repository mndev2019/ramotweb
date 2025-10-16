import React from 'react'
import gws from '../../../assets/Images/gwsintro.svg'
import introright from '../../../assets/Images/introright.webp'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-[#f5f0ff] to-[#eae2ff] py-10 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 animate-slide-in-left">
          <img src={gws} alt="Workspace Logo" className="" />
          
          <h2 className="text-[#001D08] lg:text-[50px] md:text-[38px] text-[28px] font-[700] leading-tight relative inline-block">
            Grow your business with Workspace
            <span className="absolute bottom-0 left-0 w-1/3 h-[4px] bg-[#7f2ef8] rounded-full"></span>
          </h2>

          <p className="lg:text-[18px] text-[15px] text-[#646464] font-[400]">
            Get a professional email for your business and familiar tools like Gmail, Calendar, Drive, Docs and more. 
            And now with <span className="font-semibold text-[#7f2ef8]">Gemini</span>, you can boost your productivity with the power of generative AI.
          </p>

          <button
            onClick={() => navigate('/contact')}
            className="bg-[#7f2ef8] px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-[#6920d4] hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#7f2ef8]/20 rounded-full blur-2xl"></div>
            <img
              src={introright}
              alt="Intro Illustration"
              className="w-full max-w-[500px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro
