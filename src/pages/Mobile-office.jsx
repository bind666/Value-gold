import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const heroImages = [
  {
    src: "https://valuegold.com/wp-content/uploads/2025/11/Van-3.webp",
    alt: "Value Gold mobile office van - exterior view",
  },
  {
    src: "https://valuegold.com/wp-content/uploads/2025/11/Van-2.webp",
    alt: "Value Gold mobile office van - side view",
  },
  {
    src: "https://valuegold.com/wp-content/uploads/2025/11/van-1.webp",
    alt: "Value Gold mobile office van - front view",
  },
];

const steps = [
  {
    title: "Mobile Service",
    desc: "Bring your gold to our Mobile Office",
    img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon1.svg",
  },
  {
    title: "Cleaning Gold",
    desc: "Our ultrasonic machine removes all the dirt in your gold/ornaments.",
    img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
  },
  {
    title: "Evaluating the Best Value",
    desc: "Evaluating the exact weight and purity of the gold through Weighing and KARAT METER (XRF Technology).",
    img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
  },
  {
    title: "Get Instant Payment",
    desc: "Instant cash or money transfer is done through NEFT/IMPS/RTGS.",
    img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
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
    title: "Bank Account Details",
    img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon4.svg",
  },
];

export default function MobileOfficePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-cream">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`w-full h-auto block transition-opacity duration-700 ${
              i === current ? "relative opacity-100" : "absolute top-0 left-0 opacity-0"
            }`}
          />
        ))}
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1769871771103-7d2e938d185e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjB0aWxlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="White tiles background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative section-container">
          {/* Section Heading */}
          <div className="section-heading mb-6">
            <div className="section-heading-line" />
            <h2>HOW DOES IT WORK?</h2>
            <div className="section-heading-line" />
          </div>
          <p className="text-gray-600 text-center mb-10 sm:mb-12 text-sm sm:text-base">
            Vehicle Scheduler: We Buy Gold At Your Doorstep
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT - Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-md rounded-card p-5 sm:p-6 shadow-card relative min-h-[180px] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <h3 className="text-brand-navy font-bold text-lg mb-2">
                    Step {i + 1}
                  </h3>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 pr-10">{item.desc}</p>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 absolute top-5 right-5 sm:top-6 sm:right-6 opacity-80"
                  />
                </div>
              ))}
            </div>

            {/* RIGHT - Van Image */}
            <div className="flex justify-center">
              <img
                src="https://valuegold.com/wp-content/uploads/2024/07/valuegold-van.png.webp"
                alt="Value Gold mobile office van"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/cta-bg.jpg"
            alt="CTA background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/90" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative section-container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
              Vehicle Scheduler:
              <br />
              We Buy Gold From Your Location
            </h2>

            <p className="text-gray-200 mb-6 text-sm sm:text-base leading-relaxed">
              Value Gold brings convenience to your doorstep. Our mobile service
              ensures safe, transparent, and instant gold evaluation wherever
              you are.
            </p>

            {/* Image */}
            <div className="mb-6">
              <img
                src="https://valuegold.com/wp-content/uploads/2025/11/mobile-van4.webp"
                alt="Value Gold mobile office service in action"
                className="w-full max-w-xl rounded-card shadow-card"
              />
            </div>

            {/* Checklist */}
            <ul className="space-y-3 text-gray-200 text-sm sm:text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-0.5">&#10004;</span>
                Certified gold buyers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-0.5">&#10004;</span>
                Free purity test using advanced technology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-0.5">&#10004;</span>
                Instant payout via secure bank transfer
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-0.5">&#10004;</span>
                No hidden charges or deductions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-0.5">&#10004;</span>
                Support for pledged gold release
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-gray-800 p-6 sm:p-8 rounded-card shadow-card w-full max-w-lg ml-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-brand-navy">
              Connect with Our Team
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="form-input"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="form-input"
                />
              </div>

              {/* Location */}
              <div>
                <label className="form-label">Location</label>
                <select className="form-select">
                  <option>Please Select State.</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="form-label">Let Us Know Your Area.</label>
                <input
                  type="text"
                  placeholder="Let Us Know Your Area"
                  className="form-input"
                />
              </div>

              {/* Date */}
              <div>
                <label className="form-label">Date</label>
                <input type="date" className="form-input" />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 accent-brand-gold"
                  aria-label="Authorization consent"
                />
                <p>
                  I authorize Value Gold and its representatives to contact me via Call,
                  SMS, Email, or WhatsApp regarding their products and offers.
                </p>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-gold w-full py-2.5">
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= DOCUMENTS REQUIRED ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1669951584605-4deba095a87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvaW5zJTIwYmFja2dyb3VuZCUyMGluJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt="Coins background decoration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative section-container">
          {/* Section Heading */}
          <div className="section-heading">
            <div className="section-heading-line" />
            <h2>DOCUMENTS REQUIRED</h2>
            <div className="section-heading-line" />
          </div>

          {/* Document Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {documents.map((item, i) => (
              <div
                key={i}
                className="card-dark py-8 sm:py-10 px-4 sm:px-6 text-center flex flex-col items-center justify-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 sm:w-20 mb-4 sm:mb-5 filter brightness-0 invert sepia hue-rotate-[20deg] saturate-[5]"
                />
                <h3 className="text-brand-gold-light text-base sm:text-lg font-medium">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
