import SEO from "../components/SEO";
import "./Pages.css";

export default function Terms() {
  return (
    <section className="section container narrow">
      <SEO title="Terms & Conditions" description="Terms of use for the FitLiving health and fitness blog." />
      <h1 className="page-title">Terms &amp; Conditions</h1>
      <p>Last updated: November 2026</p>
      <h2>Use of Content</h2>
      <p>All content on FitLiving is for general educational purposes. You may not copy or republish our articles without permission.</p>
      <h2>Medical Disclaimer</h2>
      <p>FitLiving does not provide medical advice. Always consult a qualified healthcare professional before starting any exercise or diet plan.</p>
      <h2>Limitation of Liability</h2>
      <p>We are not liable for any injury or loss resulting from using the information on this website.</p>
      <h2>Changes</h2>
      <p>We may update these terms at any time. Continued use of the site means you accept the changes.</p>
    </section>
  );
}