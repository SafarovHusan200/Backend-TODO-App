const Todo = require("../models/todo.model");

const getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      success: true,
      data: todos.reverse(),
    });
  } catch (err) {
    console.log(err);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { text } = req.body;

    const todo = await Todo.create({ text });

    res.status(201).json({
      success: true,
      message: "Todo create successfully",
      data: todo,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const todo = await Todo.findById(id);

    const updated = await Todo.findByIdAndUpdate(
      id,
      {
        text: text || todo.text,
      },
      {
        new: true,
      }
    );

    res.status(201).json({
      success: true,
      message: "Todo updated successfully",
      data: updated,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndRemove(id);

    if (!todo) {
      res.status(403).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo delete successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
};
