import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité OpenClaw | Le Protocole Claws | Claws",
  description:
    "Comment Claws sécurise chaque installation OpenClaw : protocole en 12 points, chiffrement, permissions, zero remote access. Garantie Zéro Backdoor. Audit gratuit.",
  alternates: { canonical: "https://claws.fr/securite" },
  openGraph: {
    title: "Sécurité OpenClaw | Le Protocole Claws",
    description: "Le protocole de sécurité en 12 points appliqué sur chaque installation Claws. Garantie Zéro Backdoor.",
    url: "https://claws.fr/securite",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

const protocol = [
  {
    num: "01",
    title: "Full-disk encryption activé",
    desc: "FileVault (macOS) ou LUKS (Linux) activé avant toute installation. Si la machine est volée, les données sont illisibles sans le mot de passe de déchiffrement.",
    tech: "FileVault 2 / LUKS",
  },
  {
    num: "02",
    title: "Gateway en loopback uniquement",
    desc: "Le gateway OpenClaw écoute exclusivement sur 127.0.0.1. Il n'est jamais exposé sur le réseau local ou internet. Zéro accès depuis l'extérieur par défaut.",
    tech: "bind: loopback",
  },
  {
    num: "03",
    title: "Permissions fichiers strictes",
    desc: "Les fichiers de configuration (clés API, tokens) sont en 600. Les répertoires en 700. Seul l'utilisateur propriétaire peut lire ces fichiers. Aucun autre utilisateur système n'y a accès.",
    tech: "chmod 600/700",
  },
  {
    num: "04",
    title: "Zéro backdoor, zéro monitoring distant",
    desc: "Claws n'installe aucun outil d'accès distant, aucun agent de monitoring, aucune télémétrie. Une fois l'installation terminée, votre machine est 100% à vous. Nous n'y avons plus accès.",
    tech: "Vérifiable post-installation",
  },
  {
    num: "05",
    title: "Clés API en variables d'environnement",
    desc: "Les clés API (Anthropic, Brevo, etc.) ne sont jamais stockées en clair dans les fichiers de configuration. Elles sont stockées dans des variables d'environnement chiffrées, hors du dépôt Git.",
    tech: ".env.local · gitignore",
  },
  {
    num: "06",
    title: "Skills officiels uniquement",
    desc: "Seuls les skills du registre officiel OpenClaw sont installés. Aucun skill communautaire non audité. Chaque skill est vérifié avant installation.",
    tech: "Registre officiel openclaw.ai",
  },
  {
    num: "07",
    title: "Rotation des credentials partagés",
    desc: "Tous les tokens et clés API créés pendant l'installation sont régénérés à la fin du setup. Les credentials utilisés pour la configuration ne survivent pas à l'installation.",
    tech: "Rotation post-install systématique",
  },
  {
    num: "08",
    title: "Pare-feu applicatif configuré",
    desc: "Le pare-feu macOS ou UFW (Linux) est activé et configuré pour bloquer tous les ports entrants non nécessaires. Seuls les ports explicitement requis par OpenClaw sont ouverts, en local uniquement.",
    tech: "pf (macOS) · UFW (Linux)",
  },
  {
    num: "09",
    title: "Audit des permissions d'accès",
    desc: "Avant de finaliser l'installation, chaque permission accordée à l'agent est documentée et validée avec vous : quels dossiers, quelles boites mail, quels outils. Rien d'implicite.",
    tech: "Checklist de validation client",
  },
  {
    num: "10",
    title: "Mise à jour automatique désactivée par défaut",
    desc: "Les mises à jour automatiques d'OpenClaw sont désactivées. Chaque mise à jour est testée par Claws avant d'être déployée chez vous. Pas de breaking change surprise.",
    tech: "Mises à jour manuelles validées",
  },
  {
    num: "11",
    title: "Log des actions de l'agent",
    desc: "Chaque action exécutée par l'agent est loguée localement avec horodatage. Vous pouvez auditer ce que l'agent a fait à tout moment. La transparence est totale.",
    tech: "Logs locaux consultables",
  },
  {
    num: "12",
    title: "Test de pénétration basique post-install",
    desc: "Après chaque installation, Claws effectue un scan basique des ports exposés et vérifie que le gateway n'est pas accessible depuis l'extérieur. Le résultat vous est communiqué.",
    tech: "nmap · Vérification réseau",
  },
];

const risks = [
  {
    title: "Port gateway exposé sur le réseau",
    impact: "Critique",
    desc: "Si le gateway OpenClaw est configuré pour écouter sur 0.0.0.0 au lieu de 127.0.0.1, n'importe qui sur votre réseau local (ou internet si le routeur est mal configuré) peut interagir avec votre agent.",
  },
  {
    title: "Panneau admin accessible publiquement",
    impact: "Critique",
    desc: "Certaines installations DIY exposent le panneau de configuration sur un port non sécurisé. Sans authentification, c'est une porte d'entrée directe.",
  },
  {
    title: "Clés API en clair dans les fichiers",
    impact: "Élevé",
    desc: "Stocker les clés API directement dans les fichiers de config (et non en variables d'environnement) expose ces clés à tout script ou malware ayant accès au répertoire.",
  },
  {
    title: "Skills communautaires non vérifiés",
    impact: "Élevé",
    desc: "Les skills tiers peuvent contenir du code malveillant. Sans audit préalable, installer un skill communautaire revient à exécuter du code inconnu avec les permissions de votre agent.",
  },
  {
    title: "Permissions trop larges accordées à l'agent",
    impact: "Moyen",
    desc: "Un agent configuré avec un accès en écriture à l'ensemble du système de fichiers est un risque. Une erreur de l'agent ou une compromission peut avoir des conséquences irréversibles.",
  },
];

export default function SecuritePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Protocole de sécurité Claws pour OpenClaw",
    description: "Le protocole en 12 points appliqué sur chaque installation OpenClaw par Claws.",
    url: "https://claws.fr/securite",
    publisher: {
      "@type": "Organization",
      name: "Claws",
      url: "https://claws.fr",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <NavBar />

      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px 72px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Sécurité
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#F5F2EE", lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 24px" }}>
              OpenClaw est open-source.<br />
              <span style={{ color: "#E85D04" }}>La sécurité, elle, ne l&apos;est pas.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 560, marginBottom: 48 }}>
              N&apos;importe qui peut installer OpenClaw. Le problème, c&apos;est que n&apos;importe qui peut le faire mal. Claws applique un protocole de sécurité en 12 points sur chaque installation. Voici exactement ce qu&apos;on fait, et pourquoi ça compte.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { value: "12", label: "points de sécurité vérifiés" },
                { value: "0", label: "backdoor installé" },
                { value: "90j", label: "garantie Zéro Backdoor" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: "2rem", fontWeight: 800, color: "#E85D04", margin: "0 0 4px", letterSpacing: "-1px" }}>{s.value}</p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantie */}
        <section style={{ background: "#E85D04", padding: "40px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.3px" }}>
                Garantie Zéro Backdoor
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>
                Une faille dans notre installation dans les 90 jours ? On revient gratuitement la corriger. Sans discussion.
              </p>
            </div>
            <a href="/#contact" style={{ display: "inline-block", background: "#fff", color: "#E85D04", padding: "12px 24px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
              En savoir plus →
            </a>
          </div>
        </section>

        {/* Risques */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <p className="section-tag">Le problème</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 12px" }}>
            Ce qui cloche dans une installation DIY.
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
            OpenClaw est puissant. Mal configuré, il devient un vecteur d&apos;attaque. Voici les erreurs les plus fréquentes, et les plus dangereuses.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {risks.map((r, i) => (
              <div key={i} style={{ background: "#fff", padding: "24px 28px", display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start", borderLeft: `4px solid ${r.impact === "Critique" ? "#dc2626" : r.impact === "Élevé" ? "#E85D04" : "#f59e0b"}` }}>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 8px" }}>{r.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                </div>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", padding: "4px 10px", flexShrink: 0,
                  background: r.impact === "Critique" ? "#fef2f2" : r.impact === "Élevé" ? "rgba(232,93,4,0.08)" : "#fefce8",
                  color: r.impact === "Critique" ? "#dc2626" : r.impact === "Élevé" ? "#E85D04" : "#92400e",
                }}>
                  {r.impact}
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/blog/erreurs-securite-openclaw-installation" style={{ color: "#E85D04", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              Lire l&apos;article complet : les 8 erreurs qui exposent votre machine →
            </a>
          </div>
        </section>

        {/* Protocol */}
        <section style={{ background: "#0E0E0E", padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              Le protocole Claws
            </p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
              12 points. Chaque installation. Sans exception.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: 48, maxWidth: 520 }}>
              Pas une checklist marketing. Un protocole technique appliqué point par point, vérifiable après installation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {protocol.map((p, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24, padding: "28px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#E85D04", margin: 0, paddingTop: 3 }}>{p.num}</p>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F5F2EE", margin: 0 }}>{p.title}</h3>
                      <span style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", color: "#E85D04", background: "rgba(232,93,4,0.1)", padding: "3px 8px", flexShrink: 0 }}>{p.tech}</span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit gratuit */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ background: "#fff", padding: "48px 40px", borderTop: "4px solid #E85D04" }}>
            <p className="section-tag">Offre exclusive</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 16px" }}>
              Vous avez installé OpenClaw vous-même ?
            </h2>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.75, maxWidth: 500, marginBottom: 32 }}>
              On audite votre configuration gratuitement en 30 minutes. On vous dit exactement ce qui est exposé, ce qui doit être corrigé, et comment. Sans engagement.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                Demander un audit gratuit →
              </a>
              <a href="/faq#securite" style={{ display: "inline-block", border: "1.5px solid #0E0E0E", color: "#0E0E0E", padding: "14px 28px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                FAQ Sécurité
              </a>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F5F2EE", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Installé blindé. Garanti 90 jours.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>
            À partir de 189€. Installation en 2h. Protocole Claws appliqué systématiquement.
          </p>
          <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
            Démarrer →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
