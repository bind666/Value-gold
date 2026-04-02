import React from "react";

const services = [
  {
    title: "Sell Gold",
    desc: "Leverage your gold with ease during emergencies or financial needs. Convert your gold in a hassle-free way to handle unexpected expenses or meet important requirements.",
    img: "https://valuegold.com/wp-content/uploads/2024/05/760x272-sell-old-gold.webp",
    bg: "bg-brand-navy",
  },
  {
    title: "Release Pledged Gold",
    desc: "Escape the burden of mounting interest rates. Release your pledged gold stress-free with Value Gold and receive the remaining value smoothly and quickly.",
    img: "https://valuegold.com/wp-content/uploads/2024/05/760x272-release-pledge.webp",
    bg: "bg-brand-gold",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-brand-cream py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* ================= BEST GOLD BUYERS ================= */}
        <div className="text-center mb-10 sm:mb-12">

          {/* Heading */}
          <div className="section-heading mb-6">
            <div className="section-heading-line"></div>
            <h2>BEST GOLD BUYERS</h2>
            <div className="section-heading-line"></div>
          </div>

          {/* Description */}
          <p className="max-w-4xl mx-auto text-gray-700 leading-7 text-sm sm:text-base">
            Value Gold recognized as one of the best gold buyers in India, we provide a seamless and trustworthy experience for those looking to sell their gold. With 120+ years of heritage from the CapsGold legacy, we ensure that our customers receive the best market value for their gold and silver items. With multiple branches across major cities, Value Gold is your trusted destination for selling gold with ease and confidence.
          </p>
        </div>

        {/* ================= OUR SERVICES ================= */}
        <div className="section-heading mb-10 sm:mb-12">
          <div className="section-heading-line"></div>
          <h2>OUR SERVICES</h2>
          <div className="section-heading-line"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} group text-white rounded-2xl p-4 sm:p-6 shadow-lg
              transform transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl`}
            >

              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-4 sm:mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover
                  transition-transform duration-300
                  group-hover:scale-105"
                />
              </div>

              {/* Title + Arrow */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <button
                  className="border border-white px-3 py-1 rounded-full
                  transition-all duration-300
                  group-hover:bg-white group-hover:text-black
                  group-hover:translate-x-1"
                >
                  →
                </button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-6 text-white/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
