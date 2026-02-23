export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        {/* Logo + tagline */}
        <div className="site-footer-brand">
          <a href="/" className="site-footer-logo">Claws</a>
          <p className="site-footer-tagline">
            La première agence française spécialisée dans les agents IA autonomes OpenClaw.
            Installation locale. Données chez vous.
          </p>
          <p className="site-footer-tagline" style={{ marginTop: 8 }}>
            Paris · contact@claws.fr
          </p>
        </div>

        {/* Solutions */}
        <div className="site-footer-col">
          <p className="site-footer-heading">Solutions</p>
          <ul className="site-footer-list">
            <li><a href="/solutions/entrepreneurs">Entrepreneurs & Startups</a></li>
            <li><a href="/solutions/freelances">Freelances & Indépendants</a></li>
            <li><a href="/solutions/createurs">Créateurs de contenu</a></li>
            <li><a href="/solutions/cfo">DAF & Directeurs financiers</a></li>
            <li><a href="/solutions/avocats">Avocats & Cabinets juridiques</a></li>
            <li><a href="/solutions/medecins">Médecins & Santé</a></li>
            <li><a href="/solutions/agences">Agences & Consultants</a></li>
            <li><a href="/solutions/btp">BTP & Artisans</a></li>
            <li><a href="/solutions/retail">Commerce & Retail</a></li>
          </ul>
        </div>

        {/* Ressources */}
        <div className="site-footer-col">
          <p className="site-footer-heading">Ressources</p>
          <ul className="site-footer-list">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/comparatif">Comparatif 2026</a></li>
            <li><a href="/openclaw-france">OpenClaw en France</a></li>
            <li><a href="/securite">Sécurité & RGPD</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
          </ul>
          <p className="site-footer-heading" style={{ marginTop: 28 }}>Agence</p>
          <ul className="site-footer-list">
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/comparatif">Comparatif outils IA</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="site-footer-bottom">
        <p>© 2026 Claws, Paris. Tous droits réservés.</p>
        <p>Agent IA OpenClaw · Installation locale · RGPD natif</p>
      </div>
    </footer>
  );
}
