import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919702186316"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50"
    >
      <div className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </a>
  );
};

export default WhatsappButton;