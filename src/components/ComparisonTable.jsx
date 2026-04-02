import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const data = [
  {
    feature: "Gold Rate Offered",
    value: "Highest market-linked gold price",
    other: "Often lower than live market rate",
  },
  {
    feature: "Purity Testing",
    value: "Free, transparent XRF-based purity testing",
    other: "Manual or unclear testing methods",
  },
  {
    feature: "Weight Deduction",
    value: "No hidden deductions",
    other: "Stone and wastage deductions applied",
  },
  {
    feature: "Minimum Quantity",
    value: "Buyback starting from just 1 gram",
    other: "Minimum weight restrictions",
  },
  {
    feature: "Payment Method",
    value: "Instant payment via Account Transfer / IMPS / NEFT",
    other: "Delayed or limited payment options",
  },
  {
    feature: "Process Transparency",
    value: "100% process done in front of the customer",
    other: "Backend processing with less clarity",
  },
  {
    feature: "Legacy & Trust",
    value: "125+ years of trusted gold industry legacy",
    other: "Limited or no proven legacy",
  },
  {
    feature: "Branch Network",
    value: "Multiple branches across Telangana & Andhra Pradesh",
    other: "Limited locations",
  },
  {
    feature: "Customer Support",
    value: "Dedicated, trained gold professionals",
    other: "Inconsistent customer experience",
  },
  {
    feature: "Documentation",
    value: "Proper billing & full compliance",
    other: "Incomplete or unclear paperwork",
  },
];

const ComparisonTable = () => {
  return (
    <section className="bg-brand-cream py-12 sm:py-16 lg:py-20">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <div className="section-heading-line"></div>
          <h2>Value Gold vs Other Gold Buyers</h2>
          <div className="section-heading-line"></div>
        </div>

        {/* ============ DESKTOP TABLE (md+) ============ */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-3 bg-brand-gold text-white font-semibold text-center py-4 text-sm md:text-base">
            <div>Feature</div>
            <div>Value Gold</div>
            <div>Other Gold Buyers</div>
          </div>

          {/* Rows */}
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center border-b px-4 py-4 text-sm md:text-base hover:bg-gray-50 transition"
            >
              {/* Feature */}
              <div className="font-medium text-gray-800">
                {item.feature}
              </div>

              {/* Value Gold */}
              <div className="flex items-center gap-2 text-green-700">
                <FaCheck className="text-green-600 flex-shrink-0" />
                <span>{item.value}</span>
              </div>

              {/* Other */}
              <div className="flex items-center gap-2 text-red-600">
                <FaTimes className="text-red-500 flex-shrink-0" />
                <span>{item.other}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ============ MOBILE CARDS (<md) ============ */}
        <div className="md:hidden max-w-lg mx-auto space-y-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">

              {/* Feature Name Header */}
              <div className="bg-brand-gold text-white font-semibold text-sm px-4 py-3">
                {item.feature}
              </div>

              {/* Value Gold Row */}
              <div className="flex items-start gap-2 px-4 py-3 border-b text-xs sm:text-sm">
                <FaCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-700">Value Gold: </span>
                  <span className="text-green-700">{item.value}</span>
                </div>
              </div>

              {/* Others Row */}
              <div className="flex items-start gap-2 px-4 py-3 text-xs sm:text-sm">
                <FaTimes className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-700">Others: </span>
                  <span className="text-red-600">{item.other}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
