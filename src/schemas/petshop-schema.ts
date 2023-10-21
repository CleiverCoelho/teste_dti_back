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
  // regex for date validation
  date: joi.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
    .required()
    .messages({ 
      "object.regex": "date must be in valid form DD/MM/YYYY",
      "string.pattern.base": "date must be in valid form DD/MM/YYYY"
      
    }),
  bigSizesCount: joi.number().min(0).required(),
  smallSizesCount: joi.number().min(0).required(),
});

