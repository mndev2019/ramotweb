import React from 'react'
import InnerBanner from '../../../Component/InnerBanner'

const CrmService = () => {
  return (
    <>
      <InnerBanner title="CRM" />

      {/* Coming Soon Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ramot <span className="text-[var(--primary)]">CRM Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mb-8">
          We’re working on something amazing!  
          Our powerful CRM solutions are on their way to help businesses manage leads, automate tasks, and boost productivity.
        </p>

        {/* Coming Soon Badge */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-40 rounded-full animate-ping"></div>
          <div className="bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Coming Soon 🚀
          </div>
        </div>
      </section>
    </>
  )
}

export default CrmService

