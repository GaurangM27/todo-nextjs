import { NextResponse } from "next/server";

export async function POST() {
  const request = NextResponse.json({
    message: "Logout Successfully",
    success: true,
  });

  request.cookies.set("authToken", "", {
    expiresIn: new Date(0),
  });
  return request;
}
