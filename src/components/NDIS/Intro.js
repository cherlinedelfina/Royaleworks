import React from "react";
import "../../css/NDIS_intro.css";

import ndisHeroImg from "../../images/ndis/ndis1.png"; 

const Intro = () => {
  return (
    <>
      <main className="ndis-page">
        <div className="ndis-spacer" />

        <section className="ndis-section">
          <div className="ndis-container">
            <header className="ndis-header">
              <h1 className="ndis-title">NDIS & Aged Care Cleaning</h1>

              <p className="ndis-subtitle">
                Respectful, reliable cleaning designed to support safe and comfortable living.
              </p>
            </header>

            <div className="ndis-row">
              <div className="ndis-text">
                <h2 className="ndis-highlight">
                  Professional Cleaning
                  <br />
                  With Care and Consistency
                </h2>

                <p className="ndis-paragraph">
                  We provide gentle, professional cleaning support for NDIS participants, carers, and support coordinators across Melbourne.
                </p>

                <p className="ndis-paragraph">
                  Our services are delivered by trained employees who understand the importance of routine, safety, and respectful communication — creating clean, comfortable environments that support daily living.
                </p>
              </div>

              <div className="ndis-imageWrap">
                <img className="ndis-image" src={ndisHeroImg} alt="NDIS Cleaning" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Intro;