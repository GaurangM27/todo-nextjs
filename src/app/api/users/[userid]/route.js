import { User } from "@/modal/user";
import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";

connectDB();
export async function DELETE(request, { params }) {
  const { userid } = params;
  try {
    await User.deleteOne({
      _id: userid,
    });
    return NextResponse.json({
      message: "user deleted successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to delete user",
      status: false,
    });
  }
}

export async function GET(request, { params }) {
  const { userid } = params;
  try {
    const user = await User.findOne({
      _id: userid,
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: "failed to find user",
      status: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userid } = params;

  const { name, password } = await request.json();

  try {
    const user = await User.findById(userid);
    console.log(user.name, user.password);

    user.name = name;
    user.password = password;
    const updatedUser = await user.save();
    return NextResponse.json({
      message: "user updated successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error updating user", status: false });
  }
}
