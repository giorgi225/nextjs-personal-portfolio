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
  if (req.nextUrl.pathname.includes("/projects")) {
    const origin = req.nextUrl.origin;
    const pathName = req.nextUrl.pathname;
    const nextApiUrl = origin + "/" + pathName.split("/")[1] + "/api";
    req.headers.set("x-nextApiUrl", nextApiUrl);
  }
  // Apply internationalization middleware
  return IntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/about", "/projects", "/resume", "/services", "/(ka|en)/:path*"],
};
