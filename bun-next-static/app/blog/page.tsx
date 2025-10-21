import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border-b pb-4">
            <h2 className="text-lg font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
