import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { houseboatSlugs } from "./data/private-houseboats";
import { EXPERIENCE_SLUGS } from "./data/experiences";
import { blogPosts } from "./data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const houseboats: MetadataRoute.Sitemap = houseboatSlugs.map((slug) => ({
    url: `${SITE_URL}/houseboats/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const experiences: MetadataRoute.Sitemap = EXPERIENCE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/experiences/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...houseboats, ...experiences, ...blogRoutes];
}
