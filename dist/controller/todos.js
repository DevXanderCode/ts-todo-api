"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
let TODOS = [];
const createTodo = (req, res, next) => {
    var _a;
    const text = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({ data: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    var _a;
    const todoId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const updatedText = (req === null || req === void 0 ? void 0 : req.body).text;
    const todoIndex = TODOS.findIndex((todo) => (todo === null || todo === void 0 ? void 0 : todo.id) === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(200).json({ message: "Todo Updated!", data: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const newTodos = TODOS.filter((todo) => (todo === null || todo === void 0 ? void 0 : todo.id) !== id);
    TODOS = newTodos;
    res
        .status(200)
        .json({ message: "Todo deleted successfully", data: newTodos });
};
exports.deleteTodo = deleteTodo;
