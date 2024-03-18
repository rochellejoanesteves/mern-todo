import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);


const Todo = mongoose.model("Todo", todoSchema)

export default Todo;