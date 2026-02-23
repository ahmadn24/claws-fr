import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Claws — Agents IA OpenClaw",
  description:
    "48 questions-réponses sur les agents IA autonomes, OpenClaw, la sécurité, l'installation locale et les tarifs Claws. Tout ce qu'il faut savoir avant de se lancer.",
  alternates: { canonical: "https://claws.fr/faq" },
  openGraph: {
    title: "FAQ Claws — 48 réponses sur les agents IA OpenClaw",
    description: "Sécurité, installation, coûts, technique, cas d'usage. Tout sur OpenClaw et les agents IA autonomes.",
    url: "https://claws.fr/faq",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

export default function FAQPage() {
  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>
      <FAQClient />
    </>
  );
}
