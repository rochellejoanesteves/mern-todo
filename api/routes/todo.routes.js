import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/create", createTodo);
router.get("/getTodo/:id", getTodo);
router.get("/getTodos", getAllTodos);
router.post("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
