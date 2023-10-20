import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { createBet, getAllBets } from "../controllers/bets-controller";
import { createBetSchema } from "../schemas/bet-schema";

const betsRouter = Router();

betsRouter.post("/", validateSchemaMiddleware(createBetSchema), createBet);  
betsRouter.get("/", getAllBets);  

export default betsRouter;