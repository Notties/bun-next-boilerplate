import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { pathname } from "./pathname";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "th"],

  // Used when no locale matches
  defaultLocale: "th",
  pathnames: pathname, // added for LocaleSwitcherSelect
  localeDetection: false, // added for LocaleSwitcherSelect
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
