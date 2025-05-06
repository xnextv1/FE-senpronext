import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);

  const isAuthenticated = request.cookies.get("token");
  console.log("isAuthenticated:", isAuthenticated);
  // Check if the user is authenticated

  // Check if the path is a protected route
  const protectedRoutes = ["/home", "/chat", "/test"];

  if (!isAuthenticated && protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    console.log("Redirecting to /login...");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if( isAuthenticated && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/")) {
    // If authenticated and trying to access login or home, redirect to /home
    // This prevents authenticated users from accessing the login page or home page
    // when they are already logged in.
    console.log("Redirecting to /home...");
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to protected routes, including subpaths
export const config = {
  matcher: ["/:path","/login/:path","/home/:path*", "/chat/:path*", "/test/:path*"], // Ensures all subroutes are matched
};
