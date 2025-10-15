import React from 'react'
import Heading from '../../Component/Heading'
import digital from '../../assets/Images/digitalM.jpg'
import gws from '../../assets/Images/gws.jpg'
import ui from '../../assets/Images/uiux.jpg'
import datam from '../../assets/Images/datam.jpg'
import web from '../../assets/Images/web.jpg'
import app from '../../assets/Images/app.jpg'
import software from '../../assets/Images/software.jpg'
import crm from '../../assets/Images/crm.jpg'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();
  const data = [
    { image: digital, text: "Digital Marketing", link:"/digital-marketing"  },
    { image: gws, text: "Google Services" },
    { image: ui, text: "UI/UX Designing" },
    { image: datam, text: "Data Migration",  link: "/data-migration" },
    { image: web, text: "Web Developer", link:"/web-development"},
    { image: app, text: "App Development" , link:"/app-development" },
    { image: software, text: "Software solutions" , link:"/software-solutions"},
    { image: crm, text: "CRM Services" },
  ]

  return (
    <section className="relative px-6 md:px-20 lg:py-20 py-10 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white">
      {/* 🫧 BUBBLES BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <span className="bubble top-10 left-10 bg-pink-600"></span>
        <span className="bubble top-10 right-10 bg-purple-600"></span>
        <span className="bubble top-1/3 right-20 bg-blue-500"></span>
        <span className="bubble top-1/2 left-1/2 bg-yellow-400"></span>
        <span className="bubble bottom-10 left-20 bg-green-700"></span>
        <span className="bubble bottom-1/4 right-1/3 bg-purple-500"></span>
        <span className="bubble top-1/5 left-1/3 bg-orange-500"></span>
      </div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <Heading title="WHAT WE OFFER" subtitle="We offer quality service for our clients" />
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
          We offer innovative services that help businesses grow and stand out in the digital world.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {data.map((item, index) => (
          <div
            onClick={() => navigate(item.link)}
            key={index}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[var(--primary)]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[var(--primary)] transition-colors">
                {item.text}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Service
