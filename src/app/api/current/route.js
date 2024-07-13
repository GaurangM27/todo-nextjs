import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/modal/user";

export async function GET(request) {
  try {
    const authToken = request.cookies.get("authToken")?.value;

    if (!authToken) {
      console.log("Auth token is missing");
      return NextResponse.json(
        { message: "Auth token is missing", success: false },
        { status: 500 }
      );
    }

    console.log(authToken);

    const token = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(token);

    const user = await User.findById(token._id).select("-password");
    console.log(user);

    return NextResponse.json(user);
  } catch (error) {
    console.logs("Error verifying auth token:", error.message);
    return NextResponse.json(
      { message: "Invalid token", success: false },
      { status: 500 }
    );
  }
}
