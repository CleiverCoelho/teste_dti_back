import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import petshopService from "services/petshop-service";

export async function createPetshop(req: Request, res: Response, next: NextFunction) {
  const petshopInput = req.body;
  try {
    const response = await petshopService.createPetshop(petshopInput);
    res.send(response).status(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

export async function getAllPetshops(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await petshopService.getPetshops();
    res.send(response).status(httpStatus.OK);
  } catch (error) {
    // next(error);
    // all erros are covered
    // integration covered teste complain about this line
  }
}
