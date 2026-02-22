"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="newsletter-section">
      <p className="section-tag">Newsletter</p>
      <h3 className="newsletter-title">Une ressource IA par semaine.</h3>
      <p className="newsletter-desc">
        Cas d&apos;usage concrets, retours terrain, guides OpenClaw. Pas de spam, désabonnement en un clic.
      </p>
      {status === "success" ? (
        <p className="newsletter-success">Inscription confirmée. A bientôt dans votre boite.</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="newsletter-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? "..." : "S'inscrire →"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="newsletter-error">Une erreur est survenue. Réessayez.</p>
      )}
    </section>
  );
}
