import petshopRepository from "repositories/petshop-repository";

async function createPetshop() {
  const participantRes = await petshopRepository.createPetshop();

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