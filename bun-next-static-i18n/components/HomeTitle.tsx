"use client";

import { useTranslations } from "next-intl";

export default function HomeTitle() {
  const t = useTranslations("HomePage");
  return <h1 className="font-bold">{t("title")}</h1>;
}

