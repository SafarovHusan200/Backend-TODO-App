const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

router.get("/", getAllTodo);
router.post("/", createTodo);
router.get("/:id", getOneTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
