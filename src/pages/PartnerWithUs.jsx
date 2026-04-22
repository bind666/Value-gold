import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const investorPoints = [
  { bold: "Backed by Legacy", text: "A part of CapsGold, trusted since 1901." },
  { bold: "High ROI", text: "Secure revenue model." },
  { bold: "Strategic Marketing Support", text: "Digital & local promotions to drive footfall." },
  { bold: "End-to-End Support", text: "Assistance in store setup, branding, training, and operations." },
];

const customerPoints = [
  { bold: "Trusted Mobile Gold Buyers", text: "Now reaching rural areas." },
  { bold: "100% Transparency & Trust", text: "Fully automated process with no human intervention." },
  { bold: "Advanced Purity Testing", text: "KARAT METER (XRF Technology) ensures precise analysis." },
  { bold: "Spot Payments", text: "Get real-time payments with seamless transactions." },
  { bold: "Secure & Compliant Transactions", text: "Adhering to the highest standards." },
];

const franchiseFeatures = [
  { title: "Invest", desc: "40 Lakhs (One-Time setup Cost)", icon: "₹" },
  { title: "Marketing Fund", desc: "5 Lac Minimum", icon: "📊" },
  { title: "ROI & Payback Period", desc: "Minimum rate 3 Years", icon: "📈" },
  { title: "Agreement Term", desc: "5 Year of long profitability", icon: "📖" },
  { title: "Franchise Model", desc: "FICO", icon: "📦" },
  { title: "Operational Support", desc: "Branding, Staff Training, Marketing, & Software", icon: "🎯" },
];

const slides = [
  { title: "Best Emerging Gold Buying Brand", desc: "Honored by The Times Business Awards 2023." },
  { title: "Trusted Gold Buyers Across India", desc: "Expanding rapidly with customer trust." },
  { title: "Award Winning Service Excellence", desc: "Recognized for transparency & service." },
  { title: "Leading Mobile Gold Buying Brand", desc: "Reaching customers at their doorstep." },
];

export default function PartnerWithUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const PointsList = ({ points }) => (
    <ul className="space-y-3 sm:space-y-4">
      {points.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
          <span className="text-brand-gold text-base sm:text-lg mt-0.5">›</span>
          <span><b className="text-brand-navy">{item.bold}</b> – {item.text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-brand-cream">

      {/* Hero */}
      <section className="w-full">
        <img
          src="https://valuegold.com/wp-content/uploads/2026/01/Valuegold_banner.webp"
          alt="Partner with Harshdeep Jewellers"
          className="w-full h-auto block"
        />
      </section>

      {/* Why Choose */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="text-center mb-8 sm:mb-12">
            <div className="section-heading mb-3">
              <div className="section-heading-line" />
              <h2>Why Choose Harshdeep Jewellers?</h2>
              <div className="section-heading-line" />
            </div>
            <p className="text-brand-gold font-medium text-xs sm:text-sm">
              Turn your Investment into a Profitable & Trusted Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            <div className="pl-4 sm:pl-5 border-l-4 border-brand-gold">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-4 sm:mb-5">Investor</h3>
              <PointsList points={investorPoints} />
            </div>
            <div className="pl-4 sm:pl-5 border-l-4 border-brand-gold">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-4 sm:mb-5">Customer</h3>
              <PointsList points={customerPoints} />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Form */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="section-container">
          <div className="section-heading mb-8 sm:mb-10">
            <div className="section-heading-line" />
            <h2>Your Journey to Success Begins Here</h2>
            <div className="section-heading-line" />
          </div>

          {/* Applicant Details */}
          <div className="bg-brand-navy text-white text-center py-2.5 sm:py-3 font-semibold rounded-t-xl text-xs sm:text-sm">
            Applicant Details
          </div>
          <div className="border border-brand-gold/30 rounded-b-xl p-4 sm:p-5 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="Enter full name" />
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input className="form-input" placeholder="Enter email" type="email" />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <div className="flex">
                <input className="form-input rounded-r-none" placeholder="Mobile Number" type="tel" />
                <button className="btn-primary rounded-l-none text-xs px-3 sm:px-4 whitespace-nowrap">Send OTP</button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-brand-navy text-white text-center py-2.5 sm:py-3 font-semibold rounded-t-xl text-xs sm:text-sm">
            Desired Franchise Location
          </div>
          <div className="border border-brand-gold/30 rounded-b-xl p-4 sm:p-5 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <label className="form-label">City/Town</label>
              <input className="form-input" placeholder="Enter city/town" />
            </div>
            <div>
              <label className="form-label">District</label>
              <input className="form-input" placeholder="Enter district" />
            </div>
            <div>
              <label className="form-label">State/UT</label>
              <input className="form-input" placeholder="Enter state/UT" />
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button className="btn-gold px-6 sm:px-8 py-2.5 sm:py-3">Next</button>
          </div>
        </div>
      </motion.section>

      {/* What Does It Take */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-brand-navy py-12 sm:py-16 lg:py-20 text-white"
      >
        <div className="section-container">
          <div className="section-heading mb-8 sm:mb-10">
            <div className="w-8 sm:w-12 h-[2px] bg-brand-gold" />
            <h2 className="!text-white">What Does It Take to Get Started?</h2>
            <div className="w-8 sm:w-12 h-[2px] bg-brand-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {franchiseFeatures.map((item, i) => (
              <div key={i} className="bg-white text-gray-800 rounded-xl p-5 sm:p-6 lg:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl text-brand-gold mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Slider */}
      <section className="bg-brand-gold py-8 sm:py-10 lg:py-14 text-white text-center">
        <motion.div
          key={current}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-container"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
            {slides[current].title}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm">
            {slides[current].desc}
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
