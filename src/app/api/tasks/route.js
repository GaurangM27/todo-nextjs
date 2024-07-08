import { connectDB } from "@/helper/db";
import { Work } from "@/modal/work";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    await connectDB();
    const task = await Work.find();
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to find task",
      status: false,
    });
  }
}

export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  const authToken = request.cookies.get("authToken")?.value;

  const token = jwt.verify(authToken, process.env.JWT_KEY);

  try {
    const task = new Work({
      title,
      content,
      userId: token._id,
      status,
    });

    const newTask = await task.save();
    return NextResponse.json({
      message: "task created successfully",
      status: true,
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create task",
      status: false,
    });
  }
}
