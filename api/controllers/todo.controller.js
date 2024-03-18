import Todo from "../models/todos.model.js";
import { errorHandler } from "../utils/error.js";

export const createTodo = async (req, res, next) => {
  try {
    const createTodo = await Todo.create(req.body);
    return res.status(201).json(createTodo);
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return next(errorHandler(404, "Todo is not found"));
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const getAllTodos = async (req, res, next) => {
    try {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  };
