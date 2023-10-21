"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPetshopInputWithoutDistance = exports.buildPetshopInput = exports.buildPetshop = void 0;
const faker_1 = require("@faker-js/faker");
const database_1 = __importDefault(require("../../src/database"));
function buildPetshop() {
    const data = buildPetshopInput();
    return database_1.default.petshop.create({ data });
}
exports.buildPetshop = buildPetshop;
function buildPetshopInput() {
    return {
        name: faker_1.faker.internet.userName(),
        weekDayBigPrice: faker_1.faker.number.float(),
        weekDaySmallPrice: faker_1.faker.number.float(),
        weekEndBigPrice: faker_1.faker.number.float(),
        weekEndSmallPrice: faker_1.faker.number.float(),
        distance: faker_1.faker.number.float(),
    };
}
exports.buildPetshopInput = buildPetshopInput;
function buildPetshopInputWithoutDistance() {
    return {
        name: faker_1.faker.internet.userName(),
        weekDayBigPrice: faker_1.faker.number.float(),
        weekDaySmallPrice: faker_1.faker.number.float(),
        weekEndBigPrice: faker_1.faker.number.float(),
        weekEndSmallPrice: faker_1.faker.number.float(),
    };
}
exports.buildPetshopInputWithoutDistance = buildPetshopInputWithoutDistance;
