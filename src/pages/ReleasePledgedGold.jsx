import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../components/Footer";

const ReleasePledgedGold = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How soon can I get my pledged gold released?",
      answer:
        "Once the basic details and documents are checked, we start the release process right away. Our aim is to make it quick and simple for you.",
    },
    {
      question: "Will someone from Harshdeep Jewellers help me with the release?",
      answer:
        "Yes. A team member will guide you through the steps and help you complete the process smoothly.",
    },
    {
      question: "What do I need to bring to release my pledged gold?",
      answer:
        "Just bring your ID proof and the pledge slip or receipt. If you're unsure, our team will tell you what's needed once they review your case.",
    },
    {
      question: "Can I sell the gold after it's released?",
      answer:
        "Yes, once your gold is released, you can choose to keep it or sell it. If you decide to sell, we can help with the evaluation.",
    },
    {
      question: "What if I don't have all the pledge details?",
      answer:
        "No problem. Share whatever information you remember and our team will help you find the rest.",
    },
    {
      question: "Is there a minimum quantity for releasing gold?",
      answer:
        "No, there's no limit. Whether it's a small ornament or a larger quantity, you can release any amount.",
    },
    {
      question: "What if the gold value turns out to be less than expected?",
      answer:
        "We'll explain the value clearly and help you understand your best options before moving forward.",
    },
    {
      question: "Is my gold safe during the process?",
      answer:
        "Yes, your gold is always handled with care and complete security throughout the process.",
    },
  ];

  const howItWorksSteps = [
    {
      title: "Evaluation of Pledge Ticket",
      desc: "We begin by evaluating your pledged gold after coordinating with the financial institution to understand the pledge details and settlement requirements.",
      img: "https://valuegold.com/wp-content/uploads/2023/08/work_ticket_img.svg",
    },
    {
      title: "Physical Verification",
      desc: "A physical verification is conducted to authenticate the pledged gold documents and confirm the asset details or address if required.",
      img: "https://valuegold.com/wp-content/uploads/2023/08/verf_img.svg",
    },
    {
      title: "Get Advance Amount",
      desc: "After verifying the pledged gold, we make an advance payment directly to the financial institution and initiate the release of your pledged gold.",
      img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
    },
    {
      title: "Purity Test",
      desc: "Once released, the gold is tested using KARAT METER ( XRF Technology ) and other advanced purity testing methods in your presence to ensure full transparency and accuracy.",
      img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
    },
    {
      title: "Melt for Better Value",
      desc: "The gold is melted and weighed in front of you to determine the precise value, ensuring you receive the best possible market rate for your jewellery.",
      img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
    },
    {
      title: "Receive Balance Amount",
      desc: "After the purity verification and valuation, the remaining amount is transferred instantly to your account, completing a smooth and secure transaction.",
      img: "https://valuegold.com/wp-content/uploads/2023/09/Group-1482-2.png.webp",
    },
  ];

  const documents = [
    {
      title: "Aadhar Card",
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
      title: "Bank Passbook",
      img: "https://valuegold.com/wp-content/uploads/2023/08/passbook.png.webp",
    },
    {
      title: "Pledged Ticket",
      img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon5.svg",
    },
  ];

  return (
    <div className="bg-brand-cream">
      {/* HERO */}
      <section className="relative">
        <img
          src="/service-assets/release-gold-banner-english.png"
          className="w-full h-auto block"
          alt="Release pledged gold banner"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="section-container">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Release Your Pledged Gold Easily
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="section-heading justify-start mb-6">
              <h2>RELEASE PLEDGED GOLD</h2>
              <div className="section-heading-line" />
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Looking to release pledged gold? At Harshdeep Jewellers, we make the process
              simple, transparent, and rewarding. With over 120+ years of trust
              and expertise, we help you unlock the true value of your pledged
              gold through a quick and reliable release process.
            </p>

            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              As a trusted name in gold buying, we provide a range of value-driven
              services designed to make your experience effortless and fair:
            </p>

            <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">
                  Free Purity Test:
                </span>{" "}
                You can benefit from our complimentary purity testing, which helps
                you know the exact worth of your pledged gold before release. Our
                process ensures complete transparency and accuracy.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Instant Transfer:
                </span>{" "}
                Once your pledged gold is released, you'll receive instant payment
                through secure and verified banking modes. No waiting, no delays
                and just a fast and smooth transaction every time.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Transparent Process:
                </span>{" "}
                From evaluation to release, every step is automated and honest—no
                hidden deductions or misleading offers. What you see is what you
                get. We value trust, clarity, and customer satisfaction above all.
              </p>

              <p>
                Let Harshdeep Jewellers assist you in releasing your pledged gold with
                confidence and turning it into instant value today.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="https://valuegold.com/wp-content/uploads/2023/09/Release-Pledged-Gold.jpg.webp"
              className="rounded-card shadow-card w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
              alt="Release Gold"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-navy py-12 sm:py-16 lg:py-20 text-white">
        <div className="section-container">
          {/* HEADING */}
          <div className="section-heading justify-start mb-10 sm:mb-12">
            <h2 className="!text-white">HOW IT WORKS</h2>
            <div className="section-heading-line" />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {howItWorksSteps.map((item, i) => (
              <div
                key={i}
                className="card p-6 sm:p-8 min-h-[300px] text-center flex flex-col items-center justify-between group"
              >
                {/* STEP */}
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full mb-3 self-start">
                  Step {i + 1}
                </span>

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 sm:w-28 mb-5 opacity-80 transition duration-300 group-hover:scale-110"
                />

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          {/* HEADING */}
          <div className="section-heading justify-start mb-10 sm:mb-12">
            <h2>DOCUMENTS REQUIRED</h2>
            <div className="section-heading-line" />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {documents.map((item, i) => (
              <div
                key={i}
                className="card-dark py-8 sm:py-10 px-4 sm:px-6 text-center flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] group"
              >
                {/* ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 sm:w-20 md:w-24 mb-4 sm:mb-5 filter brightness-0 invert sepia saturate-[5] hue-rotate-[20deg] transition duration-300 group-hover:scale-110"
                />

                {/* TITLE */}
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-gold-light">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://images.pond5.com/persons-hands-counting-crisp-banknotes-footage-311563827_iconl.jpeg"
            alt="bg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/90" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* CONTENT */}
        <div className="relative section-container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
              LOOKING TO RELEASE YOUR PLEDGED GOLD?
            </h2>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
              Harshdeep Jewellers offers a fast, transparent, and reliable way to release
              pledged gold with ease and confidence.
            </p>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              At Harshdeep Jewellers, we understand that releasing pledged gold can feel
              overwhelming. That's why we've designed a simple and secure
              process that ensures a smooth experience from start to finish.
              Whether you want to release pledged gold or are searching for
              trusted pledged gold buyers, our experts are here to help every
              step of the way.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-card shadow-card-hover w-full max-w-xl ml-auto">
            <h3 className="text-lg font-semibold mb-6 text-brand-navy">
              Request a Call Back
            </h3>

            <form className="space-y-4">
              {/* NAME */}
              <div>
                <label className="form-label">Full Name</label>
                <input
                  placeholder="Enter your first name"
                  className="form-input"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="form-label">Mobile Number</label>
                <input
                  placeholder="Enter your mobile number"
                  className="form-input"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="form-label">Email</label>
                <input
                  placeholder="name@email.com"
                  className="form-input"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="form-label">Location</label>
                <select className="form-select">
                  <option>Please Select State.</option>
                </select>
              </div>

              {/* AREA */}
              <div>
                <label className="form-label">Let Us Know Your Area.</label>
                <input
                  placeholder="Let Us Know Your Area"
                  className="form-input"
                />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 accent-brand-navy"
                />
                <p>
                  I authorize Harshdeep Jewellers and its representatives to contact me
                  via Call, SMS, Email, or WhatsApp regarding their products and
                  offers.
                </p>
              </div>

              {/* BUTTON */}
              <button className="btn-primary w-full py-3">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="section-heading">
            <div className="section-heading-line" />
            <h2>FAQ'S</h2>
            <div className="section-heading-line" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="rounded-card shadow-card overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  className={`w-full p-4 sm:p-5 flex justify-between items-center cursor-pointer transition-colors duration-300 text-left ${
                    openIndex === index
                      ? "bg-brand-gold text-white"
                      : "bg-white text-gray-700 hover:bg-brand-gold hover:text-white"
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="font-medium text-base sm:text-lg pr-4">
                    {item.question}
                  </h3>
                  <FaChevronDown
                    className={`flex-shrink-0 text-sm transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white text-gray-700 px-4 sm:px-6 pt-4 pb-6 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReleasePledgedGold;
