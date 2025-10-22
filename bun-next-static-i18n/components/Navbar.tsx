"use client";

import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Nav");
  return (
    <nav className="container pt-8 flex justify-between">
      <ul className="flex gap-5">
        <li>
          <Link href={`/`} prefetch={false}>{t("home")}</Link>
        </li>
        <li>
          <Link href={`/blog`} prefetch={false}>{t("blog")}</Link>
        </li>
      </ul>
      <LocaleSwitcher />
    </nav>
  );
}
