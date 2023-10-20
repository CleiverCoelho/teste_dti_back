import { CreatePetshop } from "protocols";
import petshopRepository from "../repositories/petshop-repository";

async function createPetshop(petshop: CreatePetshop) {
  const participantRes = await petshopRepository.createPetshop(petshop);

  return participantRes;
}

async function getPetshops() {
  const participantRes = await petshopRepository.getPetshops();

  return participantRes;
}


export default {
  getPetshops,
  createPetshop
};