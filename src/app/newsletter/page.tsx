import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter IA | Claws",
  description:
    "Une ressource IA par semaine : cas d'usage concrets, retours terrain, guides OpenClaw. Rejoignez les professionnels qui automatisent intelligemment.",
  alternates: { canonical: "https://claws.fr/newsletter" },
  openGraph: {
    title: "Newsletter IA | Claws",
    description: "Une ressource IA par semaine. Cas d'usage, retours terrain, guides OpenClaw.",
    url: "https://claws.fr/newsletter",
    type: "website",
  },
};

const previews = [
  {
    emoji: "💰",
    title: "Anthropic valorisée 380 milliards",
    desc: "Ce que ça change pour Claude et pour les PME qui l'utilisent.",
  },
  {
    emoji: "🔍",
    title: "Comment un agent surveille vos concurrents",
    desc: "Un cas d'usage concret mis en place chez un client retail.",
  },
  {
    emoji: "⚙️",
    title: "OpenClaw : les 3 erreurs de config les plus fréquentes",
    desc: "Retour terrain après 20 installations. Ce qui plante, et comment l'éviter.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 120px" }}>

        {/* Header */}
        <p className="section-tag">Newsletter</p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1, margin: "12px 0 20px", color: "var(--ink)" }}>
          L&apos;IA qui change<br />vraiment votre travail.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7, marginBottom: "40px", maxWidth: "480px" }}>
          Chaque semaine, un cas d&apos;usage concret, un retour terrain ou un guide pratique
          sur les agents IA OpenClaw. Pas de théorie. Pas de hype. Ce qui fonctionne vraiment.
        </p>

        {/* Form */}
        <NewsletterForm />

        {/* Social proof */}
        <p style={{ fontSize: "13px", color: "#999", marginTop: "16px" }}>
          1 email par semaine · Désabonnement en 1 clic · Pas de spam
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E8E4DF", margin: "60px 0" }} />

        {/* Preview */}
        <p className="section-tag">Aperçu</p>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.5px", margin: "12px 0 32px", color: "var(--ink)" }}>
          Ce que vous recevrez.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {previews.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                gap: "16px",
                padding: "20px",
                background: "#fff",
                border: "1px solid #E8E4DF",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <p style={{ fontWeight: 700, margin: "0 0 4px", color: "var(--ink)", fontSize: "0.95rem" }}>{item.title}</p>
                <p style={{ margin: 0, color: "#666", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E8E4DF", margin: "60px 0" }} />

        {/* CTA bottom */}
        <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.7, marginBottom: "24px" }}>
          Vous avez un agent IA en tête pour votre entreprise ?
        </p>
        <a
          href="https://claws.fr/#contact"
          style={{
            display: "inline-block",
            background: "var(--ink)",
            color: "var(--bg)",
            padding: "14px 28px",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          Parler à Claws →
        </a>
      </main>

      <footer className="footer">
        <p className="footer-copy">© 2025 Claws, Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/a-propos">À propos</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
