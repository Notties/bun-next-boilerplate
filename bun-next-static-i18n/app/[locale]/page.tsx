import HomeTitle from "@/components/HomeTitle";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale: locale,
  }));
}

export default function Home() {
  return (
    <main className="container py-4">
      <HomeTitle />
    </main>
  );
}
