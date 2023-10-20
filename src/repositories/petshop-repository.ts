import { CreatePetshop } from "../protocols"
import prisma from "../database"

async function getPetshops() {
  return await prisma.petshop.findMany()
}

async function createPetshop(data : CreatePetshop) {
  return await prisma.petshop.create({
    data
  })
}

export default {
  createPetshop,
  getPetshops
}