import express from "express";
import { createTodo, getAllTodos, getTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/create", createTodo)
router.get("/getTodo/:id", getTodo);
router.get("/getTodos", getAllTodos);

export default router;