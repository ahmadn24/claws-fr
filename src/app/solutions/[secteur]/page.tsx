import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectors, sectorSlugs } from "./sectorData";

export async function generateStaticParams() {
  return sectorSlugs.map((s) => ({ secteur: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ secteur: string }> }): Promise<Metadata> {
  const { secteur } = await params;
  const s = sectors[secteur];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `https://claws.fr/solutions/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDesc,
      url: `https://claws.fr/solutions/${s.slug}`,
      images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function SectorPage({ params }: { params: Promise<{ secteur: string }> }) {
  const { secteur } = await params;
  const s = sectors[secteur];
  if (!s) notFound();

  const sharedFaq = [
    {
      q: `Qu'est-ce qu'OpenClaw ?`,
      a: `OpenClaw est un agent IA autonome open source qui tourne directement sur votre machine. Contrairement à ChatGPT, Copilot ou Gemini, il n'envoie pas vos données sur un cloud, tout reste chez vous. Il peut lire vos emails, répondre, gérer votre agenda, envoyer des messages, surveiller des sites et enchaîner des tâches complexes sans intervention humaine à chaque étape.`,
    },
    {
      q: `Pourquoi passer par Claws pour installer OpenClaw ?`,
      a: `OpenClaw est open source : vous pouvez l'installer vous-même si vous êtes développeur. Mais l'installation sécurisée, chiffrement, permissions, configuration des intégrations, tests bout en bout, représente 4 à 8 heures de travail pour quelqu'un qui maîtrise l'outil. Claws le fait en 48h avec une garantie de 30 jours et un support en français. Vous vous concentrez sur votre métier, on s'occupe de la technique.`,
    },
    {
      q: `OpenClaw respecte-t-il le RGPD ?`,
      a: `OpenClaw en installation locale est architecturalement conforme au principe de minimisation des données du RGPD : vos données professionnelles ne quittent pas votre infrastructure. Pas de transfert vers des pays tiers, pas de sous-traitant cloud. Pour les secteurs réglementés, c'est souvent la seule architecture acceptable.`,
    },
  ];

  const allFaq = [...s.faq, ...sharedFaq];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <NavBar />

      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ padding: "72px 24px 64px", maxWidth: 760, margin: "0 auto", borderBottom: "3px solid #E85D04" }}>
          <p className="section-tag" style={{ color: "#E85D04" }}>{s.name}</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-1.5px", margin: "16px 0 24px" }}>
            {s.headline}
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#555", lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
            {s.subheadline}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              Demander une démo →
            </a>
            <a href="/comparatif" style={{ display: "inline-block", border: "1.5px solid #0E0E0E", color: "#0E0E0E", padding: "14px 28px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
              OpenClaw vs ChatGPT →
            </a>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "#0E0E0E", padding: "48px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0 }}>
            {[s.stat1, s.stat2, s.stat3].map((stat, i) => (
              <div key={i} style={{ padding: "24px 32px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#E85D04", margin: "0 0 8px", letterSpacing: "-1px" }}>{stat.value}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pain Points */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <p className="section-tag">Le problème</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
            Ce qui prend votre temps sans créer de valeur.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {s.painPoints.map((p, i) => (
              <div key={i} style={{ background: "#fff", padding: "28px", borderTop: "3px solid #E85D04" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 10px" }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi OpenClaw */}
        <section style={{ background: "#0E0E0E", padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              La technologie
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
              Pourquoi OpenClaw et pas ChatGPT ?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 40, maxWidth: 560 }}>
              OpenClaw est un agent IA open source qui tourne sur votre machine. Claws l&apos;installe, le sécurise et le configure pour votre métier.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {[
                {
                  num: "01",
                  title: "100% local",
                  desc: "Vos données restent sur votre machine. Emails, documents, conversations, rien ne part sur un serveur externe.",
                },
                {
                  num: "02",
                  title: "Agent autonome",
                  desc: "OpenClaw agit sans supervision. Il surveille, déclenche, envoie, relance, pendant que vous travaillez.",
                },
                {
                  num: "03",
                  title: "Open source",
                  desc: "Le code est public et auditable. Changez de modèle IA (Claude, GPT-4, Llama) sans changer d'agent.",
                },
                {
                  num: "04",
                  title: "Configuré pour vous",
                  desc: "Claws installe OpenClaw et le configure pour votre secteur en 48h. Garanti ou refait.",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px 24px", background: "#0E0E0E" }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#E85D04", letterSpacing: "0.1em", margin: "0 0 10px" }}>{item.num}</p>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <a href="/comparatif" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#E85D04", textDecoration: "none", letterSpacing: "0.05em" }}>
                Voir le comparatif complet OpenClaw vs ChatGPT, Copilot, Gemini →
              </a>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p className="section-tag">Ce que fait votre agent OpenClaw</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 48px" }}>
              5 automatisations opérationnelles dès le premier jour.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {s.useCases.map((uc, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, padding: "32px 0", borderBottom: "1px solid #F0EDE9", alignItems: "start" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#E85D04", letterSpacing: "0.1em", paddingTop: 3 }}>{uc.emoji}</div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 10px" }}>{uc.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: "0 0 14px" }}>{uc.desc}</p>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E85D04", margin: 0, background: "rgba(232,93,4,0.07)", display: "inline-block", padding: "6px 12px" }}>
                      → {uc.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <p className="section-tag">Comment ça marche</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 48px" }}>
            OpenClaw opérationnel en 48 heures. Sans technique.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, border: "1px solid #E8E4DF" }}>
            {[
              { num: "01", title: "Appel découverte", desc: "30 min pour comprendre votre activité, vos outils et vos besoins prioritaires." },
              { num: "02", title: "Installation OpenClaw", desc: "Claws installe et sécurise OpenClaw sur votre machine à distance. Zéro interruption." },
              { num: "03", title: "Configuration métier", desc: "L'agent apprend votre contexte, vos règles, vos templates. Configuré pour votre secteur." },
              { num: "04", title: "Vous pilotez", desc: "Votre agent OpenClaw tourne. Disponible sur Telegram ou WhatsApp. 30 jours de garantie." },
            ].map((step, i) => (
              <div key={i} style={{ padding: "32px 24px", borderRight: i < 3 ? "1px solid #E8E4DF" : "none" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", margin: "0 0 12px" }}>{step.num}</p>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p className="section-tag">Questions fréquentes</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              OpenClaw pour {s.name.toLowerCase()}, vos questions.
            </h2>
            {allFaq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #F0EDE9", padding: "20px 0" }}>
                <summary style={{ fontSize: "1rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#E85D04", fontSize: "1.25rem", flexShrink: 0, marginTop: 2 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }}>{f.a}</p>
              </details>
            ))}
            <div style={{ marginTop: 32 }}>
              <a href="/faq" style={{ color: "#E85D04", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                Voir toutes les questions →
              </a>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Prêt ?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F5F2EE", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Votre agent OpenClaw tourne en 48h.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Installation à partir de 189€. 30 jours de garantie.
            Si ça ne marche pas, on refait gratuitement.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
              Démarrer maintenant →
            </a>
            <a href="/comparatif" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "16px 36px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              OpenClaw vs ChatGPT →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
