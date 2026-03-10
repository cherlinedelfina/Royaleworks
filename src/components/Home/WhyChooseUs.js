import React from "react";
import "../../css/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">
        <h2 className="why-title">WHY CHOOSE US</h2>

        <div className="why-cards">
          <div className="why-card">
            <h4 className="why-card-title">PREMIUM QUALITY</h4>
            <p className="why-card-text">
              Trained employees — not subcontractors. Every clean follows a strict quality protocol.
            </p>
          </div>

          <div className="why-card">
            <h4 className="why-card-title">MANHATTAN-GRADE EFFICIENCY</h4>
            <p className="why-card-text">
              Our sequences are systematic, organised, and tested. Zero shortcuts.
            </p>
          </div>

          <div className="why-card">
            <h4 className="why-card-title">DISCREET & PROFESSIONAL</h4>
            <p className="why-card-text">
              Your privacy is absolute. We operate quietly, respectfully, and with professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;