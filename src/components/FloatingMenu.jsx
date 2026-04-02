import React, { useState } from "react";
import { FaCalculator, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GoldRateModal from "../pages/GoldRateModal";

const FloatingMenu = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const items = [
    {
      icon: <FaCalculator />,
      text: "Old Gold Calculator",
      action: () => navigate("/gold-calculator"),
    },
    {
      icon: <FaHandHoldingUsd />,
      text: "Pledge Gold Calculator",
      action: () => navigate("/pledge-calculator"),
    },
    {
      icon: <FaChartLine />,
      text: "Know Today's Gold Rate",
      action: () => setOpenModal(true), // 👈 OPEN MODAL
    },
  ];

  return (
    <>
      {/* FLOATING MENU */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className="group flex items-center bg-[#1f3f6b] text-white 
            rounded-r-[30px] border border-yellow-500 
            overflow-hidden cursor-pointer shadow-md
            transition-all duration-300 
            w-12 hover:w-44"
          >
            <div className="flex pl-3 items-center justify-center w-10 h-10 text-yellow-400">
              {item.icon}
            </div>

            <span className="opacity-0 group-hover:opacity-100 text-xs pr-3 transition">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <GoldRateModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default FloatingMenu;