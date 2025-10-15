import React from 'react';
import Heading from '../../Component/Heading';
import aboutImg from '../../assets/Images/about.png'; // replace with your actual image

const About = () => {
  return (
    <section className="relative px-6 lg:px-16 py-10 overflow-hidden">
      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#f0f4ff]"></div>

      {/* ✨ Abstract Shape (Blob) */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Heading title="ABOUT" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="About illustration"
              className="w-full max-w-md lg:max-w-lg relative z-10"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className=' text-[var(--primary)] font-semibold'>
            RAMOT IT SERVICES
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Your partner for <br />
              <span className="relative inline-block">
                Digital Innovation
                <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 -z-10"></span>
              </span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ramot IT Services is the trusted choice for enterprises, SMEs, and
              tech-driven businesses. We help brands grow by delivering custom
              web, app, and CRM solutions, backed by powerful digital marketing
              and GWS services.
            </p>

            <div className="border-l-4 border-purple-500 pl-4 mb-6 bg-white/60 backdrop-blur-sm rounded-r-md">
              <p className="text-gray-800 italic">
                We maintain, modernize, and optimize your IT infrastructure to
                keep you ahead in a fast-changing digital world.
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                 Jahnavi Singh{' '}
                <span className="text-purple-600 font-normal text-sm">
                  | Co founder and Sales Director
                </span>
              </p>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-purple-600 text-2xl">🌐</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Web & App Solutions
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-purple-600 text-2xl">⚙️</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    CRM & GWS Services
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
