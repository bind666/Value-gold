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

import MediaPage from "./pages/News-media";
import PressReleases from "./pages/PressReleases";
import EventsPage from "./pages/EventsPage";

import PartnerWithUs from "./pages/PartnerWithUs";
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
        <Route path="/mobile-office" element={<MobileOfficePage />} />

        {/* Experience */}
        <Route path="/experience" element={<MediaPage />} />
        <Route path="/press-releases" element={<PressReleases />} />
        <Route path="/events-openings" element={<EventsPage />} />

        {/* Others */}
        <Route path="/partner" element={<PartnerWithUs />} />
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