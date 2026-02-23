"use client";
import { useState, useRef, useEffect } from "react";

type Step = "name" | "email" | "message" | "sending" | "done" | "error";

export default function ContactTerminal() {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<{ text: string; type: "prompt" | "input" | "response" | "error" | "success" }[]>([
    { text: "Bienvenue chez Claws. Quelques questions rapides.", type: "response" },
    { text: "", type: "response" },
    { text: "Votre prénom ou nom de société :", type: "prompt" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Ne pas scroller au premier rendu
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [lines]);

  function addLine(text: string, type: typeof lines[0]["type"]) {
    setLines((prev) => [...prev, { text, type }]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || step === "sending" || step === "done") return;

    const val = input.trim();
    setInput("");

    if (step === "name") {
      addLine(`> ${val}`, "input");
      setName(val);
      addLine("", "response");
      addLine("Votre email :", "prompt");
      setStep("email");

    } else if (step === "email") {
      if (!val.includes("@")) {
        addLine(`> ${val}`, "input");
        addLine("Format d'email invalide. Réessayez :", "error");
        return;
      }
      addLine(`> ${val}`, "input");
      setEmail(val);
      addLine("", "response");
      addLine("Votre message (en quoi peut-on vous aider ?) :", "prompt");
      setStep("message");

    } else if (step === "message") {
      addLine(`> ${val}`, "input");
      setMessage(val);
      addLine("", "response");
      addLine("Envoi en cours...", "response");
      setStep("sending");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email: email, message: val }),
        });

        if (res.ok) {
          addLine("", "response");
          addLine("✓ Message envoyé.", "success");
          addLine("On vous répond dans la journée.", "success");
          addLine("", "response");
          addLine(`À bientôt, ${name}.`, "response");
          setStep("done");
        } else {
          addLine("Erreur lors de l'envoi. Réessayez ou écrivez à contact@claws.fr", "error");
          setStep("error");
        }
      } catch {
        addLine("Erreur réseau. Réessayez ou écrivez à contact@claws.fr", "error");
        setStep("error");
      }
    }
  }

  const placeholders: Partial<Record<Step, string>> = {
    name: "Votre nom...",
    email: "votre@email.com",
    message: "Décrivez votre besoin...",
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        background: "#0A0A0A",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "0",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        maxWidth: 640,
        width: "100%",
        cursor: "text",
        overflow: "hidden",
      }}
    >
      {/* Terminal header */}
      <div style={{ background: "#1A1A1A", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
        <span style={{ marginLeft: 12, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>claws / contact</span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: "20px 24px 8px", minHeight: 220, maxHeight: 320, overflowY: "auto" }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            fontSize: 13,
            lineHeight: 1.8,
            color: line.type === "prompt" ? "#E85D04"
              : line.type === "input" ? "rgba(255,255,255,0.9)"
              : line.type === "success" ? "#22c55e"
              : line.type === "error" ? "#ef4444"
              : "rgba(255,255,255,0.45)",
            marginBottom: line.text === "" ? 4 : 0,
          }}>
            {line.text || "\u00A0"}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {step !== "done" && step !== "sending" && (
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", padding: "8px 24px 16px", gap: 8 }}>
          <span style={{ color: "#E85D04", fontSize: 13, flexShrink: 0 }}>{">"}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholders[step] ?? ""}
            autoComplete="off"
            spellCheck={false}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "rgba(255,255,255,0.9)",
              fontSize: 13,
              fontFamily: "inherit",
              caretColor: "#E85D04",
            }}
          />
        </form>
      )}
    </div>
  );
}
