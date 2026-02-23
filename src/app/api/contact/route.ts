import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    const html = `
      <div style="font-family:monospace;background:#0E0E0E;color:#F5F2EE;padding:32px;max-width:600px;">
        <p style="color:#E85D04;margin:0 0 24px;font-size:14px;">// Nouveau message claws.fr</p>
        <p style="margin:0 0 8px;font-size:14px;"><span style="color:#E85D04;">nom</span> → ${name}</p>
        <p style="margin:0 0 8px;font-size:14px;"><span style="color:#E85D04;">email</span> → ${email}</p>
        <p style="margin:0 0 24px;font-size:14px;"><span style="color:#E85D04;">message</span> →</p>
        <div style="border-left:3px solid #E85D04;padding:16px;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.7;">${message.replace(/\n/g, "<br>")}</div>
        <p style="margin:24px 0 0;font-size:12px;color:rgba(255,255,255,0.3);">Envoyé depuis claws.fr/contact</p>
      </div>
    `;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: { name: "Claws Contact", email: "julie.decroix.pro@gmail.com" },
        to: [{ email: "julie.decroix.pro@gmail.com", name: "Julie" }],
        replyTo: { email, name },
        subject: `Nouveau contact : ${name}`,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
