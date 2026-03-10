import React, { useEffect, useMemo, useRef, useState } from "react";
import "../../css/Services.css";

import ndisImg from "../../images/services/ndis_support.png";
import premiumImg from "../../images/services/premium_residential.png";
import luxuryResetImg from "../../images/services/luxury_reset.png";
import endOfLeaseImg from "../../images/services/end_of_lease.png";
import commercialImg from "../../images/services/commercial.png";
import deepImg from "../../images/services/deep_clean.png";

const Services = () => {
  const services = useMemo(
    () => [
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
    ],
    []
  );

  // Desktop shows 3 at once; mobile shows 1 at once.
  const getSlidesPerView = () => (window.innerWidth <= 900 ? 1 : 3);

  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === "undefined" ? 3 : getSlidesPerView()
  );

  /**
   * We repeat the list 3 times for “true” seamless looping:
   * [services] [services] [services]
   * Start in the middle chunk so we can move both directions without seeing ends.
   */
  const extended = useMemo(() => {
    return [...services, ...services, ...services];
  }, [services]);

  // Start at the middle copy
  const [index, setIndex] = useState(() => services.length);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef(null);

  // Update slidesPerView on resize + reset index to middle copy cleanly
  useEffect(() => {
    const onResize = () => {
      const spv = getSlidesPerView();
      setSlidesPerView(spv);

      // reset to middle copy without animation
      setWithTransition(false);
      setIndex(services.length);
      requestAnimationFrame(() => setWithTransition(true));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [services.length]);

  // Autoplay: move one card at a time
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  /**
   * Seamless loop logic:
   * When we drift into the 3rd copy (index >= 2*services.length),
   * jump back by services.length to the equivalent position in the 2nd (middle) copy.
   */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onEnd = () => {
      const n = services.length;

      if (index >= 2 * n) {
        setWithTransition(false);
        setIndex((prev) => prev - n);
        requestAnimationFrame(() => setWithTransition(true));
      }

      if (index < n) {
        setWithTransition(false);
        setIndex((prev) => prev + n);
        requestAnimationFrame(() => setWithTransition(true));
      }
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, services.length]);

  const activeDot = ((index % services.length) + services.length) % services.length;
  const translatePct = (index * 100) / slidesPerView;

  const goToDot = (dotIndex) => {
    setWithTransition(true);
    setIndex(services.length + dotIndex);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>

        <p className="services-subtitle">
          Cleaning tailored for modern Melbourne living — delivered with intention, precision, and
          consistent hotel-grade execution.
        </p>

        {/* Carousel */}
        <div className="services-carousel">
          <div
            ref={trackRef}
            className={`services-track ${withTransition ? "with-transition" : ""}`}
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {extended.map((s, i) => (
              <div className="service-slide" key={`${s.title}-${i}`}>
                <div className="service-card">
                  <div className="service-imgWrap">
                    <img src={s.img} alt={s.title} className="service-img" />
                  </div>

                  <div className="service-caption">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="services-dots" aria-label="carousel dots">
          {services.map((s, i) => (
            <button
              key={s.title}
              className={`dot ${i === activeDot ? "active" : ""}`}
              onClick={() => goToDot(i)}
              aria-label={`Go to ${s.title}`}
              type="button"
            />
          ))}
        </div>

        {/* Button */}
        <a className="services-button" href="/services">
          VIEW ALL SERVICES
        </a>
      </div>
    </section>
  );
};

export default Services;