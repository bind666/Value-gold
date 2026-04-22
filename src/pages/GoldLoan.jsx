import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../components/Footer";

const GoldLoan = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a gold loan?",
      answer:
        "A gold loan is a secured loan where you pledge your gold ornaments, coins, or bars as collateral to receive funds. It is one of the quickest ways to get instant cash without selling your gold.",
    },
    {
      question: "How much loan can I get against my gold?",
      answer:
        "The loan amount depends on the weight and purity of your gold. At Harshdeep Jewellers, we offer up to 75% of the current market value of your gold, ensuring you get the maximum benefit.",
    },
    {
      question: "What are the interest rates for gold loans?",
      answer:
        "We offer competitive interest rates starting from attractive rates. The exact rate depends on the loan amount, tenure, and scheme selected. Visit our branch for personalized rates.",
    },
    {
      question: "What documents are required for a gold loan?",
      answer:
        "You need minimal documentation — just your Aadhaar Card, PAN Card, and one address proof. The process is quick and hassle-free.",
    },
    {
      question: "How long does it take to get a gold loan?",
      answer:
        "At Harshdeep Jewellers, gold loan disbursal is almost instant. Once your gold is evaluated and documents are verified, funds are transferred within 30 minutes.",
    },
    {
      question: "Is my gold safe during the loan period?",
      answer:
        "Absolutely. Your gold is stored in high-security vaults with insurance coverage. It is returned to you in the exact same condition once you repay the loan.",
    },
    {
      question: "Can I repay the gold loan before the tenure ends?",
      answer:
        "Yes, you can prepay or foreclose your gold loan at any time without any prepayment penalties. We believe in flexible repayment options for our customers.",
    },
    {
      question: "What happens if I can't repay the gold loan?",
      answer:
        "We work with you to find a solution. If repayment becomes difficult, we offer restructuring options. As a last resort, the pledged gold may be used to settle the outstanding amount.",
    },
  ];

  return (
    <div className="bg-brand-cream">
      {/* HERO */}
      <section className="bg-brand-navy py-10 sm:py-14 lg:py-20 text-center">
        <div className="section-container">
          <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
            Secure & Instant
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Gold Loan
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
            Get instant funds against your gold with minimal documentation and competitive interest rates.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-6 uppercase">
              INSTANT GOLD LOAN WITH HARSHDEEP JEWELLERS
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Need funds urgently? Harshdeep Jewellers offers quick and hassle-free
              gold loans at competitive interest rates. Simply pledge your gold
              ornaments, coins, or bars and get instant cash without the stress of
              lengthy paperwork or waiting periods.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our transparent evaluation process ensures you get the maximum loan
              value for your gold. With advanced purity testing using KARAT METER
              (XRF Technology), we guarantee accurate assessments so you can borrow
              with confidence. Your gold remains safe in our secure vaults until
              you repay and reclaim it.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format&fit=crop&q=80"
              alt="Gold Loan"
              className="rounded-card shadow-card w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-navy py-12 sm:py-16 lg:py-20 text-white">
        <div className="section-container mb-10 sm:mb-14">
          <div className="section-heading !justify-start">
            <h2 className="!text-white">HOW IT WORKS</h2>
            <span className="section-heading-line"></span>
          </div>
        </div>

        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: "Step 1",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon1.svg",
              title: "Bring Your Gold",
              desc: "Visit the nearest Harshdeep Jewellers branch with your gold jewellery, coins, or bars.",
            },
            {
              step: "Step 2",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
              title: "Purity Evaluation",
              desc: "Your gold is tested using KARAT METER (XRF Technology) for accurate purity assessment in your presence.",
            },
            {
              step: "Step 3",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
              title: "Loan Approval",
              desc: "Based on purity and weight, your loan amount is calculated and approved instantly with minimal paperwork.",
            },
            {
              step: "Step 4",
              img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
              title: "Instant Disbursement",
              desc: "Funds are transferred to your account via IMPS, NEFT, or RTGS within minutes of approval.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-card p-5 text-center shadow-card min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group"
            >
              <span className="text-sm bg-gray-200 text-gray-500 px-3 py-1 rounded mb-4 w-fit inline-block">
                {item.step}
              </span>
              <img
                src={item.img}
                alt={item.title}
                className="w-20 mx-auto mb-5 opacity-80 transition duration-300 group-hover:scale-110"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-heading-line"></div>
            <h2>WHY CHOOSE OUR GOLD LOAN?</h2>
            <div className="section-heading-line"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Instant Disbursement",
                desc: "Get funds transferred to your account within 30 minutes of gold evaluation.",
                icon: "⚡",
              },
              {
                title: "Competitive Interest Rates",
                desc: "Enjoy some of the lowest interest rates in the market on your gold loan.",
                icon: "📉",
              },
              {
                title: "Minimal Documentation",
                desc: "Just Aadhaar, PAN, and address proof. No income proof or credit score required.",
                icon: "📋",
              },
              {
                title: "Safe & Insured Storage",
                desc: "Your gold is kept in high-security vaults with full insurance coverage.",
                icon: "🔒",
              },
              {
                title: "Flexible Repayment",
                desc: "Choose from multiple repayment options — EMI, bullet, or partial payments.",
                icon: "🔄",
              },
              {
                title: "No Prepayment Penalty",
                desc: "Close your loan anytime without any additional charges or penalties.",
                icon: "✅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream">
        <div className="section-container">
          <div className="section-heading !justify-start">
            <h2>DOCUMENTS REQUIRED</h2>
            <span className="section-heading-line"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {[
              {
                title: "Aadhaar Card",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon1.svg",
              },
              {
                title: "PAN Card",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon2.svg",
              },
              {
                title: "Address Proof",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon3.svg",
              },
              {
                title: "Bank Account Details",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon4.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-brand-navy rounded-card py-12 px-6 text-center flex flex-col items-center justify-center
                  shadow-card transition-all duration-300 hover:-translate-y-3 hover:shadow-card-hover group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 md:w-32 mb-6
                    filter brightness-0 invert sepia saturate-[600%] hue-rotate-[10deg]
                    transition duration-300 group-hover:scale-110"
                />
                <h3 className="text-lg md:text-xl font-medium text-brand-gold-light group-hover:text-yellow-300 transition">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&auto=format&fit=crop&q=80"
            alt="bg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85 backdrop-brightness-75"></div>
        </div>

        <div className="relative section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
              GET INSTANT GOLD LOAN IN 30 MINUTES!
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              Unlock the value of your gold without selling it. Harshdeep Jewellers
              provides secure gold loans with the best interest rates, transparent
              evaluation, and instant disbursal. Your gold stays safe in our insured
              vaults while you get the funds you need. Call 97021 86316 and our team
              will guide you every step of the way.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black p-6 rounded-card shadow-card-hover w-full max-w-xl ml-auto">
            <h3 className="text-lg font-semibold mb-4 text-brand-navy">
              Apply for Gold Loan
            </h3>

            <form className="space-y-4">
              <div>
                <label className="form-label">Full Name</label>
                <input placeholder="Enter your full name" className="form-input" />
              </div>

              <div>
                <label className="form-label">Mobile Number</label>
                <input placeholder="Enter your mobile number" className="form-input" />
              </div>

              <div>
                <label className="form-label">Email</label>
                <input placeholder="name@email.com" className="form-input" />
              </div>

              <div>
                <label className="form-label">Approximate Gold Weight (grams)</label>
                <input placeholder="e.g. 50" className="form-input" />
              </div>

              <div>
                <label className="form-label">Loan Amount Required</label>
                <input placeholder="e.g. ₹2,00,000" className="form-input" />
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  I authorize Harshdeep Jewellers and its representatives to contact me
                  via Call, SMS, Email, or WhatsApp regarding their products and
                  offers. This consent overrides any registration made under
                  DND/NDNC.
                </p>
              </div>

              <button className="btn-primary w-full">APPLY NOW</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-heading">
          <span className="section-heading-line"></span>
          <h2>FAQ'S</h2>
          <span className="section-heading-line"></span>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5 px-4 sm:px-6 lg:px-8">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-card shadow-card overflow-hidden">
              <button
                className={`w-full p-4 sm:p-5 flex justify-between items-center cursor-pointer transition-all duration-300 ${
                  openIndex === index
                    ? "bg-brand-gold text-white"
                    : "bg-white hover:bg-brand-gold hover:text-white"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-base sm:text-lg text-left">{item.question}</h3>
                <FaChevronDown
                  className={`text-sm flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white text-gray-700 px-4 sm:px-6 pt-4 pb-6 text-sm sm:text-base leading-relaxed border-t">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoldLoan;
