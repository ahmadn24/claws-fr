import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://claws.fr/sitemap.xml",
    host: "https://claws.fr",
  };
}
