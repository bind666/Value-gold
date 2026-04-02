import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const tags = [
  "Value Gold",
  "Sell Old Gold",
  "Release Pledged Gold",
  "Gold Buyers",
  "ValueGold",
  "Old Gold Buyers",
  "Best Gold Company",
  "Sell Gold",
  "Best Place To Sell Gold",
  "Old Gold Selling Company",
  "Sell Gold For Cash",
  "Old Gold Price Calculator",
  "Gold Resale Value Calculator",
  "Old Gold Selling Rate Calculator",
  "How To Sell Gold For Cash",
  "Where To Sell Gold For Cash",
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Sell Gold", to: "/sell-gold" },
  { label: "Release Pledged Gold", to: "/release-gold" },
  { label: "FAQ's", to: "/#faq" },
  { label: "Careers", to: "/partner" },
  { label: "Reach Us", to: "/contact" },
  { label: "Privacy Policy", to: "#" },
  { label: "Terms & Conditions", to: "#" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/valuegold", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/valuegold", label: "Twitter" },
  { icon: FaInstagram, href: "https://www.instagram.com/valuegold", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@valuegold", label: "YouTube" },
  { icon: FaFacebook, href: "https://www.facebook.com/valuegold", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
      {/* TOP SECTION */}
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* LOGO + DESC */}
        <div>
          <img
            src="/logo.jpg"
            alt="Value Gold logo"
            className="h-8 sm:h-10 lg:h-12 mb-4"
          />
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            Value Gold offers a comprehensive range of solutions designed to meet
            the diverse needs of individuals seeking assistance with their gold
            assets.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-brand-gold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-xs sm:text-sm text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-brand-gold mb-4">
            Contact Us
          </h3>

          <div className="flex gap-2 text-xs sm:text-sm text-gray-200 mb-3">
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
            <p>Shop no. 10, Shubh Labh Plaza, Indralok Phase 6, Panchamratna Park, Mira Road East, Thane, Mira Bhayandar, Maharashtra 401105</p>
          </div>

          <a
            href="tel:+919702186316"
            className="flex gap-2 text-xs sm:text-sm text-gray-200 hover:text-white transition-colors duration-300 mb-2"
          >
            <FaPhone className="mt-0.5 flex-shrink-0" />
            +91 97021 86316
          </a>

          <a
            href="mailto:info@valuegold.com"
            className="flex gap-2 text-xs sm:text-sm text-gray-200 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope className="mt-0.5 flex-shrink-0" />
            info@valuegold.com
          </a>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-brand-gold mb-4">
            Get In Touch
          </h3>

          <div className="flex gap-3 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* POPULAR SEARCH */}
      <div className="section-container mt-12 sm:mt-16">
        <div className="section-heading">
          <div className="section-heading-line" />
          <h2 className="!text-white">POPULAR SEARCH</h2>
          <div className="section-heading-line" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-brand-gold/90 hover:bg-brand-gold text-white px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm cursor-pointer transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="section-container">
        <div className="border-t border-white/20 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-200">
          Copyright &copy; {new Date().getFullYear()} ValueGold. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
