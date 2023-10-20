import joi from "joi";
import { CreateGame, TeamsResult } from "protocols";

export const createGameSchema = joi.object<CreateGame>({
  awayTeamName: joi.string().required(),
  homeTeamName: joi.string().required(),
});

export const finishGameSchema = joi.object<TeamsResult>({
  awayTeamScore: joi.number().min(0).required(),
  homeTeamScore: joi.number().min(0).required(),
});
