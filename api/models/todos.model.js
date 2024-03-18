import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timeStamp: true }
);


const Todo = mongoose.model("Todo", todoSchema)

export default Todo;