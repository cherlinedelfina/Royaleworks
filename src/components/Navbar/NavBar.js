import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";
import logo from "../../images/logo3.svg";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // scroll effect
  useEffect(() => {
    const scrollHandler = () => setTop(window.pageYOffset <= 10);
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`rw-nav ${top ? "rw-nav--top" : "rw-nav--scrolled"}`}>
      <div className="rw-nav__inner">

        {/* ===== DESKTOP NAV ===== */}
        <div className="rw-nav__desktop">

            {/* LOGO ON TOP */}
            <div className="rw-nav__logoWrap rw-nav__logoWrap--top">
                <Link to="/" className="rw-nav__logoLink">
                <img src={logo} alt="Royale Works" className="rw-nav__logoImg" />
                </Link>
            </div>

            {/* LINKS BELOW */}
            <div className="rw-nav__linksRow">
                <Link to="/" className="rw-nav__link">HOME</Link>
                <Link to="/about" className="rw-nav__link">ABOUT US</Link>
                <Link to="/ndis" className="rw-nav__link">NDIS</Link>
                <Link to="/services" className="rw-nav__link">OUR SERVICES</Link>
                <Link to="/reviews" className="rw-nav__link">REVIEWS</Link>
                <Link to="/contact" className="rw-nav__link">CONTACT</Link>
            </div>

        </div>

        {/* ===== MOBILE NAV ===== */}
        <div className="rw-nav__mobile">
        <Link to="/" className="rw-nav__mobileBrand" aria-label="Home">
            <img src={logo} alt="Royale Works" className="rw-nav__logoImg rw-nav__logoImg--mobile" />
        </Link>

          <button
            className="rw-nav__burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="rw-nav__burgerLine" />
            <span className="rw-nav__burgerLine" />
            <span className="rw-nav__burgerLine" />
          </button>
        </div>
      </div>

      {/* ===== MOBILE DRAWER (ONLY RENDER ON MOBILE) ===== */}
      {isMobile && (
        <div className={`rw-nav__drawer ${isOpen ? "rw-nav__drawer--open" : ""}`}>
          <div className="rw-nav__drawerInner">
            <Link to="/" onClick={closeMenu} className="rw-nav__drawerLink">HOME</Link>
            <Link to="/about" onClick={closeMenu} className="rw-nav__drawerLink">ABOUT US</Link>
            <Link to="/ndis" onClick={closeMenu} className="rw-nav__drawerLink">NDIS</Link>
            <Link to="/services" onClick={closeMenu} className="rw-nav__drawerLink">OUR SERVICES</Link>
            <Link to="/reviews" onClick={closeMenu} className="rw-nav__drawerLink">REVIEWS</Link>
            <Link to="/contact" onClick={closeMenu} className="rw-nav__drawerLink">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;