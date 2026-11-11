import { useState } from "react";
import SEO from "../components/SEO";
import "./Pages.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with the FitLiving team." />
      <section className="section container">
        <h1 className="page-title">Contact Us</h1>
        <p>Question hai? Suggestion hai? Humein message bhejo!</p>

        {sent ? (
          <p>Thanks! Tumhara message mil gaya hai. Hum jald reply karenge.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        )}
      </section>
    </>
  );
}