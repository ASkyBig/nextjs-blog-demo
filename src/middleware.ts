import { NextResponse, NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./app/i18n/i18nConfig";

let locales = ["en", "zh"];

function getLocale() {
  return "zh";
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  // todo
  return i18nRouter(request, i18nConfig);
  // return NextResponse.next({
  //   request: {
  //     // Apply new request headers
  //     headers: requestHeaders,
  //   },
  // });

  // const { pathname } = request.nextUrl;

  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  // );

  // if (pathnameHasLocale) {
  //   return NextResponse.next({
  //     request: {
  //       // Apply new request headers
  //       headers: requestHeaders,
  //     },
  //   });
  // }

  // const locale = getLocale();
  // request.nextUrl.pathname = `/${locale}${pathname}`;
  // return NextResponse.redirect(request.nextUrl);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
