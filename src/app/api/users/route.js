import { connectDB } from "@/helper/db";
import { User } from "@/modal/user";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to find users",
      status: false,
    });
  }
  return NextResponse.json(users);
}

export async function POST(request) {
  // destructuring request given to the server to post data

  const { name, email, password, about } = await request.json();

  // creating a new user object
  const userCreated = new User({ name, email, password, about });
  console.log(userCreated);
  console.log({ name, email, password, about });

  try {
    // saving the new user to the database
    const res = await userCreated.save();

    // post the new user to the database
    const response = NextResponse.json(res, {
      status: 201,
    });

    return response;
  } catch (error) {
    return NextResponse.json({
      message: "user not created",
      status: false,
    });
  }
}

export async function DELETE(request, { params }) {}
