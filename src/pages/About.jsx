import React from "react";
import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-brand-cream">

      {/* HERO */}
      <section className="w-full">
        <img
          src="https://valuegold.com/wp-content/uploads/2025/09/Legacy_banner.jpg.webp"
          alt="Value Gold Legacy"
          className="w-full h-auto block"
        />
      </section>

      {/* OUR LEGACY */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container max-w-4xl text-center">
          <div className="section-heading">
            <div className="section-heading-line" />
            <h2>OUR LEGACY</h2>
            <div className="section-heading-line" />
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-7 mb-4 sm:mb-6">
            Established in 1901, Caps Gold has built a proud legacy and has grown
            into one of India's most trusted gold and silver bullion merchants.
            We are committed to accountability, integrity, and reliability.
            Continuing this legacy, we founded Value Gold, a company that offers
            modern financial solutions while staying true to the values that have
            guided us for over a century.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-7">
            Value Gold represents a thoughtful blend of heritage and innovation,
            ensuring our customers receive solutions that meet their changing
            needs. Our long-standing expertise in gold transactions has helped
            position Value Gold as a reliable and preferred choice for individuals
            looking to sell gold for instant money.
          </p>
        </div>
      </section>

      {/* VALUE / VISION / MISSION */}
      <ValueSection />

      {/* CERTIFICATIONS */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container text-center">
          <div className="section-heading">
            <div className="section-heading-line" />
            <h2>CERTIFICATIONS</h2>
            <div className="section-heading-line" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center max-w-4xl mx-auto">
            {[
              { src: "https://valuegold.com/wp-content/uploads/2023/09/EGAC.png.webp", alt: "EGAC" },
              { src: "https://valuegold.com/wp-content/uploads/2023/09/IAF.png.webp", alt: "IAF" },
              { src: "https://valuegold.com/wp-content/uploads/2023/09/ISO.png.webp", alt: "ISO" },
              { src: "https://valuegold.com/wp-content/uploads/2023/09/MMS.png.webp", alt: "MMS" },
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="mx-auto h-16 sm:h-20 lg:h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
