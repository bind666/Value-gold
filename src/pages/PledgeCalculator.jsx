import React from "react";
import Footer from "../components/Footer";

const PledgeCalculator = () => {
  return (
    <div className="bg-brand-cream">

      {/* HERO */}
      <section className="bg-brand-navy text-white py-8 sm:py-10 lg:py-12 text-center">
        <div className="section-container">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-gold mb-2">
            Discover The Value Of Your Pledged Gold
          </h1>
          <p className="text-brand-gold/80 text-base sm:text-lg lg:text-xl font-semibold mb-2">
            with our Pledged Gold Calculator
          </p>
          <p className="text-xs sm:text-sm text-gray-300">
            #SellYourGoldBefikar with us!
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy">Pledged Gold Calculator</h2>
              <div className="h-[2px] w-10 sm:w-16 bg-brand-gold" />
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Unlock the true value of your gold that's used as collateral in your loan,
              with our <span className="text-brand-navy font-semibold">pledged gold calculator</span>.
            </p>

            <ol className="space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li>1. Mention the Financial Institution</li>
              <li>2. Enter the pledged gold's gross weight</li>
              <li>3. Select the karats of your gold</li>
              <li>4. Enter the pledged gold's net weight</li>
              <li>5. Enter the loan amount</li>
              <li>6. Click on 'Next'</li>
              <li>7. Fill out the form</li>
            </ol>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-brand-navy p-5 sm:p-6 lg:p-8 rounded-xl text-white shadow-lg">

            {/* STEPS */}
            <div className="flex gap-3 mb-6">
              {[1, 2, 3].map((step, i) => (
                <span
                  key={i}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm ${
                    i === 0
                      ? "bg-brand-gold text-white"
                      : "bg-white/20 text-white/60"
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Financial Institution</label>
                <input placeholder="Enter Financial institution" className="form-input" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Gross Weight</label>
                <input placeholder="Gross weight in grams" className="form-input" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Karats</label>
                <select className="form-select">
                  <option>Select Karats</option>
                  <option>18K</option>
                  <option>22K</option>
                  <option>24K</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Loan Amount</label>
                <input placeholder="Loan Amount" className="form-input" />
              </div>

              <button type="button" className="btn-gold w-full py-3">Next</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PledgeCalculator;
