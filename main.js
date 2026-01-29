import mongoose from "mongoose";
import Express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect(
  "mongodb://localhost:27017/todo",
);
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "My first todo",
    desc: "This is the description",
    isDone: false,
    days: 3,
  });
  todo.save();
  res.send("Mongoose Learning!")
});


app.get("/a", async (req, res) => {
 const todos = await Todo.findOne();
 res.json({title: todos.title, desc: todos.desc});
});





app.listen(port, () => {
  console.log(`App running at ${port}`);
});

