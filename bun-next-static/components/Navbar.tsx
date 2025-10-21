import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container pt-8">
      <ul className="flex gap-5">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}
