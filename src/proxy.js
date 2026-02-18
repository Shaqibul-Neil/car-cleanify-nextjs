import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
const roleBasedRoutes = {
  user: ["/userRoute"],
  admin: ["/adminRoute"],
};

export async function proxy(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  if (!token?.role || !roleBasedRoutes[token?.role]) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const allowedRoutes = roleBasedRoutes[token?.role];
  console.log("allowedRoutes", allowedRoutes);

  const hasAccess = allowedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );
  if (!hasAccess) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/adminRoute", "/userRoute"],
};
