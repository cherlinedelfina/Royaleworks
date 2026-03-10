import React from "react";
import "../../css/Clients.css";

import kws from "../../images/clients/kws.png";
import geps from "../../images/clients/geps.png";
import protergia from "../../images/clients/protergia.png";

const Clients = () => {
  return (
    <section className="clients-section" id="partners">
      <div className="clients-container">
        <h2 className="clients-title">PARTNERS</h2>

        <div className="clients-logos">
          <div className="client-logo">
            <img src={kws} alt="KWS" />
          </div>

          <div className="client-logo">
            <img src={protergia} alt="Protergia" />
          </div>

          <div className="client-logo">
            <img src={geps} alt="GEPS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
