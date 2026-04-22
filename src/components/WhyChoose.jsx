import React from "react";
import {
  FaMoneyBillWave,
  FaBalanceScale,
  FaCogs,
  FaExchangeAlt,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    title: "Unbeatable Returns",
    desc: "We apply innovations such as KARAT METER (XRF Technology), Ultrasonic Cleaning, and Steam Cleaning to provide better value to every customer.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Better Gold Valuation",
    desc: "Gold assessment is done using the latest scientific techniques and industry best practices.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Automated Process",
    desc: "An automated system with no human intervention ensures unmatched accuracy and precision.",
    icon: <FaCogs />,
  },
  {
    title: "Instant Account Transfer",
    desc: "Our seamless process ensures you receive the amount instantly, without any waiting.",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Trust & Transparency",
    desc: "Complete disclosure and a step-by-step walkthrough ensure clarity and confidence.",
    icon: <FaHandshake />,
  },
  {
    title: "Legacy of CapsGold",
    desc: "A rich heritage of 120+ years empowers us to deliver the best.",
    icon: <FaChartLine />,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-brand-tan py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <div className="section-heading-line"></div>
          <h2>WHY CHOOSE HARSHDEEP JEWELLERS?</h2>
          <div className="section-heading-line"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 sm:p-6 shadow-md relative
              transition-all duration-300 transform
              hover:-translate-y-2 hover:shadow-xl hover:bg-brand-gold"
            >

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900
              group-hover:text-white transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-6
              group-hover:text-white transition">
                {item.desc}
              </p>

              {/* Icon */}
              <div className="absolute bottom-4 right-4 text-3xl sm:text-4xl
              text-brand-navy opacity-20
              group-hover:text-white group-hover:opacity-40
              transition duration-300">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
