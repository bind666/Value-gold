import React, { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import Footer from "../components/Footer";

const awardSets = [
  [
    { title: "Big Impact Awards 2025", img: "https://valuegold.com/wp-content/uploads/2026/01/Big-Impact-Awards_2025_3-1-1-scaled.png.webp" },
    { title: "Successpreneur Awards 2025", img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-3.webp" },
    { title: "Radio City Icon Awards 2025", img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-2.webp" },
    { title: "Times Business Awards 2023", img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-1.webp" },
  ],
  [
    { title: "Business Excellence Award", img: "https://valuegold.com/wp-content/uploads/2026/01/Big-Impact-Awards_2025-copy-1.jpg-1-1-1-scaled.jpg.webp" },
    { title: "Gold Industry Award", img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-3.webp" },
    { title: "Best Brand Award", img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-2.webp" },
    { title: "Customer Choice Award", img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-1.webp" },
  ],
];

const Awards = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const flatImages = awardSets.flat();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % awardSets.length);
        setAnimate(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % flatImages.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + flatImages.length) % flatImages.length);
      if (e.key === "Escape") { setSelectedIndex(null); setZoom(1); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, flatImages.length]);

  return (
    <div className="bg-brand-cream overflow-hidden">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Recognition</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Awards
        </h1>
      </section>

      {/* GRID */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 transition-all duration-400 ${
              animate ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {awardSets[index].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  onClick={() => { setSelectedIndex(index * 4 + i); setZoom(1); }}
                  className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="mt-3 text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) { setSelectedIndex(null); setZoom(1); } }}
        >
          {/* TOP CONTROLS */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-6 flex gap-3 sm:gap-4 text-white text-lg sm:text-xl z-10">
            <button onClick={() => setZoom((z) => z + 0.2)} className="hover:text-brand-gold transition"><FaSearchPlus /></button>
            <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))} className="hover:text-brand-gold transition"><FaSearchMinus /></button>
            <button onClick={() => { setSelectedIndex(null); setZoom(1); }} className="hover:text-brand-gold transition"><FaTimes /></button>
          </div>

          {/* NAV */}
          <button
            onClick={() => setSelectedIndex((prev) => (prev - 1 + flatImages.length) % flatImages.length)}
            className="absolute left-2 sm:left-5 text-white text-2xl sm:text-3xl hover:text-brand-gold transition z-10"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => setSelectedIndex((prev) => (prev + 1) % flatImages.length)}
            className="absolute right-2 sm:right-5 text-white text-2xl sm:text-3xl hover:text-brand-gold transition z-10"
          >
            <FaChevronRight />
          </button>

          {/* IMAGE */}
          <div className="text-center max-w-5xl w-full px-4">
            <img
              src={flatImages[selectedIndex].img}
              alt={flatImages[selectedIndex].title}
              style={{ transform: `scale(${zoom})` }}
              className="w-full max-h-[80vh] object-contain transition duration-300"
            />
            <p className="text-white mt-3 text-sm sm:text-base lg:text-lg font-semibold">
              {flatImages[selectedIndex].title}
            </p>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-4 text-white text-xs sm:text-sm">
            {selectedIndex + 1} / {flatImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Awards;
