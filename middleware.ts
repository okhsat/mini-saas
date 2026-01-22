import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if ( request.nextUrl.pathname.startsWith("/dashboard") ) {
    // Read auth cookie
    const isLoggedIn =
      request.cookies.get("auth")?.value === "true";

    console.log('isLoggedIn: ' + isLoggedIn);

    if ( ! isLoggedIn ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }
}