import Todo from "../models/todos.model.js"

export const createTodo = async (req, res, next) => {
    try {
        const createTodo = await Todo.create(req.body)
        return res.status(201).json(createTodo)
    } catch (error) {
        next(error)
    }
}