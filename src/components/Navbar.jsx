import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
    setOpenDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const menuItems = [
    {
      name: "OUR LEGACY",
      children: [
        { name: "ABOUT US", path: "/about" },
        { name: "MANAGEMENT", path: "/management" },
        { name: "AWARDS", path: "/awards" },
      ],
    },
    {
      name: "OUR SERVICES",
      children: [
        { name: "SELL GOLD", path: "/sell-gold" },
        { name: "RELEASE PLEDGED GOLD", path: "/release-gold" },
        { name: "MOBILE OFFICE", path: "/mobile-office" },
      ],
    },
    {
      name: "EXPERIENCE",
      children: [
        { name: "NEWS / MEDIA", path: "/experience" },
        { name: "PRESS RELEASES", path: "/press-releases" },
        { name: "EVENTS", path: "/events-openings" },
      ],
    },
    {
      name: "PARTNER WITH US",
      path: "/partner",
    },
    {
      name: "BLOG",
      path: "/blog",
    },
    {
      name: "REACH US",
      path: "/contact",
    },
  ];

  const toggleMobileAccordion = (index) => {
    setMobileAccordion(mobileAccordion === index ? null : index);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Value Gold Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU - hidden below lg */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(index);
                }}
                onMouseLeave={() => {
                  dropdownTimeout.current = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 200);
                }}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="font-medium text-xs lg:text-sm text-brand-navy hover:text-brand-gold transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={`font-medium text-xs lg:text-sm cursor-pointer transition-colors duration-200 whitespace-nowrap flex items-center gap-1 ${
                      openDropdown === index
                        ? "text-brand-gold"
                        : "text-brand-navy hover:text-brand-gold"
                    }`}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`w-2.5 h-2.5 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                )}

                {/* DESKTOP DROPDOWN */}
                {item.children && openDropdown === index && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-brand-gold text-white w-56 shadow-xl rounded-md overflow-hidden">
                      {item.children.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 border-b border-white/20 last:border-b-0 hover:bg-brand-gold-dark text-xs lg:text-sm font-medium transition-colors duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ENQUIRE NOW button */}
            <button
              onClick={() => setShowModal(true)}
              className="btn-gold text-xs sm:text-sm px-3 sm:px-5 py-2"
            >
              ENQUIRE NOW
            </button>

            {/* Phone button - icon only on small, full text on sm+ */}
            <a
              href="tel:+919702186316"
              className="btn-primary text-xs sm:text-sm px-3 sm:px-5 py-2"
            >
              <FaPhone className="sm:hidden w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 97021 86316</span>
            </a>

            {/* MOBILE HAMBURGER - visible below lg */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden ml-1 p-2 text-brand-navy hover:text-brand-gold transition-colors"
              aria-label="Open menu"
            >
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer panel - slides in from right */}
          <div className="fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-white shadow-xl flex flex-col animate-slide-in-right">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/logo.jpg"
                  alt="Value Gold Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-brand-navy hover:text-brand-gold transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer body - scrollable */}
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="flex flex-col">
                {menuItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100">
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-3.5 text-sm font-medium text-brand-navy hover:text-brand-gold hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        {/* Accordion trigger */}
                        <button
                          onClick={() => toggleMobileAccordion(index)}
                          className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-medium text-brand-navy hover:text-brand-gold hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                          <FaChevronDown
                            className={`w-3 h-3 transition-transform duration-300 ${
                              mobileAccordion === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Accordion sub-menu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileAccordion === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-brand-navy">
                            {item.children.map((sub, i) => (
                              <Link
                                key={i}
                                to={sub.path}
                                onClick={() => setMobileOpen(false)}
                                className="block px-8 py-3 text-sm text-white hover:bg-brand-navy-light border-b border-brand-navy-light/30 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Drawer footer with buttons */}
            <div className="border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setShowModal(true);
                }}
                className="btn-gold w-full text-sm py-2.5"
              >
                ENQUIRE NOW
              </button>
              <a
                href="tel:+919702186316"
                className="btn-primary w-full text-sm py-2.5 text-center"
              >
                <FaPhone className="inline-block w-3.5 h-3.5 mr-2" />
                +91 97021 86316
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
            {/* CLOSE */}
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-brand-navy">
              Enquire Now
            </h2>

            <form className="flex flex-col gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="form-label">Mobile Number</label>
                <input
                  className="form-input"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="form-label">State</label>
                <select className="form-select">
                  <option>Select State</option>
                </select>
              </div>

              <div>
                <label className="form-label">Area</label>
                <input className="form-input" placeholder="Your Area" />
              </div>

              <div>
                <label className="form-label">Interested In</label>
                <select className="form-select">
                  <option>Do you want to?</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-2.5 mt-1"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Inline keyframes for mobile drawer animation */}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
