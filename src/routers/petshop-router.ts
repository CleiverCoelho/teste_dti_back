import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { bestPetshoptSchema, createPetshopSchema } from "../schemas/petshop-schema";
import { checkBestPetshop, createPetshop, getAllPetshops } from "../controllers/petshop-controller";

const petshopRouter = Router();

petshopRouter.post("/", validateSchemaMiddleware(createPetshopSchema), createPetshop);
petshopRouter.post("/check", validateSchemaMiddleware(bestPetshoptSchema), checkBestPetshop);
petshopRouter.get("/", getAllPetshops);

export default petshopRouter;