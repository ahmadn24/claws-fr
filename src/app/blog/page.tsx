import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog | Agents IA, OpenClaw, automatisation",
  description:
    "Guides pratiques et stratégiques sur l'installation OpenClaw, la maintenance d'agents IA, et l'automatisation d'entreprise en France.",
  keywords: ["blog OpenClaw", "guide installation OpenClaw", "agents IA France", "automatisation IA PME"],
  alternates: { canonical: "https://claws.fr/blog" },
  openGraph: {
    title: "Blog Claws | Agents IA et OpenClaw",
    description: "Guides pratiques sur OpenClaw et l'automatisation par agents IA.",
    url: "https://claws.fr/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link" style={{ color: "var(--accent)" }}>Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

      <main className="blog-page">
        <header className="blog-page-header">
          <p className="section-tag">Ressources</p>
          <h1 className="blog-page-title">Ce qu&apos;on partage.</h1>
          <p className="blog-page-desc">
            Guides pratiques sur l&apos;installation OpenClaw, la maintenance d&apos;agents IA et l&apos;automatisation d&apos;entreprise.
          </p>
        </header>

        <div className="blog-grid">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <p className="blog-category">{post.category}</p>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-desc">{post.description}</p>
              <p className="blog-meta">{new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime} de lecture</p>
            </a>
          ))}
        </div>

        <NewsletterForm />
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
