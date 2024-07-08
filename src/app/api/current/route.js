import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/modal/user";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  const token = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(token);

  const user = await User.findById(token._id).select("-password");
  console.log(user);

  return NextResponse.json(user);
}
