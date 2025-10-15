import React from 'react'
import Heading from '../../Component/Heading'
import blog1 from '../../assets/Images/blog1.jpg'
import blog2 from '../../assets/Images/blog2.jpg'
import blog3 from '../../assets/Images/blog3.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Blog = () => {
    const data = [
        {
            image: blog1,
            text: "  Necessity May Give us Best Virtual Court"
        },
        {
            image: blog2,
            text: "Wise spending habits, 13 tips for maximizing your money"
        },
        {
            image: blog3,
            text: "Easy and Most Powerful Server and Platform"
        },
    ]
    return (
        <section className='relative px-6 md:px-20 lg:py-20 py-10 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white'>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Heading title="OUR NEWS AND BLOG" subtitle="Read our latest blog" />
                </div>

                {/* <a
                    href="#contact"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#7f2ef8] to-[#9b5fff] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300 whitespace-nowrap"
                >
                    View all Post
                </a> */}
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
                {/* Blog Card */}
                {data.map((itm) => (
                    <>
                        <div className="border border-gray-300 rounded-lg overflow-hidden group">
                            <div className="relative">
                                <img
                                    src={itm.image}
                                    alt="Blog"
                                    className="w-full h-[250px] object-cover rounded-tl-lg rounded-tr-lg transform transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Date Box — overlaps bottom of image */}
                                <div className="absolute -bottom-6 left-6 w-[50px] h-[56px] bg-[var(--primary)] rounded-[4px] flex flex-col items-center justify-center leading-tight shadow-md">
                                    <h4 className="text-white font-semibold text-[20px]">20</h4>
                                    <p className="text-white text-[12px] font-normal">Nov</p>
                                </div>
                            </div>

                            <div className="px-6 pt-10 pb-4">
                                <h4 className="text-black text-[20px] font-semibold leading-snug hover:text-[var(--primary)]">
                                    {itm.text}
                                </h4>
                                <p className="flex items-center gap-2 text-[var(--primary)] font-medium text-sm cursor-pointer hover:gap-3 transition-all">
                                    Read More
                                    <FaArrowRight className="text-[14px]" />
                                </p>

                            </div>



                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}

export default Blog
