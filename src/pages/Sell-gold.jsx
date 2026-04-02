import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../components/Footer";

const SellGold = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How to sell gold?",
      answer:
        "Walk into your nearest Value Gold store to sell gold ornaments, coins, bars, or other items. We offer the best market value per gram through a simple, transparent process.",
    },
    {
      question: "How is the purity of gold checked?",
      answer:
        "We use KARAT METER ( XRF Technology ), ultrasonic cleaning, steam treatment, and melting to determine gold purity with precision. This advanced process minimizes human involvement, ensuring 100% accurate and transparent readings.",
    },
    {
      question: "How long does it take to receive the amount?",
      answer:
        "Once the purity test and valuation are completed, you'll receive your instant payment within 30 Minutes. Value Gold ensures every transaction is completed quickly and seamlessly.",
    },
    {
      question: "Can stolen gold be sold?",
      answer:
        "No. Value Gold does not buy stolen or fake gold. Selling such items is illegal, and any attempt to do so will result in legal action.",
    },
    {
      question: "Can NRIs or non-locals sell gold?",
      answer:
        "Yes, NRIs and non-locals can sell gold by providing valid documents such as a passport, PAN card, and local address proof for verification.",
    },
    {
      question: "What documents are required to sell gold?",
      answer: (
        <div>
          <p className="mb-3">
            To ensure a smooth and secure transaction, please carry the
            following documents:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Aadhaar Card</li>
            <li>PAN Card</li>
            <li>Address Proof</li>
            <li>Bank Passbook</li>
            <li>Pledged Ticket (if redeeming pledged gold)</li>
          </ul>

          <p className="mt-4">
            These help us verify your identity and complete your instant
            transfer safely.
          </p>
        </div>
      ),
    },
    {
      question: "What is the best gold buyer?",
      answer:
        "Value Gold is trusted as one of the best gold buyers for our transparent process, precise purity testing, and instant transfer system. Our accuracy, reliability, and commitment to fair value make us a preferred choice across regions.",
    },
  ];

  return (
    <div className="bg-brand-cream">
      {/* HERO */}
      <section>
        <img
          src="https://valuegold.com/wp-content/uploads/2024/12/Sell-old-gold-Banner.jpg.webp"
          className="w-full h-auto block"
          alt="sell gold"
        />
      </section>

      {/* INTRO */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container grid grid-cols-1 md:grid-cols-[1.2fr_1.3fr] gap-8 sm:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-6 uppercase">
              SELL GOLD FOR INSTANT MONEY WITH VALUE GOLD
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Are you looking to sell gold? Look no further than Value Gold, where
              we provide a seamless and transparent experience for selling old
              gold. With our 120+ years of legacy and commitment to customer
              satisfaction, we ensure that you receive the best market value for
              your gold.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Value Gold, we specialize in helping you sell old gold with
              confidence. Our innovative gold valuation techniques, including the
              KARAT METER (XRF Technology) and ultrasonic cleaning, ensure
              accurate assessments of your gold's purity. This means you can trust
              that you are receiving the most competitive value available.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://valuegold.com/wp-content/uploads/2023/09/Sell-Your-Gold.jpg.webp"
              alt="Sell Gold"
              className="rounded-card shadow-card w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-navy py-12 sm:py-16 lg:py-20 text-white">
        {/* HEADING */}
        <div className="section-container mb-10 sm:mb-14">
          <div className="section-heading !justify-start">
            <h2 className="!text-white">HOW IT WORKS</h2>
            <span className="section-heading-line"></span>
          </div>
        </div>

        {/* CARDS */}
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* STEP CARD */}
          {[
            {
              step: "Step 1",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon1.svg",
              title: "Bring Your Gold",
              desc: "Walk into the nearest Value Gold store with your old gold jewellery, coins, or bars.",
            },
            {
              step: "Step 2",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
              title: "Test for Purity",
              desc: "Your gold is tested using KARAT METER (XRF Technology), ultrasonic cleaning, steam treatment, ensuring accurate results.",
            },
            {
              step: "Step 3",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
              title: "Melt for Better Value",
              desc: "We melt and weigh your gold in front of you to ensure complete clarity and transparency.",
            },
            {
              step: "Step 4",
              img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
              title: "Instant Account Transfer",
              desc: "Amount is transferred instantly via IMPS, NEFT, or RTGS securely.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-card p-5 text-center shadow-card min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group"
            >
              {/* STEP */}
              <span className="text-sm bg-gray-200 text-gray-500 px-3 py-1 rounded mb-4 w-fit inline-block">
                {item.step}
              </span>

              {/* ICON */}
              <img
                src={item.img}
                alt={item.title}
                className="w-20 mx-auto mb-5 opacity-80 transition duration-300 group-hover:scale-110"
              />

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream">
        <div className="section-container">
          {/* HEADING */}
          <div className="section-heading !justify-start">
            <h2>DOCUMENTS REQUIRED</h2>
            <span className="section-heading-line"></span>
          </div>

          {/* CARDS */}
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
                {/* ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 md:w-32 mb-6
                    filter brightness-0 invert sepia saturate-[600%] hue-rotate-[10deg]
                    transition duration-300 group-hover:scale-110"
                />

                {/* TITLE */}
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
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.pond5.com/persons-hands-counting-crisp-banknotes-footage-311563827_iconl.jpeg"
            alt="bg"
            className="w-full h-full object-cover"
          />

          {/* BLUE OVERLAY (IMPORTANT) */}
          <div className="absolute inset-0 bg-brand-navy/85 backdrop-brightness-75"></div>
        </div>

        {/* CONTENT */}
        <div className="relative section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
              SELL GOLD & GET INSTANT PAYMENT IN 30 MINUTES!
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              Turn your unused gold into immediate returns with Value Gold. We
              make the process quick, simple, and secure, so you get the highest
              value without stress or waiting. When you choose to sell gold, you
              choose complete transparency. Our advanced purity testing, expert
              evaluation, and open process ensure you always know exactly what
              your gold is worth with no hidden deductions. Call 97021 86316 and
              our team will guide you every step of the way.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black p-6 rounded-card shadow-card-hover w-full max-w-xl ml-auto">
            <h3 className="text-lg font-semibold mb-4 text-brand-navy">
              Request a Call Back
            </h3>

            <form className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label className="form-label">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="form-label">
                  Mobile Number
                </label>
                <input
                  placeholder="Enter your mobile number"
                  className="form-input"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="form-label">
                  Email
                </label>
                <input
                  placeholder="name@email.com"
                  className="form-input"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="form-label">
                  Location
                </label>
                <select className="form-select">
                  <option>Please Select State</option>
                </select>
              </div>

              {/* AREA */}
              <div>
                <label className="form-label">Area</label>
                <input
                  placeholder="Enter your area"
                  className="form-input"
                />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  I authorize Value Gold and its representatives to contact me
                  via Call, SMS, Email, or WhatsApp regarding their products and
                  offers. This consent overrides any registration made under
                  DND/NDNC.
                </p>
              </div>

              {/* BUTTON */}
              <button className="btn-primary w-full">
                SUBMIT
              </button>
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
              {/* QUESTION */}
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

              {/* ANSWER */}
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

export default SellGold;
