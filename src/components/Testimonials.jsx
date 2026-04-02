import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Vasanth Jakkula",
    text: "True transparency, True word, True delivery, True people.",
    bottom: "20+ Branches Across Telugu States",
  },
  {
    name: "Rahul Kumar",
    text: "Very fast service and best gold price offered.",
    bottom: "Trusted by Thousands of Customers",
  },
  {
    name: "Priya Sharma",
    text: "Smooth process and instant payment received.",
    bottom: "Best Gold Buyers in India",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-brand-navy text-white py-12 sm:py-16 lg:py-20 relative">

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-lg text-center lg:text-left">

          <h2 className="text-base sm:text-lg lg:text-xl text-brand-gold mb-4">
            — HEAR FROM OUR CUSTOMERS —
          </h2>

          {/* Animated Text */}
          <p className="mb-4 text-sm sm:text-base transition-all duration-500 text-white">
            {testimonials[index].text}
          </p>

          {/* Stars */}
          <div className="flex gap-1 text-brand-gold mb-4 justify-center lg:justify-start">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Name */}
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {testimonials[index].name}
          </h3>
          <p className="text-brand-gold text-xs sm:text-sm mt-1">customer</p>

          {/* Dots */}
          <div className="flex gap-2 mt-6 justify-center lg:justify-start">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-brand-gold" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (STATIC) */}
        <div className="relative flex-shrink-0">
          <img
            src="https://valuegold.com/wp-content/uploads/2024/03/Value-client.webp"
            alt="customer"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-brand-gold mx-auto"
          />
        </div>
      </div>

      {/* BOTTOM TEXT (Animated) */}
      <div className="bg-brand-gold text-center py-3 sm:py-4 mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg font-semibold">
        {testimonials[index].bottom}
      </div>
    </section>
  );
};

export default Testimonials;
