import React from "react";
import { FaTimes } from "react-icons/fa";

const GoldRateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-md rounded-xl p-5 sm:p-6 relative">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* TITLE */}
        <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-1">
          Know Today's Gold Rate
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
          Fill in your details and we'll share the latest rates
        </p>

        {/* FORM */}
        <div className="border border-brand-gold/30 rounded-xl p-4 sm:p-5 space-y-3 sm:space-y-4">
          <input placeholder="Full Name" className="form-input" />
          <input placeholder="Email Address" type="email" className="form-input" />
          <input placeholder="Mobile No" type="tel" className="form-input" />
          <input placeholder="Enter Your City" className="form-input" />

          <div className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1 accent-brand-navy" />
            <p>
              I authorize Value Gold and its representatives to contact me via
              Call, SMS, Email, RCS or WhatsApp regarding their products and offers.
            </p>
          </div>

          <button type="submit" className="btn-gold w-full py-2.5">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default GoldRateModal;
