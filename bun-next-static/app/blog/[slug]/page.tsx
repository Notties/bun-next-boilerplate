import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const MDXContent = (await import(`@/content/posts/${slug}.mdx`)).default;

  return (
    <section>
      <article className="max-w-3xl">
        <h1 className="text-2xl font-bold mb-1">{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="">
          {/* Render MDX as React component */}
          <MDXContent />
        </div>
      </article>
    </section>
  );
}
