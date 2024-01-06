// middleware.ts

import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";
import { NextRequest, NextResponse } from "next/server";

const IntlMiddleware = createMiddleware({
  localePrefix,
  locales,
  defaultLocale: "en",
});

export default function middleware(req: NextRequest) {  
  // Apply internationalization middleware
  return IntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ka|en)/:path*"],
};
