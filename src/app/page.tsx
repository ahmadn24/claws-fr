import { getAllPosts } from "@/lib/posts";
import ContactTerminal from "@/components/ContactTerminal";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const differentiators = [
  {
    icon: "01",
    title: "Spécialistes OpenClaw, pas généralistes IA",
    desc: "On ne fait que ça. On connaît OpenClaw de l'intérieur, on le déploie, on le débugge, on suit chaque release. Vous n'êtes pas notre cobaye.",
  },
  {
    icon: "02",
    title: "Vos données restent chez vous. Toujours.",
    desc: "Pas de cloud, pas de serveur tiers, pas d'API qui aspire vos emails. Votre agent OpenClaw tourne sur votre machine. C'est l'architecture, pas une promesse marketing.",
  },
  {
    icon: "03",
    title: "La même personne du début à la fin",
    desc: "Vous appelez, vous tombez sur quelqu'un qui connaît votre setup par cœur. Pas de centre d'appels, pas de numéro de ticket.",
  },
  {
    icon: "04",
    title: "Des agents configurés pour votre métier",
    desc: "On configure OpenClaw sur des setups réels, pas sur des démos. Vos automatisations sont calibrées pour votre activité, pas copiées d'un template générique.",
  },
  {
    icon: "05",
    title: "Garantie 30 jours sans condition",
    desc: "Si votre agent OpenClaw ne fait pas ce qu'il devrait faire dans les 30 jours, on refait le travail gratuitement. Sans discussion.",
  },
  {
    icon: "06",
    title: "Telegram, WhatsApp, iMessage simultanément",
    desc: "Un seul agent OpenClaw, accessible depuis tous vos canaux dès l'installation. Vous ne choisissez pas, vous avez tout.",
  },
];

const sectors = [
  { slug: "entrepreneurs", name: "Entrepreneurs & Startups", tag: "Gagnez 3h/jour sur l'opérationnel" },
  { slug: "freelances",    name: "Freelances & Indépendants", tag: "Prospection et facturation automatiques" },
  { slug: "createurs",     name: "Créateurs de contenu",     tag: "Repurposing, veille, communauté" },
  { slug: "cfo",           name: "DAF & Direction financière", tag: "Reporting et alertes trésorerie" },
  { slug: "avocats",       name: "Avocats & Cabinets juridiques", tag: "Triage emails, relances, RGPD natif" },
  { slug: "medecins",      name: "Médecins & Santé",         tag: "Comptes-rendus, RDV, veille médicale" },
  { slug: "agences",       name: "Agences & Consultants",    tag: "Reporting clients, veille, prospection" },
  { slug: "btp",           name: "BTP & Artisans",           tag: "Devis automatisés, relances, chantiers" },
  { slug: "retail",        name: "Commerce & Retail",        tag: "Service client 24/7, paniers, stocks" },
];

const offers = [
  {
    code: "SETUP",
    price: "À partir de 189 €",
    title: "Installation OpenClaw",
    desc: "On installe et sécurise OpenClaw sur votre machine, on connecte vos canaux, on configure les automatisations de base. Opérationnel en 48h.",
    cta: "Démarrer",
  },
  {
    code: "AGENT SUR MESURE",
    price: "Sur devis",
    title: "OpenClaw configuré pour votre métier",
    desc: "On passe du temps à comprendre votre activité, puis on configure un agent OpenClaw qui fait exactement ce dont vous avez besoin. Pas un template.",
    cta: "Nous contacter",
    featured: true,
  },
  {
    code: "RETAINER",
    price: "À partir de 149 €/mois",
    title: "Suivi et évolutions dans le temps",
    desc: "Mises à jour OpenClaw, monitoring, ajustements quand votre activité change. Un interlocuteur fixe qui connaît votre système.",
    cta: "En savoir plus",
  },
];

const steps = [
  {
    num: "01",
    title: "On écoute.",
    desc: "Un appel pour comprendre votre activité, vos outils et ce qui vous prend le plus de temps.",
  },
  {
    num: "02",
    title: "On installe OpenClaw.",
    desc: "Installation complète sur votre machine, sécurisée selon le Protocole Claws 12 points. Vous ne touchez à rien.",
  },
  {
    num: "03",
    title: "Votre agent prend le relai.",
    desc: "Votre agent OpenClaw gère, planifie, répond. Vous faites autre chose.",
  },
];

const faqItems = [
  {
    q: "C'est quoi OpenClaw ?",
    a: "OpenClaw est une plateforme open source qui fait tourner des agents IA autonomes sur votre machine. Concrètement, c'est ce qui permet à un agent de lire vos emails, répondre à vos messages, gérer votre agenda ou surveiller des sites web, sans que vos données ne sortent de chez vous. Claws l'installe et le configure pour votre métier.",
  },
  {
    q: "En quoi c'est différent de ChatGPT ou Copilot ?",
    a: "ChatGPT répond quand vous lui parlez. Votre agent OpenClaw travaille même quand vous ne lui parlez pas. Il surveille, agit, relance et vous prévient quand c'est fait. C'est la différence entre un outil et un collaborateur. Et contrairement à ChatGPT, Copilot ou Gemini, tout reste sur votre machine, aucune donnée n'est envoyée sur un serveur cloud.",
  },
  {
    q: "Combien ça coûte vraiment ?",
    a: "L'installation OpenClaw démarre à 189€, une seule fois. Pas d'abonnement logiciel mensuel. Vous payez éventuellement votre clé API pour le modèle IA choisi (environ 10 à 30€/mois selon l'usage). ChatGPT Plus coûte 240€/an, Copilot Pro 264€/an, et recommencent chaque année. On fait un point avant de commencer pour qu'il n'y ait pas de surprise.",
  },
  {
    q: "Est-ce que mes données sont vraiment privées ?",
    a: "Oui, architecturalement. OpenClaw tourne en local sur votre machine, il n'y a pas de serveur Claws qui reçoit vos données. Le seul service externe qui voit vos requêtes, c'est le modèle IA que vous choisissez (Claude, GPT-4, ou un modèle local Llama/Mistral pour un usage 100% offline).",
  },
  {
    q: "Il faut quel matériel ?",
    a: "Un Mac Mini M4 est idéal : il consomme peu, ne fait aucun bruit et tient la charge en continu. Mais OpenClaw fonctionne aussi sur n'importe quel Mac ou serveur Linux. On vous guide sur le setup matériel lors de l'appel découverte.",
  },
  {
    q: "On peut connecter plusieurs applications en même temps ?",
    a: "Oui. Telegram, WhatsApp, iMessage, Discord peuvent tous être actifs simultanément sur le même agent OpenClaw. Pas besoin d'en choisir un.",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <NavBar />

      <main>

        {/* HERO */}
        <section className="section hero-section">
          <p className="eyebrow">Paris · 2026 · Spécialistes OpenClaw</p>
          <h1 className="hero-title">
            L&apos;agence française qui installe{" "}
            <span className="accent">OpenClaw</span>{" "}
            sur votre machine.
          </h1>
          <div className="hero-sub">
            <p>
              OpenClaw est l&apos;agent IA open source qui agit à votre place : emails, relances, reporting, veille. En local, sans cloud.
              Claws l&apos;installe, le sécurise et le configure pour votre métier en 48h.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Installer OpenClaw →</a>
            <a href="#secteurs" className="btn-secondary">Voir mon profil</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">189€</span>
              <span className="stat-label">installation, une seule fois</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">48h</span>
              <span className="stat-label">pour être opérationnel</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">0</span>
              <span className="stat-label">donnée dans le cloud</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">30j</span>
              <span className="stat-label">garantie satisfait ou refait</span>
            </div>
          </div>
        </section>

        {/* PROBLÈME */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">002 / Le problème</p>
            <h2 className="section-title">Ce que vos outils actuels ne font pas.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card problem-card-bad">
              <p className="problem-label">ChatGPT, Copilot, Gemini</p>
              <h3>Ils répondent.</h3>
              <p>Vous posez une question, ils répondent. Ensuite c&apos;est vous qui devez agir. Vos données partent sur leurs serveurs américains.</p>
              <ul className="problem-list">
                <li>Pas d&apos;accès à vos vrais outils</li>
                <li>Aucune autonomie réelle</li>
                <li>Pas de mémoire entre les sessions</li>
                <li>Vos données sur leur cloud</li>
                <li>240 à 264€/an d&apos;abonnement, pour toujours</li>
              </ul>
            </div>
            <div className="problem-card problem-card-good">
              <p className="problem-label">Votre agent OpenClaw via Claws</p>
              <h3>Il <em>agit</em>.</h3>
              <p>Il accède à vos outils, prend des décisions, exécute et vous rend compte. Sur votre machine. Pendant que vous faites autre chose.</p>
              <ul className="problem-list">
                <li>Connecté à vos vrais outils</li>
                <li>Autonome sur les tâches qu&apos;on lui confie</li>
                <li>Mémoire et contexte persistants</li>
                <li>100% local, zéro cloud obligatoire</li>
                <li>189€ une fois, 0€/mois de logiciel</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 24, textAlign: "right" }}>
            <a href="/comparatif" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none" }}>
              Comparatif complet OpenClaw vs ChatGPT, Copilot, Gemini →
            </a>
          </div>
        </section>

        {/* PAR SECTEUR */}
        <section id="secteurs" style={{ background: "#0E0E0E", padding: "80px 24px" }}>
          <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              003 / Votre métier
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-1px", margin: "0 0 12px", lineHeight: 1.1 }}>
              OpenClaw configuré pour votre secteur.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginBottom: 48, maxWidth: 520, lineHeight: 1.7 }}>
              Pas un template générique. Un agent configuré pour les tâches spécifiques à votre métier, vos outils et vos contraintes.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {sectors.map((s, i) => (
                <a
                  key={i}
                  href={`/solutions/${s.slug}`}
                  style={{
                    display: "block",
                    padding: "28px 28px 24px",
                    background: "#0E0E0E",
                    textDecoration: "none",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  className="sector-home-card"
                >
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 8px", lineHeight: 1.3 }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", margin: "0 0 16px", lineHeight: 1.5 }}>
                    {s.tag}
                  </p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.05em" }}>
                    Voir la page →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFÉRENCIATEURS */}
        <section className="section section-dark">
          <div className="section-header">
            <p className="section-tag light">004 / Pourquoi Claws</p>
            <h2 className="section-title light">Ce qui nous distingue vraiment.</h2>
          </div>
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <div key={i} className="diff-card">
                <span className="diff-icon">{d.icon}</span>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SÉCURITÉ */}
        <section className="section" style={{ background: "#0E0E0E" }}>
          <div className="section-header">
            <p className="section-tag light">005 / Sécurité</p>
            <h2 className="section-title light">Installé blindé. Garanti 90 jours.</h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
              OpenClaw est open source, n&apos;importe qui peut l&apos;installer. Le problème : une mauvaise configuration expose votre machine entière.
              Claws applique le Protocole Claws en 12 points sur chaque installation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, border: "1px solid rgba(255,255,255,0.07)", marginBottom: 40 }}>
            {[
              { icon: "01", title: "Gateway loopback uniquement", desc: "Jamais exposé sur le réseau." },
              { icon: "02", title: "Clés API en variables d'env", desc: "Jamais en clair dans les fichiers." },
              { icon: "03", title: "Zéro backdoor, zéro monitoring", desc: "La machine est 100% à vous après le setup." },
              { icon: "04", title: "Skills officiels uniquement", desc: "Aucun code tiers non audité." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", marginBottom: 12 }}>{item.icon}</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 6px" }}>{item.title}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="/securite" style={{ display: "inline-block", border: "1.5px solid rgba(232,93,4,0.6)", color: "#E85D04", padding: "12px 24px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            Voir le Protocole Claws complet →
          </a>
        </section>

        {/* OFFRES */}
        <section id="offres" className="section">
          <div className="section-header">
            <p className="section-tag">006 / Offres</p>
            <h2 className="section-title">Ce qu&apos;on fait pour vous.</h2>
          </div>
          <div className="offers-grid">
            {offers.map((o, i) => (
              <div key={i} className={`offer-card ${o.featured ? "offer-featured" : ""}`}>
                {o.featured && <span className="offer-badge">Populaire</span>}
                <p className="offer-code">{o.code}</p>
                <p className="offer-price">{o.price}</p>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-desc">{o.desc}</p>
                <a href="#contact" className={o.featured ? "btn-primary" : "btn-outline"}>{o.cta} →</a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">007 / Process</p>
            <h2 className="section-title">Comment ça se passe.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <p className="step-num">{s.num}</p>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">008 / Ressources</p>
            <h2 className="section-title">Ce qu&apos;on partage.</h2>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <p className="blog-category">{post.category}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.description}</p>
                <p className="blog-meta">{post.readTime} de lecture</p>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/blog" className="btn-outline">Voir tous les articles →</a>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">009 / Questions</p>
            <h2 className="section-title">Ce qu&apos;on nous demande souvent.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/faq" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none" }}>
              Voir toutes les questions →
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-contact">
          <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ marginBottom: 48 }}>
              <p className="section-tag light">Contact</p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-1.5px", lineHeight: 1.1, margin: "12px 0 16px" }}>
                Discutons.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 420, margin: 0 }}>
                Une question, un projet, une installation OpenClaw à prévoir. On répond dans la journée.
              </p>
            </div>
            <ContactTerminal />
            <p style={{ marginTop: 16, fontSize: "0.8rem", color: "rgba(255,255,255,0.2)" }}>
              Ou directement : <a href="mailto:contact@claws.fr" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}>contact@claws.fr</a>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
