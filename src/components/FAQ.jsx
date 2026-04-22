import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Harshdeep Jewellers offer?",
    answer:
      "Harshdeep Jewellers buys gold and also helps release pledged gold by purchasing it at the best market value.",
  },
  {
    question: "What is the best way to sell gold?",
    answer: "Visit Harshdeep Jewellers for instant evaluation and best price.",
  },
  {
    question: "Why should Harshdeep Jewellers be your choice to sell gold?",
    answer: "Because of transparency, best rates, and instant payment.",
  },
  {
    question: "Where can I sell gold near me?",
    answer: "You can visit any Harshdeep Jewellers branch near you.",
  },
  {
    question: "Where to sell gold?",
    answer: "Sell gold at trusted buyers like Harshdeep Jewellers.",
  },
  {
    question: "How soon can pledged gold be released?",
    answer: "It can be released instantly after evaluation.",
  },
  {
    question: "What are the branch timings?",
    answer: "Most branches are open from 10 AM to 7 PM.",
  },
  {
    question: "Which is the best Gold buying Store?",
    answer: "Harshdeep Jewellers is one of the best gold buyers.",
  },
  {
    question: "What documents are required to sell gold?",
    answer: "Valid ID proof is required.",
  },
  {
    question: "How to contact Harshdeep Jewellers?",
    answer: "You can call or visit the nearest branch.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <div className="section-heading-line"></div>
          <h2>FAQ'S</h2>
          <div className="section-heading-line"></div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto border rounded-lg overflow-hidden">
          {faqs.map((item, index) => (
            <div key={index} className="border-b last:border-b-0">

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium text-brand-navy hover:bg-gray-50 transition text-sm sm:text-base"
              >
                {item.question}
                <FaChevronDown
                  className={`text-brand-gold flex-shrink-0 ml-2 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 py-2 sm:py-3"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-xs sm:text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
