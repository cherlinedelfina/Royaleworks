import React from "react";
import "../../css/Clients.css";

import elm from "../../images/partner/partners_logo1.png";
import edelweiss from "../../images/partner/partners_logo2.png";
import nurse from "../../images/partner/partners_logo3.jpg";

const Clients = () => {
  const partners = [
    { 
      img: elm, 
      name: "Elm Embrace",
      desc: "Premium home care solutions for Melbourne families."
    },
    { 
      img: edelweiss, 
      name: "Edelweiss Care",
      desc: "Specialized in elderly care and wellness programs."
    },
    { 
      img: nurse, 
      name: "Nurse N Care",
      desc: "Professional nursing and personal care services."
    },
  ];


  return (
    <section className="clients-section" id="partners">
      <div className="clients-container">

        {/* TOP */}
        <h2 className="clients-title">PARTNERS</h2>
        <p className="clients-desc">
          Partnering with clients who expect consistent, high-standard results.
        </p>

        {/* CARDS */}
        <div className="clients-cards">
          {partners.map((partner, index) => (
            <div className="client-card" key={index}>
              <img src={partner.img} alt={partner.name} />
              <h4>{partner.name}</h4>
              <p className="client-desc">{partner.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;