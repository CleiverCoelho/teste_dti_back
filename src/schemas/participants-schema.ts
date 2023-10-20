import joi from "joi";
import { CreateParticipant } from "../protocols";
import { MIN_BALANCE } from "../services/participants-service";

export const createParticipantSchema = joi.object<CreateParticipant>({
  name: joi.string().required(),
  balance: joi.number().min(MIN_BALANCE).required()
});

