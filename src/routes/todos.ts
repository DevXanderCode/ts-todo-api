import { Router } from "express";
import { createTodo, getTodos, deleteTodo } from "../controller/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id");

router.delete("/:id", deleteTodo);

export default router;
