import { validateSchemaMiddleware } from "../middlewares/schema-validator";
import { Router } from "express";
import { createPetshopSchema } from "../schemas/petshop-schema";
import { createPetshop, getAllPetshops } from "../controllers/petshop-controller";

const petshopRouter = Router();

petshopRouter.post("/", validateSchemaMiddleware(createPetshopSchema), createPetshop);
petshopRouter.get("/", getAllPetshops);

export default petshopRouter;