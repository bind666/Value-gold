import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export default function ReachUs() {
  return (
    <div className="bg-brand-cream">

      {/* Header */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Get In Touch</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Reach Us</h1>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy">Contact Us</h2>
                <div className="h-[2px] w-10 sm:w-12 bg-brand-gold" />
              </div>

              <p className="text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm">
                For any assistance or queries, reach us at:
              </p>

              <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3">Our Office</h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" />
                  <p>Shop no. 10, Shubh Labh Plaza, Indralok Phase 6, Panchamratna Park, Mira Road East, Thane, Mira Bhayandar, Maharashtra 401105</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-brand-gold flex-shrink-0" />
                  <a href="tel:+919702186316" className="hover:text-brand-navy transition-colors">+91 97021 86316</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-brand-gold flex-shrink-0" />
                  <a href="https://wa.me/919702186316" target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">+91 97021 86316 (WhatsApp)</a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3">Business Hours</h3>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div className="w-full h-[220px] sm:h-[280px] md:h-full min-h-[220px] rounded-xl overflow-hidden">
              <iframe
                title="Harshdeep Jewellers Office Location"
                src="https://maps.google.com/maps?q=Shubh+Labh+Plaza+Mira+Road+East+Thane+Maharashtra+401105&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-navy text-white text-center">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed">
            Walk into our store for a free gold evaluation, instant gold loan, or to sell your gold at the best market price. No appointment needed — just bring your gold and valid ID.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919702186316" className="btn-gold px-6 py-3">
              <FaPhone className="inline mr-2" /> Call Now
            </a>
            <a href="https://wa.me/919702186316" target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3">
              <FaWhatsapp className="inline mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
