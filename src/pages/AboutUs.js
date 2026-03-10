import React from "react";
import "../css/AboutUs.css";

import NavBar from "../components/Navbar/NavBar";
import Footer from '../components/Footer';

import missionImg from "../images/aboutUs/mission.png";
import visionImg from "../images/aboutUs/vision.png";

const AboutUs = () => {
  return (
    <>
      {/* HEADER */}
      <NavBar />

      <main className="about-page">
        {/* Spacer because navbar is fixed */}
        <div className="about-spacer" />

        <section className="about-section">
          <div className="about-container">
            {/* Row 1: Mission text LEFT, image RIGHT */}
            <div className="about-row">
              <div className="about-text">
                <div className="about-kicker">OUR MISSION</div>

                <h2 className="about-highlight">
                  To deliver flawless, consistent cleaning through precision,
                  discipline, and care.
                </h2>

                <p className="about-paragraph">
                  Royale Works Cleaning was created to redefine what cleaning
                  should look like in Melbourne.
                </p>

                <p className="about-paragraph">
                  We create refined environments that support clarity, comfort,
                  and effortless living — so you can focus on what matters most.
                </p>
              </div>

              <div className="about-imageWrap about-imageWrap--right">
                <img
                  className="about-image"
                  src={missionImg}
                  alt="Royale Works mission"
                />
              </div>
            </div>

            {/* Row 2: Image LEFT, Vision text RIGHT */}
            <div className="about-row about-row--reverse">
              <div className="about-imageWrap about-imageWrap--left">
                <img
                  className="about-image"
                  src={visionImg}
                  alt="Royale Works vision"
                />
              </div>

              <div className="about-text about-text--right">
                <div className="about-kicker">OUR VISION</div>

                <h2 className="about-highlight">
                  To set the standard for premium cleaning through excellence,
                  trust, and consistency.
                </h2>

                <p className="about-paragraph">
                  We envision spaces that feel effortless yet intentional — where
                  every detail is considered and every environment reflects quiet
                  sophistication.
                </p>

                <p className="about-paragraph">
                  Our goal is to be the cleaning partner you rely on — not just
                  for results, but for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutUs;