import { faker } from "@faker-js/faker";
import prisma from "../../src/database";
import { CreatePetshop } from "../../src/protocols";

type CreatePetshopWithoutDistance = Omit<CreatePetshop, 'distance'>

export function buildPetshop() {
  const data: CreatePetshop = buildPetshopInput();
  return prisma.petshop.create({ data })
}

export function buildPetshopInput(): CreatePetshop {
  return {
    name: faker.internet.userName(),
    weekDayBigPrice: faker.number.float(),
    weekDaySmallPrice: faker.number.float(),
    weekEndBigPrice: faker.number.float(),
    weekEndSmallPrice: faker.number.float(),
    distance: faker.number.float(),
  }
}

export function buildPetshopInputWithoutDistance(): CreatePetshopWithoutDistance {
  return {
    name: faker.internet.userName(),
    weekDayBigPrice: faker.number.float(),
    weekDaySmallPrice: faker.number.float(),
    weekEndBigPrice: faker.number.float(),
    weekEndSmallPrice: faker.number.float(),
  }
}

