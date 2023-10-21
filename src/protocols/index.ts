import { Petshop } from "@prisma/client";

export type CreatePetshop = Omit<Petshop, 'id'| 'createdAt' | 'updatedAt'>

export type BestPetshop = {
    date: string,
    bigSizesCount: number
    smallSizesCount: number
}

export type HashPetshop = {
    totalPrice: number,
}
