import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Installer OpenClaw en 2h | Claws, première agence française",
  description: "Obtenez votre agent IA OpenClaw installé, sécurisé et configuré pour votre métier en 2h. À partir de 189€. Garantie 30 jours. Réponse sous 24h.",
  alternates: { canonical: "https://claws.fr/installation" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Installer OpenClaw en 2h | Claws",
    description: "Agent IA local installé et configuré pour votre métier en 2h. À partir de 189€. Garantie 30 jours.",
    url: "https://claws.fr/installation",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

const proofs = [
  "Installation en 2h",
  "À partir de 189€",
  "Garantie 30 jours",
  "100% local, zéro cloud",
];

const steps = [
  { num: "01", title: "Appel découverte (30 min)", desc: "On comprend votre activité, vos outils, vos cas d'usage." },
  { num: "02", title: "Installation sécurisée", desc: "Claws installe OpenClaw à distance selon le Protocole 12 points." },
  { num: "03", title: "Configuration métier", desc: "L'agent est calibré pour votre secteur et vos règles." },
  { num: "04", title: "Agent opérationnel", desc: "En production sous 2h. Support 30 jours inclus." },
];

const faqs = [
  { q: "Est-ce que mes données restent confidentielles ?", a: "Oui. OpenClaw fonctionne en local sur votre machine. Aucune donnée ne passe par un serveur externe. Architecture RGPD native." },
  { q: "Est-ce que je dois être technique ?", a: "Non. Claws s'occupe de l'installation complète à distance. Vous n'avez besoin de rien configurer vous-même." },
  { q: "Que se passe-t-il si ça ne convient pas ?", a: "Garantie 30 jours. Si l'agent ne correspond pas à vos attentes dans le premier mois, on rembourse." },
  { q: "Sur quel matériel ça tourne ?", a: "Sur votre Mac, PC ou serveur Linux actuel. Pas besoin d'acheter du matériel spécifique dans la plupart des cas." },
];

export default function InstallationPage() {
  return (
    <main style={{ background: "#F5F2EE", minHeight: "100vh", fontFamily: "var(--font-sans)" }}>

      {/* BARRE MARQUE */}
      <div style={{ background: "#0E0E0E", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="https://claws.fr" style={{ color: "#F5F2EE", textDecoration: "none", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.5px" }}>Claws</a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)" }}>Première agence française OpenClaw</span>
      </div>

      {/* HERO + FORMULAIRE CÔTE À CÔTE */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "56px 24px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

        {/* TEXTE GAUCHE */}
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Installation OpenClaw · Paris
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1.5px", lineHeight: 1.1, margin: "0 0 20px" }}>
            Votre agent IA<br />opérationnel<br />en 2 heures.
          </h1>
          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
            Claws installe, sécurise et configure OpenClaw sur votre machine. Vous reprenez du temps. Vos données ne bougent pas.
          </p>

          {/* PREUVES RAPIDES */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {proofs.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#E85D04", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.9rem", color: "#444" }}>{p}</span>
              </div>
            ))}
          </div>

          {/* TÉMOIGNAGE */}
          <div style={{ borderLeft: "3px solid #E85D04", paddingLeft: 16 }}>
            <p style={{ fontSize: "0.88rem", color: "#444", fontStyle: "italic", margin: "0 0 8px", lineHeight: 1.7 }}>
              "Mon agent gère mes emails Stripe et Qonto chaque matin. Je récupère 2h par jour."
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#888", margin: 0 }}>
              Ahmad C., fondateur de Libcare
            </p>
          </div>
        </div>

        {/* FORMULAIRE DROITE */}
        <div id="contact-form" style={{ background: "#fff", padding: "32px", border: "1.5px solid #E8E4DF", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid #F0EDE9" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E85D04", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>
              JD
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "0.88rem", color: "#0E0E0E" }}>Julie Decroix</p>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "#888" }}>Co-fondatrice · Répond sous 24h</p>
            </div>
          </div>
          <ContactForm />
        </div>

      </section>

      {/* STYLE RESPONSIVE MOBILE */}
      <style>{`
        @media (max-width: 700px) {
          section { grid-template-columns: 1fr !important; gap: 32px !important; padding-top: 36px !important; }
        }
      `}</style>

      {/* COMMENT CA MARCHE */}
      <section style={{ background: "#0E0E0E", padding: "56px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-0.5px", margin: "0 0 32px", textAlign: "center" }}>
            Comment ça marche.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ padding: "24px 20px", background: "#0E0E0E" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#E85D04", margin: "0 0 8px" }}>{s.num}</p>
                <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 8px" }}>{s.title}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0E0E0E", margin: "0 0 28px", letterSpacing: "-0.5px" }}>
          Questions fréquentes.
        </h2>
        {faqs.map((f, i) => (
          <details key={i} style={{ borderBottom: "1px solid #E8E4DF", padding: "16px 0" }}>
            <summary style={{ fontSize: "0.93rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 16 }}>
              <span>{f.q}</span>
              <span style={{ color: "#E85D04", flexShrink: 0 }}>+</span>
            </summary>
            <p style={{ marginTop: 10, fontSize: "0.86rem", color: "#555", lineHeight: 1.8 }}>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#E85D04", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", margin: "0 0 10px" }}>
          Prêt à gagner 2h par jour ?
        </h2>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", margin: "0 0 24px" }}>
          Installation en 2h. À partir de 189€. Garantie 30 jours.
        </p>
        <a href="#contact-form"
          style={{ display: "inline-block", background: "#fff", color: "#E85D04", padding: "14px 32px", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none" }}>
          Demander une installation →
        </a>
      </section>

      {/* FOOTER MINIMAL */}
      <div style={{ background: "#0E0E0E", padding: "16px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © 2026 Claws · <a href="/mentions-legales" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>Mentions légales</a> · <a href="https://claws.fr" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>claws.fr</a>
        </p>
      </div>

    </main>
  );
}
