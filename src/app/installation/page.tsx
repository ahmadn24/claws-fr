import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Installer OpenClaw en 48h | Claws, première agence française",
  description: "Obtenez votre agent IA OpenClaw installé, sécurisé et configuré pour votre métier en 48h. À partir de 189€. Garantie 30 jours. Réponse sous 24h.",
  alternates: { canonical: "https://claws.fr/installation" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Installer OpenClaw en 48h | Claws",
    description: "Agent IA local installé et configuré pour votre métier en 48h. À partir de 189€. Garantie 30 jours.",
    url: "https://claws.fr/installation",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

const benefits = [
  { num: "48h", label: "Délai d'installation", desc: "De la prise de contact à l'agent opérationnel sur votre machine." },
  { num: "189€", label: "À partir de", desc: "Installation complète, sécurisée, garantie 30 jours. Sans abonnement obligatoire." },
  { num: "100%", label: "Local et privé", desc: "Aucune donnée ne quitte votre machine. Architecture RGPD native." },
];

const steps = [
  { num: "01", title: "Appel découverte (30 min)", desc: "On comprend votre activité, vos outils, vos cas d'usage prioritaires. Pas de jargon." },
  { num: "02", title: "Installation sécurisée", desc: "Claws installe OpenClaw à distance selon le Protocole 12 points. Vous voyez tout en direct." },
  { num: "03", title: "Configuration métier", desc: "L'agent est calibré pour votre secteur : emails, relances, reporting, veille. Selon vos règles." },
  { num: "04", title: "Agent opérationnel", desc: "Votre agent tourne en production. 30 jours de garantie inclus, support inclus." },
];

const faqs = [
  { q: "Est-ce que mes données restent confidentielles ?", a: "Oui. OpenClaw fonctionne en local sur votre machine. Aucune donnée ne passe par un serveur externe. C'est architecturalement conforme au RGPD." },
  { q: "Est-ce que je dois être technique ?", a: "Non. Claws s'occupe de l'installation complète. Vous n'avez pas besoin de savoir coder ou administrer un serveur." },
  { q: "Que se passe-t-il si ça ne convient pas ?", a: "Garantie 30 jours. Si l'agent ne correspond pas à vos attentes dans le premier mois, on rembourse." },
  { q: "Sur quel matériel ça tourne ?", a: "Sur votre Mac, PC ou serveur Linux actuel. Pas besoin d'acheter de matériel spécifique dans la plupart des cas." },
];

export default function InstallationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Installation OpenClaw par Claws",
    provider: { "@type": "Organization", name: "Claws", url: "https://claws.fr" },
    description: "Installation, configuration et sécurisation d'un agent IA OpenClaw pour PME et professions libérales françaises. Opérationnel en 48h.",
    offers: {
      "@type": "Offer",
      price: "189",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    areaServed: { "@type": "Country", name: "France" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ background: "#F5F2EE", minHeight: "100vh", fontFamily: "var(--font-sans)" }}>

        {/* BARRE MARQUE MINIMALE */}
        <div style={{ background: "#0E0E0E", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="https://claws.fr" style={{ color: "#F5F2EE", textDecoration: "none", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.5px" }}>
            Claws
          </a>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>
            Première agence française OpenClaw
          </span>
        </div>

        {/* HERO */}
        <section style={{ maxWidth: 680, margin: "0 auto", padding: "72px 24px 56px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Installation OpenClaw · Paris
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1.5px", lineHeight: 1.1, margin: "0 0 24px" }}>
            Votre agent IA opérationnel<br />en 48 heures.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, marginBottom: 36, maxWidth: 520, margin: "0 auto 36px" }}>
            Claws installe, sécurise et configure OpenClaw sur votre machine. Vous reprenez du temps. Vos données ne bougent pas.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "#E85D04",
              color: "#fff",
              padding: "16px 40px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "-0.3px",
            }}
          >
            Demander une installation →
          </a>
          <p style={{ marginTop: 14, fontSize: "0.8rem", color: "#999", fontFamily: "var(--font-mono)" }}>
            Réponse sous 24h · À partir de 189€ · Garantie 30 jours
          </p>
        </section>

        {/* 3 CHIFFRES */}
        <section style={{ background: "#0E0E0E", padding: "48px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ padding: "32px 24px", background: "#0E0E0E", textAlign: "center" }}>
                <p style={{ fontSize: "2.4rem", fontWeight: 800, color: "#E85D04", margin: "0 0 6px", letterSpacing: "-1px" }}>{b.num}</p>
                <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.5)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{b.label}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMMENT CA MARCHE */}
        <section style={{ maxWidth: 680, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 40px", textAlign: "center" }}>
            Comment ça marche.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 24, padding: "24px", background: "#fff", borderLeft: "3px solid #E85D04" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", flexShrink: 0, paddingTop: 3 }}>{s.num}</span>
                <div>
                  <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 6px" }}>{s.title}</p>
                  <p style={{ fontSize: "0.85rem", color: "#666", margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TÉMOIGNAGE */}
        <section style={{ background: "#fff", padding: "56px 24px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "1.4rem", color: "#0E0E0E", lineHeight: 1.6, fontStyle: "italic", margin: "0 0 24px" }}>
              "Mon agent gère mes emails Stripe et Qonto chaque matin. Je récupère 2h par jour que je remets sur la stratégie produit."
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888" }}>
              Ahmad C., fondateur de Libcare
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 680, margin: "0 auto", padding: "72px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
              Parlons de votre installation.
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#666", margin: 0 }}>
              Julie répond personnellement sous 24h.
            </p>
          </div>

          {/* Bloc Julie */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, padding: "16px 20px", background: "#fff", border: "1.5px solid #E8E4DF" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E85D04", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.9rem", flexShrink: 0 }}>
              JD
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: "#0E0E0E" }}>Julie Decroix</p>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#888" }}>Co-fondatrice Claws · Répond sous 24h</p>
            </div>
          </div>

          <ContactForm />
        </section>

        {/* FAQ */}
        <section style={{ background: "#fff", padding: "56px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0E0E0E", margin: "0 0 32px", letterSpacing: "-0.5px" }}>
              Questions fréquentes.
            </h2>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #F0EDE9", padding: "18px 0" }}>
                <summary style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#E85D04", fontSize: "1.1rem", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ marginTop: 12, fontSize: "0.88rem", color: "#555", lineHeight: 1.8 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: "#E85D04", padding: "56px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
            Prêt à gagner 2h par jour ?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", margin: "0 0 28px" }}>
            Installation en 48h. À partir de 189€. Garantie 30 jours.
          </p>
          <a
            href="#contact"
            style={{ display: "inline-block", background: "#fff", color: "#E85D04", padding: "14px 36px", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none" }}
          >
            Demander une installation →
          </a>
        </section>

        {/* FOOTER MINIMAL */}
        <div style={{ background: "#0E0E0E", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © 2026 Claws · <a href="/mentions-legales" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Mentions légales</a> · <a href="https://claws.fr" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>claws.fr</a>
          </p>
        </div>

      </main>
    </>
  );
}
