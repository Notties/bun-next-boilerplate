import Posts from "@/components/blog/Posts";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container py-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <Posts posts={posts} />
    </main>
  );
}
