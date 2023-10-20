import { CreateParticipant } from "protocols"
import prisma from "../database"

async function getPetshops() {
  return await prisma.petshop.findMany()
}

async function createPetshop(data) {
  return await prisma.petshop.create({
    data
  })
}

export default {
  createPetshop,
  getPetshops
}