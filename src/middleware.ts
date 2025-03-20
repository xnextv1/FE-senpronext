import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);

  const isAuthenticated = request.cookies.get("token");

  // Check if the path is a protected route
  const protectedRoutes = ["/home", "/chat", "/test"];

  if (!isAuthenticated && protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    console.log("Redirecting to /login...");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to protected routes, including subpaths
export const config = {
  matcher: ["/home/:path*", "/chat/:path*", "/test/:path*"], // Ensures all subroutes are matched
};
