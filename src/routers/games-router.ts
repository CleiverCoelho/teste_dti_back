import { createGameSchema, finishGameSchema } from "../schemas/game-schema";
import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { createGame, finishGame, getGameById, getGames } from "../controllers/games-controller";

const gamesRouter = Router();

gamesRouter.post("/", validateSchemaMiddleware(createGameSchema), createGame);
gamesRouter.get("/", getGames);
gamesRouter.get("/:id", getGameById);   
gamesRouter.post("/:id/finish", validateSchemaMiddleware(finishGameSchema), finishGame);   

export default gamesRouter;