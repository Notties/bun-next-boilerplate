import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LayoutBlog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-4 container pt-8">
      <Link href="/blog" className="flex gap-2 justify-start items-center">
        <ArrowLeft strokeWidth={1} size={18}/>
        <p className="text-base">Back</p>
      </Link>
      {children}
    </main>
  );
}
