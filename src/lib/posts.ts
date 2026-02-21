export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  keywords: string[];
};

export const posts: Post[] = [
  {
    slug: "installer-openclaw-mac-mini-2025",
    title: "Installer OpenClaw sur Mac Mini : guide complet 2025",
    description:
      "Tout ce que vous devez savoir pour installer et configurer OpenClaw sur un Mac Mini en 2025. Configuration sécurisée, canal Telegram ou WhatsApp, bonnes pratiques.",
    date: "2025-02-15",
    category: "Installation",
    readTime: "8 min",
    keywords: ["installation OpenClaw", "OpenClaw Mac Mini", "configurer OpenClaw", "OpenClaw France"],
    content: `
## Qu'est-ce qu'OpenClaw et pourquoi l'installer sur Mac Mini ?

[OpenClaw](https://openclaw.ai) est la plateforme open-source de référence pour déployer des agents IA autonomes directement sur votre machine locale. Contrairement aux solutions cloud comme ChatGPT ou Gemini, vos données ne quittent jamais votre infrastructure — un avantage décisif pour les entreprises soucieuses de confidentialité et de conformité RGPD.

**Pourquoi le Mac Mini ?** C'est la machine idéale pour OpenClaw : silencieux, économe en énergie (10 à 20W seulement), et suffisamment puissant pour faire tourner des agents IA Claude en continu. Un Mac Mini M4 à 800€ est suffisant pour gérer plusieurs agents en parallèle — là où un serveur GPU GPU équivalent coûterait 5 000€ ou plus.

En résumé : Mac Mini + OpenClaw = agent IA autonome, disponible 24h/24, pour un coût d'infrastructure minimal.

## Prérequis avant l'installation

Avant de commencer l'installation d'OpenClaw, assurez-vous de disposer de :

- **Mac Mini M4** (ou M2 Pro/M3) avec macOS Ventura ou supérieur
- **Node.js 20+** installé (via Homebrew : \`brew install node\`)
- **Un compte Anthropic** avec une clé API active (claude.ai/settings)
- **15 à 30 minutes** de disponibilité

Si vous n'avez pas encore de clé API Anthropic, créez un compte sur [console.anthropic.com](https://console.anthropic.com). Les premiers tokens sont offerts, puis la facturation est à l'usage (environ 3€ pour 1 million de tokens avec Claude Sonnet).

## Guide d'installation OpenClaw étape par étape

### Étape 1 : Installer OpenClaw via npm

Ouvrez le Terminal et exécutez :

\`\`\`bash
npm install -g openclaw
\`\`\`

Vérifiez l'installation :

\`\`\`bash
openclaw --version
\`\`\`

### Étape 2 : Lancer le wizard de configuration

\`\`\`bash
openclaw configure
\`\`\`

Le wizard interactif vous guidera pour configurer :
- Votre clé API Anthropic
- Le modèle IA (Claude Sonnet 4 recommandé pour l'équilibre performance/coût)
- Le dossier de travail de l'agent (workspace)

### Étape 3 : Configurer un canal Telegram

Telegram est le canal le plus simple à configurer pour communiquer avec votre agent. Voici comment :

1. Ouvrez Telegram et cherchez **@BotFather**
2. Envoyez \`/newbot\`
3. Donnez un nom et un username à votre bot (ex: MonAgentIA_bot)
4. Copiez le **token** fourni par BotFather

Puis dans le Terminal :

\`\`\`bash
openclaw channels add --channel telegram --token VOTRE_TOKEN_ICI
\`\`\`

Pour activer le canal et autoriser votre compte Telegram :

\`\`\`bash
openclaw gateway restart
\`\`\`

Envoyez \`/start\` à votre bot — il vous donnera un code de pairing à approuver :

\`\`\`bash
openclaw pairing approve telegram VOTRE_CODE
\`\`\`

### Étape 4 : Démarrer le gateway en service permanent

Le gateway est le serveur central d'OpenClaw. Pour qu'il démarre automatiquement au boot du Mac Mini :

\`\`\`bash
openclaw gateway install
openclaw gateway start
\`\`\`

Pour vérifier que tout fonctionne :

\`\`\`bash
openclaw gateway status
openclaw channels status
\`\`\`

### Étape 5 : Garder le Mac Mini actif même capot fermé

Par défaut, macOS peut mettre le système en veille. Pour éviter cela :

- **Réglages Système → Batterie → Empêcher la mise en veille automatique** : activez cette option
- Ou via Terminal : \`sudo pmset -a disablesleep 1\`

Alternative recommandée : l'application **Amphetamine** (gratuite sur l'App Store) offre un contrôle précis de la mise en veille.

## Sécuriser l'installation OpenClaw

La sécurité est critique pour un système qui accède à vos données et canaux de communication.

### Chiffrement disque
Activez FileVault dans **Réglages Système → Confidentialité et sécurité → FileVault**. Cela chiffre l'intégralité du disque avec votre mot de passe.

### Firewall macOS
Activez le pare-feu dans **Réglages Système → Réseau → Coupe-feu**. OpenClaw n'a besoin que d'accéder à internet en sortie (pour l'API Anthropic et Telegram).

### Vérifier les ports exposés
Le gateway OpenClaw doit écouter uniquement en local :

\`\`\`bash
lsof -i :18789
# Résultat attendu : localhost:18789, pas 0.0.0.0:18789
\`\`\`

### Stocker les clés API en sécurité
Ne stockez jamais vos clés API dans des fichiers versionnés (git). OpenClaw stocke les clés dans \`~/.openclaw/openclaw.json\` — vérifiez que ce fichier n'est pas accessible publiquement.

## Questions fréquentes sur l'installation OpenClaw

**Q : OpenClaw est-il compatible avec Windows ou Linux ?**
A : OpenClaw fonctionne sur macOS (recommandé), Linux et Windows via WSL2. Le Mac Mini reste la plateforme recommandée pour sa simplicité de gestion et sa fiabilité.

**Q : Quelle est la différence entre OpenClaw et d'autres solutions d'agents IA ?**
A : OpenClaw est 100% local — vos données ne quittent jamais votre machine. Les alternatives cloud (AutoGPT, AgentGPT, etc.) envoient vos données sur des serveurs tiers, ce qui pose des problèmes de confidentialité et de conformité RGPD.

**Q : Combien coûte l'utilisation d'OpenClaw au quotidien ?**
A : Le coût principal est l'API Anthropic. Pour un usage professionnel modéré (quelques centaines d'interactions par jour), comptez entre 20 et 80€/mois en tokens API. OpenClaw lui-même est gratuit et open-source.

**Q : Peut-on connecter plusieurs canaux simultanément ?**
A : Oui. OpenClaw supporte Telegram, WhatsApp, Discord, Signal, iMessage et d'autres. Vous pouvez activer plusieurs canaux en parallèle.

## Erreurs courantes et solutions

**"Gateway token missing"** → Lancez \`openclaw dashboard\` pour récupérer le token d'accès et configurez-le dans le client.

**"Telegram channel not responding"** → Vérifiez le mode confidentialité du bot via @BotFather → /mybots → Bot Settings → Group Privacy → Turn off. Retirez et réajoutez le bot dans vos groupes.

**"Agent ne répond pas"** → Vérifiez avec \`openclaw gateway status\` et \`openclaw doctor\`. Assurez-vous que votre clé API Anthropic est valide et a du crédit.

**"No groups found"** → Par défaut, OpenClaw bloque les messages de groupe. Configurez avec : \`openclaw config set channels.telegram.groupPolicy open\`

## Conclusion

L'installation d'OpenClaw sur Mac Mini est accessible en moins de 30 minutes en suivant ce guide. Vous disposez ensuite d'un agent IA autonome, sécurisé, disponible 24h/24, pour un coût d'infrastructure minimal.

Une fois installé, pensez à mettre en place une routine de [maintenance OpenClaw](/blog/maintenance-openclaw-agents-ia-stables) pour garder votre agent fiable sur le long terme.

Vous préférez déléguer l'installation et la configuration à des experts ? **Claws intervient en remote en 48h** — configuration complète, sécurisation, et formation incluse à partir de 189€. [Contactez-nous.](/#contact)
`,
  },
  {
    slug: "maintenance-openclaw-agents-ia-stables",
    title: "Maintenance OpenClaw : guide pour des agents IA fiables en production",
    description:
      "Comment maintenir vos agents IA OpenClaw en production ? Mises à jour, monitoring, rotation des clés API, sauvegardes — les bonnes pratiques pour une disponibilité maximale.",
    date: "2025-02-20",
    category: "Maintenance",
    readTime: "6 min",
    keywords: ["maintenance OpenClaw", "OpenClaw production", "agent IA fiable", "monitoring OpenClaw"],
    content: `
## La maintenance, l'étape oubliée de l'IA d'entreprise

Beaucoup d'équipes [installent OpenClaw](/blog/installer-openclaw-mac-mini-2025), configurent leurs agents, puis oublient la machine pendant des mois. C'est une erreur. Comme tout système de production, vos agents IA ont besoin d'une maintenance régulière pour rester performants, sécurisés et à jour.

Ce guide couvre les 5 axes de la maintenance OpenClaw en production.

## 1. Mises à jour régulières

OpenClaw publie des mises à jour fréquentes — nouvelles fonctionnalités, correctifs de sécurité, support de nouveaux modèles IA. Pour vérifier votre version :

\`\`\`bash
openclaw --version
npm list -g openclaw
\`\`\`

Pour mettre à jour :

\`\`\`bash
npm update -g openclaw
openclaw gateway restart
\`\`\`

**Fréquence recommandée** : vérifiez les mises à jour toutes les 2 semaines. Les mises à jour de sécurité doivent être appliquées dans les 48h.

## 2. Rotation des clés API

Vos clés API (Anthropic, Telegram, etc.) doivent être renouvelées régulièrement. En cas de doute sur une compromission, changez-les immédiatement.

Pour mettre à jour une clé Anthropic :

\`\`\`bash
openclaw config set providers.anthropic.apiKey NOUVELLE_CLE
openclaw gateway restart
\`\`\`

**Fréquence recommandée** : tous les 90 jours, ou immédiatement après un départ d'équipe.

## 3. Monitoring et alertes

OpenClaw expose des logs détaillés que vous pouvez surveiller :

\`\`\`bash
# Suivre les logs en temps réel
openclaw logs

# Vérifier le statut complet
openclaw doctor
\`\`\`

Points à surveiller :
- **Taux d'erreur** : plus de 5% d'erreurs sur les réponses indique un problème
- **Latence** : une réponse > 30 secondes est anormale
- **Quota API** : surveillez votre consommation Anthropic pour éviter les interruptions

## 4. Sauvegardes de la configuration

Votre configuration OpenClaw se trouve dans \`~/.openclaw/\`. Sauvegardez ce répertoire régulièrement :

\`\`\`bash
# Sauvegarde manuelle
tar -czf openclaw-backup-$(date +%Y%m%d).tar.gz ~/.openclaw/

# Ou via Time Machine (déjà inclus sur macOS)
\`\`\`

**Ce qu'il ne faut PAS sauvegarder en clair** : les clés API. Utilisez un gestionnaire de secrets (1Password, Bitwarden) pour les stocker séparément.

## 5. Audit de sécurité

\`\`\`bash
openclaw security audit --deep
\`\`\`

Cette commande vérifie :
- Les ports exposés (seul localhost:18789 doit être ouvert)
- Les permissions des fichiers de configuration
- Les skills installés et leur statut de sécurité

## Déléguer la maintenance

La maintenance d'un système IA de production demande du temps et de l'expertise. Si vous préférez vous concentrer sur votre cœur de métier, notre formule **Retainer à partir de 149€/mois** couvre l'ensemble de ces opérations — mises à jour, monitoring, rotation des clés, support direct.

Si vous venez d'installer OpenClaw et cherchez à aller plus loin, consultez aussi notre guide sur [l'automatisation par agents IA](/blog/agence-automatisation-agents-ia-france).

[Découvrir le Retainer Claws](/#contact)
`,
  },
  {
    slug: "agence-automatisation-agents-ia-france",
    title: "Agence d'automatisation par agents IA : comment ça marche, et pourquoi maintenant",
    description:
      "Les agents IA autonomes changent radicalement la façon de travailler. Voici ce que fait une agence d'automatisation IA, comment elle peut transformer votre entreprise, et pourquoi 2025 est le bon moment.",
    date: "2025-02-25",
    category: "Stratégie",
    readTime: "10 min",
    keywords: ["agence automatisation IA", "agent IA autonome entreprise", "automatisation PME", "IA agentic"],
    content: `
## Un agent IA n'est pas un chatbot

La confusion est fréquente. Quand on parle d'IA en entreprise, beaucoup pensent à ChatGPT — un outil auquel on pose des questions et qui répond. C'est utile. Mais ce n'est pas un agent.

Un **agent IA autonome** est fondamentalement différent. Il ne répond pas à des questions — il exécute des tâches. Il consulte votre boîte mail, triage les messages, répond aux demandes standards, planifie des rendez-vous dans votre agenda, génère des rapports et vous notifie des points d'attention. Le tout sans que vous ayez ouvert un seul outil.

C'est la différence entre un moteur de recherche et un assistant personnel.

## Ce qu'une agence d'automatisation IA fait concrètement

Une agence spécialisée en agents IA comme Claws intervient sur plusieurs niveaux :

### 1. Audit et identification des opportunités

Avant d'automatiser quoi que ce soit, il faut comprendre où votre équipe passe du temps. Les tâches les plus automatisables sont généralement :
- Le traitement des emails entrants (tri, réponses standards, escalade)
- La gestion des agendas et planification de réunions
- La production de rapports récurrents
- Le suivi client (relances, mises à jour de statut)
- La veille concurrentielle et sectorielle

### 2. Configuration et déploiement

L'agent IA est ensuite configuré selon votre contexte spécifique : votre secteur, votre jargon, vos processus, vos outils. Un agent configuré pour une agence de communication ne ressemble pas à un agent configuré pour un cabinet d'expertise comptable.

[OpenClaw](https://openclaw.ai) permet cette personnalisation profonde, avec un déploiement 100% local — vos données ne transitent jamais par des serveurs tiers. Pour comprendre comment fonctionne l'installation technique, consultez notre [guide d'installation OpenClaw sur Mac Mini](/blog/installer-openclaw-mac-mini-2025).

### 3. Formation et onboarding

Un agent IA n'est utile que si votre équipe sait comment interagir avec lui. Nous formons vos équipes à déléguer intelligemment — quoi confier à l'agent, comment vérifier son travail, comment l'affiner.

### 4. Maintenance continue

Un agent de production doit être maintenu : mises à jour du moteur IA, adaptation aux changements de process, monitoring des performances. C'est ce que couvre notre formule Retainer.

## Pourquoi 2025 est le bon moment

Trois facteurs convergent en 2025 :

**Les modèles sont suffisamment capables.** Claude 3.5 Sonnet et les modèles de génération actuelle atteignent un niveau de fiabilité suffisant pour déléguer des tâches à enjeux modérés en autonomie.

**Le coût d'infrastructure est minimal.** Un Mac Mini M4 (800€) fait tourner un agent complet. Il y a deux ans, il fallait un serveur GPU à 5 000€+.

**La compétition s'accélère.** Vos concurrents commencent à automatiser. Les entreprises qui adoptent maintenant prendront une avance difficile à rattraper dans 18-24 mois.

## Les secteurs les plus concernés

Certains secteurs bénéficient immédiatement et massivement de l'automatisation par agents IA :

- **Agences et cabinets** : gestion clients, reporting, suivi de projets
- **E-commerce** : service client, suivi commandes, gestion fournisseurs
- **Professions libérales** : prise de rendez-vous, suivi dossiers, facturation
- **Startups tech** : support utilisateurs, onboarding, veille concurrentielle

## Ce qu'on ne remplace pas

Un agent IA autonome excelle dans les tâches répétitives, structurées et à fort volume. Il ne remplace pas le jugement humain dans les situations complexes, la créativité, la relation client à haute valeur ajoutée, ou les décisions stratégiques.

L'objectif n'est pas de supprimer des postes — c'est de libérer du temps pour ce qui compte vraiment.

---

Pour aller plus loin sur la partie technique, lisez notre guide sur la [maintenance d'agents OpenClaw en production](/blog/maintenance-openclaw-agents-ia-stables).

Vous souhaitez évaluer le potentiel d'automatisation dans votre entreprise ? [Discutons.](/#contact)
`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
