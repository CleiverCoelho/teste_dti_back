import petshopRepository from "../../src/repositories/petshop-repository";
import petshopService from "../../src/services/petshop-service";
import { buildPetshopInput } from "../factories/petshop-factory";

describe("Petshop Service Unit Tests", () => {
	beforeEach(() => {
	  jest.clearAllMocks();
	});

	it("should return rentals", async () => {
	  jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
	    {...(buildPetshopInput()), id: 1, createdAt: new Date(), updatedAt: new Date()},
	    {...(buildPetshopInput()), id: 2, createdAt: new Date(), updatedAt: new Date()},
    ]);
	
	  const rentals = await petshopService.getPetshops();
	  expect(rentals).toHaveLength(2);
	});

    it("should create a rental", async () => {
        const petshop = buildPetshopInput();
        jest.spyOn(petshopRepository, "createPetshop").mockResolvedValueOnce(
          {...petshop, id: 1, createdAt: (new Date()), updatedAt: new Date()},
      );
      
        const rentals = await petshopService.createPetshop(petshop);
        expect(rentals).toEqual({
            ...petshop, 
            id: 1, 
            createdAt: (new Date()), 
            updatedAt: (new Date())
        });
      });

})

describe("Tests", () => {
  it("should work", () => {
    expect(true).toBe(true);
  })
})