import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

// Liens sectoriels par catégorie/keyword pour le maillage interne
const sectorLinks: Record<string, { href: string; label: string }> = {
  "agent IA avocat": { href: "/solutions/avocats", label: "OpenClaw pour les avocats" },
  "agent IA santé": { href: "/solutions/medecins", label: "OpenClaw pour les médecins" },
  "agent IA BTP": { href: "/solutions/btp", label: "OpenClaw pour le BTP" },
  "agent IA mode": { href: "/solutions/retail", label: "OpenClaw pour le retail" },
  "agent IA personnel": { href: "/solutions/freelances", label: "OpenClaw pour les freelances" },
  "automatisation consultant": { href: "/solutions/agences", label: "OpenClaw pour les agences" },
  "agent IA salaries": { href: "/solutions/entrepreneurs", label: "OpenClaw pour les entrepreneurs" },
};

function getSectorLink(post: ReturnType<typeof getPostBySlug>) {
  if (!post) return null;
  for (const [kw, link] of Object.entries(sectorLinks)) {
    if (post.keywords.some((k) => k.toLowerCase().includes(kw.split(" ").pop()!)) || post.slug.includes(kw.split(" ").pop()!)) {
      return link;
    }
  }
  return null;
}

function getRelatedPosts(currentSlug: string, currentPost: ReturnType<typeof getPostBySlug>, count = 3) {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  if (!currentPost) return all.slice(0, count);
  // Prioritise same category, then keyword overlap
  const sameCategory = all.filter((p) => p.category === currentPost.category);
  const keywordMatch = all.filter((p) =>
    p.keywords.some((k) => currentPost.keywords.includes(k)) && p.category !== currentPost.category
  );
  const rest = all.filter((p) => !sameCategory.includes(p) && !keywordMatch.includes(p));
  return [...sameCategory, ...keywordMatch, ...rest].slice(0, count);
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://claws.fr/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://claws.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Claws"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);
  const relatedPosts = getRelatedPosts(slug, post);
  const sectorLink = getSectorLink(post);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Claws", url: "https://claws.fr" },
      publisher: { "@type": "Organization", name: "Claws", url: "https://claws.fr", "@id": "https://claws.fr/#organization", logo: { "@type": "ImageObject", url: "https://claws.fr/icon.png", width: 512, height: 512 } },
      wordCount: Math.round(post.content.split(/\s+/).length),
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".post-description", "h2"] },
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://claws.fr/blog/${post.slug}` },
      keywords: post.keywords.join(", "),
      inLanguage: "fr-FR",
      isPartOf: { "@type": "Blog", name: "Blog Claws", url: "https://claws.fr/blog" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://claws.fr" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://claws.fr/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://claws.fr/blog/${post.slug}` },
      ],
    },
    ...(post.slug === "installer-openclaw-mac-mini-2025" ? [{
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Comment installer OpenClaw sur Mac Mini",
      description: "Guide étape par étape pour installer et configurer OpenClaw sur Mac Mini en 2025.",
      totalTime: "PT30M",
      supply: [
        { "@type": "HowToSupply", name: "Mac Mini M4" },
        { "@type": "HowToSupply", name: "Clé API Anthropic" },
        { "@type": "HowToSupply", name: "Node.js 20+" },
      ],
      step: [
        { "@type": "HowToStep", position: 1, name: "Installer OpenClaw", text: "Exécuter npm install -g openclaw dans le Terminal" },
        { "@type": "HowToStep", position: 2, name: "Configurer OpenClaw", text: "Lancer openclaw configure et suivre le wizard" },
        { "@type": "HowToStep", position: 3, name: "Connecter Telegram", text: "Créer un bot via @BotFather et ajouter le token avec openclaw channels add --channel telegram --token TOKEN" },
        { "@type": "HowToStep", position: 4, name: "Démarrer le gateway", text: "Lancer openclaw gateway install && openclaw gateway start" },
      ],
    }] : []),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <NavBar />

      <main className="article-page">
        <a href="/blog" className="back-link">← Retour au blog</a>

        <header className="article-header">
          <p className="article-category">{post.category}</p>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span>{new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {sectorLink && (
          <div style={{ margin: "32px 0", padding: "20px 24px", background: "rgba(232,93,4,0.06)", borderLeft: "3px solid #E85D04" }}>
            <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#E85D04", margin: "0 0 6px", letterSpacing: "0.06em" }}>PAGE DÉDIÉE</p>
            <a href={sectorLink.href} style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0E0E0E", textDecoration: "none" }}>
              {sectorLink.label} : cas d&apos;usage, automatisations et FAQ sectorielles →
            </a>
          </div>
        )}

        <div className="article-cta">
          <h3>Vous souhaitez un agent OpenClaw pour votre entreprise ?</h3>
          <p>
            Claws installe, configure et maintient votre agent OpenClaw en local. Opérationnel en 2h, support francophone, données 100% locales. Première agence française spécialisée OpenClaw.
          </p>
          <a href="/#contact" className="btn-primary">Installation en 2h, à partir de 189€ →</a>
        </div>

        {relatedPosts.length > 0 && (
          <section className="related-articles">
            <h3 className="related-title">Articles liés</h3>
            <div className="related-grid">
              {relatedPosts.map((rp) => (
                <a key={rp.slug} href={`/blog/${rp.slug}`} className="related-card">
                  <span className="related-category">{rp.category}</span>
                  <span className="related-card-title">{rp.title}</span>
                  <span className="related-readtime">{rp.readTime}</span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
