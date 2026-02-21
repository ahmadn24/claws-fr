import { getAllPosts } from "@/lib/posts";

const differentiators = [
  {
    icon: "01",
    title: "Seule agence 100 % OpenClaw en France",
    desc: "On ne fait que ça. Pas des généralistes IA reconvertis. On connaît OpenClaw de l'intérieur — on l'utilise, on le débugge, on suit ses mises à jour semaine après semaine.",
  },
  {
    icon: "02",
    title: "Vos données ne bougent pas. Jamais.",
    desc: "Pas de cloud, pas de serveur tiers, pas d'API qui renvoie vos emails quelque part. Votre agent tourne sur votre machine. C'est votre infrastructure, point.",
  },
  {
    icon: "03",
    title: "Un seul interlocuteur de A à Z",
    desc: "Installation, configuration, maintenance, évolution — la même personne suit votre dossier. Pas de passage de relai, pas de 'votre technicien habituel est absent'.",
  },
  {
    icon: "04",
    title: "Prompts propriétaires testés en production",
    desc: "Nos agents ne tournent pas sur la config par défaut. On a développé des séquences de prompts optimisées sur des dizaines de déploiements réels. Vos agents sont plus fiables que la moyenne.",
  },
  {
    icon: "05",
    title: "On s'engage sur les résultats",
    desc: "Si l'agent ne fonctionne pas comme prévu dans les 30 jours, on revient gratuitement jusqu'à ce que ça marche. Pas de clause en petits caractères.",
  },
  {
    icon: "06",
    title: "Multi-canal natif dès le départ",
    desc: "Telegram, WhatsApp, iMessage — connectés simultanément dès l'installation. Un seul agent, accessible depuis tous vos canaux. Pas besoin de choisir.",
  },
];

const offers = [
  {
    code: "SETUP",
    price: "À partir de 189 €",
    title: "Installation OpenClaw",
    desc: "Installation et configuration d'OpenClaw sur votre machine. Canal Telegram ou WhatsApp connecté. Opérationnel en 48h.",
    cta: "Démarrer",
  },
  {
    code: "AGENT SUR MESURE",
    price: "Sur devis",
    title: "Agent pensé pour votre workflow",
    desc: "Analyse de vos processus, configuration d'un agent entièrement personnalisé, intégrations avec vos outils, formation équipe.",
    cta: "Nous contacter",
    featured: true,
  },
  {
    code: "RETAINER",
    price: "À partir de 149 €/mois",
    title: "Maintenance et évolutions",
    desc: "Maintenance, mises à jour, support direct. Un interlocuteur — pas un ticket. Votre agent évolue avec votre activité.",
    cta: "En savoir plus",
  },
];

const steps = [
  { num: "01", title: "On écoute.", desc: "Appel de 30 min pour comprendre votre activité, vos outils, vos points de friction." },
  { num: "02", title: "On installe.", desc: "Configuration complète sur votre machine. Sécurisé, local, aucune donnée dans le cloud." },
  { num: "03", title: "Votre agent travaille.", desc: "Pendant que vous dormez, votre agent gère, planifie, répond. Vous vous concentrez sur l'essentiel." },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* NAV */}
      <nav className="nav-bar">
        <span className="nav-logo">Claws</span>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section className="section hero-section">
          <p className="eyebrow">Paris · 2025 · Première agence française d&apos;agents IA autonomes</p>
          <h1 className="hero-title">
            87 % des tâches répétitives de votre équipe{" "}
            <span className="accent">sont automatisables.</span>
          </h1>
          <div className="hero-sub">
            <p>Claws déploie des agents IA qui travaillent à votre place — 24h/24, sans supervision.</p>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Discutons →</a>
            <a href="#offres" className="btn-secondary">Voir les offres</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">+200%</span>
              <span className="stat-label">de productivité mesurée</span>
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
              <p>Vous posez une question. Ils donnent une réponse. Vous devez ensuite agir vous-même.</p>
              <ul className="problem-list">
                <li>❌ Pas d&apos;accès à vos outils</li>
                <li>❌ Pas d&apos;autonomie</li>
                <li>❌ Pas de mémoire de votre contexte</li>
                <li>❌ Vos données dans le cloud</li>
              </ul>
            </div>
            <div className="problem-card problem-card-good">
              <p className="problem-label">Votre agent Claws</p>
              <h3>Il <em>agit</em>.</h3>
              <p>Il accède à vos outils, prend des décisions, exécute des tâches et vous rend compte.</p>
              <ul className="problem-list">
                <li>✓ Connecté à vos outils réels</li>
                <li>✓ Autonomie complète sur les tâches déléguées</li>
                <li>✓ Mémoire et contexte persistants</li>
                <li>✓ 100 % local, vos données chez vous</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIFFÉRENCIATEURS */}
        <section className="section section-dark">
          <div className="section-header">
            <p className="section-tag light">003 / Pourquoi Claws</p>
            <h2 className="section-title light">Ce qui nous distingue.</h2>
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

        {/* OFFRES */}
        <section id="offres" className="section">
          <div className="section-header">
            <p className="section-tag">004 / Offres</p>
            <h2 className="section-title">Ce qu&apos;on fait pour vous.</h2>
          </div>
          <div className="offers-grid">
            {offers.map((o, i) => (
              <div key={i} className={`offer-card ${o.featured ? "offer-featured" : ""}`}>
                {o.featured && <span className="offer-badge">Populaire</span>}
                <p className="offer-code">— {o.code}</p>
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
            <p className="section-tag">005 / Process</p>
            <h2 className="section-title">Trois étapes. Pas plus.</h2>
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
            <p className="section-tag">006 / Ressources</p>
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

        {/* FAQ — GEO/SEO */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">FAQ</p>
            <h2 className="section-title">Questions fréquentes.</h2>
          </div>
          <div className="faq-list">
            {[
              { q: "Qu'est-ce qu'OpenClaw ?", a: "OpenClaw est une plateforme open-source qui permet de déployer des agents IA autonomes directement sur votre machine locale. Vos données ne transitent par aucun serveur cloud tiers — conformité RGPD garantie." },
              { q: "Quelle est la différence entre un agent IA et ChatGPT ?", a: "ChatGPT répond à vos questions. Un agent IA autonome agit : il accède à vos outils (email, agenda, fichiers), exécute des tâches, prend des décisions et vous rend compte — sans supervision constante de votre part." },
              { q: "Combien coûte l'installation d'OpenClaw ?", a: "L'installation par Claws démarre à partir de 189€ pour une configuration complète sur votre machine existante, canal Telegram ou WhatsApp inclus, opérationnel en 48h." },
              { q: "Mes données sont-elles sécurisées ?", a: "Oui. OpenClaw fonctionne entièrement en local sur votre machine. Claws applique les meilleures pratiques : chiffrement disque, firewall, permissions strictes, zéro backdoor." },
              { q: "Sur quelle machine installer OpenClaw ?", a: "Le Mac Mini M4 est recommandé : silencieux, économe (10-20W), suffisamment puissant pour des agents IA en continu. Fonctionne aussi sur tout Mac ou serveur Linux." },
              { q: "Peut-on connecter plusieurs canaux (Telegram, WhatsApp) ?", a: "Oui. OpenClaw supporte Telegram, WhatsApp, Discord, Signal, iMessage et d'autres. Plusieurs canaux peuvent être actifs simultanément." },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-contact">
          <div className="contact-inner">
            <p className="section-tag light">007 / Contact</p>
            <h2 className="contact-title">Discutons.</h2>
            <a href="mailto:contact@claws.fr" className="contact-email">contact@claws.fr</a>
            <p className="contact-note">Réponse sous 24h. Particuliers et entreprises.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-copy">© 2025 Claws — Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
