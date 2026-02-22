import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

function getRelatedPosts(currentSlug: string, count = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, count);
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
  const relatedPosts = getRelatedPosts(slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Claws", url: "https://claws.fr" },
      publisher: { "@type": "Organization", name: "Claws", url: "https://claws.fr", logo: { "@type": "ImageObject", url: "https://claws.fr/favicon.ico" } },
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

      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

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

        <div className="article-cta">
          <h3>Vous souhaitez un agent IA pour votre entreprise ?</h3>
          <p>
            Claws installe, configure et maintient vos agents IA autonomes OpenClaw. Opérationnel en 48h, support francophone, données 100 % locales.
          </p>
          <a href="/#contact" className="btn-primary">Installation en 48h, à partir de 189 € →</a>
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

      <footer className="footer">
        <p className="footer-copy">© 2025 Claws, Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/a-propos">À propos</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
