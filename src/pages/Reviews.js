// src/pages/Reviews.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../css/Reviews.css";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import ivanImg from "../images/reviews/Ivan.jpg";
import sophiaImg from "../images/reviews/Sophia.jpg";
import kathrynImg from "../images/reviews/Kathryn.jpg";
import avatarImg from "../images/reviews/avatar.png"; 

const Reviews = () => {
  const reviews = useMemo(
    () => [
      {
        name: "Sophia Adrao",
        rating: 5,
        text:
          "“The team was very professional and friendly. I've called them on a Sunday afternoon to ask if they could clean my carpet on Monday the next day, they obliged on a short notice clean and were even early to the appointment we set for the clean. Highly recommended their service and business.”",
      },
      {
        name: "Ivan Lee",
        rating: 5,
        text:
          "“I highly recommend Royale Works Cleaning Specialist if you're looking for an end-of-lease professional cleaning. They did my unit in the CBD and my real estate agent is super satisfied.”",
      },
      {
        name: "Kathryn Wong",
        rating: 5,
        text:
          "“The team at Royale Works Cleaning Specialist did the Move in clean for our house. They did a fantastic job. Everything was spotless. They arrived on time, communication was easy, and most of all their prices are competitive. You definitely wont regret obtaining their services.”",
      },
      {
        name: "Anne Hadden",
        rating: 5,
        text:
          "“A pleasure you did such a good job. I am so happy. I will for sure recommend you to my family and friends.”",
      },
      {
        name: "Shaene Karaan",
        rating: 5,
        text:
          "“I was so pleased with Royale Works Cleaning specialist. Despite of short my notice, they were very flexible and still accommodated me with a wonderful job done for my end of lease cleaning, 100% bond was returned. The team has very good eye for details, the kitchen was very sparkly and the carpet was properly steamed! I give them 5 stars for excellent service and would highly recommend them! Thank you Royale Works Cleaning Specialist.”",
      },
      {
        name: "Zsa Tan",
        rating: 5,
        text:
          "“Hi guys, Thanks again for the cleaning you did for our 2BR 1Bath house. Even came with a steam cleaning promo which our carpets desperately needed. On-time and efficient. Appreciate it.”",
      },
      {
        name: "Zyra Landrito Salazar",
        rating: 5,
        text:
        "“Hi Royal Works Team!! Thank you so much for the End of Lease cleaning done and accommodating me with such short notice. House was impeccably clean, shiny and smells really fresh! Indeed a 100% bond back! Highly recommended!”",
      }
    ],
    []
  );

  const getAvatar = (name) => {
    if (name === "Ivan Lee") return ivanImg;
    if (name === "Sophia Adrao") return sophiaImg;
    if (name === "Kathryn Wong") return kathrynImg;
    return avatarImg;
  };

  const getSlidesPerView = () => (window.innerWidth <= 900 ? 1 : 3);

  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === "undefined" ? 3 : getSlidesPerView()
  );

  // index is the first visible real slide (we’ll use clones)
  const [index, setIndex] = useState(slidesPerView);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef(null);

  const extended = useMemo(() => {
    const head = reviews.slice(0, slidesPerView);
    const tail = reviews.slice(-slidesPerView);
    return [...tail, ...reviews, ...head];
  }, [reviews, slidesPerView]);

  const activeDot =
    ((index - slidesPerView) % reviews.length + reviews.length) % reviews.length;

  useEffect(() => {
    const onResize = () => {
      const spv = getSlidesPerView();
      setSlidesPerView(spv);

      // reset nicely on resize
      setWithTransition(false);
      setIndex(spv);
      requestAnimationFrame(() => setWithTransition(true));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // autoplay (one card step)
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => p + 1), 4200);
    return () => clearInterval(t);
  }, []);

  // infinite loop jump (hidden, no visible “snap back”)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onEnd = () => {
      if (index >= reviews.length + slidesPerView) {
        setWithTransition(false);
        setIndex(slidesPerView);
        requestAnimationFrame(() => setWithTransition(true));
      }
      if (index < slidesPerView) {
        setWithTransition(false);
        setIndex(reviews.length + slidesPerView - 1);
        requestAnimationFrame(() => setWithTransition(true));
      }
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, reviews.length, slidesPerView]);

  const translatePct = (index * 100) / slidesPerView;

  const goToDot = (dotIndex) => setIndex(dotIndex + slidesPerView);

  return (
    <>
      <NavBar />

      <main className="rv-page">
        <div className="rv-spacer" />

        <section className="rv-section">
          <div className="rv-container">
            <h1 className="rv-title">TESTIMONIALS</h1>

            <p className="rv-subtitle">
              We take pride in providing an elevated experience. Here’s what our clients have to say…
            </p>

            <div className="rv-carousel">
              <div
                ref={trackRef}
                className={`rv-track ${withTransition ? "with-transition" : ""}`}
                style={{ transform: `translateX(-${translatePct}%)` }}
              >
                {extended.map((r, i) => (
                  <div className="rv-slide" key={`${r.name}-${i}`}>
                    <article className="rv-card">
                      <div className="rv-avatarWrap">
                        <img className="rv-avatar" src={getAvatar(r.name)} alt={r.name} />
                      </div>

                      <h3 className="rv-name">{r.name}</h3>

                      <div className="rv-stars" aria-label={`${r.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span
                            key={s}
                            className={`rv-star ${s < r.rating ? "filled" : ""}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <p className="rv-text">{r.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv-dots" aria-label="testimonial dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`rv-dot ${i === activeDot ? "active" : ""}`}
                  onClick={() => goToDot(i)}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Reviews;
