import { faker } from "@faker-js/faker";
import prisma from "../../src/database";
import { CreatePetshop } from "../../src/protocols";

export function buildPetshop(balance: number) {
  const data: CreatePetshop = buildPetshopInput(balance);
  return prisma.petshop.create({ data })
}

export function buildPetshopInput(balance: number): CreatePetshop {
  return {
    name: faker.internet.userName(),
    weekDayBigPrice: faker.number.float(),
    weekDaySmallPrice: faker.number.float(),
    weekEndBigPrice: faker.number.float(),
    weekEndSmallPrice: faker.number.float(),
    distance: faker.number.float(),
  }
}