import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  const loggedInUserAccess =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  console.log(loggedInUserAccess);

  if (loggedInUserAccess) {
    if (authToken) {
      console.log("User is already logged in");
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      console.log("User is not logged in");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/about",
    "/login",
    "/signup",
  ],
};
