import { connectDB } from "@/helper/db";
import { Work } from "@/modal/work";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
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
  const { title, content, userId } = await request.json();

  try {
    const task = new Work({
      title,
      content,
      userId,
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
