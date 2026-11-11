import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>FitLiving</h3>
          <p>Evidence-based fitness and healthy lifestyle guides.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} FitLiving. All rights reserved.</p>
    </footer>
  );
}