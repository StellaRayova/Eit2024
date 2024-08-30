import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import PayrollServices from './PayrollServices';
import Healthcare from './BussVerticals/Healthcare';
import Finance from './BussVerticals/Finance';
import Manufacturing from './BussVerticals/Manufacturing';
import Pharma from './BussVerticals/Pharma';
import FoodPackaging from './BussVerticals/FoodPack';
import NBFC from './BussVerticals/Nbfc';
import Retail from './BussVerticals/Retail';
import Career from './Career';
import Insurance from './BussVerticals/Insurance';
import Logistics from './BussVerticals/Logistics';
import Telecom from './BussVerticals/Telecom';
import MediaEntertainment from './BussVerticals/MediaEnt';
import Realestate from './BussVerticals/Realestate';
import BioTechnology from './BussVerticals/BioTech';
import PublicSector from './BussVerticals/PublicSector';
import Contactus from './Contact';
import Aboutus from './Aboutus';
import Navbar1 from './Navbar';
import ScrollTracker from './Scrolltracker';
import Generalstaffingf from './Generalstaffing';
import Chatbot from './Chatbot';
import Contactinfobar from './Contactinfobar';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Routing() {
  return (
    <div>
      <Router>
        <ScrollToTop /> {/* This will handle scrolling to top on route change */}
        <Navbar1 />
        <Contactinfobar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />

          {/* Business Verticals */}
          <Route path='/healthcare' element={<Healthcare />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/manufacturing' element={<Manufacturing />} />
          <Route path='/pharmaceutical' element={<Pharma />} />
          <Route path='/food-and-packaging' element={<FoodPackaging />} />
          <Route path='/nbfc' element={<NBFC />} />
          <Route path='/retail' element={<Retail />} />
          <Route path='/career' element={<Career />} />
          <Route path='/insurance' element={<Insurance />} />
          <Route path='/logistics' element={<Logistics />} />
          <Route path='/telecommunication' element={<Telecom />} />
          <Route path='/media' element={<MediaEntertainment />} />
          <Route path='/real-estate' element={<Realestate />} />
          <Route path='/bio-technology' element={<BioTechnology />} />
          <Route path='/public-sector' element={<PublicSector />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/payroll-services' element={<PayrollServices />} />
          <Route path="/general-staffing" element={<Generalstaffingf />} />
        </Routes>   
        <ScrollTracker />
        <Chatbot />
      </Router>
    </div>
  );
}
