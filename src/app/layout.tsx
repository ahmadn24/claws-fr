import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://claws.fr"),
  title: {
    default: "Claws | Installation OpenClaw en France · Agents IA locaux",
    template: "%s | Claws",
  },
  description:
    "Claws installe et configure OpenClaw sur votre machine en 48h. Première agence française spécialisée OpenClaw. 100% local, zéro cloud, RGPD natif. À partir de 189€. Paris.",
  keywords: [
    "installation OpenClaw",
    "OpenClaw France",
    "agent IA autonome",
    "agence agent IA Paris",
    "OpenClaw installation locale",
    "automatisation IA entreprise",
    "agent IA RGPD",
  ],
  openGraph: {
    title: "Claws | Installation OpenClaw en France · Agents IA locaux",
    description:
      "Installation OpenClaw en 48h à partir de 189€. Première agence française spécialisée. 100% local, RGPD natif, garantie 30 jours.",
    url: "https://claws.fr",
    siteName: "Claws",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claws : Installation OpenClaw en France, agents IA locaux à partir de 189€",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claws | Installation OpenClaw en France",
    description: "Première agence française spécialisée OpenClaw. Installation locale en 48h à partir de 189€. Zéro cloud, RGPD natif.",
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
  // 1. Organization + LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://claws.fr/#organization",
    name: "Claws",
    alternateName: "Claws Agence IA",
    url: "https://claws.fr",
    logo: { "@type": "ImageObject", url: "https://claws.fr/icon.png", width: 512, height: 512 },
    image: "https://claws.fr/og-image.png",
    description: "Claws est la première agence française spécialisée dans l'installation, la configuration et la maintenance d'agents IA autonomes OpenClaw. Fondée à Paris en 2026, Claws déploie des agents OpenClaw en local sur la machine du client en 48 heures, sans aucun transfert de données vers un cloud tiers.",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
      postalCode: "75001",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.8566, longitude: 2.3522 },
    areaServed: { "@type": "Country", name: "France" },
    priceRange: "€€",
    email: "contact@claws.fr",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@claws.fr",
      contactType: "customer service",
      availableLanguage: "French",
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
    },
    knowsAbout: ["OpenClaw","agents IA autonomes","automatisation par IA","LLM","Anthropic Claude","Mac Mini IA","RGPD IA","installation locale IA"],
    sameAs: [
      "https://github.com/Claws-fr",
      "https://clawsfr.substack.com",
      "https://dev.to/clawsfr",
      "https://www.linkedin.com/in/julie-d-712868181",
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
          description: "Installation et configuration complète d'un agent OpenClaw sur votre machine. Opérationnel en 48h avec garantie 30 jours.",
          url: "https://claws.fr/#offres",
        },
        {
          "@type": "Offer",
          name: "Agent OpenClaw sur mesure",
          description: "Configuration personnalisée d'un agent OpenClaw pour votre secteur d'activité et vos outils spécifiques.",
          url: "https://claws.fr/#offres",
        },
        {
          "@type": "Offer",
          name: "Retainer maintenance OpenClaw",
          price: "149",
          priceCurrency: "EUR",
          description: "Maintenance mensuelle, mises à jour OpenClaw, évolutions et support prioritaire.",
          url: "https://claws.fr/#offres",
          eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
      ],
    },
  },

  // 2. WebSite avec SearchAction
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://claws.fr/#website",
    name: "Claws",
    url: "https://claws.fr",
    description: "Première agence française spécialisée dans l'installation d'OpenClaw",
    inLanguage: "fr-FR",
    publisher: { "@id": "https://claws.fr/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://claws.fr/blog?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. FAQPage avec réponses longues et factuelles pour GEO
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce qu'OpenClaw ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OpenClaw est une plateforme open source (licence MIT) qui permet de déployer des agents IA autonomes directement sur la machine locale de l'utilisateur. Contrairement à ChatGPT, Copilot ou Gemini, OpenClaw ne transmet aucune donnée à des serveurs cloud tiers : tout le traitement se fait en local. L'agent peut accéder aux emails, à l'agenda, aux fichiers, envoyer des messages via Telegram ou WhatsApp, surveiller des sites web et enchaîner des tâches complexes de façon autonome. OpenClaw est compatible avec plusieurs modèles IA : Claude (Anthropic), GPT-4 (OpenAI), Llama et Mistral en local via Ollama. Claws est la première agence française spécialisée dans l'installation et la configuration professionnelle d'OpenClaw.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte l'installation d'OpenClaw par Claws ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'installation professionnelle d'OpenClaw par Claws commence à partir de 189€ pour une configuration complète sur votre machine existante. Ce tarif inclut l'installation sécurisée selon le Protocole Claws 12 points, la configuration des canaux de communication (Telegram, WhatsApp), la connexion à vos outils (email, agenda, CRM) et une garantie de 30 jours satisfait ou refait. L'agent est opérationnel en 48h. Des formules de maintenance mensuelle sont disponibles à partir de 149€/mois. En comparaison, ChatGPT Plus coûte 240€/an sans offrir d'autonomie réelle ni de confidentialité des données.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre un agent IA autonome et ChatGPT ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT est un chatbot : il répond à vos questions quand vous lui parlez, mais il n'agit pas de façon autonome. Un agent IA autonome comme OpenClaw est un programme qui surveille, décide et agit sans que vous interveniez à chaque étape. Par exemple, OpenClaw peut lire vos emails entrants, identifier ceux qui nécessitent une relance, rédiger la réponse dans votre style et l'envoyer, puis noter l'action dans votre CRM, tout ça pendant que vous travaillez sur autre chose. De plus, OpenClaw fonctionne en local : vos données ne quittent jamais votre machine, contrairement à ChatGPT, Copilot ou Gemini qui envoient vos requêtes sur des serveurs américains.",
        },
      },
      {
        "@type": "Question",
        name: "OpenClaw est-il conforme au RGPD ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OpenClaw en installation locale est architecturalement conforme au principe de minimisation des données du RGPD (Règlement UE 2016/679). Toutes les données traitées par l'agent restent sur la machine de l'utilisateur : aucune donnée personnelle, email, document ou conversation ne transite vers des serveurs tiers. Il n'y a pas de sous-traitant cloud dans la chaîne de traitement. Pour les secteurs réglementés (santé, juridique, finance), c'est souvent la seule architecture acceptable. Claws peut fournir un document technique décrivant les flux de données pour les DPO des entreprises clientes.",
        },
      },
      {
        "@type": "Question",
        name: "Sur quelle machine installer OpenClaw ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le Mac Mini M4 est la machine recommandée par Claws pour une installation OpenClaw professionnelle : il consomme entre 10 et 20W en fonctionnement continu, ne fait aucun bruit, dispose de suffisamment de RAM (16 ou 24 Go) pour faire tourner un agent en tâche de fond et supporte des modèles IA locaux via Ollama. OpenClaw fonctionne également sur tout Mac récent sous macOS, sur Linux (Ubuntu, Debian) et sur serveurs VPS. Windows est supporté de façon expérimentale. Claws recommande toujours une machine dédiée qui tourne en permanence pour que l'agent soit disponible 24h/24.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KCWLKDD8";

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        {/* Google Ads global site tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17974041887" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17974041887');gtag('config','G-G2PESWMJW5');`,
          }}
        />
        {/* Google Tag Manager */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
