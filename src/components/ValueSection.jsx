import React, { useState } from "react";

const data = [
  {
    title: "VALUE",
    content: `We stand for trust, transparency, and fairness.
Every customer who walks in is treated with dignity, and every gram of gold is evaluated with honesty, accuracy, and respect.`,
  },
  {
    title: "VISION",
    content: `To become India's most trusted gold buying brand by delivering transparent and innovative financial solutions to every customer.`,
  },
  {
    title: "MISSION",
    content: `To provide fast, reliable, and honest gold services while ensuring maximum value and customer satisfaction.`,
  },
];

const ValueSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-brand-cream py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        <div className="max-w-5xl mx-auto bg-brand-navy rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 text-white">

          {/* TABS */}
          <div className="flex flex-row md:flex-col gap-4 sm:gap-6 md:min-w-[180px] overflow-x-auto">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`text-left text-lg sm:text-xl lg:text-2xl tracking-wider transition-all duration-300 whitespace-nowrap ${
                  active === index
                    ? "text-white font-semibold border-b-2 md:border-b-2 border-brand-gold pb-1"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="flex-1">
            <p className="text-sm sm:text-base lg:text-lg leading-7 whitespace-pre-line transition-all duration-300">
              {data[active].content}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueSection;
