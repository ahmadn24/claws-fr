import NavBar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatif 2026 : OpenClaw vs ChatGPT, Copilot, Gemini | Claws",
  description: "Comparatif complet et honnête entre OpenClaw et les assistants IA du marché. Tableau détaillé, coût réel sur 3 ans, head-to-head par outil, quand ne pas choisir OpenClaw. Claws, Paris.",
  alternates: { canonical: "https://claws.fr/comparatif" },
  openGraph: {
    title: "OpenClaw vs ChatGPT, Copilot, Gemini : le comparatif complet 2026",
    description: "Tableau détaillé, coût réel sur 3 ans, head-to-head par outil. Le comparatif honnête que personne ne fait.",
    url: "https://claws.fr/comparatif",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

const tableRows = [
  {
    critere: "Architecture",
    claws: { v: "Local sur votre machine", win: true },
    chatgpt: { v: "Cloud OpenAI (USA)", win: false },
    copilot: { v: "Cloud Microsoft (USA)", win: false },
    gemini: { v: "Cloud Google (USA)", win: false },
    siri: { v: "Cloud Apple (partiel)", win: null },
  },
  {
    critere: "Données privées",
    claws: { v: "Restent sur votre disque", win: true },
    chatgpt: { v: "Envoyées aux serveurs OpenAI", win: false },
    copilot: { v: "Envoyées à Microsoft", win: false },
    gemini: { v: "Envoyées à Google", win: false },
    siri: { v: "Partiellement locales", win: null },
  },
  {
    critere: "Autonomie",
    claws: { v: "Agent — agit sans supervision", win: true },
    chatgpt: { v: "Chatbot — répond seulement", win: false },
    copilot: { v: "Assistant — actions Office limitées", win: null },
    gemini: { v: "Assistant — actions Google limitées", win: null },
    siri: { v: "Assistant vocal basique", win: false },
  },
  {
    critere: "Envoie des emails seul",
    claws: { v: "Oui", win: true },
    chatgpt: { v: "Non", win: false },
    copilot: { v: "Oui (Outlook uniquement)", win: null },
    gemini: { v: "Oui (Gmail uniquement)", win: null },
    siri: { v: "Non", win: false },
  },
  {
    critere: "Gère votre agenda",
    claws: { v: "Oui (tous calendriers)", win: true },
    chatgpt: { v: "Non", win: false },
    copilot: { v: "Oui (Outlook uniquement)", win: null },
    gemini: { v: "Oui (Google Calendar uniquement)", win: null },
    siri: { v: "Oui (Apple uniquement)", win: null },
  },
  {
    critere: "Modèle IA modifiable",
    claws: { v: "Oui (Claude, GPT-4, Llama…)", win: true },
    chatgpt: { v: "Non — OpenAI uniquement", win: false },
    copilot: { v: "Non — Microsoft/OpenAI uniquement", win: false },
    gemini: { v: "Non — Google uniquement", win: false },
    siri: { v: "Non — Apple uniquement", win: false },
  },
  {
    critere: "Personnalisation",
    claws: { v: "Totale (skills, persona, voix)", win: true },
    chatgpt: { v: "GPTs partiels", win: null },
    copilot: { v: "Limitée à M365", win: false },
    gemini: { v: "Limitée à Google Workspace", win: false },
    siri: { v: "Quasi nulle", win: false },
  },
  {
    critere: "Open source",
    claws: { v: "100% — code auditable", win: true },
    chatgpt: { v: "Non", win: false },
    copilot: { v: "Non", win: false },
    gemini: { v: "Non", win: false },
    siri: { v: "Non", win: false },
  },
  {
    critere: "Fonctionne hors ligne",
    claws: { v: "Oui (modèles locaux Ollama)", win: true },
    chatgpt: { v: "Non", win: false },
    copilot: { v: "Non", win: false },
    gemini: { v: "Non", win: false },
    siri: { v: "Basique uniquement", win: null },
  },
  {
    critere: "Prix logiciel/mois",
    claws: { v: "0€", win: true },
    chatgpt: { v: "20-25€/mois", win: false },
    copilot: { v: "22€/mois", win: false },
    gemini: { v: "22€/mois", win: false },
    siri: { v: "0€ (Apple requis)", win: null },
  },
  {
    critere: "Coût total sur 3 ans",
    claws: { v: "~549€ (install + API)", win: true },
    chatgpt: { v: "~720€ et vous ne possédez rien", win: false },
    copilot: { v: "~792€ + abonnement M365", win: false },
    gemini: { v: "~792€ + abonnement Google", win: false },
    siri: { v: "Inclus Apple (mais limité)", win: null },
  },
  {
    critere: "Support en français",
    claws: { v: "Oui — équipe Claws, Paris", win: true },
    chatgpt: { v: "Non — support USA uniquement", win: false },
    copilot: { v: "Partiel", win: null },
    gemini: { v: "Partiel", win: null },
    siri: { v: "Oui", win: null },
  },
];

const headToHead = [
  {
    id: "chatgpt",
    vs: "ChatGPT Plus / Team",
    verdict: "OpenClaw gagne sur l'autonomie et la vie privée. ChatGPT gagne sur la facilité d'accès immédiate.",
    openclaw_wins: [
      "Agit sans supervision — lit vos emails, répond, relance, planifie",
      "Vos données restent sur votre machine. Zéro transit cloud.",
      "Pas d'abonnement mensuel. Vous payez l'installation une fois.",
      "Changez de modèle quand vous voulez — vous n'êtes pas captif d'OpenAI",
    ],
    chatgpt_wins: [
      "Aucune installation — accessible en 2 minutes sur chatgpt.com",
      "Interface conversationnelle excellente pour la rédaction",
      "GPTs disponibles pour des cas d'usage précis",
    ],
    bottom_line: "Si vous avez besoin d'un outil de rédaction ponctuel, ChatGPT suffit. Si vous voulez un collaborateur qui travaille à votre place — emails, relances, reporting — OpenClaw n'a pas d'équivalent.",
  },
  {
    id: "copilot",
    vs: "Microsoft Copilot Pro",
    verdict: "OpenClaw gagne si vous sortez de l'écosystème Microsoft. Copilot gagne si vous êtes 100% Microsoft 365.",
    openclaw_wins: [
      "Fonctionne avec tous vos outils — pas seulement Outlook et Teams",
      "Données locales — vos fichiers ne passent pas par les serveurs Microsoft",
      "Automatisations cross-outils (email + CRM + agenda + SMS en une séquence)",
      "Modèle IA au choix — pas forcément OpenAI via Microsoft",
    ],
    chatgpt_wins: [
      "Intégration native dans Word, Excel, PowerPoint, Teams, Outlook",
      "Déploiement enterprise géré par IT sans configuration",
      "Génération de code dans GitHub Copilot inclus",
    ],
    bottom_line: "Copilot est excellent si toute votre entreprise est sur Microsoft 365. Dès que vous utilisez d'autres outils, OpenClaw est plus polyvalent — et vos données n'entrent pas dans le modèle de Microsoft.",
  },
  {
    id: "gemini",
    vs: "Google Gemini Advanced",
    verdict: "OpenClaw gagne hors Google Workspace. Gemini gagne si vous êtes 100% Google.",
    openclaw_wins: [
      "Vos emails Gmail et documents Drive ne sont pas réentraînés par Google",
      "Fonctionne indépendamment de votre suite bureautique",
      "Automatisations hors écosystème Google (Notion, Slack, domotique…)",
      "Aucun vendor lock-in — changez de modèle sans changer d'agent",
    ],
    chatgpt_wins: [
      "Intégration native avec Gmail, Google Docs, Google Drive, Google Meet",
      "Multimodal natif — images, audio, vidéo dans les mêmes workflows",
      "Recherche web Google en temps réel intégrée",
    ],
    bottom_line: "Gemini Advanced est puissant dans Google Workspace. Mais Google devient alors l'opérateur de toutes vos données professionnelles — emails, documents, calendrier. OpenClaw garde cela chez vous.",
  },
];

const coutAnnee = [
  { tool: "OpenClaw via Claws", an1: "189€ + ~120€ API = 309€", an2: "~120€ API = 120€", an3: "~120€ API = 120€", total: "549€", note: "Vous possédez votre config" },
  { tool: "ChatGPT Plus", an1: "240€", an2: "240€", an3: "240€", total: "720€", note: "Rien ne vous appartient" },
  { tool: "Copilot Pro", an1: "264€", an2: "264€", an3: "264€", total: "792€", note: "Rien ne vous appartient" },
  { tool: "Gemini Advanced", an1: "264€", an2: "264€", an3: "264€", total: "792€", note: "Rien ne vous appartient" },
];

const quandNonOpenClaw = [
  {
    cas: "Vous avez besoin d'un outil dès aujourd'hui, sans installation",
    conseil: "ChatGPT ou Gemini. Créez un compte en 2 minutes. Pour un besoin ponctuel de rédaction ou de recherche, c'est suffisant.",
  },
  {
    cas: "Vous êtes 100% dans l'écosystème Microsoft 365 (grandes entreprises)",
    conseil: "Copilot Pro ou Microsoft 365 Copilot. L'intégration native dans Word, Outlook et Teams est difficile à battre dans ce contexte.",
  },
  {
    cas: "Vous n'avez pas de machine qui tourne en permanence",
    conseil: "OpenClaw nécessite un ordinateur allumé pour fonctionner de façon autonome (agent en tâche de fond). Un Mac mini ou un NUC à 200€ règle le problème, mais c'est un coût supplémentaire.",
  },
  {
    cas: "Vous cherchez uniquement un outil de génération d'images ou de vidéo",
    conseil: "Midjourney, DALL-E, Sora. OpenClaw est un agent d'automatisation professionnelle — pas un outil créatif multimédia.",
  },
];

const verdictProfils = [
  { profil: "Avocat, médecin, notaire", outil: "OpenClaw", raison: "Secret professionnel. Données sensibles. Aucune alternative locale au même niveau." },
  { profil: "Entrepreneur solo / fondateur", outil: "OpenClaw", raison: "L'agent qui gère l'opérationnel pendant que vous construisez." },
  { profil: "Freelance", outil: "OpenClaw", raison: "Prospection continue, relances, facturation — sans recruter." },
  { profil: "DAF / Directeur financier", outil: "OpenClaw", raison: "Données financières trop sensibles pour le cloud. Reporting automatisé en local." },
  { profil: "Utilisateur Microsoft 365 en entreprise", outil: "Copilot Pro", raison: "Intégration native Word/Excel/Teams difficile à battre dans ce contexte." },
  { profil: "Usage ponctuel de rédaction", outil: "ChatGPT", raison: "Accessible en 2 minutes, excellent pour la rédaction assistée." },
  { profil: "Développeur / Tech", outil: "OpenClaw", raison: "Open source, customisable, modèle IA au choix, intégrations SSH et API." },
];

const faq = [
  {
    q: "OpenClaw est-il vraiment plus sûr que ChatGPT pour la vie privée ?",
    a: "Oui, architecturalement. ChatGPT envoie vos requêtes — et donc votre contenu — sur les serveurs d'OpenAI aux États-Unis. OpenClaw tourne sur votre machine : vos emails, documents et conversations ne quittent jamais votre disque dur. Ce n'est pas une question de confiance envers OpenAI — c'est une question d'architecture. Une donnée locale ne peut pas fuiter, même en cas de faille chez un prestataire cloud."
  },
  {
    q: "Quelle est concrètement la différence entre un chatbot et un agent ?",
    a: "Un chatbot attend que vous lui parliez et répond. Un agent agit de façon proactive, sans intervention humaine à chaque étape. Exemple concret : vous dites à ChatGPT 'rédige un email de relance' — il le rédige, vous copiez-collez et envoyez. OpenClaw surveille votre CRM, détecte un prospect silencieux depuis 14 jours, rédige l'email dans votre style, l'envoie depuis votre adresse et note dans le CRM que la relance a été effectuée. Vous ne faites rien."
  },
  {
    q: "OpenClaw vs ChatGPT : lequel choisir pour mon entreprise ?",
    a: "Cela dépend de votre usage. Si vous avez besoin d'un outil de rédaction, de recherche ou de brainstorming accessible immédiatement, ChatGPT suffit. Si vous avez des données sensibles (juridique, médical, financier), besoin d'automatisations autonomes (relances, reporting, veille), ou si vous refusez que vos données professionnelles partent sur un cloud américain, OpenClaw est le meilleur choix. La règle simple : chatbot pour répondre à des questions, agent pour faire des choses."
  },
  {
    q: "Peut-on changer le modèle IA d'OpenClaw ?",
    a: "Oui, et c'est l'un des avantages structurels d'OpenClaw. Il fonctionne avec Claude (Anthropic), GPT-4 (OpenAI via API), Llama 3, Mistral en local, et d'autres encore. Si Anthropic augmente ses tarifs, si un nouveau modèle sort, si vous avez besoin d'un modèle spécialisé pour votre secteur — vous changez en quelques minutes sans reconfigurer votre agent. Aucun des concurrents de ce comparatif n'offre cette flexibilité."
  },
  {
    q: "Combien coûte vraiment OpenClaw comparé à ChatGPT sur 3 ans ?",
    a: "OpenClaw via Claws : 189€ d'installation (une seule fois) + environ 10 à 30€/mois d'API selon votre usage, soit ~549€ sur 3 ans — et vous possédez votre configuration, vos automatisations, vos données. ChatGPT Plus : 20€/mois = 720€ sur 3 ans, sans rien posséder. Copilot Pro : 22€/mois = 792€ sur 3 ans. L'écart se creuse chaque année. Et avec OpenClaw, si vous n'utilisez presque pas votre clé API un mois, vous ne payez quasiment rien."
  },
  {
    q: "OpenClaw fonctionne-t-il sans internet ?",
    a: "Partiellement. Avec un modèle local comme Llama 3 ou Mistral via Ollama, OpenClaw fonctionne hors ligne pour les tâches d'automatisation locale (gestion de fichiers, comptes-rendus, scripts). Pour les tâches qui nécessitent internet (envoyer un email, accéder à un service externe, utiliser un modèle cloud), une connexion est bien sûr nécessaire. ChatGPT, Copilot et Gemini sont totalement inutilisables sans internet."
  },
  {
    q: "OpenClaw peut-il vraiment envoyer des emails à ma place ?",
    a: "Oui. C'est l'une des automatisations les plus utilisées. L'agent peut lire votre boite mail, rédiger des réponses, les envoyer, archiver les emails traités et vous remonter uniquement ce qui nécessite votre attention. Il peut aussi envoyer des relances commerciales, des confirmations de RDV, des newsletters — selon les règles que vous définissez lors de la configuration. ChatGPT ne peut pas faire ça."
  },
  {
    q: "Faut-il être développeur pour utiliser OpenClaw ?",
    a: "Non. OpenClaw est open source et techniquement complexe à installer correctement — c'est précisément pour ça que Claws existe. Nous installons, configurons et testons tout en 48h. Une fois en place, vous interagissez avec votre agent via Telegram ou WhatsApp, comme vous envoyez un message à un collaborateur. Pas d'interface technique, pas de ligne de commande, pas de maintenance."
  },
  {
    q: "Est-ce que l'installation Claws inclut la maintenance et les mises à jour ?",
    a: "Le tarif d'installation (à partir de 189€) couvre l'installation, la configuration initiale et 30 jours de garantie. Les retainers mensuels (à partir de 149€/mois) incluent la maintenance, les mises à jour d'OpenClaw, l'ajout de nouvelles automatisations et le support prioritaire. Beaucoup de clients gèrent eux-mêmes les mises à jour après l'installation — OpenClaw se met à jour en une commande."
  },
  {
    q: "OpenClaw est-il RGPD conforme ?",
    a: "OpenClaw en local est architecturalement conforme au principe de minimisation des données du RGPD — vos données ne quittent pas votre infrastructure. Il n'y a pas de sous-traitant cloud, pas de transfert vers des pays tiers. Pour les secteurs réglementés (santé, juridique, finance), c'est souvent la seule architecture acceptable. Claws peut fournir un document technique décrivant les flux de données pour vos DPO."
  },
];

export default function ComparatifPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
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
        <section style={{ padding: "72px 24px 64px", maxWidth: 860, margin: "0 auto", borderBottom: "3px solid #E85D04" }}>
          <p className="section-tag" style={{ color: "#E85D04" }}>Comparatif 2026</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, color: "#0E0E0E", lineHeight: 1.08, letterSpacing: "-1.5px", margin: "16px 0 24px" }}>
            OpenClaw vs ChatGPT, Copilot, Gemini :<br />le comparatif complet.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8, maxWidth: 640, marginBottom: 32 }}>
            La plupart des comparatifs IA sont écrits par des gens qui n'ont jamais installé ces outils sur une machine réelle. Celui-ci non. On installe et maintient OpenClaw au quotidien — voici ce qu'on sait vraiment.
          </p>
          {/* Anchor nav */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
            {[
              { href: "#tableau", label: "Tableau complet" },
              { href: "#vs-chatgpt", label: "vs ChatGPT" },
              { href: "#vs-copilot", label: "vs Copilot" },
              { href: "#vs-gemini", label: "vs Gemini" },
              { href: "#cout", label: "Coût réel" },
              { href: "#verdict", label: "Verdict par profil" },
            ].map((a, i) => (
              <a key={i} href={a.href} style={{ fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", color: "#E85D04", border: "1px solid rgba(232,93,4,0.3)", padding: "5px 12px", textDecoration: "none" }}>
                {a.label}
              </a>
            ))}
          </div>
        </section>

        {/* Tableau complet */}
        <section id="tableau" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p className="section-tag">Tableau comparatif</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 12px" }}>
              12 critères. Sans filtre.
            </h2>
            <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: 32 }}>
              Les critères qu'on regarde vraiment avant de recommander un outil à un professionnel.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", minWidth: 680 }}>
                <thead>
                  <tr style={{ background: "#0E0E0E" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", width: "20%" }}>Critère</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#E85D04", fontSize: "0.8rem", width: "24%" }}>OpenClaw via Claws</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", width: "14%" }}>ChatGPT</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", width: "14%" }}>Copilot</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", width: "14%" }}>Gemini</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", width: "14%" }}>Siri</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DF", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                      <td style={{ padding: "13px 16px", fontWeight: 700, color: "#333", fontSize: "0.8rem" }}>{row.critere}</td>
                      <td style={{ padding: "13px 16px", background: "rgba(232,93,4,0.05)", borderLeft: "2px solid #E85D04" }}>
                        <span style={{ color: "#E85D04", fontWeight: 800, marginRight: 6, fontSize: "0.95rem" }}>✓</span>
                        <span style={{ color: "#0E0E0E", fontWeight: 600 }}>{row.claws.v}</span>
                      </td>
                      {[row.chatgpt, row.copilot, row.gemini, row.siri].map((cell, j) => (
                        <td key={j} style={{ padding: "13px 16px" }}>
                          <span style={{ color: cell.win === true ? "#16a34a" : cell.win === null ? "#b45309" : "#dc2626", marginRight: 5, fontWeight: 700 }}>
                            {cell.win === true ? "✓" : cell.win === null ? "~" : "✗"}
                          </span>
                          <span style={{ color: "#666" }}>{cell.v}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 12, fontSize: "0.75rem", color: "#aaa" }}>
              ✓ avantage clair &nbsp;·&nbsp; ~ partiel ou conditionnel &nbsp;·&nbsp; ✗ absent ou très limité &nbsp;·&nbsp; Données vérifiées en février 2026
            </p>
          </div>
        </section>

        {/* Head to head */}
        {headToHead.map((h) => (
          <section key={h.id} id={`vs-${h.id}`} style={{ background: h.id === "copilot" ? "#fff" : "#F5F2EE", padding: "64px 24px", borderTop: "1px solid #E8E4DF" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <p className="section-tag">Face à face</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 8px" }}>
                OpenClaw vs {h.vs}
              </h2>
              <p style={{ fontSize: "1rem", color: "#555", marginBottom: 36, fontStyle: "italic" }}>{h.verdict}</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
                <div style={{ background: "#0E0E0E", padding: "28px" }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", marginBottom: 16 }}>OPENCLAW GAGNE SUR</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {h.openclaw_wins.map((w, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                        <span style={{ color: "#E85D04", fontWeight: 800, flexShrink: 0 }}>+</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: "#F0EDE9", padding: "28px" }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#888", letterSpacing: "0.1em", marginBottom: 16 }}>{h.vs.toUpperCase()} GAGNE SUR</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {h.chatgpt_wins.map((w, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "#555", lineHeight: 1.5 }}>
                        <span style={{ color: "#999", fontWeight: 800, flexShrink: 0 }}>+</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderLeft: "3px solid #E85D04", paddingLeft: 20 }}>
                <p style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.75, margin: 0 }}>
                  <strong>Notre verdict :</strong> {h.bottom_line}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Coût réel */}
        <section id="cout" style={{ padding: "64px 24px", background: "#0E0E0E" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Coût réel</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
              Ce que vous payez vraiment sur 3 ans.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: 40 }}>
              Les prix mensuels semblent petits. Sur 3 ans, la réalité est différente.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>Outil</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>An 1</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>An 2</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>An 3</th>
                    <th style={{ padding: "12px 16px", textAlign: "right", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>Total 3 ans</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "0.75rem" }}>Ce que vous possédez</th>
                  </tr>
                </thead>
                <tbody>
                  {coutAnnee.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: i === 0 ? "rgba(232,93,4,0.08)" : "transparent" }}>
                      <td style={{ padding: "14px 16px", fontWeight: 700, color: i === 0 ? "#E85D04" : "rgba(255,255,255,0.7)" }}>{row.tool}</td>
                      <td style={{ padding: "14px 16px", textAlign: "right", color: "rgba(255,255,255,0.7)" }}>{row.an1}</td>
                      <td style={{ padding: "14px 16px", textAlign: "right", color: "rgba(255,255,255,0.7)" }}>{row.an2}</td>
                      <td style={{ padding: "14px 16px", textAlign: "right", color: "rgba(255,255,255,0.7)" }}>{row.an3}</td>
                      <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 800, color: i === 0 ? "#E85D04" : "#dc2626" }}>{row.total}</td>
                      <td style={{ padding: "14px 16px", fontSize: "0.8rem", color: i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)", fontStyle: i !== 0 ? "italic" : "normal" }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 16, fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
              * Coût API estimé à ~10€/mois pour un usage moyen. Variable selon l'intensité d'utilisation.
            </p>
          </div>
        </section>

        {/* Quand ne PAS choisir OpenClaw */}
        <section style={{ padding: "64px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p className="section-tag">Honnêteté</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 12px" }}>
              Quand ne pas choisir OpenClaw.
            </h2>
            <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: 36 }}>
              On préfère vous dire franchement quand ce n'est pas la bonne solution plutôt que de vous vendre quelque chose qui ne vous convient pas.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {quandNonOpenClaw.map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderBottom: "1px solid #F0EDE9" }}>
                  <div style={{ padding: "24px 24px 24px 0", borderRight: "1px solid #F0EDE9" }}>
                    <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 600, color: "#0E0E0E", lineHeight: 1.5 }}>{item.cas}</p>
                  </div>
                  <div style={{ padding: "24px 0 24px 24px" }}>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: "#666", lineHeight: 1.6 }}>
                      <strong style={{ color: "#E85D04" }}>Conseil : </strong>{item.conseil}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verdict par profil */}
        <section id="verdict" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p className="section-tag">Verdict</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              Quel outil pour quel profil ?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {verdictProfils.map((v, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 140px 1fr", gap: 0, borderBottom: "1px solid #E8E4DF", padding: "18px 0", alignItems: "center" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 600, color: "#0E0E0E" }}>{v.profil}</p>
                  <p style={{ margin: 0 }}>
                    <span style={{ background: v.outil === "OpenClaw" ? "#E85D04" : "#0E0E0E", color: "#fff", padding: "4px 10px", fontSize: "0.75rem", fontWeight: 700 }}>
                      {v.outil === "OpenClaw" ? "OpenClaw" : v.outil}
                    </span>
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#666", lineHeight: 1.5 }}>{v.raison}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p className="section-tag">Questions fréquentes</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              Ce qu'on nous demande le plus souvent.
            </h2>
            {faq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #F0EDE9", padding: "20px 0" }}>
                <summary style={{ fontSize: "0.98rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#E85D04", fontSize: "1.25rem", flexShrink: 0, marginTop: 2 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: "0.93rem", color: "#555", lineHeight: 1.85 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Liens secteurs */}
        <section style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p className="section-tag">Par métier</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              OpenClaw adapté à votre secteur.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {[
                { href: "/solutions/entrepreneurs", label: "Entrepreneurs & Startups" },
                { href: "/solutions/freelances", label: "Freelances & Indépendants" },
                { href: "/solutions/createurs", label: "Créateurs de contenu" },
                { href: "/solutions/cfo", label: "DAF & Directeurs financiers" },
                { href: "/solutions/avocats", label: "Avocats & Cabinets juridiques" },
                { href: "/solutions/medecins", label: "Médecins & Santé" },
                { href: "/solutions/agences", label: "Agences & Consultants" },
                { href: "/solutions/btp", label: "BTP & Artisans" },
                { href: "/solutions/retail", label: "Commerce & Retail" },
              ].map((link, i) => (
                <a key={i} href={link.href} className="sector-card-link">
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Prêt à passer à l'action ?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#F5F2EE", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Votre agent. Sur votre machine. En 48h.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Installation à partir de 189€. Garantie 30 jours. Support en français.
            Si ça ne marche pas, on refait gratuitement.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
              Demander une démo →
            </a>
            <a href="/solutions/entrepreneurs" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "16px 36px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              Voir mon profil →
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p className="footer-copy">© 2025 Claws, Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/faq">FAQ</a>
          <a href="/a-propos">À propos</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
