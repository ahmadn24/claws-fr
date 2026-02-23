export type Sector = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDesc: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  painPoints: { title: string; desc: string }[];
  useCases: { emoji: string; title: string; desc: string; result: string }[];
  faq: { q: string; a: string }[];
  relatedPosts: { slug: string; title: string }[];
};

export const sectors: Record<string, Sector> = {
  avocats: {
    slug: "avocats",
    name: "Avocats & Cabinets juridiques",
    headline: "L'agent IA qui gère l'administratif pendant que vous plaidez.",
    subheadline: "Triage des emails clients, suivi des dossiers, relances de devis, comptes-rendus de RDV. Vos données restent dans votre cabinet. Jamais sur un cloud.",
    metaTitle: "Agent IA pour avocats et cabinets juridiques | Claws",
    metaDesc: "Automatisez l'administratif de votre cabinet juridique avec un agent IA OpenClaw installé en local. Triage emails, suivi dossiers, relances. RGPD natif. Claws, Paris.",
    stat1: { value: "8h", label: "gagnées par semaine en moyenne" },
    stat2: { value: "0", label: "donnée client sur un cloud tiers" },
    stat3: { value: "48h", label: "délai d'installation" },
    painPoints: [
      { title: "Boite mail ingérable", desc: "Entre les clients, les opposants, les greffes et les huissiers — votre boite reçoit 80+ emails par jour. Trier ça prend 1h le matin. Chaque matin." },
      { title: "Relances chronophages", desc: "Les devis non signés, les honoraires impayés, les clients silencieux. Relancer manuellement est épuisant et ça passe souvent à la trappe." },
      { title: "RGPD et confidentialité", desc: "Vos dossiers sont couverts par le secret professionnel. Vous ne pouvez pas confier vos emails clients à ChatGPT ou Notion AI. C'est un risque déontologique réel." },
      { title: "Comptes-rendus de RDV", desc: "Après chaque consultation, il faut résumer, noter les prochaines étapes, mettre à jour le dossier. 15 min de travail répétitif après chaque rendez-vous." },
    ],
    useCases: [
      {
        emoji: "📨",
        title: "Triage intelligent des emails",
        desc: "L'agent classe chaque email entrant par priorité et par dossier. Les demandes urgentes remontent immédiatement. Les newsletters disparaissent. Vous commencez la journée avec un résumé de 10 lignes.",
        result: "1h de lecture d'emails → 10 minutes.",
      },
      {
        emoji: "💸",
        title: "Relances honoraires automatiques",
        desc: "L'agent surveille vos factures impayées et envoie des relances graduelles — douce à J+15, ferme à J+30 — dans le ton que vous avez choisi. Il s'arrête dès réception du paiement.",
        result: "Taux de recouvrement à 30 jours amélioré de 40%.",
      },
      {
        emoji: "📋",
        title: "Comptes-rendus de consultation",
        desc: "Après chaque RDV, dictez 2 minutes à voix haute sur votre téléphone. L'agent transforme ça en compte-rendu structuré, mis en forme, prêt à être versé au dossier.",
        result: "15 min de saisie → 2 min de dictée.",
      },
      {
        emoji: "📅",
        title: "Suivi des délais procéduraux",
        desc: "L'agent surveille vos calendriers de procédure et vous alerte 7, 3 et 1 jour avant chaque échéance. Plus aucune date qui passe entre les mailles.",
        result: "Zéro oubli de délai procédural.",
      },
      {
        emoji: "🔍",
        title: "Veille jurisprudentielle",
        desc: "L'agent surveille chaque semaine les nouvelles décisions dans vos domaines de pratique (droit des affaires, droit du travail, etc.) et vous envoie un résumé le lundi matin.",
        result: "Veille jurisprudentielle sans abonnement à prix d'or.",
      },
    ],
    faq: [
      { q: "Le secret professionnel est-il respecté ?", a: "Oui. L'agent tourne sur votre machine, dans votre cabinet. Aucune donnée client ne transite par un serveur externe. Le seul appel réseau est vers le modèle de langage (Anthropic Claude), qui ne conserve pas les données selon sa politique de confidentialité. Pour les dossiers ultra-sensibles, un modèle local peut être utilisé." },
      { q: "L'agent peut-il accéder à mes logiciels métier (Secib, Jarvis) ?", a: "Partiellement. OpenClaw peut lire des exports de ces logiciels et interagir via leurs APIs quand elles existent. Claws étudie les possibilités d'intégration au cas par cas lors de l'installation." },
      { q: "Combien de temps pour que l'agent soit opérationnel ?", a: "48 heures ouvrées après la commande. Claws installe et configure tout à distance, sans que vous ayez à intervenir techniquement." },
      { q: "Un agent peut-il rédiger des conclusions ou des actes ?", a: "Il peut générer des premiers jets à partir de vos notes ou de templates que vous avez validés. La relecture et la signature restent de votre responsabilité. C'est un outil d'aide à la rédaction, pas un substitut à votre expertise juridique." },
    ],
    relatedPosts: [
      { slug: "agent-ia-gestion-emails-professionnels", title: "Agent IA pour gérer vos emails professionnels" },
      { slug: "openclaw-rgpd-donnees-locales", title: "OpenClaw et RGPD : vos données restent chez vous" },
    ],
  },

  medecins: {
    slug: "medecins",
    name: "Médecins & Professionnels de santé",
    headline: "Moins d'administratif. Plus de temps pour vos patients.",
    subheadline: "Gestion des demandes de RDV, comptes-rendus de consultation, relances patients, veille médicale. En local, sans aucune donnée de santé sur un cloud.",
    metaTitle: "Agent IA pour médecins et professionnels de santé | Claws",
    metaDesc: "Automatisez l'administratif médical avec un agent IA OpenClaw en local. Gestion RDV, comptes-rendus, relances patients. Données de santé 100% locales. Claws, Paris.",
    stat1: { value: "30%", label: "du temps médical = tâches administratives" },
    stat2: { value: "0", label: "donnée patient sur un serveur externe" },
    stat3: { value: "48h", label: "pour être opérationnel" },
    painPoints: [
      { title: "Surcharge administrative", desc: "Ordonnances, comptes-rendus, certificats, courriers aux spécialistes. L'administratif représente jusqu'à 30% du temps d'un médecin généraliste. Du temps pris sur les patients." },
      { title: "Données de santé sensibles", desc: "Les données de santé sont parmi les plus protégées par le RGPD. Utiliser des outils cloud américains pour traiter des informations patients est un risque juridique et éthique majeur." },
      { title: "Gestion du secrétariat", desc: "Sans secrétaire ou avec un secrétariat débordé, les demandes de RDV s'accumulent, les relances sont oubliées, les messages ne sont pas triés par urgence." },
      { title: "Veille médicale chronophage", desc: "Les recommandations HAS, les nouvelles études, les mises à jour de protocoles — rester à jour prend du temps que vous n'avez pas." },
    ],
    useCases: [
      {
        emoji: "📋",
        title: "Comptes-rendus de consultation",
        desc: "Dictez vos observations après chaque consultation. L'agent structure en compte-rendu médical formaté, avec les antécédents, les prescriptions et les prochaines étapes.",
        result: "20 min de saisie → 3 min de dictée.",
      },
      {
        emoji: "📅",
        title: "Gestion des demandes de RDV",
        desc: "L'agent lit les demandes de RDV par email ou message, les classe par urgence et propose des créneaux disponibles. Les confirmations et rappels sont envoyés automatiquement.",
        result: "Réduction des no-shows de 35%.",
      },
      {
        emoji: "🔄",
        title: "Relances patients et suivis",
        desc: "Pour les patients chroniques, l'agent envoie des rappels de contrôle, de renouvellement d'ordonnance ou de vaccination selon les protocoles que vous définissez.",
        result: "Meilleure observance, moins d'oublis de suivi.",
      },
      {
        emoji: "📨",
        title: "Triage et réponses aux courriers",
        desc: "L'agent trie les emails et messages entrants, identifie les urgences, prépare des réponses types pour les demandes fréquentes et vous soumet les cas qui nécessitent votre attention.",
        result: "1h de courriers → 15 minutes de validation.",
      },
      {
        emoji: "📰",
        title: "Veille médicale hebdomadaire",
        desc: "Chaque lundi, l'agent vous envoie un résumé des nouvelles recommandations HAS, des études dans vos domaines et des alertes de pharmacovigilance pertinentes.",
        result: "Restez à jour sans y passer vos soirées.",
      },
    ],
    faq: [
      { q: "Les données patients sont-elles sécurisées ?", a: "Oui. L'agent tourne sur votre propre machine, dans votre cabinet. Aucune donnée de santé ne transite par un cloud externe. C'est architecturalement conforme aux exigences RGPD pour les données de santé." },
      { q: "OpenClaw est-il compatible avec les logiciels médicaux (Doctolib, Maiia, Medistory) ?", a: "OpenClaw peut s'interfacer avec les APIs de ces outils quand elles existent. Claws étudie les possibilités d'intégration lors de l'installation selon votre stack." },
      { q: "Un agent peut-il faire des prescriptions ou des diagnostics ?", a: "Non, et ce n'est pas son rôle. L'agent est un outil administratif et d'aide à la documentation. Le diagnostic et la prescription restent exclusivement de votre responsabilité médicale." },
      { q: "L'installation nécessite-t-elle une interruption d'activité ?", a: "Non. L'installation se fait à distance, sans interruption de votre activité. Claws configure tout en arrière-plan en moins de 48 heures." },
    ],
    relatedPosts: [
      { slug: "agent-ia-gestion-emails-professionnels", title: "Agent IA pour gérer vos emails" },
      { slug: "openclaw-rgpd-donnees-locales", title: "OpenClaw et RGPD : vos données restent chez vous" },
    ],
  },

  btp: {
    slug: "btp",
    name: "BTP & Artisans",
    headline: "L'agent IA qui gère vos devis, relances et chantiers.",
    subheadline: "Devis envoyés automatiquement, relances clients, suivi des chantiers, réponses aux appels d'offres. Vous posez les carreaux, l'agent gère le reste.",
    metaTitle: "Agent IA pour BTP et artisans | Automatisation devis et chantiers | Claws",
    metaDesc: "Agent IA OpenClaw pour les artisans et entreprises du BTP. Automatisation des devis, relances clients, suivi chantiers, appels d'offres. Installation locale. Claws.",
    stat1: { value: "5h", label: "perdues par semaine en administratif" },
    stat2: { value: "60%", label: "des devis jamais relancés" },
    stat3: { value: "48h", label: "pour être opérationnel" },
    painPoints: [
      { title: "Les devis prennent trop de temps", desc: "Répondre à chaque demande de devis prend 30 à 45 minutes. Multiplié par 10 demandes par semaine dont la moitié ne donnent rien — c'est un gouffre de temps." },
      { title: "Les relances partent à la trappe", desc: "Un devis envoyé sans réponse. On se dit qu'on va rappeler. On oublie. Le chantier part chez un concurrent. Ça arrive à tout le monde, tout le temps." },
      { title: "Suivi des chantiers en cours", desc: "Plusieurs chantiers en parallèle, des sous-traitants, des livraisons à coordonner. Garder tout en tête est épuisant et les erreurs coûtent cher." },
      { title: "Les appels d'offres passés", desc: "Les appels d'offres publics et privés passent souvent inaperçus. Faire une veille manuelle prend du temps et reste incomplet." },
    ],
    useCases: [
      {
        emoji: "📝",
        title: "Devis automatisés",
        desc: "L'agent reçoit une demande de devis par email ou formulaire, extrait les informations clés (surface, type de travaux, localisation) et génère un devis pré-rempli à partir de vos templates. Vous validez en 5 minutes.",
        result: "45 min de devis → 5 min de validation.",
      },
      {
        emoji: "📞",
        title: "Relances clients systématiques",
        desc: "Chaque devis envoyé est suivi automatiquement. J+3 : relance douce. J+7 : relance avec disponibilité. J+14 : dernière tentative. L'agent s'arrête dès que le client répond.",
        result: "Taux de signature amélioré de 25%.",
      },
      {
        emoji: "🏗️",
        title: "Suivi des chantiers",
        desc: "L'agent tient un tableau de bord de vos chantiers en cours : avancement, prochaines étapes, matériaux à commander, sous-traitants à contacter. Un briefing chaque matin sur votre téléphone.",
        result: "Fini les oublis qui font perdre des journées.",
      },
      {
        emoji: "🔍",
        title: "Veille appels d'offres",
        desc: "L'agent surveille les plateformes d'appels d'offres (BOAMP, marchés locaux) dans votre secteur géographique et votre domaine, et vous alerte dès qu'une opportunité correspond à votre profil.",
        result: "Ne ratez plus aucun marché dans votre zone.",
      },
      {
        emoji: "📱",
        title: "Communication chantier",
        desc: "L'agent peut envoyer des mises à jour automatiques aux clients sur l'avancement de leur chantier : début des travaux, étapes clés, fin prévue. Moins d'appels entrants, plus de satisfaction client.",
        result: "Réduction de 50% des appels 'où en êtes-vous'.",
      },
    ],
    faq: [
      { q: "Je ne suis pas à l'aise avec la technologie, est-ce pour moi ?", a: "Oui. Claws installe et configure tout. Une fois en place, vous interagissez avec l'agent via WhatsApp ou Telegram, comme vous envoyez un message. Pas de logiciel à apprendre, pas d'interface compliquée." },
      { q: "L'agent peut-il s'intégrer à mon logiciel de devis (Batappli, Quotit, Obat) ?", a: "Partiellement selon les outils. Claws étudie les possibilités d'intégration lors de l'installation. Dans tous les cas, l'agent peut travailler avec des templates Word ou Excel que vous utilisez déjà." },
      { q: "Est-ce que ça marche pour un artisan solo ?", a: "C'est même là où le ROI est le plus fort. Un artisan seul porte tout l'administratif sans aide. Un agent IA qui gère les devis et les relances libère plusieurs heures par semaine immédiatement." },
      { q: "L'agent peut-il gérer les appels téléphoniques ?", a: "Pas directement. Il gère les emails, messages et formulaires. Pour les appels téléphoniques, des solutions complémentaires existent que Claws peut vous recommander." },
    ],
    relatedPosts: [
      { slug: "agent-ia-gestion-emails-professionnels", title: "Agent IA pour gérer vos emails" },
      { slug: "openclaw-pour-artisans-tpe", title: "OpenClaw pour les artisans : guide pratique" },
    ],
  },

  agences: {
    slug: "agences",
    name: "Agences & Consultants",
    headline: "L'agent IA qui travaille la nuit pendant que vous dormez.",
    subheadline: "Veille concurrentielle, reporting clients, prospection, comptes-rendus de réunion. Vos clients ne savent pas que vous avez une équipe de robots. Tant mieux.",
    metaTitle: "Agent IA pour agences et consultants | Automatisation | Claws",
    metaDesc: "Agent IA OpenClaw pour les agences et consultants indépendants. Veille, reporting, prospection, comptes-rendus automatiques. Installation locale. Claws, Paris.",
    stat1: { value: "12h", label: "de reporting par mois par client" },
    stat2: { value: "3x", label: "plus de clients suivis avec le même temps" },
    stat3: { value: "48h", label: "pour être opérationnel" },
    painPoints: [
      { title: "Le reporting prend trop de temps", desc: "Compiler les stats, rédiger les analyses, formatter les slides. Chaque client = plusieurs heures par mois. Pur temps non facturable, non différenciant." },
      { title: "La veille est impossible à tenir", desc: "Surveiller les concurrents de vos clients, les tendances du marché, les mentions de leur marque — c'est un travail à plein temps que vous n'avez pas." },
      { title: "La prospection tombe toujours", desc: "Quand les missions s'accumulent, la prospection s'arrête. Quand les missions se terminent, il faut repartir de zéro. Ce cycle boom-bust est épuisant." },
      { title: "Comptes-rendus interminables", desc: "Après chaque réunion client, il faut rédiger le compte-rendu, l'envoyer, s'assurer que tout le monde est aligné. 30 minutes qui s'allongent toujours." },
    ],
    useCases: [
      {
        emoji: "📊",
        title: "Reporting clients automatisé",
        desc: "L'agent collecte les données de vos outils (Analytics, Meta Ads, LinkedIn, etc.) et génère un rapport mensuel formaté selon vos templates. Vous relisez et envoyez.",
        result: "12h de reporting → 1h de relecture.",
      },
      {
        emoji: "👁️",
        title: "Veille concurrentielle en temps réel",
        desc: "L'agent surveille les sites des concurrents de vos clients, leurs réseaux sociaux, leurs annonces de recrutement, leurs avis. Chaque semaine, un résumé des mouvements importants.",
        result: "Conseil proactif sans effort de veille.",
      },
      {
        emoji: "🎯",
        title: "Prospection en continu",
        desc: "L'agent surveille les signaux d'affaires (nouvelles levées de fonds, recrutements marketing, changements de direction) et identifie les prospects chauds à contacter. Il prépare l'email de prise de contact personnalisé.",
        result: "Pipeline alimenté même en période de forte activité.",
      },
      {
        emoji: "📋",
        title: "Comptes-rendus de réunion",
        desc: "Envoyez l'enregistrement ou vos notes de la réunion. L'agent produit un compte-rendu structuré avec les décisions prises, les actions et les responsables.",
        result: "CR envoyé dans l'heure qui suit la réunion.",
      },
      {
        emoji: "✍️",
        title: "Premiers jets de livrables",
        desc: "Brief stratégique, analyse de marché, recommandations — l'agent produit un premier jet à partir de votre brief et des données disponibles. Vous affinez, vous signez.",
        result: "Démarrez chaque livrable à 60%, pas à 0%.",
      },
    ],
    faq: [
      { q: "Mes clients peuvent-ils savoir que j'utilise un agent IA ?", a: "Non, si vous ne le dites pas. L'agent produit des livrables que vous relisez et envoyez depuis votre propre adresse. Il est transparent pour vos clients." },
      { q: "L'agent peut-il poster sur les réseaux sociaux de mes clients ?", a: "Oui, avec vos autorisations. L'agent peut programmer et publier des contenus sur LinkedIn, Instagram, etc. selon un calendrier éditorial que vous validez." },
      { q: "Est-ce que ça fonctionne pour un consultant solo ?", a: "C'est le profil idéal. Un consultant solo qui automatise le reporting et la veille peut doubler son nombre de clients sans recruter. Le ROI est immédiat." },
      { q: "L'agent peut-il travailler avec Google Docs, Notion ou Airtable ?", a: "Oui. OpenClaw s'intègre avec ces outils. L'agent peut lire, écrire et mettre à jour vos documents de travail directement." },
    ],
    relatedPosts: [
      { slug: "agent-ia-veille-strategique-entreprise", title: "Agent IA pour la veille stratégique" },
      { slug: "agent-ia-gestion-emails-professionnels", title: "Agent IA pour gérer vos emails" },
    ],
  },

  retail: {
    slug: "retail",
    name: "Commerce & Retail",
    headline: "L'agent IA qui ne dort jamais pour que vous puissiez dormir.",
    subheadline: "Service client automatisé, suivi des stocks, veille concurrentielle sur les prix, relances paniers abandonnés. Votre commerce tourne même quand vous êtes fermé.",
    metaTitle: "Agent IA pour le commerce et le retail | Claws",
    metaDesc: "Agent IA OpenClaw pour les commerçants et retailers. Service client automatisé, suivi stocks, veille prix concurrents, relances paniers abandonnés. Claws, Paris.",
    stat1: { value: "40%", label: "des questions clients = FAQ répétitives" },
    stat2: { value: "70%", label: "des paniers abandonnés jamais relancés" },
    stat3: { value: "48h", label: "pour être opérationnel" },
    painPoints: [
      { title: "Service client débordant", desc: "Heures d'ouverture, disponibilité produit, délais de livraison, retours. Les mêmes questions reviennent en boucle et prennent un temps disproportionné." },
      { title: "Paniers abandonnés perdus", desc: "70% des paniers abandonnés ne sont jamais relancés. Chaque relance non envoyée est du chiffre d'affaires laissé sur la table." },
      { title: "Veille prix impossible", desc: "Surveiller les prix de vos concurrents en ligne est un travail quotidien. Impossible à faire manuellement sur des centaines de références." },
      { title: "Gestion des avis clients", desc: "Répondre aux avis Google, aux messages Instagram, aux emails de réclamation — ça prend 1 à 2 heures par jour pour un commerce actif." },
    ],
    useCases: [
      {
        emoji: "💬",
        title: "Service client 24/7",
        desc: "L'agent répond aux questions fréquentes (horaires, disponibilité, livraison, retours) sur WhatsApp, email ou Instagram DM, à toute heure. Les cas complexes sont transférés à un humain.",
        result: "40% des questions clients traitées sans intervention humaine.",
      },
      {
        emoji: "🛒",
        title: "Relances paniers abandonnés",
        desc: "L'agent surveille votre e-commerce et envoie une relance personnalisée 1h, 24h et 72h après un abandon de panier. Ton humain, message ciblé, pas un template générique.",
        result: "Récupération de 15 à 25% des paniers abandonnés.",
      },
      {
        emoji: "💰",
        title: "Veille prix concurrents",
        desc: "L'agent surveille les prix de vos concurrents sur leurs sites et sur Amazon chaque jour. Il vous alerte quand un concurrent baisse ses prix significativement.",
        result: "Restez compétitif sans y passer votre dimanche.",
      },
      {
        emoji: "⭐",
        title: "Gestion des avis et réputation",
        desc: "L'agent surveille vos avis Google, Trustpilot et réseaux sociaux. Il prépare des réponses personnalisées (positives et négatives) que vous validez en un clic.",
        result: "Réponse à tous les avis, sans y passer 2h par jour.",
      },
      {
        emoji: "📦",
        title: "Alertes rupture de stock",
        desc: "L'agent surveille vos niveaux de stock en temps réel et vous alerte avant la rupture. Il peut même déclencher automatiquement une commande fournisseur selon vos règles.",
        result: "Zéro rupture de stock non anticipée.",
      },
    ],
    faq: [
      { q: "L'agent peut-il s'intégrer à Shopify, WooCommerce, PrestaShop ?", a: "Oui. OpenClaw dispose de connecteurs pour les principales plateformes e-commerce. L'agent peut lire les commandes, les stocks et les clients directement depuis votre plateforme." },
      { q: "Le service client automatique ne va-t-il pas frustrer mes clients ?", a: "Bien configuré, non. L'agent répond aux questions simples en quelques secondes (mieux qu'un humain qui répond en 24h). Pour les questions complexes, il transfère à un humain clairement identifié. La plupart des clients préfèrent une réponse rapide à une attente longue." },
      { q: "Peut-on l'utiliser pour un commerce physique sans e-commerce ?", a: "Oui. L'agent peut gérer les messages Instagram, WhatsApp Business et les emails — même sans site de vente en ligne. Très utile pour les restaurateurs, fleuristes, coiffeurs, etc." },
      { q: "Comment l'agent connaît-il mes produits ?", a: "Vous lui fournissez votre catalogue (export CSV, Google Sheet ou lien vers votre site). Il apprend vos produits, vos prix et vos règles de retour lors de la configuration." },
    ],
    relatedPosts: [
      { slug: "agent-ia-service-client-pme", title: "Agent IA pour le service client PME" },
      { slug: "automatiser-relances-commerciales-agent-ia", title: "Automatiser les relances commerciales" },
    ],
  },
};

export const sectorSlugs = Object.keys(sectors);
