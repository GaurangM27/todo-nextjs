import { User } from "@/modal/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    // Check if user exists
    await connectDB();
    const user = await User.findOne({ email: email });
    if (user == null) {
      throw new Error("User does not exist");
    }

    // Check if password matches
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Invalid password");
    }

    // Generate JWT token for the user
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: user,
    });
    // Set JWT token in a cookie for authenticated users
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
