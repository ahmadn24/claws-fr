"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/securite", label: "Sécurité" },
    { href: "/faq", label: "FAQ" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <>
      <nav className="nav-bar" style={{ zIndex: 1000 }}>
        <a href="/" className="nav-logo">
          <img src="/logo-claws.png" alt="Claws" style={{ height: "28px", width: "auto", verticalAlign: "middle", marginRight: "8px" }} />
          Claws
        </a>

        {/* Desktop */}
        <div className="nav-links nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="/#contact" className="nav-cta" onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }
        }}>Contact →</a>
        </div>

        {/* Mobile, hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", marginBottom: 5, transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", marginBottom: 5, transition: "all 0.2s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Overlay plein écran, en dehors de la nav pour couvrir tout */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "#F5F2EE",
          display: "flex", flexDirection: "column",
          padding: "80px 32px 40px",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "2rem", fontWeight: 800, color: "#0E0E0E", padding: "20px 0", borderBottom: "1px solid rgba(14,14,14,0.08)", textDecoration: "none", letterSpacing: "-0.5px" }}>
              {l.label}
            </a>
          ))}
          <a href="/#contact"
            onClick={(e) => {
              setOpen(false);
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{ fontSize: "2rem", fontWeight: 800, color: "#E85D04", padding: "20px 0", textDecoration: "none", marginTop: 8, letterSpacing: "-0.5px" }}>
            Contact →
          </a>
        </div>
      )}
    </>
  );
}
