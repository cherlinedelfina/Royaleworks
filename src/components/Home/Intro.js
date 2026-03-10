import React from "react";
import bedImg from "../../images/bed_img.png";
import "../../css/Intro.css";

const Intro = () => {
  return (
    <section className="intro-section" id="about">
      <div className="intro-container">
        <div className="intro-left">
          <h2 className="intro-title">HOW WE’RE DIFFERENT</h2>

          <p className="intro-desc">
            We don’t just clean — we redefine what cleaning should look like in Melbourne.
            No inconsistent cleaners. No rushed jobs. No guesswork.
            Every clean is delivered through structured systems, trained employees,
            and consistent quality standards.
          </p>

          <div className="intro-features">
            <div className="intro-feature">
              <div className="intro-icon">
                <span>✦</span>
              </div>
              <div>
                <h4>Precision Systems</h4>
                <p>Structured cleaning methods designed to deliver consistent, flawless results every time.</p>
              </div>
            </div>

            <div className="intro-feature">
              <div className="intro-icon">
                <span>✦</span>
              </div>
              <div>
                <h4>Trained Employees</h4>
                <p>Every cleaner is professionally trained to the same premium standard.</p>
              </div>
            </div>

            <div className="intro-feature">
              <div className="intro-icon">
                <span>✦</span>
              </div>
              <div>
                <h4>Consistent Quality</h4>
                <p>Strict quality controls and clear communication ensure nothing is missed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="intro-right">
          <div className="intro-image-wrapper">
            <img src={bedImg} alt="Luxury bedroom" className="intro-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;