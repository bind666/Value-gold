import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";

const locations = {
  telangana: [
    { name: "Adilabad", address: "2nd floor, D No 4-3-61/1/C, Bhoktapur, Adilabad, TS - 504001." },
    { name: "AS Rao Nagar", address: "Second floor, Door No : 1, Anupuram, Royal Embassy, Kapra, Hyderabad, Telangana 500062" },
    { name: "Chandhanagar", address: "1st floor, Sai Divya Chambers, Chanda Nagar, Hyderabad, Telangana 500050" },
    { name: "Chintal", address: "2nd Floor, Above Lenskart IDPL Chintal Main Road, Hyderabad, Telangana 500055" },
    { name: "Kukatpally", address: "Dr. Damodhar Complex, 4th Floor, Kukatpally, Hyderabad - 500072" },
    { name: "L.B Nagar", address: "Metro Station L B Nagar, Shivapuri Colony, Hyderabad, Telangana 500074" },
    { name: "Manikonda", address: "Above Vijetha Super Mart, Puppalaguda, Hyderabad, Telangana 500089" },
    { name: "Medchal", address: "1st floor, Main Road, Medchal, Telangana - 500047" },
    { name: "Nirmal", address: "2nd floor, Opp Bus Depot, Boivada, Nirmal, Telangana - 504106" },
    { name: "Panjagutta", address: "Shop no 25, Amrutha Mall, Somajiguda, Hyderabad 500016" },
    { name: "Secunderabad", address: "Surya Kiran Complex, Secunderabad - 500003" },
    { name: "Uppal", address: "Venkat Lakshmi Plaza, Uppal, Hyderabad - 500039" },
  ],
  andhra: [
    { name: "Vizag", address: "Sample Andhra Location Address" },
  ],
};

export default function ReachUs() {
  const [activeTab, setActiveTab] = useState("telangana");

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

              <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-3">Corporate Office</h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" />
                  <p>Shop no. 10, Shubh Labh Plaza, Indralok Phase 6, Panchamratna Park, Mira Road East, Thane, Mira Bhayandar, Maharashtra 401105</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-brand-gold flex-shrink-0" />
                  <a href="tel:+919702186316" className="hover:text-brand-navy transition-colors">+91 97021 86316</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-brand-gold flex-shrink-0" />
                  <a href="mailto:info@valuegold.com" className="hover:text-brand-navy transition-colors">info@valuegold.com</a>
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div className="w-full h-[220px] sm:h-[280px] md:h-full min-h-[220px] rounded-xl overflow-hidden">
              <iframe
                title="Value Gold Office Location"
                src="https://maps.google.com/maps?q=Shubh+Labh+Plaza+Mira+Road+East+Thane+Maharashtra+401105&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-4">
        <div className="section-container flex justify-center gap-2 sm:gap-3">
          {[
            { key: "telangana", label: "Telangana" },
            { key: "andhra", label: "Andhra Pradesh" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-brand-navy text-white shadow-lg"
                  : "bg-white text-brand-navy border border-brand-navy/20 hover:bg-brand-cream"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-6">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {locations[activeTab].map((loc, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1 sm:mb-2">
                  {loc.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-relaxed">{loc.address}</p>
                <button className="btn-gold text-xs px-3 sm:px-4 py-1.5 sm:py-2">
                  <FaMapMarkerAlt className="inline mr-1.5" /> View Location
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
