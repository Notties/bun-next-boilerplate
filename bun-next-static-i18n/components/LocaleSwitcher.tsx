"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("Switch");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <div className="space-x-3">
      {routing.locales.map((v) => (
        <button
          key={v}
          onClick={() => onSelectChange(v)}
          className="cursor-pointer"
        >
          {v === "th" ? t("th") : t("en")}
        </button>
      ))}
    </div>
  );
}
