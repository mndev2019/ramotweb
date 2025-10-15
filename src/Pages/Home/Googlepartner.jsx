import React from "react";
import google from "../../assets/Images/googlepartner.png";
import { useNavigate } from "react-router-dom";

const Googlepartner = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-16 px-6 md:px-16 bg-gradient-to-b from-[#f5f7fa] to-[#e6ecf3]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h4 className="text-[32px] md:text-[40px] font-light uppercase tracking-[10px] text-[#555]">
          Google Cloud Partner
        </h4>
        <h2 className="text-[#1E2E45] text-[36px] md:text-[50px] font-semibold mt-2">
          Official Google Cloud Seller
        </h2>
        <div className="w-24 h-[3px] bg-[#1E2E45] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={google}
            alt="Google Partner"
            className="h-[160px] md:h-[200px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-[24px] md:text-[28px] font-medium text-[#1E2E45] leading-snug">
            Empower your business with the full suite of Google Workspace
          </h3>
          <p className="text-[18px] text-[#555] leading-relaxed">
            Boost productivity and collaboration with tools like Gmail, Calendar,
            Drive, Docs, Meet, and more — all backed by the security and
            reliability of Google Cloud.
          </p>
          <button className="mt-4 bg-[#1E2E45] text-white px-6 py-3 rounded-full text-[16px] font-medium hover:bg-[#253b5c] transition-colors duration-300" onClick={()=> navigate('/contact')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Googlepartner;
