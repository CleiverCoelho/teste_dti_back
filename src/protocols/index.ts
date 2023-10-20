import { Petshop } from "@prisma/client";

export type CreatePetshop = Omit<Petshop, 'id'| 'createdAt' | 'updatedAt'>

