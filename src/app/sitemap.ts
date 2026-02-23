import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { sectorSlugs } from "./solutions/[secteur]/sectorData";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: `https://claws.fr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://claws.fr", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://claws.fr/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://claws.fr/a-propos", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://claws.fr/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://claws.fr/newsletter", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...sectorSlugs.map((slug) => ({
      url: `https://claws.fr/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogEntries,
  ];
}
