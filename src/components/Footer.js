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
            href="mailto:royaleworks23@gmail.com"
          >
            royaleworks23@gmail.com
          </a>

          <div className="rw-footer__socials" aria-label="social links">
            <a
              className="rw-footer__social"
              href="https://www.instagram.com/royaleworks.com.au"
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
              href="https://www.linkedin.com/in/royale-works-cleaning-and-co-ab726b270/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.8v2.1h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.2V23h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V23h-4V8z"/>
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