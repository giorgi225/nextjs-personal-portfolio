// middleware.ts

import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

const customIntlMiddleware = createMiddleware({
  localePrefix,
  locales,
  defaultLocale: "en",
});

export default customIntlMiddleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ka|en)/:path*"],
};
