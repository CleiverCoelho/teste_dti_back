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

    it("should return the closest petshop option if the price is a tie", async () => {
      const petshop = buildPetshopInput();
      const pet1 = {
        name: "Meu caninho Feliz",
        distance: 500, 
        weekDayBigPrice: 40, 
        weekDaySmallPrice: 20, 
        weekEndBigPrice: 48, 
        weekEndSmallPrice: 24, 
        id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

      const pet2 = {
        name: "Vai rex",
        distance: 100, 
        weekDayBigPrice: 50, 
        weekDaySmallPrice: 15, 
        weekEndBigPrice: 55, 
        weekEndSmallPrice: 20, 
        id: 2, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }
      jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
        pet1, pet2
      ]);
    
      const petshops = await petshopService.checkBestPetshop({date: "2023-10-24T14:15:14.362Z", bigSizesCount: 1, smallSizesCount: 2});
      expect(petshops).toEqual({...pet2, totalPrice: 80});
    });

    it("should return the best petshop option", async () => {
      const petshop = buildPetshopInput();
      const pet1 = {
        name: "Meu caninho Feliz",
        distance: 500, 
        weekDayBigPrice: 40, 
        weekDaySmallPrice: 20, 
        weekEndBigPrice: 48, 
        weekEndSmallPrice: 24, 
        id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

      const pet2 = {
        name: "Vai rex",
        distance: 100, 
        weekDayBigPrice: 50, 
        weekDaySmallPrice: 15, 
        weekEndBigPrice: 55, 
        weekEndSmallPrice: 20, 
        id: 2, 
        createdAt: new Date(), 
        updatedAt: new Date()
      }
      jest.spyOn(petshopRepository, "getPetshops").mockResolvedValueOnce([
        pet1, pet2
      ]);
    
      const petshops = await petshopService.checkBestPetshop({date: "2023-10-22T14:15:14.362Z", bigSizesCount: 1, smallSizesCount: 1});
      expect(petshops).toEqual({...pet1, totalPrice: 72});
    });

    
})

describe("Tests", () => {
  it("should work", () => {
    expect(true).toBe(true);
  })
})