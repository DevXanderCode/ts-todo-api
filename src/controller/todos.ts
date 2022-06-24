import { RequestHandler } from "express";
import { Todo } from "../models/todo";

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req?.body as { text: string })?.text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ data: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req?.params?.id;
  const updatedText = (req?.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo?.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.status(200).json({ message: "Todo Updated!", data: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params?.id;
  const newTodos = TODOS.filter((todo) => todo?.id !== id);
  TODOS = newTodos;

  res
    .status(200)
    .json({ message: "Todo deleted successfully", data: newTodos });
};
