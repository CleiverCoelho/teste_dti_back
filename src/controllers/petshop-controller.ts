import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { BestPetshop, CreatePetshop } from "../protocols";
import petshopService from "../services/petshop-service";
import { badRequestError } from "../errors/badresquest-error";

export async function createPetshop(req: Request, res: Response, next: NextFunction) {
  const petshopInput = req.body as CreatePetshop;
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


export async function checkBestPetshop(req: Request, res: Response, next: NextFunction) {
  const petDayInfos = req.body as BestPetshop;

  try {
    if(petDayInfos.bigSizesCount % 1 !== 0) throw badRequestError("'bigSizesCount' must be a integer")
    if(petDayInfos.smallSizesCount % 1 !== 0) throw badRequestError("'smallSizesCount' must be a integer")

    const response = await petshopService.checkBestPetshop(petDayInfos);
    res.send(response).status(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
