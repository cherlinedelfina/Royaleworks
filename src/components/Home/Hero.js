import React from "react";
import { Link, NavLink } from "react-router-dom";
import heroBg from "../../images/hero-cleaning.png";
import "../../css/Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-4 text-center">
          
          {/* THIS container ensures BOTH h1 + subtitle are centered together */}
          <div className="flex flex-col items-center justify-center">
          <h1 className="hero-title text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.55)]">
          Luxury Cleaning for <span className="hidden lg:inline"><br /></span> Modern Living
        </h1>


            <p className="hero-subtitle mt-6 text-white/70 whitespace-normal lg:whitespace-nowrap">
                Luxury Standards. Manhattan Discipline.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
