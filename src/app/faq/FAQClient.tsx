"use client";
import { useState } from "react";

const categories = ["Tout", "Sécurité", "Installation", "Coûts", "Technique", "Cas d'usage", "OpenClaw & IA"];

const faq = [
  // SÉCURITÉ
  { cat: "Sécurité", q: "Mes données sont-elles en sécurité avec OpenClaw ?", a: "Oui. L'architecture locale est la principale garantie. Vos données restent sur votre machine et ne transitent par aucun serveur tiers. Claws n'y a pas accès après l'installation, sauf si vous nous le demandez explicitement pour un support." },
  { cat: "Sécurité", q: "OpenClaw est-il compatible RGPD ?", a: "Oui. Parce qu'il tourne localement, aucune donnée personnelle n'est transmise à un tiers sans votre consentement. La seule exception concerne les appels au modèle de langage (Anthropic, OpenAI). Pour les données très sensibles, des modèles locaux comme Mistral ou LLaMA peuvent rendre le système 100% offline." },
  { cat: "Sécurité", q: "OpenClaw peut-il accéder à tous mes fichiers ?", a: "Non. OpenClaw n'accède qu'aux sources que vous lui autorisez explicitement : un dossier précis, une boite mail donnée, un calendrier. Il n'a pas accès à l'ensemble de votre système de fichiers par défaut." },
  { cat: "Sécurité", q: "Que se passe-t-il si ma machine s'éteint ?", a: "L'agent s'arrête et reprend quand la machine redémarre. Pour un usage professionnel, la machine doit rester allumée. Un Mac Mini configuré en mode 'éveil permanent' consomme environ 10W. Claws configure ce paramètre lors de l'installation." },
  { cat: "Sécurité", q: "OpenClaw peut-il accéder à mes données bancaires ?", a: "Uniquement si vous le configurez explicitement. Par défaut, il accède aux sources que vous lui autorisez. Les données bancaires nécessitent une intégration spécifique que vous validez." },
  { cat: "Sécurité", q: "Qui peut accéder à mon agent IA ?", a: "Vous seul, et les personnes à qui vous donnez accès. L'agent répond via Telegram, WhatsApp ou iMessage — uniquement aux numéros ou comptes que vous avez autorisés lors de la configuration." },
  { cat: "Sécurité", q: "L'agent peut-il envoyer des emails à mon insu ?", a: "Non, sauf si vous le configurez pour le faire. Par défaut, l'agent prépare les emails et vous les soumet pour validation. L'envoi automatique doit être explicitement activé et limité à des cas précis que vous définissez." },
  { cat: "Sécurité", q: "Comment sont stockées les conversations avec l'agent ?", a: "Les historiques de conversation sont stockés localement sur votre machine, dans le répertoire de travail d'OpenClaw. Aucune conversation n'est synchronisée vers un cloud sans votre accord." },
  { cat: "Sécurité", q: "OpenClaw est-il auditable ?", a: "Oui. OpenClaw est open-source. Son code est public et vérifiable sur GitHub. Vous pouvez voir exactement ce que fait le logiciel, contrairement aux solutions propriétaires. Les logs d'activité de l'agent sont également consultables à tout moment." },
  { cat: "Sécurité", q: "Peut-on limiter ce que l'agent a le droit de faire ?", a: "Oui. Les permissions sont configurables finement : accès en lecture seule, interdiction d'envoyer sans validation, plages horaires d'activité, liste blanche de contacts. Claws configure ces limites selon vos besoins lors de l'installation." },

  // INSTALLATION
  { cat: "Installation", q: "Combien de temps prend l'installation ?", a: "Une installation standard prend entre 2 et 4 heures pour un technicien. Claws installe et configure OpenClaw en 48 heures ouvrées, sans que vous ayez à toucher une ligne de commande." },
  { cat: "Installation", q: "Faut-il être développeur pour utiliser OpenClaw ?", a: "Pour l'installation initiale, oui. Pour l'usage quotidien, non. Une fois configuré, l'agent tourne seul. Vous interagissez avec lui via Telegram ou une interface web, comme n'importe quelle application." },
  { cat: "Installation", q: "Quel matériel est recommandé ?", a: "Un Mac Mini M1 reconditionné (environ 300 euros) est la solution idéale. Il tourne 24h/24, consomme peu (10W), est silencieux et fiable. Un PC Linux avec 8 Go de RAM minimum fonctionne très bien aussi." },
  { cat: "Installation", q: "Peut-on installer OpenClaw sur un serveur cloud ?", a: "Techniquement oui, mais c'est contradictoire avec l'intérêt principal : la localité. Si vous installez sur un VPS, vos données transitent quand même par un serveur tiers. Pour les professionnels soucieux du RGPD, l'installation locale est recommandée." },
  { cat: "Installation", q: "OpenClaw se connecte à quels outils ?", a: "Emails (Gmail, Outlook, IMAP), calendriers (Google, Apple), Slack, Notion, fichiers locaux, Google Drive, APIs web, bases de données, et bien d'autres via des connecteurs. La liste s'allonge à chaque mise à jour." },
  { cat: "Installation", q: "Peut-on avoir plusieurs agents sur la même machine ?", a: "Oui. Une seule machine peut faire tourner plusieurs agents spécialisés simultanément. Par exemple : un agent email, un agent veille, un agent CRM. Chacun a son périmètre et ses règles propres." },
  { cat: "Installation", q: "Comment se passent les mises à jour d'OpenClaw ?", a: "OpenClaw se met à jour via une commande simple. En retainer Claws, on s'en occupe pour vous : on teste la mise à jour avant de la déployer et on vérifie que vos agents continuent à fonctionner correctement après." },
  { cat: "Installation", q: "Que se passe-t-il si l'installation échoue ?", a: "Claws offre 30 jours de garantie. Si votre agent ne fonctionne pas comme attendu dans les 30 jours suivant l'installation, on refait le travail gratuitement, sans discussion." },
  { cat: "Installation", q: "Peut-on migrer un agent d'une machine à une autre ?", a: "Oui. La configuration d'OpenClaw est exportable. Claws peut vous accompagner sur une migration en cas de changement de machine, de déménagement ou d'upgrade matériel." },
  { cat: "Installation", q: "OpenClaw fonctionne-t-il sur Windows ?", a: "Oui, mais le support est moins mature que sur macOS et Linux. Pour les installations professionnelles, Claws recommande un Mac ou un PC Linux pour plus de stabilité. Si vous avez un Mac de travail, c'est la meilleure option." },

  // COÛTS
  { cat: "Coûts", q: "Combien coûte l'installation par Claws ?", a: "L'installation OpenClaw commence à 189 euros. Ce forfait comprend l'installation complète, la configuration d'un premier agent adapté à votre activité, et 30 jours de garantie. Pour les projets complexes, un devis est établi après un appel de découverte." },
  { cat: "Coûts", q: "Combien coûte le retainer mensuel ?", a: "Le retainer mensuel commence à 149 euros par mois. Il comprend les mises à jour, la surveillance des agents, les ajustements de configuration et le support. La plupart des clients passent au retainer après la première installation." },
  { cat: "Coûts", q: "Combien coûte le modèle de langage par mois ?", a: "Pour un usage professionnel typique, comptez entre 10 et 40 euros par mois en coût d'API. Ce montant varie selon le modèle choisi et la fréquence d'utilisation." },
  { cat: "Coûts", q: "OpenClaw est-il gratuit ?", a: "OpenClaw est open-source et gratuit à installer. Vous avez besoin d'une clé API pour le modèle de langage (Claude, GPT-4…), qui a un coût variable. L'installation et la configuration par Claws sont facturées séparément." },
  { cat: "Coûts", q: "Y a-t-il des coûts cachés ?", a: "Non. Le devis Claws est fixe. Les seuls coûts variables sont les appels API au modèle de langage, que vous payez directement à Anthropic ou OpenAI. On vous donne une estimation réaliste avant de commencer." },
  { cat: "Coûts", q: "Peut-on limiter les coûts d'API ?", a: "Oui. OpenClaw permet de configurer des limites d'usage (nombre de requêtes par heure, par jour), d'utiliser des modèles moins chers pour les tâches simples, et de désactiver l'agent pendant les heures creuses. Claws configure ces optimisations selon votre budget." },
  { cat: "Coûts", q: "Claws propose-t-il un pilote avant engagement ?", a: "On peut démarrer par une installation simple à 189 euros avant de parler de retainer. C'est la meilleure façon de tester la valeur des agents IA sur votre activité concrète, sans engagement long terme." },

  // TECHNIQUE
  { cat: "Technique", q: "Quel modèle de langage OpenClaw utilise-t-il ?", a: "OpenClaw est compatible avec plusieurs modèles : Claude (Anthropic), GPT-4 (OpenAI), Mistral, LLaMA et d'autres. Claws configure le modèle le plus adapté à votre usage et à votre budget lors de l'installation." },
  { cat: "Technique", q: "OpenClaw peut-il fonctionner sans connexion internet ?", a: "Partiellement. Si vous utilisez un modèle local (Mistral, LLaMA), oui. Si vous utilisez Claude ou GPT-4, une connexion est nécessaire pour les appels API. L'agent peut fonctionner offline pour les tâches ne nécessitant pas de modèle." },
  { cat: "Technique", q: "Quelle est la fiabilité d'un agent IA ?", a: "Un agent bien configuré est très fiable pour les tâches répétitives et structurées. Il peut faire des erreurs sur les tâches ambiguës ou hors de son périmètre. C'est pourquoi Claws recommande toujours de définir un périmètre clair et de garder un humain en validation pour les actions importantes." },
  { cat: "Technique", q: "L'agent peut-il apprendre de mes préférences ?", a: "Oui. OpenClaw peut être configuré pour mémoriser vos habitudes, vos préférences et le contexte de votre activité. Plus vous l'utilisez, plus il devient précis. Cette mémoire est stockée localement." },
  { cat: "Technique", q: "Comment l'agent gère-t-il les erreurs ?", a: "OpenClaw dispose de mécanismes de fallback et de retry automatiques. En cas d'échec répété, l'agent peut vous alerter via Telegram ou email. Les logs d'erreur sont consultables à tout moment." },
  { cat: "Technique", q: "Peut-on créer des agents sur mesure ?", a: "Oui. Claws propose des agents configurés pour votre métier spécifique, au-delà des templates standard. Cela inclut des workflows personnalisés, des intégrations spécifiques et des règles de comportement adaptées à votre activité." },
  { cat: "Technique", q: "OpenClaw est-il open-source ?", a: "Oui. Le code est disponible publiquement sur GitHub. Vous n'êtes pas enfermé dans un produit propriétaire. Si Claws disparaissait demain, votre agent continuerait à fonctionner indépendamment." },
  { cat: "Technique", q: "L'agent peut-il interagir avec des sites web ?", a: "Oui. OpenClaw inclut un module de navigation web qui permet à l'agent de consulter des pages, remplir des formulaires, extraire des données et effectuer des actions sur des interfaces web, avec les permissions que vous lui accordez." },

  // CAS D'USAGE
  { cat: "Cas d'usage", q: "À quoi sert concrètement un agent IA ?", a: "Les usages les plus courants : triage et résumé des emails chaque matin, relances clients automatiques, comptes-rendus de réunion depuis des notes vocales, veille sectorielle quotidienne, suivi des paiements, mise à jour de tableaux de bord, rédaction de premiers jets." },
  { cat: "Cas d'usage", q: "Un agent peut-il remplacer un assistant administratif ?", a: "Partiellement. Il gère très bien les tâches répétitives et structurées : triage, relances, résumés, surveillance. Il ne remplace pas la relation humaine, le jugement complexe ou la créativité. La plupart de nos clients gagnent entre 5 et 15 heures par semaine." },
  { cat: "Cas d'usage", q: "OpenClaw est-il utile pour les freelances ?", a: "Particulièrement oui. Les freelances portent seuls des tâches qui, dans une entreprise, sont réparties sur plusieurs personnes. Un agent IA gère l'administratif pendant qu'ils se concentrent sur leur cœur de métier." },
  { cat: "Cas d'usage", q: "OpenClaw est-il adapté aux TPE et PME ?", a: "Oui. On travaille principalement avec des entreprises de 1 à 50 personnes. Secteurs courants : cabinets de conseil, agences, professions libérales (avocats, architectes, médecins), artisans, TPE de services." },
  { cat: "Cas d'usage", q: "Peut-on automatiser la prospection commerciale ?", a: "Oui. Un agent peut surveiller des signaux d'affaires (publications LinkedIn, annonces légales, appels d'offres), qualifier des prospects, préparer des emails personnalisés et relancer automatiquement les contacts non répondants." },
  { cat: "Cas d'usage", q: "Un agent peut-il faire de la veille concurrentielle ?", a: "Oui. L'agent surveille les sites de vos concurrents, leurs publications, leurs offres d'emploi, leurs avis clients — et vous envoie un résumé quotidien ou hebdomadaire avec les changements détectés." },
  { cat: "Cas d'usage", q: "OpenClaw peut-il gérer un service client ?", a: "Pour le premier niveau oui : répondre aux questions fréquentes, collecter les informations d'un problème, escalader les cas complexes à un humain. Pour un SAV complet avec nuances relationnelles, un humain reste nécessaire." },

  // OPENCLAW & IA
  { cat: "OpenClaw & IA", q: "Qu'est-ce qu'OpenClaw ?", a: "OpenClaw est un framework open-source pour créer et déployer des agents IA autonomes sur votre propre machine. Contrairement aux solutions cloud, il tourne entièrement en local. Vos données ne quittent jamais votre ordinateur." },
  { cat: "OpenClaw & IA", q: "Quelle est la différence entre un agent IA et ChatGPT ?", a: "ChatGPT répond à des questions ponctuelles. Un agent IA exécute des tâches de manière autonome et répétée, sans intervention humaine. Un agent peut surveiller votre boite mail toutes les heures, trier les messages et relancer les clients automatiquement. ChatGPT ne fait rien sans que vous lui demandiez à chaque fois." },
  { cat: "OpenClaw & IA", q: "Sur quels systèmes fonctionne OpenClaw ?", a: "macOS, Linux et Windows. Pour un usage professionnel (agent actif 24h/24), un Mac Mini M1 ou M2 est la solution la plus courante. Un PC Linux reconditionné fonctionne très bien aussi." },
  { cat: "OpenClaw & IA", q: "OpenClaw est-il stable en production ?", a: "Oui. OpenClaw est utilisé en production par des milliers d'utilisateurs dans le monde. Des mises à jour régulières corrigent les bugs et ajoutent des fonctionnalités. Claws teste chaque mise à jour avant de la déployer chez ses clients." },
  { cat: "OpenClaw & IA", q: "Quelle est la communauté autour d'OpenClaw ?", a: "OpenClaw dispose d'une communauté active sur Discord, d'une documentation fournie et d'un dépôt GitHub régulièrement mis à jour. C'est un projet vivant avec des contributeurs dans le monde entier." },
  { cat: "OpenClaw & IA", q: "OpenClaw va-t-il continuer à évoluer ?", a: "Oui. Le projet est activement maintenu et les nouvelles fonctionnalités arrivent régulièrement. Claws suit ces évolutions et les intègre pour ses clients." },
];

export default function FAQClient() {
  const [active, setActive] = useState("Tout");
  const filtered = active === "Tout" ? faq : faq.filter((f) => f.cat === active);
  const counts: Record<string, number> = { Tout: faq.length };
  categories.slice(1).forEach((c) => { counts[c] = faq.filter((f) => f.cat === c).length; });

  return (
    <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ borderBottom: "3px solid #E85D04", padding: "64px 24px 48px", maxWidth: 760, margin: "0 auto" }}>
        <p className="section-tag">FAQ</p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-1.5px", margin: "12px 0 20px" }}>
          Toutes les réponses<br />sur les agents IA.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7, maxWidth: 560 }}>
          {faq.length} questions sur OpenClaw, la sécurité, les prix et l&apos;installation. Si la réponse n&apos;est pas ici,{" "}
          <a href="/#contact" style={{ color: "#E85D04" }}>posez-la directement</a>.
        </p>
      </section>

      {/* Filters */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1.5px solid",
              borderColor: active === cat ? "#0E0E0E" : "#D4CFC9",
              background: active === cat ? "#0E0E0E" : "transparent",
              color: active === cat ? "#F5F2EE" : "#555",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}>
              {cat} <span style={{ opacity: 0.6, fontWeight: 400 }}>({counts[cat]})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 80px" }}>
        {filtered.map((item, i) => (
          <details key={i} style={{ borderBottom: "1px solid #E8E4DF", padding: "20px 0" }}>
            <summary style={{
              fontSize: "1.05rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer",
              lineHeight: 1.4, listStyle: "none", display: "flex",
              justifyContent: "space-between", alignItems: "flex-start", gap: 16,
            }}>
              <span>{item.q}</span>
              <span style={{ color: "#E85D04", fontSize: "1.25rem", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>+</span>
            </summary>
            <p style={{ marginTop: 14, fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }}>{item.a}</p>
            {active === "Tout" && (
              <span style={{ display: "inline-block", marginTop: 10, fontSize: "0.75rem", color: "#E85D04", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.cat}</span>
            )}
          </details>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#0E0E0E", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800, color: "#F5F2EE", marginBottom: 16, letterSpacing: "-0.5px" }}>
          Une question qui n&apos;est pas là ?
        </h2>
        <p style={{ fontSize: "1rem", color: "#888", marginBottom: 32 }}>On répond en général dans la journée.</p>
        <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "14px 32px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
          Poser une question
        </a>
      </section>
    </main>
  );
}
