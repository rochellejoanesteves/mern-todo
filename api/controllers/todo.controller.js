import Todo from "../models/todos.model.js";
import { errorHandler } from "../utils/error.js";

export const createTodo = async (req, res, next) => {
  try {
    const createTodo = await Todo.create(req.body);
    const response = {
      message: "Todo successfully added",
      todo: createTodo
    }
    return res.status(201).json(response);
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
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return next(errorHandler(404, "Todo not found!"));

  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateTodo);
  } catch (error) {
    next(error);
  }
};


export const deleteTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return next(errorHandler(404, "Todo is not found"));
  }

  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
};
