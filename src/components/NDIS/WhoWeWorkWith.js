import React from "react";
import "../../css/WhoWeWorkWith.css";

import workWithImg from "../../images/ndis/ndis2.jpg"; 

const WhoWeWorkWith = () => {
  const list = [
    "NDIS participants",
    "Self-managed and plan-managed participants",
    "Support coordinators",
    "Carers and families",
    "Supported independent living (SIL) homes",
  ];

  return (
    <section className="www-section">
      <div className="www-container">
        <div className="www-row">
          {/* LEFT IMAGE */}
          <div className="www-imageWrap">
            <img src={workWithImg} alt="Who we work with" className="www-image" />
          </div>

          {/* RIGHT TEXT */}
          <div className="www-text">
            <h2 className="www-title">Who We Work With</h2>

            <ul className="www-list">
              {list.map((item) => (
                <li key={item} className="www-item">
                  <span className="www-check">✓</span>
                  <span className="www-label">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
