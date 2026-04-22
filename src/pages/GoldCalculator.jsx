import Footer from "../components/Footer";

export default function GoldCalculator() {
  return (
    <div className="bg-brand-cream">

      {/* HERO */}
      <section className="bg-brand-navy text-center py-8 sm:py-10 lg:py-12 text-white">
        <div className="section-container">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-gold mb-2">
            UNLOCK YOUR GOLD'S TRUE VALUE
          </h1>
          <p className="text-brand-gold/80 text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
            WITH OUR GOLD CALCULATOR!
          </p>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">
            Trustworthy & Transparent Service | 25+ Years Legacy of CapsGold | Best Value for Gold | Instant Cash
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy">Old Gold Calculator</h2>
              <div className="h-[2px] w-10 sm:w-16 bg-brand-gold" />
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Discover the actual value of your gold effortlessly from the comfort of your home with Harshdeep Jewellers's
              <span className="text-brand-navy font-medium"> Old Gold Calculator</span>.
            </p>

            <ol className="list-decimal ml-5 space-y-2 text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
              <li>Select The Karats of Your Gold</li>
              <li>Input Your <span className="font-semibold">Gold Weight</span> In Grams</li>
              <li>Click on 'Next'</li>
              <li>Fill Out The Form & Our Team will get back to you</li>
            </ol>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              By leveraging <span className="text-brand-navy font-medium">Harshdeep Jewellers's</span> Gold Calculator,
              you gain access to a powerful tool that simplifies the process of gold valuation.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-brand-navy p-5 sm:p-6 lg:p-8 rounded-xl text-white shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Select Karats</label>
                <select className="form-select">
                  <option>Select Karats</option>
                  <option>24K</option>
                  <option>22K</option>
                  <option>18K</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Weight in Grams</label>
                <input type="number" placeholder="Enter Grams" className="form-input" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Name</label>
                <input placeholder="Your name" className="form-input" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Phone</label>
                <input type="tel" placeholder="Your phone number" className="form-input" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block text-gray-200">Email</label>
                <input type="email" placeholder="Your email" className="form-input" />
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-300">
                <input type="checkbox" className="mt-1" />
                <p>Estimated returns may vary after verification. <span className="text-red-400">(Required)</span></p>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-300">
                <input type="checkbox" className="mt-1" />
                <p>I authorize Harshdeep Jewellers to contact me via Call, SMS, Email. <span className="text-red-400">(Required)</span></p>
              </div>

              <button type="submit" className="btn-gold w-full py-3">Submit</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
