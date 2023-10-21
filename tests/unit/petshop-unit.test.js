"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const petshop_repository_1 = __importDefault(require("../../src/repositories/petshop-repository"));
const petshop_service_1 = __importDefault(require("../../src/services/petshop-service"));
const petshop_factory_1 = require("../factories/petshop-factory");
describe("Petshop Service Unit Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all petshops", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(petshop_repository_1.default, "getPetshops").mockResolvedValueOnce([
            Object.assign(Object.assign({}, ((0, petshop_factory_1.buildPetshopInput)())), { id: 1, createdAt: new Date(), updatedAt: new Date() }),
            Object.assign(Object.assign({}, ((0, petshop_factory_1.buildPetshopInput)())), { id: 2, createdAt: new Date(), updatedAt: new Date() }),
        ]);
        const petshops = yield petshop_service_1.default.getPetshops();
        expect(petshops).toHaveLength(2);
    }));
    it("should create a petshop", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = (0, petshop_factory_1.buildPetshopInput)();
        jest.spyOn(petshop_repository_1.default, "createPetshop").mockResolvedValueOnce(Object.assign(Object.assign({}, petshop), { id: 1, createdAt: (new Date()), updatedAt: new Date() }));
        const petshops = yield petshop_service_1.default.createPetshop(petshop);
        expect(petshops).toEqual(Object.assign(Object.assign({}, petshop), { id: 1, createdAt: (new Date()), updatedAt: (new Date()) }));
    }));
    it("should return the best petshop option", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = (0, petshop_factory_1.buildPetshopInput)();
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
        };
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
        };
        jest.spyOn(petshop_repository_1.default, "getPetshops").mockResolvedValueOnce([
            pet1, pet2
        ]);
        const petshops = yield petshop_service_1.default.checkBestPetshop({ date: "21/10/2023", bigSizesCount: 1, smallSizesCount: 1 });
        expect(petshops).toEqual(pet1);
    }));
    it("should return the closest petshop option if the price is a tie", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = (0, petshop_factory_1.buildPetshopInput)();
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
        };
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
        };
        jest.spyOn(petshop_repository_1.default, "getPetshops").mockResolvedValueOnce([
            pet1, pet2
        ]);
        const petshops = yield petshop_service_1.default.checkBestPetshop({ date: "21/10/2023", bigSizesCount: 1, smallSizesCount: 1 });
        expect(petshops).toEqual(pet2);
    }));
});
describe("Tests", () => {
    it("should work", () => {
        expect(true).toBe(true);
    });
});
