import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://claws.fr"),
  title: {
    default: "Claws — Agence d'agents IA autonomes en France",
    template: "%s | Claws",
  },
  description:
    "Claws installe, configure et maintient vos agents IA autonomes sur OpenClaw. Première agence française spécialisée en automatisation par agents IA, pour PME et entreprises.",
  keywords: [
    "installation OpenClaw",
    "maintenance OpenClaw",
    "agent IA autonome",
    "agence automatisation IA",
    "agence agent IA France",
    "OpenClaw France",
    "automatisation entreprise IA",
  ],
  openGraph: {
    title: "Claws — Agence d'agents IA autonomes en France",
    description:
      "Nous installons, configurons et maintenons vos agents IA autonomes. Première agence française spécialisée OpenClaw.",
    url: "https://claws.fr",
    siteName: "Claws",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claws — Agence d'agents IA autonomes en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claws — Agents IA autonomes",
    description: "Première agence française spécialisée en agents IA autonomes OpenClaw.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://claws.fr" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo-claws.png",
    apple: "/logo-claws.png",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Claws",
    url: "https://claws.fr",
    description: "Agence française spécialisée en installation, configuration et maintenance d'agents IA autonomes OpenClaw.",
    address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    contactPoint: { "@type": "ContactPoint", email: "contact@claws.fr", contactType: "customer service", availableLanguage: "French" },
    foundingDate: "2025",
    areaServed: { "@type": "Country", name: "France" },
    knowsAbout: ["OpenClaw", "agents IA autonomes", "automatisation par IA", "LLM", "Anthropic Claude", "Mac Mini IA", "RGPD IA"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Claws",
      itemListElement: [
        { "@type": "Offer", name: "Installation OpenClaw", price: "189", priceCurrency: "EUR", description: "À partir de 189€ selon la configuration" },
        { "@type": "Offer", name: "Agent sur mesure", description: "Configuration personnalisée d'agent IA autonome" },
        { "@type": "Offer", name: "Retainer maintenance", price: "149", description: "À partir de 149€/mois selon la configuration", priceCurrency: "EUR", eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce qu'OpenClaw ?",
        acceptedAnswer: { "@type": "Answer", text: "OpenClaw est une plateforme open-source qui permet de déployer des agents IA autonomes directement sur votre machine locale. Vos données ne transitent par aucun serveur cloud tiers, ce qui garantit confidentialité et conformité RGPD." },
      },
      {
        "@type": "Question",
        name: "Combien coûte l'installation d'OpenClaw ?",
        acceptedAnswer: { "@type": "Answer", text: "L'installation OpenClaw par Claws commence à partir de 189€ pour une configuration complète sur votre machine existante, avec un canal Telegram ou WhatsApp connecté et opérationnel en 48h." },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre un agent IA et ChatGPT ?",
        acceptedAnswer: { "@type": "Answer", text: "ChatGPT répond à vos questions. Un agent IA autonome agit : il accède à vos outils (email, agenda, fichiers), exécute des tâches, prend des décisions et vous rend compte, sans supervision constante." },
      },
      {
        "@type": "Question",
        name: "Mes données sont-elles sécurisées avec OpenClaw ?",
        acceptedAnswer: { "@type": "Answer", text: "Oui. OpenClaw fonctionne entièrement en local sur votre machine. Vos données ne transitent par aucun serveur tiers. Claws applique les meilleures pratiques de sécurité : chiffrement disque, firewall, permissions strictes." },
      },
      {
        "@type": "Question",
        name: "Sur quelle machine installer OpenClaw ?",
        acceptedAnswer: { "@type": "Answer", text: "Le Mac Mini M4 est la machine recommandée pour OpenClaw : silencieux, économe en énergie (10-20W), suffisamment puissant pour faire tourner des agents IA en continu. Il fonctionne aussi sur n'importe quel Mac ou serveur Linux." },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
