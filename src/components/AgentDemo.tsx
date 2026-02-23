"use client";
import { useEffect, useState } from "react";

const messages = [
  { from: "agent", text: "Bonjour. Rapport de nuit terminé.", time: "07:58", delay: 0 },
  { from: "agent", text: "12 emails triés. 2 urgents marqués.\nRelance Dupont & Co envoyée (J+7).\nFacture #041 : paiement reçu.\n3 articles de veille sauvegardés.\n\nRien ne nécessite votre attention.", time: "07:58", delay: 600 },
  { from: "user", text: "Envoie le rapport hebdo à l'équipe.", time: "08:03", delay: 1400 },
  { from: "agent", text: "Rapport envoyé à 3 destinataires. ✓", time: "08:03", delay: 2000 },
];

export default function AgentDemo() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = messages.map((m, i) =>
      setTimeout(() => setVisible(i + 1), m.delay + 400)
    );
    // Restart loop every 6s after last message
    const loop = setInterval(() => {
      setVisible(0);
      messages.forEach((m, i) => {
        setTimeout(() => setVisible(i + 1), m.delay + 400);
      });
    }, 6800);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  return (
    <div style={{
      width: "100%",
      maxWidth: 340,
      background: "#1C1C1E",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
      fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
      flexShrink: 0,
    }}>
      {/* Header Telegram */}
      <div style={{ background: "#2C2C2E", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E85D04", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
          C
        </div>
        <div>
          <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff", margin: 0 }}>Agent Claws</p>
          <p style={{ fontSize: "0.72rem", color: "#4CD964", margin: 0 }}>en ligne</p>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: "16px 12px", minHeight: 240, display: "flex", flexDirection: "column", gap: 8, background: "#1C1C1E" }}>
        {messages.map((m, i) => {
          const show = visible > i;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div style={{
                maxWidth: "82%",
                background: m.from === "user" ? "#E85D04" : "#2C2C2E",
                borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                padding: "8px 12px",
              }}>
                <p style={{
                  fontSize: "0.82rem",
                  color: m.from === "user" ? "#fff" : "rgba(255,255,255,0.85)",
                  margin: "0 0 4px",
                  lineHeight: 1.55,
                  whiteSpace: "pre-line",
                }}>
                  {m.text}
                </p>
                <p style={{ fontSize: "0.65rem", color: m.from === "user" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)", margin: 0, textAlign: "right" }}>
                  {m.time}
                </p>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {visible === messages.length && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ background: "#2C2C2E", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map((d) => (
                <span key={d} style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "rgba(255,255,255,0.4)",
                  animation: "pulse 1.2s ease-in-out infinite",
                  animationDelay: `${d * 0.2}s`,
                  display: "inline-block",
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
