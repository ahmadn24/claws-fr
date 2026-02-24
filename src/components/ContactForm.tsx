"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const sectors = [
    "Avocat / Notaire",
    "Médecin / Professionnel de santé",
    "Expert-comptable / Cabinet",
    "Agence / Consulting",
    "BTP / Artisan",
    "E-commerce / Retail",
    "Entrepreneur / Startup",
    "Autre",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Secteur : ${form.sector}\n\n${form.message}`,
        }),
      });
      if (res.ok) {
        setStatus("done");
        // Google Ads conversion
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", { send_to: "AW-17974041887" });
          (window as any).gtag("event", "generate_lead", { currency: "EUR", value: 189 });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "0.95rem",
    border: "1.5px solid #E8E4DF",
    background: "#fff",
    color: "#0E0E0E",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    borderRadius: 0,
    appearance: "none" as const,
  };

  if (status === "done") {
    return (
      <div style={{ background: "#fff", border: "2px solid #22c55e", padding: "40px 32px", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✓</div>
        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 8px" }}>
          Message reçu.
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666", margin: 0, lineHeight: 1.7 }}>
          Julie vous répond personnellement sous 24h à <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .contact-grid { grid-template-columns: 1fr !important; } }
        .contact-input:focus { border-color: #E85D04 !important; }
      `}</style>
      <div className="contact-grid">
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0E0E0E", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Prénom ou société *
          </label>
          <input
            type="text"
            required
            placeholder="Julie Dupont ou Acme SAS"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0E0E0E", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Email professionnel *
          </label>
          <input
            type="email"
            required
            placeholder="vous@entreprise.fr"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0E0E0E", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Votre secteur
        </label>
        <select
          value={form.sector}
          onChange={e => setForm({ ...form, sector: e.target.value })}
          style={{ ...inputStyle, color: form.sector ? "#0E0E0E" : "#999" }}
        >
          <option value="">Choisir votre secteur...</option>
          {sectors.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#0E0E0E", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Votre besoin (optionnel)
        </label>
        <textarea
          rows={3}
          placeholder="Ex : je veux automatiser mes emails et mes relances clients..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          background: status === "sending" ? "#ccc" : "#E85D04",
          color: "#fff",
          border: "none",
          padding: "16px 32px",
          fontSize: "1rem",
          fontWeight: 800,
          cursor: status === "sending" ? "not-allowed" : "pointer",
          fontFamily: "inherit",
          letterSpacing: "-0.3px",
          width: "100%",
        }}
      >
        {status === "sending" ? "Envoi en cours..." : "Demander mon installation →"}
      </button>

      {status === "error" && (
        <p style={{ color: "#e00", fontSize: "0.85rem", margin: 0 }}>
          Erreur lors de l'envoi. Écrivez directement à julie.decroix.pro@gmail.com
        </p>
      )}

      <p style={{ fontSize: "0.72rem", color: "#aaa", margin: 0, textAlign: "center" }}>
        Réponse sous 24h · Aucun engagement · Données confidentielles
      </p>
    </form>
  );
}
