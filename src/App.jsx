import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingMenu from "./components/FloatingMenu";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Management from "./pages/Management";
import Awards from "./pages/Awards";

import SellGold from "./pages/Sell-gold";
import ReleasePledgedGold from "./pages/ReleasePledgedGold";
import MobileOfficePage from "./pages/Mobile-office";
import GoldLoan from "./pages/GoldLoan";

import ReachUs from "./pages/ReachUs";
import Blog from "./pages/Blog";

import GoldCalculator from "./pages/GoldCalculator";
import PledgeCalculator from "./pages/PledgeCalculator";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Floating UI */}
      <FloatingMenu />
      <WhatsappButton />
      <ScrollToTopButton />

      {/* ROUTES */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/management" element={<Management />} />
        <Route path="/awards" element={<Awards />} />

        {/* Services */}
        <Route path="/sell-gold" element={<SellGold />} />
        <Route path="/release-gold" element={<ReleasePledgedGold />} />
        <Route path="/gold-loan" element={<GoldLoan />} />
        <Route path="/mobile-office" element={<MobileOfficePage />} />

        {/* Others */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ReachUs />} />

        {/* Calculators */}
        <Route path="/gold-calculator" element={<GoldCalculator />} />
        <Route path="/pledge-calculator" element={<PledgeCalculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;