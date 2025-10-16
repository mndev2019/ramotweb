import React from 'react'
import gmail from '../../../assets/Images/mail.svg'
import drive from '../../../assets/Images/drive.svg'
import meet from '../../../assets/Images/meet.svg'
import calender from '../../../assets/Images/calender.svg'
import chat from '../../../assets/Images/chat.svg'
import gemini from '../../../assets/Images/gemini.png'
import docs from '../../../assets/Images/docs.svg'
import sheets from '../../../assets/Images/sheet.svg'
import slide from '../../../assets/Images/slide.svg'
import vids from '../../../assets/Images/vids.svg'
import keep from '../../../assets/Images/keep.svg'
import site from '../../../assets/Images/sites.svg'
import forms from '../../../assets/Images/forms.svg'
import notebook from '../../../assets/Images/notebook.svg'
import appsheet from '../../../assets/Images/appsheet.svg'
import Pricing from './Pricing'

const tools = [
    { img: gmail, name: 'Gmail' },
    { img: drive, name: 'Drive' },
    { img: meet, name: 'Meet' },
    { img: calender, name: 'Calendar' },
    { img: chat, name: 'Chat' },
    { img: gemini, name: 'Gemini' },
    { img: docs, name: 'Docs' },
    { img: sheets, name: 'Sheets' },
    { img: slide, name: 'Slides' },
    { img: vids, name: 'Video' },
    { img: keep, name: 'Keep' },
    { img: site, name: 'Sites' },
    { img: forms, name: 'Forms' },
    { img: notebook, name: 'Notebook' },
    { img: appsheet, name: 'AppSheet' },
]

const Plan = () => {
    return (
        <>
            <section className="py-16 bg-[#f8f9fa] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#001D08] mb-12">
                        Find the right plan for your business.
                        <br className="hidden md:block" />
                        <span className="text-[#7f2ef8]">Try it at no cost for 14 days.</span>
                    </h2>

                    {/* Sliding Icons */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-slide-left">
                            {[...tools, ...tools].map((tool, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center w-32 md:w-40 mx-4 flex-shrink-0"
                                >
                                    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={tool.img}
                                            alt={tool.name}
                                            className="w-14 h-14 object-contain"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm md:text-base font-medium text-gray-700">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Pricing />
        </>

    )
}

export default Plan
