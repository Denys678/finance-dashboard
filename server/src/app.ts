import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import transactionRouter from "./routes/transactions.routes.js"
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/transactions", transactionRouter);

app.use(errorHandler);

export default app;