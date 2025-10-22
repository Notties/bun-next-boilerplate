'use client';

import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default function LayoutBlog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-4 container pt-8">
      <Link href="/blog" className="flex gap-2 justify-start items-center" prefetch={false}>
        <ArrowLeft strokeWidth={1} size={18}/>
        <p className="text-base">Back</p>
      </Link>
      {children}
    </main>
  );
}
