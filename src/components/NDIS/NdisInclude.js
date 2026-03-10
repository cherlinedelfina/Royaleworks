// src/components/NdisInclude.js
import React from "react";
import "../../css/NDIS_include.css";

const NdisInclude = () => {
  const items = [
    "REGULAR HOME\nCLEANING",
    "KITCHEN AND\nBATHROOM CLEANING",
    "BEDROOM AND LIVING\nAREA MAINTENANCE",
    "DUSTING, VACUUMING,\nAND MOPPING",
    "LAUNDRY ASSISTANCE",
    "CLEANING FOR SHARED\nACCOMODATION",
  ];

  return (
    <section className="ni-section" aria-label="NDIS Services Include">
      <div className="ni-container">
        <h2 className="ni-title">OUR NDIS SERVICES INCLUDE</h2>

        <div className="ni-grid">
          {items.map((t) => (
            <div className="ni-card" key={t}>
              <span className="ni-text">
                {t.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NdisInclude;
