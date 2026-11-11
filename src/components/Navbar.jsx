import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close} style={{ display: "flex", alignItems: "center", gap: "8px" }}></Link>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/blog" onClick={close}>Blog</NavLink>
          <NavLink to="/categories" onClick={close}>Categories</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}