import React from "react";
import { FaUsers, FaMapMarkedAlt, FaBuilding, FaBus } from "react-icons/fa";

const data = [
  {
    icon: <FaUsers />,
    number: "500+",
    label: "Happy Customers",
    bg: "bg-brand-navy",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "1",
    label: "State",
    bg: "bg-brand-gold",
  },
  {
    icon: <FaBuilding />,
    number: "1",
    label: "Branch",
    bg: "bg-brand-navy",
  },
  {
    icon: <FaBus />,
    number: "100%",
    label: "Transparent & Trusted Process",
    bg: "bg-brand-gold",
  },
];

const Achievements = () => {
  return (
    <section className="bg-brand-tan py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <div className="section-heading-line"></div>
          <h2>OUR ACHIEVEMENTS</h2>
          <div className="section-heading-line"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} text-white rounded-2xl p-4 sm:p-8 text-center
              transform transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl group`}
            >

              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 opacity-90
              group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Number */}
              {item.number && (
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  {item.number}
                </h3>
              )}

              {/* Label */}
              <p className="text-xs sm:text-sm leading-5 text-white font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
