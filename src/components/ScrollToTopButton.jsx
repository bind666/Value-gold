import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 cursor-pointer transition-all duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-[#1f3f6b] hover:scale-110 transition">
        <FaChevronUp className="text-white text-sm" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;