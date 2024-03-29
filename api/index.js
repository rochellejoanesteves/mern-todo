import express from "express"
import mongoose from "mongoose";
import todoRouter from "./routes/todo.routes.js"
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log(error)
})

const app = express();

app.use(cors())


app.use(express.json()); 

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

app.use("/api/todo", todoRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });