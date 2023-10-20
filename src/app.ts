import express, { json, Request, Response } from "express";
import "express-async-errors";
import dotenv from "dotenv";

import { handleApplicationErrors } from "./middlewares/error-handler";
import betsRouter from "./routers/bets-router";

dotenv.config();

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("ok!"));
app.use("/petshop", petshopRouter);
app.use(handleApplicationErrors);

export default app;