import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Claws",
  description: "Mentions légales du site claws.fr — éditeur, hébergeur, données personnelles, propriété intellectuelle.",
  alternates: { canonical: "https://claws.fr/mentions-legales" },
  robots: { index: true, follow: false },
};

const section = (title: string, children: React.ReactNode) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 16px", letterSpacing: "-0.3px" }}>
      {title}
    </h2>
    <div style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

export default function MentionsLegalesPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : février 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Éditeur du site", <>
              <p><strong>Raison sociale :</strong> Claws</p>
              <p><strong>Site web :</strong> https://claws.fr</p>
              <p><strong>Email :</strong> contact@claws.fr</p>
              <p><strong>Localisation :</strong> Paris, France</p>
              <p style={{ marginTop: 12 }}>
                Claws est une agence spécialisée dans l&apos;installation, la configuration et la maintenance d&apos;agents IA autonomes OpenClaw pour les professionnels et entreprises.
              </p>
            </>)}

            {section("2. Hébergement", <>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><strong>Site :</strong> https://vercel.com</p>
              <p style={{ marginTop: 12 }}>
                Le site claws.fr est déployé sur l&apos;infrastructure Vercel via un réseau de distribution mondial (CDN). Les fichiers statiques peuvent être mis en cache dans des datacenters situés en Europe.
              </p>
            </>)}

            {section("3. Propriété intellectuelle", <>
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels, structure, code source) est la propriété exclusive de Claws, sauf mention contraire.
              </p>
              <p style={{ marginTop: 12 }}>
                OpenClaw est un logiciel open source distribué sous licence MIT. Le nom et la marque OpenClaw sont la propriété de leurs détenteurs respectifs. Claws est une agence de services indépendante, non affiliée à l&apos;éditeur d&apos;OpenClaw.
              </p>
              <p style={{ marginTop: 12 }}>
                Toute reproduction, même partielle, du contenu de ce site sans autorisation préalable écrite de Claws est interdite.
              </p>
            </>)}

            {section("4. Données personnelles", <>
              <p>
                Claws collecte des données personnelles uniquement dans les cas suivants :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Formulaire de contact :</strong> prénom ou nom de société, email, message. Ces données sont utilisées exclusivement pour répondre à votre demande.</li>
                <li><strong>Newsletter :</strong> adresse email uniquement. Vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.</li>
              </ul>
              <p style={{ marginTop: 16 }}>
                Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données personnelles.
              </p>
              <p style={{ marginTop: 12 }}>
                Pour exercer ces droits ou pour toute question relative à vos données : <strong>contact@claws.fr</strong>
              </p>
            </>)}

            {section("5. Cookies", <>
              <p>
                Ce site n&apos;utilise pas de cookies à des fins publicitaires ou de tracking tiers. Les seuls cookies éventuellement déposés sont des cookies techniques nécessaires au fonctionnement du site (session, préférences).
              </p>
              <p style={{ marginTop: 12 }}>
                Aucune donnée de navigation n&apos;est transmise à des régies publicitaires ou des plateformes d&apos;analytics tierces.
              </p>
            </>)}

            {section("6. Liens externes", <>
              <p>
                Ce site peut contenir des liens vers des sites tiers. Claws n&apos;est pas responsable du contenu ou des pratiques de confidentialité de ces sites externes.
              </p>
            </>)}

            {section("7. Droit applicable", <>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
