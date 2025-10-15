import React from 'react'
import Heading from '../../../Component/Heading'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

const CloudSuccess = () => {
  const navigate = useNavigate();

  const data = [
    {
      heading: "Cloud Email Solutions",
      text: "Every company needs a corporate email address to show its identity in the market. Ramot helps you choose the right emailing solution as per your needs that helps you save cost & improve productivity. Recognized by experts & adopted by companies across domains.",
    },
    {
      heading: "Chrome Solutions",
      text: "Chrome Solutions consist of products and services that run on Chrome OS to enhance your business productivity. Products have built-in security options and help transform legacy systems into modernized devices. Secure and fast, these solutions are perfect for business.",
    },
    {
      heading: "SaaS Products",
      text: "Ramot offers a variety of SaaS products for enabling businesses to achieve more with safety and better productivity. We offer products Nira, Caspio, Signeasy, Garble Cloud etc. Please click here to see our entire range of SaaS offerings.",
    },
    {
      heading: "Cloud Security",
      text: "Security is integral for businesses, specifically for business organizations that are on the cloud. Employees share and work on multiple files in real-time. Therefore security becomes more significant. We provide various cloud security products. Click below to know more.",
    },
  ];

  // Slider Settings for mobile/tablet
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="lg:py-15 py-10 bg-[#fff7f2]">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <Heading title="Cloud Solutions" subtitle="to Enable Your Success" />
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* Slider for mobile & tablet */}
        <div className="block lg:hidden">
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-500 border border-gray-200 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{item.heading}</h3>
                  <p className="text-gray-700 text-sm flex-grow">{item.text}</p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-6 text-[var(--primary)] font-semibold hover:text-purple-900 transition"
                  >
                    Connect With Us →
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-500 border border-gray-200 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{item.heading}</h3>
              <p className="text-gray-700 text-sm flex-grow">{item.text}</p>
              <button
                onClick={() => navigate('/contact')}
                className="mt-6 text-[var(--primary)] font-semibold hover:text-purple-900 transition"
              >
                Connect With Us →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CloudSuccess;
