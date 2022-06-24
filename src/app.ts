import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
