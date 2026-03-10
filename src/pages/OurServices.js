// src/pages/OurServices.js
import React from "react";
import "../css/OurServices.css";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

import ndisImg from "../images/services/ndis_support.png";
import premiumImg from "../images/services/premium_residential.png";
import luxuryResetImg from "../images/services/luxury_reset.png";
import endOfLeaseImg from "../images/services/end_of_lease.png";
import commercialImg from "../images/services/commercial.png";
import deepImg from "../images/services/deep_clean.png";

const OurServices = () => {
  const items = [
    {
      title: "PREMIUM RESIDENTIAL CLEANING",
      desc: "A consistent weekly or fortnightly clean designed for busy professionals and families.",
      img: premiumImg,
    },
    {
      title: "COMMERCIAL OFFICE CLEANING",
      desc: "Professional cleaning for offices, clinics, and retail spaces.",
      img: commercialImg,
    },
    {
      title: "NDIS / AGED CARE CLEANING",
      desc: "Gentle, respectful cleaning designed for safety and comfort.",
      img: ndisImg,
    },
    {
      title: "DEEP CLEANING",
      desc: "A detailed, time-intensive clean for build-up, Spring resets, or pre-party refreshes.",
      img: deepImg,
    },
    {
      title: "END-OF-LEASE CLEANING",
      desc: "Fully compliant vacate clean designed to meet real estate checklist standards.",
      img: endOfLeaseImg,
    },
    {
      title: "LUXURY RESET™",
      desc: "Our signature home transformation — cleaning + styling + aesthetic reset.",
      img: luxuryResetImg,
    }
  ];

  return (
    <>
      <NavBar />

      <main className="os-page">
        <div className="os-spacer" />

        <section className="os-section">
          <div className="os-container">
            <h1 className="os-title">OUR SERVICES</h1>

            <p className="os-subtitle">
              Cleaning tailored for modern Melbourne living. We deliver premium residential and
              commercial cleaning with intention, precision, and consistent hotel-grade execution.
            </p>

            <div className="os-grid">
              {items.map((s) => (
                <article className="os-card" key={s.title}>
                  <div className="os-imgWrap">
                    <img className="os-img" src={s.img} alt={s.title} />
                  </div>
                  <div className="os-caption">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="os-ctaWrap">
              <a className="os-cta" href="/contact">
                BOOK YOUR CLEAN TODAY
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurServices;