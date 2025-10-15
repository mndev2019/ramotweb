import React from 'react';
import Heading from '../../../Component/Heading';
import { FaFigma } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiAwardFill } from 'react-icons/ri';
import { BsTransparency } from 'react-icons/bs';

const EndtoEndProcess = () => {
  const data = [
    {
      icon: <FaFigma className="text-4xl text-white" />,
      title: "Custom Designs",
      para: "Unique, tailor-made solutions crafted to match your vision—no templates, no shortcuts.",
      bg: "bg-gradient-to-r from-pink-500 to-purple-500"
    },
    {
      icon: <FiUsers className="text-4xl text-white" />,
      title: "Small team, Big impact",
      para: "A close-knit team delivering impactful solutions with agility and attention to detail.",
      bg: "bg-gradient-to-r from-green-400 to-teal-500"
    },
    {
      icon: <RiAwardFill className="text-4xl text-white" />,
      title: "Top-notch Quality",
      para: "Experienced Webflow experts ensuring uncompromising quality in every project.",
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      icon: <BsTransparency className="text-4xl text-white" />,
      title: "Complete Transparency",
      para: "Clear communication and seamless process — no hidden surprises.",
      bg: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className='text-center mb-12'>
        <Heading title="Expert You Can Trust" subtitle="End-to-End Web Design Solutions" />
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-center"
          >
            <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full ${item.bg} animate-pulse`}>
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
            <p className="text-gray-600">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndtoEndProcess;
