"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err === null || err === void 0 ? void 0 : err.message });
});
app.listen(3000, () => {
    console.log("app listening on port 3000");
});
