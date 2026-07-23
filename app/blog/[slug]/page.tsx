import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../../data/blog";
import SiteFooter from "../../components/sections/site-footer";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Alleppey HouseBoat Company`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-ocean-600">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-x-4">
          <p className="text-sm leading-6 text-gray-600">
            By <span className="font-semibold text-gray-900">{post.author}</span>
          </p>
          <span className="text-gray-500">&middot;</span>
          <p className="text-sm text-gray-500">{post.readTime}</p>
        </div>
        
        {post.coverImage && (
          <figure className="mt-10 mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={600}
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
          </figure>
        )}

        <div className="mt-10 max-w-2xl mx-auto">
          {post.content}
        </div>
      </div>
      </article>
      <SiteFooter />
    </>
  );
}
