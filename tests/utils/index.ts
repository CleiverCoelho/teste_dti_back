import prisma from "../../src/database";

export async function cleanDb() {
  await prisma.petshop.deleteMany();
}