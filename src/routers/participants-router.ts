import { createParticipant, getParticipants } from "../controllers/participants-controller";
import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { createParticipantSchema } from "../schemas/participants-schema";

const participantsRouter = Router();

participantsRouter.post("/", validateSchemaMiddleware(createParticipantSchema), createParticipant);
participantsRouter.get("/", getParticipants);

export default participantsRouter;