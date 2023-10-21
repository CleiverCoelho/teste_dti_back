import petshopRepository from "../../src/repositories/petshop-repository";
import petshopService from "../../src/services/petshop-service";
import { buildPetshopInput } from "../factories/petshop-factory";

describe("Petshop Service Unit Tests", () => {
	beforeEach(() => {
	  jest.clearAllMocks();
	});

	it("should return all petshops", async () => {
	  jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
	    {...(buildPetshopInput()), id: 1, createdAt: new Date(), updatedAt: new Date()},
	    {...(buildPetshopInput()), id: 2, createdAt: new Date(), updatedAt: new Date()},
    ]);
	
	  const petshops = await petshopService.getPetshops();
	  expect(petshops).toHaveLength(2);
	});

  it("should create a petshop", async () => {
      const petshop = buildPetshopInput();
      jest.spyOn(petshopRepository, "createPetshop").mockResolvedValueOnce(
        {...petshop, id: 1, createdAt: (new Date()), updatedAt: new Date()},
    );
    
      const petshops = await petshopService.createPetshop(petshop);
      expect(petshops).toEqual({
          ...petshop, 
          id: 1, 
          createdAt: (new Date()), 
          updatedAt: (new Date())
      });
    });

    it("should return the best petshop option", async () => {
      const petshop = buildPetshopInput();
      const pet1 = {
        name: "teste1",
        distance: 100, 
        weekDayBigPrice: 10, 
        weekDaySmallPrice: 10, 
        weekEndBigPrice: 10, 
        weekEndSmallPrice: 10, 
        id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

      const pet2 = {
        name: "teste2",
        distance: 100, 
        weekDayBigPrice: 20, 
        weekDaySmallPrice: 20, 
        weekEndBigPrice: 20, 
        weekEndSmallPrice: 20, 
        id: 2, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }
      jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
        pet1, pet2
      ]);
    
      const petshops = await petshopService.checkBestPetshop({date: "21/10/2023", bigSizesCount: 1, smallSizesCount: 1});
      expect(petshops).toEqual(pet1);
    });

    it("should return the closest petshop option if the price is a tie", async () => {
      const petshop = buildPetshopInput();
      const pet1 = {
        name: "teste1",
        distance: 500, 
        weekDayBigPrice: 10, 
        weekDaySmallPrice: 10, 
        weekEndBigPrice: 10, 
        weekEndSmallPrice: 10, 
        id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

      const pet2 = {
        name: "teste2",
        distance: 100, 
        weekDayBigPrice: 10, 
        weekDaySmallPrice: 10, 
        weekEndBigPrice: 10, 
        weekEndSmallPrice: 10, 
        id: 2, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }
      
      jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
        pet1, pet2
      ]);
    
      const petshops = await petshopService.checkBestPetshop({date: "21/10/2023", bigSizesCount: 1, smallSizesCount: 1});
      expect(petshops).toEqual(pet2);
    });

    
})

describe("Tests", () => {
  it("should work", () => {
    expect(true).toBe(true);
  })
})