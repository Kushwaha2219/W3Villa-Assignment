import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  updateCompleteTodo,
  getImportantTodo,
  getIncompleteTodo,
  getCompletedTodo,
} from "../controllers/todo.js";

const router = express.Router();

// Create Task
router.post("/create-todo", authenticateToken, createTodo);

// Get All Tasks
router.get("/get-all-todos", authenticateToken, getTodo);

// Delete Task
router.delete("/delete-todo/:id", authenticateToken, deleteTodo);

// Update Task
router.put("/update-todo/:id", authenticateToken, updateTodo);

// Update Complete Task
router.put("/update-complete-todo/:id", authenticateToken, updateCompleteTodo);

// Get Important Tasks
router.get("/get-imp-todos", authenticateToken, getImportantTodo);

// Get Completed Tasks
router.get("/get-complete-todos", authenticateToken, getCompletedTodo);

// Get Incomplete Tasks
router.get("/get-incomplete-todos", authenticateToken, getIncompleteTodo);

export default router;
