import React from 'react'
import Heading from '../../../Component/Heading'
import { FaBullseye, FaChartLine, FaRocket, FaTrafficLight, FaTrophy, FaUsers } from 'react-icons/fa'

const BusinessNeedDm = () => {
     const data = [
        {
            title: "Support brand value",
            para: "Digital marketing firms assist your company in expanding its reach and making your offerings stand out in a competitive market",
            icon: <FaBullseye className='text-white w-8 h-8' />
        },
        {
            title: "Boost user relationships",
            para: "Our analytics helps to dig out the crucial and concise user needs and help you target the potential audience on the receiving end.",
            icon: <FaUsers className='text-white w-8 h-8' />
        },
        {
            title: "Drive more traffic",
            para: "Digital marketing agency helps to propel multiple cross-channel business opportunities to enable exceptional user experience.",
            icon: <FaTrafficLight className='text-white w-8 h-8' />
        },
        {
            title: "Stay on top",
            para: "These marketing services allow you to use multiple channels with a consistent funnel to check for seamless connectivity.",
            icon: <FaRocket className='text-white w-8 h-8' />
        },
        {
            title: "Increase in competition",
            para: "Digital marketing experts help small to mid-sized enterprises to compete head-to-head with multinational firms.",
            icon: <FaTrophy className='text-white w-8 h-8' />
        },
        {
            title: "Improve conversion rates",
            para: "Attract numerous leads, businesses, conversions, opportunities, and users to your brand products and services.",
            icon: <FaChartLine className='text-white w-8 h-8' />
        },
    ]
  return (
  <>
     <section className='banner py-20 px-4 lg:px-16 bg-gradient-to-r from-blue-50 to-blue-100'>
            <div className='text-center mb-16'>
                <Heading subtitle="Why Your Business Needs Digital Marketing Services?" />
            </div>

            <div className='flex flex-col gap-12'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 
                        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-transform hover:scale-105 duration-300`}
                    >
                        {/* Icon Circle */}
                        <div className='flex-shrink-0 bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] p-6 rounded-full flex items-center justify-center shadow-lg'>
                            {item.icon}
                        </div>

                        {/* Text */}
                        <div className='max-w-xl'>
                            <h3 className='text-2xl font-semibold mb-2 text-gray-800'>{item.title}</h3>
                            <p className='text-gray-600'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  </>
  )
}

export default BusinessNeedDm
