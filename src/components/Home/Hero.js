import React, { useEffect, useState } from "react";
import heroBg from "../../images/hero-cleaning.png";
import heroBg1 from "../../images/hero-cleaning1.png";
import heroBg2 from "../../images/hero-cleaning2.png";
import "../../css/Hero.css";

const Hero = () => {
  const heroImages = [heroBg, heroBg1, heroBg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] w-full overflow-hidden flex flex-col"
    >
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/70 z-[1]" />

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-4 text-center">
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