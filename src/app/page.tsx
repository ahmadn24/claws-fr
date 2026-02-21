export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 48px",
          backgroundColor: "rgba(245,242,238,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(14,14,14,0.08)",
        }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "-0.02em", color: "#0E0E0E" }}>
          Claws
        </span>
        <a
          href="#contact"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 500, color: "#E85D04", letterSpacing: "0.01em" }}
        >
          Contact →
        </a>
      </nav>

      <main style={{ paddingTop: "80px" }}>

        {/* 001 — OUVERTURE */}
        <section style={{
          padding: "80px 48px 96px",
          borderBottom: "1px solid rgba(14,14,14,0.1)",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          <div style={{ marginBottom: "auto", paddingTop: "40px" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6B6560",
              marginBottom: "64px",
            }}>
              Paris &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; Agents IA autonomes
            </p>
          </div>

          <div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#0E0E0E",
              maxWidth: "1100px",
              marginBottom: "48px",
            }}>
              87 % des tâches répétitives de votre équipe{" "}
              <span style={{ color: "#E85D04" }}>sont automatisables.</span>
            </h1>

            <div style={{
              borderLeft: "3px solid #E85D04",
              paddingLeft: "24px",
              maxWidth: "480px",
            }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "22px",
                fontWeight: 500,
                color: "#0E0E0E",
                lineHeight: 1.4,
              }}>
                Claws les automatise.
              </p>
            </div>
          </div>
        </section>

        {/* 002 — LE PROBLÈME */}
        <section style={{ padding: "96px 48px", borderBottom: "1px solid rgba(14,14,14,0.1)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", maxWidth: "1100px" }}>
            <div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6B6560",
              }}>
                002 / Le problème
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
                marginBottom: "32px",
              }}>
                Ce que vos outils actuels ne font pas.
              </h2>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(14,14,14,0.65)",
                marginBottom: "20px",
                maxWidth: "600px",
              }}>
                ChatGPT répond. Votre agent Claws{" "}
                <strong style={{ color: "#0E0E0E" }}>agit</strong>.
                Il envoie, planifie, analyse et revient avec un résultat — sans que vous ayez ouvert un seul onglet.
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(14,14,14,0.65)",
                maxWidth: "600px",
              }}>
                Un agent IA n&apos;est pas un chatbot. C&apos;est un collaborateur disponible 24h/24, connecté à vos outils, qui prend des initiatives et vous rend compte.
              </p>
            </div>
          </div>
        </section>

        {/* 003 — OFFRES */}
        <section style={{ padding: "96px 48px", borderBottom: "1px solid rgba(14,14,14,0.1)" }}>
          <div style={{ maxWidth: "1100px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", marginBottom: "64px" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6B6560",
              }}>
                003 / Offres
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>
                Ce qu&apos;on fait pour vous.
              </h2>
            </div>

            {/* Fiche 1 */}
            {[
              { code: "SETUP", price: "199 €", title: "Installation OpenClaw", desc: "Installation et configuration d'OpenClaw sur votre machine. Canal Telegram ou WhatsApp connecté. Opérationnel en 48h." },
              { code: "AGENT SUR MESURE", price: "Sur devis", title: "Un agent pensé pour votre workflow", desc: "Analyse de vos processus, configuration d'un agent entièrement personnalisé, intégrations avec vos outils existants, formation de votre équipe." },
              { code: "RETAINER", price: "149 €/mois", title: "Maintenance et évolutions continues", desc: "Maintenance, mises à jour, support direct. Un interlocuteur — pas un ticket. Votre agent évolue avec votre activité." },
            ].map((offer, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "48px",
                padding: "40px 0",
                borderTop: "1px solid rgba(14,14,14,0.1)",
              }}>
                <div>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#6B6560",
                    marginBottom: "12px",
                  }}>
                    — {offer.code}
                  </p>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#E85D04",
                    lineHeight: 1,
                  }}>
                    {offer.price}
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}>
                    {offer.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "rgba(14,14,14,0.6)",
                    marginBottom: "24px",
                  }}>
                    {offer.desc}
                  </p>
                  <a
                    href="#contact"
                    style={{
                      display: "inline-block",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: "#E85D04",
                      border: "1px solid #E85D04",
                      padding: "10px 20px",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "#E85D04";
                      (e.target as HTMLElement).style.color = "#F5F2EE";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "transparent";
                      (e.target as HTMLElement).style.color = "#E85D04";
                    }}
                  >
                    Démarrer →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 004 — COMMENT */}
        <section style={{ padding: "96px 48px", borderBottom: "1px solid rgba(14,14,14,0.1)" }}>
          <div style={{ maxWidth: "1100px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", marginBottom: "64px" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6B6560",
              }}>
                004 / Process
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>
                Trois étapes. Pas plus.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {[
                { num: "01", title: "On écoute.", desc: "Appel de 30 minutes pour comprendre votre activité, vos outils, vos points de friction." },
                { num: "02", title: "On installe.", desc: "Configuration complète de l'agent sur votre machine. Sécurisé, local, aucune donnée dans le cloud." },
                { num: "03", title: "Votre agent travaille.", desc: "Pendant que vous dormez, votre agent gère, planifie, répond. Vous vous concentrez sur l'essentiel." },
              ].map((step, i) => (
                <div key={i} style={{
                  padding: "40px 40px 40px 0",
                  borderRight: i < 2 ? "1px solid rgba(14,14,14,0.1)" : "none",
                  paddingRight: "40px",
                  paddingLeft: i > 0 ? "40px" : "0",
                }}>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "rgba(14,14,14,0.08)",
                    marginBottom: "24px",
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </p>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(14,14,14,0.6)",
                  }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 005 — CONTACT */}
        <section id="contact" style={{ padding: "120px 48px 160px" }}>
          <div style={{ maxWidth: "1100px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6B6560",
              paddingTop: "12px",
            }}>
              005 / Contact
            </p>
            <div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(52px, 7vw, 88px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#0E0E0E",
                marginBottom: "32px",
              }}>
                Discutons.
              </h2>
              <a
                href="mailto:contact@claws.fr"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#E85D04",
                  display: "block",
                  marginBottom: "16px",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                contact@claws.fr
              </a>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#6B6560",
              }}>
                Réponse sous 24h.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        padding: "24px 48px",
        borderTop: "1px solid rgba(14,14,14,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6560" }}>
          © 2025 Claws — Paris
        </p>
        <a
          href="mailto:contact@claws.fr"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6560" }}
        >
          contact@claws.fr
        </a>
      </footer>
    </>
  );
}
