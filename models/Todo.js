import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  // ata default value set korar jonno...
  // title: {type: String, required: true, default:"UNTITLED"},
  title: String,
  desc: String,
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model("Todo", TodoSchema);