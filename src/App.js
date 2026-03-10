import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Reviews from './pages/Reviews';
import NDIS from './pages/NDIS';



import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} /> 
            <Route path="/services" element={<OurServices />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/NDIS" element={<NDIS />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
