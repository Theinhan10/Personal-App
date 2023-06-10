const express = require("express");
const router = express.Router();



const {addTodo, getTodos, deleteTodo} = require("../controllers/todoController")

router.post("/addTodo", addTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;