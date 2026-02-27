import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw en France : installation, configuration, support | Claws",
  description: "Tout sur OpenClaw en France : présentation de la plateforme, installation locale, cas d'usage par secteur, RGPD, prix. Claws, première agence française spécialisée OpenClaw. Paris.",
  alternates: { canonical: "https://claws.fr/openclaw-france" },
  keywords: ["OpenClaw France", "installation OpenClaw", "OpenClaw Paris", "agence OpenClaw", "OpenClaw francais", "agent IA local France", "OpenClaw RGPD", "Clawdbot", "Moltbot", "Clawdbot France", "Moltbot OpenClaw"],
  openGraph: {
    title: "OpenClaw en France : le guide complet 2026",
    description: "Présentation, installation, cas d'usage, prix et support OpenClaw en France. Par Claws, première agence française spécialisée.",
    url: "https://claws.fr/openclaw-france",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630, alt: "OpenClaw France, Claws agence spécialisée Paris" }],
  },
};

const faq = [
  {
    q: "OpenClaw est-il disponible en français ?",
    a: "Oui. OpenClaw supporte le français nativement. L'interface de configuration, les messages de l'agent et les canaux de communication (Telegram, WhatsApp, iMessage) fonctionnent tous en français. Claws configure par défaut l'agent en français lors de chaque installation.",
  },
  {
    q: "OpenClaw est-il conforme au RGPD pour les entreprises françaises ?",
    a: "OpenClaw en installation locale est architecturalement conforme au RGPD : aucune donnée personnelle ne quitte la machine de l'utilisateur. Il n'y a pas de transfert vers des pays tiers. Pour les secteurs réglementés (santé, juridique, comptabilité), c'est souvent la seule architecture acceptable. Claws peut fournir une documentation technique pour les DPO.",
  },
  {
    q: "Qui peut installer OpenClaw en France ?",
    a: "OpenClaw est open source : n'importe qui peut l'installer. En pratique, une installation professionnelle sécurisée nécessite des compétences en administration système, sécurité et configuration IA. Claws est la première agence française spécialisée dans ce service, basée à Paris.",
  },
  {
    q: "Quelle est la différence entre OpenClaw et Zapier ou Make ?",
    a: "Zapier et Make sont des outils d'automatisation basés sur des déclencheurs et des actions prédéfinis : vous créez des workflows manuellement. OpenClaw est un agent IA autonome : il comprend le langage naturel, prend des décisions contextuelles et peut gérer des situations imprévues. Il agit comme un collaborateur, pas comme un simple script d'automatisation.",
  },
  {
    q: "OpenClaw fonctionne-t-il hors ligne ?",
    a: "Partiellement. Avec un modèle IA local (Llama 3, Mistral via Ollama), OpenClaw peut fonctionner sans connexion internet pour les tâches locales. Pour les tâches nécessitant internet (email, agenda, accès à des APIs externes), une connexion est requise. C'est utile dans des environnements avec des contraintes de connectivité.",
  },
  {
    q: "Quel modèle IA OpenClaw utilise-t-il ?",
    a: "OpenClaw est compatible avec plusieurs modèles : Claude (Anthropic), GPT-4 et GPT-4o (OpenAI), Llama 3 et Mistral en local via Ollama. Vous n'êtes pas lié à un fournisseur. Claws configure le modèle le plus adapté à votre usage lors de l'installation.",
  },
  {
    q: "Clawdbot et Moltbot, c'est la même chose qu'OpenClaw ?",
    a: "Oui. OpenClaw s'est d'abord appelé Clawdbot, puis Moltbot, avant d'adopter le nom OpenClaw en 2026. Si vous trouvez des tutoriels ou des références à Clawdbot ou Moltbot, il s'agit bien du même logiciel. Le projet a gardé la même architecture et la même philosophie open source tout au long de son évolution.",
  },
];

const sectors = [
  { slug: "entrepreneurs", name: "Entrepreneurs", desc: "Gestion emails, prospection, reporting investisseurs" },
  { slug: "freelances", name: "Freelances", desc: "Relances devis, facturation, onboarding clients" },
  { slug: "avocats", name: "Avocats", desc: "Triage emails, relances dossiers, RGPD natif" },
  { slug: "medecins", name: "Médecins", desc: "Comptes-rendus, gestion RDV, veille médicale" },
  { slug: "cfo", name: "DAF & Finance", desc: "Reporting automatisé, alertes trésorerie" },
  { slug: "agences", name: "Agences", desc: "Veille, reporting clients, prospection" },
  { slug: "btp", name: "BTP", desc: "Devis automatisés, relances chantiers" },
  { slug: "createurs", name: "Créateurs", desc: "Repurposing contenu, veille tendances" },
  { slug: "retail", name: "Retail", desc: "Service client 24/7, suivi stocks" },
];

export default function OpenClawFrancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "OpenClaw en France : guide complet 2026",
      description: "Présentation complète de la plateforme OpenClaw, son fonctionnement, ses cas d'usage en France, sa conformité RGPD et les options d'installation par Claws.",
      datePublished: "2026-02-01",
      dateModified: "2026-02-23",
      author: { "@type": "Organization", name: "Claws", url: "https://claws.fr", "@id": "https://claws.fr/#organization" },
      publisher: { "@type": "Organization", name: "Claws", url: "https://claws.fr", logo: { "@type": "ImageObject", url: "https://claws.fr/icon.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://claws.fr/openclaw-france" },
      keywords: "OpenClaw France, installation OpenClaw, agent IA local, OpenClaw RGPD, OpenClaw Paris",
      inLanguage: "fr-FR",
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".speakable"] },
      about: { "@type": "SoftwareApplication", name: "OpenClaw", applicationCategory: "BusinessApplication", operatingSystem: "macOS, Linux", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Logiciel open source gratuit" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://claws.fr" },
        { "@type": "ListItem", position: 2, name: "OpenClaw en France", item: "https://claws.fr/openclaw-france" },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "72px 24px 56px", borderBottom: "3px solid #E85D04" }}>
          <p className="section-tag" style={{ color: "#E85D04" }}>Guide 2026</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1.5px", lineHeight: 1.1, margin: "16px 0 24px" }}>
            OpenClaw en France :<br />tout ce que vous devez savoir.
          </h1>
          <p className="speakable" style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8, maxWidth: 600, marginBottom: 32 }}>
            OpenClaw est une plateforme open source qui permet de déployer des agents IA autonomes directement sur votre machine, sans cloud. Claws est la première agence française spécialisée dans son installation professionnelle.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { href: "#qu-est-ce-qu-openclaw", label: "Qu'est-ce qu'OpenClaw ?" },
              { href: "#openclaw-france-rgpd", label: "RGPD" },
              { href: "#installation", label: "Installation" },
              { href: "#secteurs", label: "Par secteur" },
              { href: "#faq", label: "FAQ" },
            ].map((a, i) => (
              <a key={i} href={a.href} style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#E85D04", border: "1px solid rgba(232,93,4,0.3)", padding: "5px 12px", textDecoration: "none" }}>
                {a.label}
              </a>
            ))}
          </div>
        </section>

        {/* Qu'est-ce qu'OpenClaw */}
        <section id="qu-est-ce-qu-openclaw" style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 24px" }}>
            Qu'est-ce qu'OpenClaw ?
          </h2>
          <p className="speakable" style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
            OpenClaw est un logiciel open source (licence MIT) qui fait tourner des agents IA autonomes directement sur votre ordinateur. Contrairement aux assistants IA cloud comme ChatGPT, Copilot ou Gemini, OpenClaw ne transmet aucune donnée à des serveurs externes : tout le traitement se fait en local.
          </p>
          <p style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
            Un agent OpenClaw peut accéder à vos emails, votre agenda, vos fichiers, envoyer des messages via Telegram ou WhatsApp, surveiller des sites web, exécuter des scripts et enchaîner des tâches complexes sans intervention humaine à chaque étape. C'est la différence fondamentale avec un chatbot : OpenClaw agit, il ne se contente pas de répondre.
          </p>
          <p style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
            OpenClaw est compatible avec plusieurs modèles IA : Claude (Anthropic), GPT-4 (OpenAI), Llama 3 et Mistral en local via Ollama. Vous n'êtes pas lié à un fournisseur unique. Le projet est maintenu activement sur GitHub et dispose d'une communauté internationale croissante.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.8, borderLeft: "2px solid #E8E4DF", paddingLeft: 16 }}>
            Note historique : avant de s'appeler OpenClaw, la plateforme s'est successivement appelée <strong>Clawdbot</strong>, puis <strong>Moltbot</strong>. Le nom OpenClaw a été adopté en 2026. Si vous cherchez des ressources sur ces anciens noms, elles correspondent bien au même projet.
          </p>
        </section>

        {/* OpenClaw vs alternatives */}
        <section style={{ background: "#0E0E0E", padding: "64px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-0.5px", margin: "0 0 40px" }}>
              OpenClaw vs les autres outils.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {[
                { tool: "ChatGPT / Gemini", verdict: "Chatbots cloud", detail: "Répondent à vos questions. Vos données partent sur leurs serveurs. Aucune autonomie réelle." },
                { tool: "Make / Zapier", verdict: "Automatisation scriptée", detail: "Workflows fixes, pas d'IA. Utile pour des tâches simples et répétitives sans décision contextuelle." },
                { tool: "n8n", verdict: "Automatisation technique", detail: "Plus flexible que Make, mais nécessite des compétences techniques. Pas d'agent IA natif." },
                { tool: "OpenClaw", verdict: "Agent IA local", detail: "Agit de façon autonome, comprend le contexte, prend des décisions. 100% local. Open source." },
              ].map((r, i) => (
                <div key={i} style={{ padding: "24px", background: i === 3 ? "rgba(232,93,4,0.1)" : "#0E0E0E", borderLeft: i === 3 ? "2px solid #E85D04" : "none" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#E85D04", margin: "0 0 6px" }}>{r.tool}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 8px" }}>{r.verdict}</p>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{r.detail}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="/comparatif" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#E85D04", textDecoration: "none" }}>
                Comparatif complet OpenClaw vs ChatGPT, Copilot, Gemini →
              </a>
            </div>
          </div>
        </section>

        {/* RGPD */}
        <section id="openclaw-france-rgpd" style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 24px" }}>
            OpenClaw et le RGPD en France.
          </h2>
          <p className="speakable" style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
            OpenClaw en installation locale est architecturalement conforme au principe de minimisation des données du RGPD (Règlement UE 2016/679). Toutes les données traitées par l'agent, qu'il s'agisse d'emails, de documents, de contacts ou de messages, restent sur la machine de l'utilisateur. Aucun sous-traitant cloud n'intervient dans la chaîne de traitement.
          </p>
          <p style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
            C'est une différence fondamentale avec les outils cloud américains : ChatGPT, Copilot et Gemini envoient vos requêtes vers des serveurs aux États-Unis, ce qui constitue un transfert de données hors UE soumis aux conditions du RGPD. OpenClaw élimine cette problématique à la racine.
          </p>
          <p style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85 }}>
            Pour les secteurs réglementés (santé, juridique, finance, ressources humaines), l'architecture locale d'OpenClaw est souvent la seule qui soit acceptable d'un point de vue légal et éthique. Claws peut fournir une documentation technique décrivant les flux de données pour les délégués à la protection des données (DPO).
          </p>
          <div style={{ marginTop: 28 }}>
            <a href="/securite" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#E85D04", textDecoration: "none" }}>
              Voir le Protocole Claws sécurité 12 points →
            </a>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 24px" }}>
              Installer OpenClaw en France.
            </h2>
            <p style={{ fontSize: "0.97rem", color: "#444", lineHeight: 1.85, marginBottom: 32 }}>
              OpenClaw est open source : vous pouvez l'installer vous-même si vous avez les compétences techniques. Une installation professionnelle sécurisée nécessite environ 4 à 8 heures de configuration pour quelqu'un qui connaît bien l'outil. Claws propose un service d'installation complète en 2h, avec garantie 30 jours.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { num: "01", title: "Appel découverte", desc: "30 min pour comprendre votre activité, vos outils et vos besoins." },
                { num: "02", title: "Installation sécurisée", desc: "Claws installe OpenClaw à distance sur votre machine selon le Protocole 12 points." },
                { num: "03", title: "Configuration métier", desc: "L'agent est configuré pour votre secteur, vos outils et vos règles spécifiques." },
                { num: "04", title: "Mise en production", desc: "Votre agent OpenClaw est opérationnel. 30 jours de garantie inclus." },
              ].map((s, i) => (
                <div key={i} style={{ border: "1.5px solid #E8E4DF", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", margin: "0 0 10px" }}>{s.num}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 8px" }}>{s.title}</p>
                  <p style={{ fontSize: "0.82rem", color: "#666", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                Demander une installation →
              </a>
              <span style={{ marginLeft: 16, fontSize: "0.85rem", color: "#888" }}>À partir de 189€ · Opérationnel en 2h</span>
            </div>
          </div>
        </section>

        {/* Par secteur */}
        <section id="secteurs" style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 16px" }}>
            OpenClaw pour votre secteur en France.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: 36, lineHeight: 1.7 }}>
            Claws a configuré des agents OpenClaw pour 9 secteurs d'activité. Chaque configuration est adaptée aux outils, contraintes et cas d'usage spécifiques du secteur.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {sectors.map((s, i) => (
              <a key={i} href={`/solutions/${s.slug}`} className="sector-card-link">
                <strong>{s.name}</strong>
                <br />
                <span style={{ fontSize: "0.8rem", color: "#888" }}>{s.desc}</span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "0 0 40px" }}>
              Questions sur OpenClaw en France.
            </h2>
            {faq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #F0EDE9", padding: "20px 0" }}>
                <summary style={{ fontSize: "0.98rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#E85D04", fontSize: "1.25rem", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: "0.93rem", color: "#555", lineHeight: 1.85 }}>{f.a}</p>
              </details>
            ))}
            <div style={{ marginTop: 32 }}>
              <a href="/faq" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#E85D04", textDecoration: "none" }}>
                Voir toutes les questions OpenClaw →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0E0E0E", padding: "72px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-1px", margin: "0 0 16px" }}>
            Première agence française spécialisée OpenClaw.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Basée à Paris. Installation en 2h à partir de 189€. Garantie 30 jours. Support en français.
          </p>
          <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
            Installer OpenClaw →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
