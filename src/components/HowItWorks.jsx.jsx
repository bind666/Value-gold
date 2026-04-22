import React from "react";

const sellSteps = [
  { title: "Bring your gold", no: "01" },
  { title: "Purity testing", no: "02" },
  { title: "Melting for better value", no: "03" },
  { title: "Instant account transfer", no: "04" },
];

const pledgeSteps = [
  { title: "Evaluation of Pledge Ticket", no: "01" },
  { title: "Physical Verification", no: "02" },
  { title: "Get an Advance Amount", no: "03" },
  { title: "Purity Test", no: "04" },
  { title: "Melt for Better Value", no: "05" },
  { title: "Receive the Balance Amount", no: "06" },
];

const StepCard = ({ title, no }) => (
  <div className="flex justify-between items-center bg-gray-100 rounded-xl px-3 sm:px-4 py-3 sm:py-4
  hover:shadow-lg transition duration-300">
    <p className="text-xs sm:text-sm text-gray-800">{title}</p>
    <span className="text-xl sm:text-2xl font-bold text-gray-300">{no}</span>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-brand-cream py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* Top Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="section-heading mb-4">
            <div className="section-heading-line"></div>
            <h2>HARSHDEEP JEWELLERS - BEST GOLD BUYERS</h2>
            <div className="section-heading-line"></div>
          </div>

          <p className="max-w-4xl mx-auto text-gray-700 leading-7 text-sm sm:text-base">
            Selling gold becomes simple, seamless, and completely reliable with Harshdeep Jewellers. Our streamlined method begins with a detailed assessment of the quality of your gold...
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="max-w-6xl mx-auto">

          <h3 className="text-lg sm:text-xl font-semibold text-brand-navy mb-2">
            HOW IT WORKS:
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Convert your gold in these simple steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* LEFT BOX */}
            <div className="card-dark rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-brand-gold">
                Sell gold for instant money:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {sellSteps.map((step, index) => (
                  <StepCard key={index} {...step} />
                ))}
              </div>

              <button className="btn-gold mt-4 sm:mt-6 rounded-full">
                KNOW MORE
              </button>
            </div>

            {/* RIGHT BOX */}
            <div className="card-gold rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Release Pledged Gold
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {pledgeSteps.map((step, index) => (
                  <StepCard key={index} {...step} />
                ))}
              </div>

              <button className="btn-primary mt-4 sm:mt-6 rounded-full">
                KNOW MORE
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
