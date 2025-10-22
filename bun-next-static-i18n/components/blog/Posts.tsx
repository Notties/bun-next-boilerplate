"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { type Post } from "@/lib/mdx";

export default function Posts({ posts }: { posts: Post[] }) {
  const locale = useLocale();
  return (
    <ul className="space-y-4">
      {posts.map((p) => (
        <li key={p.slug} className="border-b pb-4">
          <h2 className="text-lg font-semibold">
            <Link href={`/blog/${p.slug}`} locale={locale} prefetch={false}>
              {p.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500">
            {new Date(p.date).toDateString()}
          </p>
          <p className="mt-2 text-gray-700">{p.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
