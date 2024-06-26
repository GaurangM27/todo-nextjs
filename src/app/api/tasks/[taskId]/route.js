import { connectDB } from "@/helper/db";
import { Work } from "@/modal/work";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await Work.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to find task",
      status: false,
    });
  }
}

export async function PUT(req, { params }) {
  const { taskId } = params;
  const { status } = await req.json();
  try {
    const task = await Work.findById(taskId);

    task.status = status;
    await task.save();
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to update task",
      status: false,
    });
  }
}

export async function DELETE(req, { params }) {
  const { taskId } = params;
  try {
    await Work.findByIdAndDelete(taskId);
    return NextResponse.json({
      message: "task deleted successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to delete task",
      status: false,
    });
  }
}
