import SEO from "../components/SEO";
import "./Pages.css";

export default function Privacy() {
  return (
    <section className="section container narrow">
      <SEO title="Privacy Policy" description="How FitLiving collects, uses and protects your information." />
      <h1 className="page-title">Privacy Policy</h1>
      <p>Last updated: November 2026</p>
      <h2>Information We Collect</h2>
      <p>We only collect information you give us voluntarily, such as your name, email and message when you use our contact form.</p>
      <h2>How We Use It</h2>
      <p>We use this information only to reply to your message. We do not sell or share your personal data with third parties.</p>
      <h2>Cookies</h2>
      <p>This website may use basic cookies or analytics tools to understand how visitors use the site.</p>
      <h2>External Links</h2>
      <p>Our articles may link to external websites. We are not responsible for their privacy practices.</p>
      <h2>Contact</h2>
      <p>For privacy questions, use our <a href="/contact"><u>Contact page</u></a>.</p>
    </section>
  );
}