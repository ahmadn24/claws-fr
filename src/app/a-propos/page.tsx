import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Claws",
  description:
    "Claws est la première agence française spécialisée dans les agents IA autonomes OpenClaw. Basée à Paris, nous aidons les PME et entreprises à automatiser leurs opérations avec des agents IA 100% locaux.",
  keywords: ["agence OpenClaw Paris", "qui sommes-nous Claws", "agence agent IA France", "installation OpenClaw expert"],
  alternates: { canonical: "https://claws.fr/a-propos" },
  openGraph: {
    title: "À propos de Claws",
    description: "Première agence française spécialisée en agents IA autonomes OpenClaw.",
    url: "https://claws.fr/a-propos",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://claws.fr/#organization",
  name: "Claws",
  description: "Première agence française spécialisée dans l'installation, la configuration et la maintenance d'agents IA autonomes OpenClaw.",
  url: "https://claws.fr",
  email: "contact@claws.fr",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  serviceType: [
    "Installation OpenClaw",
    "Configuration agents IA autonomes",
    "Maintenance OpenClaw",
    "Automatisation entreprise par agents IA",
  ],
  knowsAbout: [
    "OpenClaw",
    "Agents IA autonomes",
    "Anthropic Claude",
    "Automatisation par IA",
    "Mac Mini serveur IA",
    "RGPD et IA locale",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Claws",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Installation OpenClaw",
        price: "189",
        priceCurrency: "EUR",
        priceSpecification: { "@type": "PriceSpecification", minPrice: "189", priceCurrency: "EUR" },
      },
      {
        "@type": "Offer",
        name: "Retainer maintenance OpenClaw",
        price: "149",
        priceCurrency: "EUR",
        eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

      <main style={{ paddingTop: "100px", maxWidth: "800px", margin: "0 auto", padding: "100px 24px 80px" }}>

        <p className="section-tag" style={{ marginBottom: "16px" }}>À propos</p>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#0E0E0E",
          marginBottom: "48px",
        }}>
          Ce qu&apos;on fait et pourquoi on le fait.
        </h1>

        <div className="article-body">
          <p>
            Claws est une agence basée à Paris, spécialisée dans le déploiement d&apos;agents IA autonomes sur <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>.
            On a créé Claws parce qu&apos;on voyait deux problèmes coexister : des entreprises qui perdent des heures sur des tâches répétitives, et une technologie capable de les automatiser que personne ne sait installer correctement.
          </p>

          <h2>Ce qu&apos;on fait</h2>
          <p>
            On installe OpenClaw sur votre machine, on configure votre agent pour votre métier exact, et on le maintient dans le temps.
            Votre agent accède à vos outils, répond à vos messages, gère votre agenda, produit des rapports. Il tourne 24h/24 sur votre propre infrastructure.
            Aucune donnée ne sort de chez vous.
          </p>

          <h2>Pourquoi OpenClaw</h2>
          <p>
            OpenClaw est la seule plateforme d&apos;agents IA autonomes qui fonctionne entièrement en local.
            Là où d&apos;autres solutions envoient vos données sur des serveurs américains, OpenClaw tourne sur votre machine. C&apos;est la seule option sérieuse pour les entreprises qui tiennent à leur confidentialité et à leur conformité RGPD.
          </p>
          <p>
            On a choisi de se spécialiser sur OpenClaw parce que c&apos;est la meilleure technologie disponible pour ce cas d&apos;usage. On ne fait pas de compromis sur ça.
          </p>

          <h2>Notre approche</h2>
          <p>
            On ne livre pas des installations génériques. Avant de configurer quoi que ce soit, on passe du temps à comprendre comment vous travaillez, quels outils vous utilisez, et où vous perdez le plus de temps. L&apos;agent qu&apos;on livre correspond à votre réalité, pas à un template.
          </p>
          <p>
            On s&apos;engage sur 30 jours. Si l&apos;agent ne fait pas ce qu&apos;il doit faire, on revient gratuitement jusqu&apos;à ce que ça marche.
          </p>

          <h2>Où on intervient</h2>
          <p>
            On est basés à Paris et on intervient partout en France à distance. Pour les installations en présentiel, on se déplace en Île-de-France.
          </p>

          <h2>Contact</h2>
          <p>
            <a href="mailto:contact@claws.fr">contact@claws.fr</a>. On répond dans la journée.
          </p>
        </div>

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(14,14,14,0.1)" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
            Nos ressources
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><a href="/blog/installer-openclaw-mac-mini-2025" className="nav-cta">→ Guide d&apos;installation OpenClaw sur Mac Mini</a></li>
            <li><a href="/blog/maintenance-openclaw-agents-ia-stables" className="nav-cta">→ Maintenance OpenClaw : bonnes pratiques</a></li>
            <li><a href="/blog/agence-automatisation-agents-ia-france" className="nav-cta">→ Pourquoi un agent IA autonome en 2025</a></li>
          </ul>
        </div>
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
