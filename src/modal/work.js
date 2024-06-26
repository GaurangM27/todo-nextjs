import mongoose, { Schema } from "mongoose";

const WorkSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  addedDate: { type: Date, required: true, default: Date.now() },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: { type: mongoose.ObjectId, required: true },
});

export const Work = mongoose.models.work || mongoose.model("work", WorkSchema);
