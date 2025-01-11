import Todo from "../models/todo.js";
import User from "../models/user.js";

//  Add Todo
export const createTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    console.table([title, desc]);
    const { id } = req.headers;

    const newTodo = new Todo({ title, desc });
    const saveTodo = await newTodo.save();
    await User.findByIdAndUpdate(id, { $push: { todos: saveTodo._id } });
    res.status(200).json({ message: "Todo Added" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Add Todo",
    });
  }
};

//  Get all Todos
export const getTodo = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "todos",
      options: { sort: { createdAt: -1 } },
    });
    return res.status(200).json({ data: userData });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Get Todos",
    });
  }
};

//  Delete Todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Todo.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { todos: id } });
    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Deleted Todos",
    });
  }
};

//  Update Todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Todo.findByIdAndUpdate(id, { title, desc });
    return res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Updated Todos Section",
    });
  }
};

// Update Complete
export const updateCompleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const todoData = await Todo.findById(id);
    await Todo.findByIdAndUpdate(id, { complete: !todoData.complete });
    return res.status(200).json({ message: "updated successfully todo" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Todo updateCompletedTodo",
    });
  }
};

// Get Important Todo
export const getImportantTodo = async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await User.findById(id).populate({
      path: "todos",
      match: { important: true },
      options: { sort: { createdAt: -1 } },
    });
    return res.status(200).json({ data: data.todos });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Get Important Todos",
    });
  }
};

// Get Completed Tasks
export const getCompletedTodo = async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await User.findById(id).populate({
      path: "todos",
      match: { complete: true },
      options: { sort: { createdAt: -1 } },
    });
    return res.status(200).json({ data: data.todos });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Get Completed Todos",
    });
  }
};

// Get Incomplete Todos
export const getIncompleteTodo = async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await User.findById(id).populate({
      path: "todos",
      match: { complete: false },
      options: { sort: { createdAt: -1 } },
    });
    return res.status(200).json({ data: data.todos });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      section: "Get Imcompleted Todos",
    });
  }
};
