"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestPetshoptSchema = exports.createPetshopSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPetshopSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    distance: joi_1.default.number().min(0).required(),
    weekDayBigPrice: joi_1.default.number().min(0).required(),
    weekDaySmallPrice: joi_1.default.number().min(0).required(),
    weekEndBigPrice: joi_1.default.number().min(0).required(),
    weekEndSmallPrice: joi_1.default.number().min(0).required()
});
exports.bestPetshoptSchema = joi_1.default.object({
    // regex for date validation
    date: joi_1.default.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
        .required()
        .messages({
        "object.regex": "date must be in valid form DD/MM/YYYY",
        "string.pattern.base": "date must be in valid form DD/MM/YYYY"
    }),
    bigSizesCount: joi_1.default.number().min(0).required(),
    smallSizesCount: joi_1.default.number().min(0).required(),
});
