import React, { useState } from "react";
import "../css/Contact.css";

import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import contactBg from "../images/services/premium_residential.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setSent(false);
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/Cleaning@royaleworks.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <main className="contact-page">
        <section
          className="contact-hero"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="contact-overlay" />

          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-left">
                <h1 className="contact-title">CONTACT US</h1>

                <div className="contact-info">
                  <div className="contact-row">
                    <span className="contact-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.6.7 4 .7.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.9 22 2 13.1 2 2c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.4.2 2.8.7 4 .1.4 0 .8-.3 1.1L6.6 10.8z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-text">0450 353 498</span>
                  </div>

                  <div className="contact-row">
                    <span className="contact-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-text">Cleaning@royaleworks.com.au</span>
                  </div>

                  <div className="contact-row">
                    <span className="contact-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-text">Melbourne, Victoria</span>
                  </div>
                </div>
              </div>

              <div className="contact-right">
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="field">
                    <label className="label">Full Name</label>
                    <input
                      className="input"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <input
                      className="input"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="field message">
                    <label className="label">Message</label>
                    <textarea
                      className="textarea"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <button className="submit" type="submit" disabled={loading}>
                    {loading ? "SENDING..." : "SUBMIT"}
                  </button>

                  {sent && (
                    <p className="success-text">
                      Message submitted successfully!
                    </p>
                  )}
                </form>
              </div>

              <div className="contact-divider-v" />
              <div className="contact-divider-h" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;