import joi from "joi";
import { BestPetshop, CreatePetshop } from "../protocols";

export const createPetshopSchema = joi.object<CreatePetshop>({
  name: joi.string().required(),
  distance: joi.number().min(0).required(),
  weekDayBigPrice: joi.number().min(0).required(),
  weekDaySmallPrice: joi.number().min(0).required(),
  weekEndBigPrice: joi.number().min(0).required(),
  weekEndSmallPrice: joi.number().min(0).required()
});

export const bestPetshoptSchema = joi.object<BestPetshop>({
  date: joi.string().required(),
  bigSizesCount: joi.number().min(0).required(),
  smallSizesCount: joi.number().min(0).required(),
});

