// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import logo from "../images/logo4.svg";

const Footer = () => {
  return (
    <footer className="rw-footer">
      <div className="rw-footer__container">
        <div className="rw-footer__brand">
          <img src={logo} alt="Royale Works" className="rw-footer__logoImg" />
        </div>

        <div className="rw-footer__cols">
          <div className="rw-footer__col">
            <h6 className="rw-footer__colTitle">Menu</h6>
            <ul className="rw-footer__list">
              <li>
                <Link className="rw-footer__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="rw-footer__link" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="rw-footer__link" to="/ndis">
                  NDIS
                </Link>
              </li>
            </ul>
          </div>

          <div className="rw-footer__col">
            <h6 className="rw-footer__colTitle">Our Services</h6>
            <ul className="rw-footer__list">
              <li>
                <Link className="rw-footer__link" to="/services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="rw-footer__link" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="rw-footer__link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rw-footer__right">
          <h6 className="rw-footer__colTitle rw-footer__colTitleGold">
            Get In Touch
          </h6>

          <a className="rw-footer__contact rw-footer__phone" href="tel:0450353498">
            0450 353 498
          </a>

          <a
            className="rw-footer__contact muted"
            href="mailto:leo.tiu@royaleworks.com.au"
          >
            leo.tiu@royaleworks.com.au
          </a>

          <div className="rw-footer__socials" aria-label="social links">
            <a
              className="rw-footer__social"
              href="https://www.instagram.com/royaleworkscleaningandco"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.8 6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
            </a>

            <a
              className="rw-footer__social"
              href="https://www.facebook.com/royaleworkscleaningandco"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.3-1.6 1.7-1.6H17V5a24 24 0 0 0-2.5-.1c-2.5 0-4.1 1.5-4.1 4.4V11H8v3h2.4v8h3.1Z" />
              </svg>
            </a>

            <a
              className="rw-footer__social"
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.6L5.8 22H2.7l7.3-8.4L1 2h6.6l4.6 6 6.7-6Zm-1.1 18h1.7L6.7 3.9H5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="rw-footer__bottom">
        <div className="rw-footer__bottomInner">
          <span>
            All Rights Reserved © {new Date().getFullYear()} · Royale Works Cleaning Co
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;